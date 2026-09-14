#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AX 트렌드 리포트 (The AI · AX Chronicle)
주간 자동 뉴스 수집 & AI 요약 생성기 (Weekly Automated Ingestion & AI Curating Engine)

- 실행 주기: 매주 월요일 아침 06:00 KST (GitHub Actions Cron)
- 수집 대상: 글로벌 Tier-1 전략 컨설팅(McKinsey, BCG, Deloitte, Gartner) & 정론 경제지(한경, 매경 등)
- AI 요약: Google Gemini API (GEMINI_API_KEY 설정 시 고도화된 3줄 요약 및 Why It Matters 생성)
"""

import os
import sys
import json
import re
import html
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta

# Ensure UTF-8 output on Windows consoles
if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

# ==============================================================================
# 1. 설정 및 카테고리 정의
# ==============================================================================
CATEGORIES = [
    {"id": "enterprise", "label": "🏢 기업·엔터프라이즈 AX", "keywords": ["kt", "samsung", "sk", "lg", "erp", "클라우드", "b2b", "roi", "기업", "도입", "전환", "사내"]},
    {"id": "workplace", "label": "💼 일하는 방식 변화", "keywords": ["업무", "회의", "직무", "리스킬링", "생산성", "노동", "일자리", "협업", "인재", "work"]},
    {"id": "frontier", "label": "⚡ 프론티어 기술", "keywords": ["gpt", "오픈ai", "엔비디아", "반도체", "npu", "블랙웰", "llm", "추론", "모델", "칩"]},
    {"id": "agents", "label": "🤖 자율 에이전트", "keywords": ["에이전트", "agent", "자율", "오케스트레이션", "mcp", "자동화", "workflow"]},
    {"id": "industry", "label": "🏭 산업별 현장 사례", "keywords": ["제조", "스마트팩토리", "로봇", "의료", "금융", "바이오", "물류", "유통", "피지컬"]},
    {"id": "policy", "label": "⚖️ 거버넌스·규제", "keywords": ["규제", "법", "거버넌스", "안전", "윤리", "저작권", "보안", "act", "컴플라이언스"]}
]

RSS_FEEDS = [
    {
        "sourceOrg": "한국경제신문",
        "sourceType": "media",
        "url": "https://news.google.com/rss/search?q=%22AI%22+OR+%22AX%22+site:hankyung.com+when:7d&hl=ko&gl=KR&ceid=KR:ko"
    },
    {
        "sourceOrg": "매일경제신문",
        "sourceType": "media",
        "url": "https://news.google.com/rss/search?q=%22AI%22+OR+%22AX%22+site:mk.co.kr+when:7d&hl=ko&gl=KR&ceid=KR:ko"
    },
    {
        "sourceOrg": "글로벌 테크 인텔리전스",
        "sourceType": "consulting",
        "url": "https://news.google.com/rss/search?q=(McKinsey+OR+Gartner+OR+Deloitte+OR+%22Boston+Consulting%22)+AND+(%22enterprise+AI%22+OR+%22agent%22)+when:7d&hl=en-US&gl=US&ceid=US:en"
    }
]

# ==============================================================================
# 2. 유틸리티 함수
# ==============================================================================
def get_current_week_info():
    """현재 날짜 기준 주차 및 날짜 범위 문자열 반환"""
    now = datetime.now()
    year = now.year
    month = now.month
    # 대략적인 해당 월의 주차 계산
    first_day = datetime(year, month, 1)
    week_number = (now.day + first_day.weekday()) // 7 + 1
    
    # 월요일부터 일요일까지의 날짜 범위
    start_of_week = now - timedelta(days=now.weekday())
    end_of_week = start_of_week + timedelta(days=6)
    
    date_range_str = f"{start_of_week.strftime('%Y.%m.%d')} ~ {end_of_week.strftime('%m.%d')}"
    edition_label = f"{year}년 {month}월 {week_number}주차"
    return edition_label, date_range_str

def clean_html(raw_html):
    """HTML 엔티티 및 태그 제거"""
    if not raw_html:
        return ""
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', raw_html)
    cleantext = html.unescape(cleantext)
    # Remove excessive whitespace and trailing publication names
    cleantext = re.sub(r'\s+', ' ', cleantext)
    cleantext = re.sub(r'\s*(한국경제|매일경제|조선비즈|디지털데일리|동아일보|중앙일보)\s*$', '', cleantext)
    return cleantext.strip()

def match_category(title, summary=""):
    """키워드 기반 최적 카테고리 매칭"""
    text = (title + " " + summary).lower()
    for cat in CATEGORIES:
        for kw in cat["keywords"]:
            if kw in text:
                return cat["id"], cat["label"]
    return "enterprise", "🏢 기업·엔터프라이즈 AX"

# ==============================================================================
# 3. RSS 뉴스 수집
# ==============================================================================
def fetch_rss_articles():
    """RSS 피드로부터 최근 1주간 기사 수집"""
    raw_articles = []
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

    for feed in RSS_FEEDS:
        try:
            print(f"[수집 중] {feed['sourceOrg']} 피드 요청...")
            req = urllib.request.Request(feed['url'], headers=headers)
            with urllib.request.urlopen(req, timeout=12) as res:
                xml_content = res.read()
                root = ET.fromstring(xml_content)
                items = root.findall('.//item')
                for it in items[:15]:
                    title_elem = it.find('title')
                    link_elem = it.find('link')
                    desc_elem = it.find('description')
                    pub_elem = it.find('pubDate')

                    title = title_elem.text if title_elem is not None else ""
                    link = link_elem.text if link_elem is not None else ""
                    desc = clean_html(desc_elem.text if desc_elem is not None else "")
                    
                    # 출처명 정리 (예: "기사 제목 - 한국경제" -> "기사 제목")
                    cleaned_title = re.sub(r' - [^-]+$', '', title).strip()
                    
                    if cleaned_title and link:
                        raw_articles.append({
                            "title": cleaned_title,
                            "originalUrl": link,
                            "rawDesc": desc,
                            "sourceOrg": feed["sourceOrg"],
                            "sourceType": feed["sourceType"],
                            "pubDate": pub_elem.text if pub_elem is not None else ""
                        })
        except Exception as e:
            print(f"[WARN] {feed['sourceOrg']} 수집 중 오류: {e}")

    print(f"[INFO] 총 {len(raw_articles)}건의 후보 기사를 수집했습니다.")
    return raw_articles

# ==============================================================================
# 4. Gemini AI 요약 엔진 (선택적 활성화)
# ==============================================================================
def summarize_with_gemini(articles, api_key, edition_label):
    """Gemini API를 사용하여 전문 기사 요약 및 메타데이터 자동 추출"""
    print("[AI] Google Gemini AI 요약 엔진을 가동합니다...")
    
    # 12~14건으로 필터링
    sampled_articles = articles[:14]
    
    prompt = f"""
당신은 최고 수준의 AI/AX 테크 전문 에디터입니다.
아래 뉴스 목록을 분석하여 『AX 트렌드 리포트 ({edition_label} 위클리 에디션)』용 JSON 데이터를 생성하세요.

[기사 목록]
{json.dumps(sampled_articles, ensure_ascii=False, indent=2)}

[요구 조건]
1. 각 기사에 대해 다음 JSON 규격을 반드시 준수하세요:
   - id: "news-001", "news-002", ...
   - title: "[출처] 핵심 헤드라인" (클래식 정론지 스타일로 가독성 높게 정제)
   - category: "enterprise" | "workplace" | "frontier" | "agents" | "industry" | "policy"
   - categoryLabel: 카테고리 한국어 라벨 (예: "🏢 기업·엔터프라이즈 AX")
   - badgeClass: category 값과 동일
   - sourceType: "media" 또는 "consulting"
   - sourceOrg: 출처 기관명 (예: "한국경제신문", "매일경제신문", "딜로이트", "맥킨지" 등)
   - reportType: 간결한 보도 구분 (예: "한경 엔터프라이즈 기획", "글로벌 AI 동향")
   - source: 부서/팀 (예: "테크·산업부")
   - originalUrl: 원문 링크 그대로 보존
   - time: "{edition_label} · 최신 갱신"
   - timestamp: 현재 타임스탬프(ms)
   - readTime: "3분 소요" ~ "5분 소요"
   - impactScore: 9.0 ~ 9.9 사이의 소수점 1자리 실수
   - impactTier: 3~6글자의 핵심 영역 (예: "엔터프라이즈 생태계", "생산성 혁신", "전략 로드맵")
   - views: 4000 ~ 7500 사이의 정수
   - whyMatters: 기업 경영진과 실무팀이 이 뉴스에 주목해야 하는 결정적 이유 1~2문장
   - summary: 기사 전체의 1줄 요약
   - fullSummary: [핵심 사실 1, 핵심 사실 2, 비즈니스 영향 3] 의 문자열 배열 3개
   - actionPlan: 기업이 취해야 할 구체적인 실무 조치/제언 1문장
   - tags: 3~5개의 한국어 해시태그 (예: ["#엔터프라이즈AI", "#KT", "#업무혁신"])

2. 반드시 유효한 JSON 배열(Array)만 출력하세요. 마크다운 코드블록(```json) 없이 순수 JSON만 반환하세요.
"""
    # Gemini API 호출 (gemini-1.5-flash)
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.3,
            "responseMimeType": "application/json"
        }
    }
    
    headers = {"Content-Type": "application/json"}
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
    
    try:
        with urllib.request.urlopen(req, timeout=30) as res:
            res_json = json.loads(res.read().decode('utf-8'))
            candidate_text = res_json['candidates'][0]['content']['parts'][0]['text']
            # 코드 블록 잔여물 정리
            candidate_text = re.sub(r'^```json\s*', '', candidate_text.strip())
            candidate_text = re.sub(r'\s*```$', '', candidate_text.strip())
            parsed_data = json.loads(candidate_text)
            print(f"[SUCCESS] Gemini AI가 {len(parsed_data)}건의 리포트를 완벽하게 분석·가공했습니다.")
            return parsed_data
    except Exception as e:
        print(f"[WARN] Gemini AI 호출 중 오류 발생: {e}. 규칙 기반 가공으로 전환합니다.")
        return None

# ==============================================================================
# 5. 규칙 기반 자동 가공 (Fallback Engine)
# ==============================================================================
def process_with_rules(raw_articles, edition_label):
    """API 키가 없거나 실패했을 때 규칙 기반으로 깔끔한 JSON 데이터 생성"""
    print("[INFO] 규칙 기반 엔진으로 기사를 정제합니다...")
    processed = []
    
    seen_titles = set()
    count = 1
    
    for art in raw_articles:
        if art["title"] in seen_titles:
            continue
        seen_titles.add(art["title"])
        
        cat_id, cat_label = match_category(art["title"], art["rawDesc"])
        
        summary_text = art["rawDesc"] if art["rawDesc"] else art["title"]
        if len(summary_text) > 160:
            summary_text = summary_text[:160] + "..."
            
        news_item = {
            "id": f"news-{count:03d}",
            "title": f"[{art['sourceOrg'][:2]}] {art['title']}",
            "category": cat_id,
            "categoryLabel": cat_label,
            "badgeClass": cat_id,
            "sourceType": art["sourceType"],
            "sourceOrg": art["sourceOrg"],
            "reportType": f"{art['sourceOrg']} AI·테크 심층",
            "source": f"{art['sourceOrg']} 산업부",
            "originalUrl": art["originalUrl"],
            "time": f"{edition_label} · 최신 갱신",
            "timestamp": int(datetime.now().timestamp() * 1000),
            "readTime": "4분 소요",
            "impactScore": round(9.0 + (count % 9) * 0.1, 1),
            "impactTier": "엔터프라이즈 AX",
            "views": 4200 + count * 210,
            "whyMatters": f"{art['title']} 이슈는 산업 현장 및 기업의 AI 전환과 직결된 중요한 기술·전략적 흐름을 보여줍니다.",
            "summary": summary_text,
            "fullSummary": [
                f"{art['title']} 관련 글로벌 시장 및 산업 동향이 가속화되고 있습니다.",
                "국내외 선도 기업들의 AI 도입 및 실무 현장 생산성 개선 사례가 확산되는 추세입니다.",
                "조직의 AX 경쟁력 확보를 위해 데이터 인프라 및 거버넌스 점검이 필수적입니다."
            ],
            "actionPlan": "관련 분야 실무진은 자사 워크플로우에 미칠 영향을 분석하고 단계별 대응 전략을 수립할 것.",
            "tags": [f"#{art['sourceOrg'][:4]}", "#인공지능", "#엔터프라이즈AX", "#비즈니스"]
        }
        processed.append(news_item)
        count += 1
        if count > 13:
            break
            
    return processed

# ==============================================================================
# 6. 메인 실행 함수
# ==============================================================================
def main():
    edition_label, date_range = get_current_week_info()
    print(f"=== [AX 트렌드 리포트] 주간 자동 갱신 시작 ({edition_label} / {date_range}) ===")
    
    # 1. RSS 수집
    raw_articles = fetch_rss_articles()
    if not raw_articles:
        print("[WARN] 수집된 기사가 없습니다. 기존 news.json을 보존합니다.")
        return

    # 2. AI 요약 또는 규칙 기반 가공
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    final_news_data = None
    
    if api_key:
        final_news_data = summarize_with_gemini(raw_articles, api_key, edition_label)
        
    if not final_news_data:
        final_news_data = process_with_rules(raw_articles, edition_label)
        
    # 3. news.json 파일 저장
    target_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "news.json")
    with open(target_path, "w", encoding="utf-8") as f:
        json.dump(final_news_data, f, ensure_ascii=False, indent=2)
        
    print(f"[SUCCESS] news.json 업데이트 완료! 총 {len(final_news_data)}개의 주간 리포트가 반영되었습니다.")

if __name__ == "__main__":
    main()
