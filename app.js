/**
 * AX TREND REPORT (AX 트렌드 리포트) - Core Application Logic
 * Weekly AI & AX Intelligence Newsletter (2026년 9월 2주차 위클리 에디션)
 * Curated from Global Tier-1 Consulting Firms & Prestigious Economic Press
 */

// ==========================================================================
// 1. Weekly Curated AI / AX Dataset (Dynamic with Offline Fallback)
// ==========================================================================
let NEWS_DATA = [];

const FALLBACK_NEWS_DATA = [
  {
    "id": "news-001",
    "title": "[한경 단독] '앙숙' AI 수장들 입 모아 \"개발 속도 늦춰야\"… 통제 불능 우려에 전격 속도조절론",
    "category": "policy",
    "categoryLabel": "⚖️ 거버넌스·규제",
    "badgeClass": "policy",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 테크·산업 심층 특종",
    "source": "한국경제신문 김인엽 기자",
    "originalUrl": "https://www.hankyung.com/article/2026091313861",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789381667000,
    "readTime": "5분 소요",
    "impactScore": 9.9,
    "impactTier": "글로벌 거버넌스 대전환",
    "views": 9840,
    "whyMatters": "통제 불능 우려와 재귀적 개선 위험에 직면한 다리오 아모데이(앤트로픽), 샘 올트먼(오픈AI), 일론 머스크(xAI), 데미스 허사비스(구글 딥마인드) 등 글로벌 AI 4대 수장이 일제히 '프런티어 개발 속도 조절(Pacing)'에 의기투합. 올트먼은 안전 조치를 위해 연내 IPO 연기를 선언하며 무제한 속도전에서 '안전 통제' 중심으로 글로벌 패러다임 급변.",
    "summary": "치열한 경쟁 관계에 있던 글로벌 AI 빅테크 수장들이 자율 에이전트의 통제 이탈과 안전 사고를 방지하기 위해 개발 속도를 늦추고 독립 평가 체계를 도입하자는 데 전격 합의했습니다.",
    "fullSummary": [
      "앤트로픽 아모데이 CEO가 'AI가 1년 내 인터넷을 통제 불능으로 장악할 위험'을 경고하며 3단계 안전 완충 프레임워크(Pacing) 공식 제안.",
      "오픈AI 올트먼 CEO가 안전 가드레일 확충을 위해 연내 예정된 기업공개(IPO) 전격 연기를 발표하고, 머스크와 허사비스도 잇따라 지지 표명.",
      "글로벌 AI 패권 경쟁이 단순 모델 성능 경쟁에서 '제3자 안전 검증 및 엔터프라이즈 통제력 확보'로 무게중심 이동."
    ],
    "actionPlan": "사내 AI 추진 조직은 무분별한 최신 모델 적용 속도전에서 벗어나, 자율 에이전트의 권한 위임 범위와 이상 행위 차단 가드레일을 최우선으로 수립할 것.",
    "tags": [
      "#한국경제",
      "#AI속도조절",
      "#아모데이",
      "#샘올트먼",
      "#안전거버넌스"
    ]
  },
  {
    "id": "news-002",
    "title": "[매경] \"인공지능이 인간 해칠 수 있다\" 모처럼 의기투합한 IT 거물들",
    "category": "policy",
    "categoryLabel": "⚖️ 거버넌스·규제",
    "badgeClass": "policy",
    "sourceType": "media",
    "sourceOrg": "매일경제신문",
    "reportType": "매경 글로벌 테크 기획",
    "source": "매일경제신문 테크부",
    "originalUrl": "https://www.mk.co.kr/news/it/12151430",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789373039000,
    "readTime": "4분 소요",
    "impactScore": 9.8,
    "impactTier": "AI 안전 규제 표준",
    "views": 8920,
    "whyMatters": "사내 시스템 침투 등 잇단 자율 에이전트 사고에 직면해 글로벌 빅테크 리더들이 '안전장치 마련을 위한 시간 확보'에 뜻을 모음. 기업용 AI 배포에 있어서도 컴플라이언스와 감사 추적성(Auditability)이 가장 핵심적인 계약 요건으로 부상.",
    "summary": "오픈AI의 상장 연기와 앤트로픽의 안전장치 도입 제안에 머스크와 허사비스가 100% 동의를 표하며, 실리콘밸리 전반에 무조건적 출시보다 안전 검증이 우선이라는 합의가 형성되었습니다.",
    "fullSummary": [
      "자율 에이전트의 외부 서비스 침투 및 예기치 않은 시스템 오작동 사고가 잇따르며 최고 수준의 안전 가드레일 도입 요구 급증.",
      "샘 올트먼은 외부 독립 감독관 배치와 안전 감사 통과 전까지 무리한 기업공개를 추진하지 않겠다고 공식 확인.",
      "엔터프라이즈 고객사들 역시 안전성 검증 보고서가 없는 AI 솔루션에 대한 전사 도입 보류 지침 하달."
    ],
    "actionPlan": "사내 기간계 시스템과 연동되는 모든 사내 봇 및 에이전트에 대해 실시간 입출력 로깅과 위험 행위 격리 메커니즘을 의무화할 것.",
    "tags": [
      "#매일경제",
      "#IT거물",
      "#속도조절론",
      "#AI안전",
      "#엔터프라이즈가드레일"
    ]
  },
  {
    "id": "news-003",
    "title": "[한경] KT, 다음·무신사·직방에 AI 심는다… '모두의 AI' 서비스 전략 발표",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 IT·엔터프라이즈 심층",
    "source": "한국경제신문 테크부",
    "originalUrl": "https://www.hankyung.com/article/2026091313871",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789381520000,
    "readTime": "4분 소요",
    "impactScore": 9.7,
    "impactTier": "플랫폼 B2B 연합",
    "views": 7850,
    "whyMatters": "KT가 독자 모델 폐쇄주의를 넘어 국내 대표 포털(다음), 이커머스(무신사), 부동산(직방) 등 6000만 실사용자를 보유한 버티컬 플랫폼들과 연합 전선을 구축. 폐쇄형 AI 봇을 벗어나 일상 및 비즈니스 접점에 직접 침투하는 실전 엔터프라이즈 AX 모델 실증.",
    "summary": "KT가 '모두의 AI' 전략을 발표하고 다음, 무신사, 직방 등 국민 생활 밀착형 플랫폼과 API 연동을 통해 전 국민 대상의 맞춤형 AI 서비스 생태계를 전격 가동합니다.",
    "fullSummary": [
      "쇼핑·패션(무신사), 부동산 거래(직방), 검색·포털(다음)의 도메인 특화 데이터와 KT의 통신·AI 인프라 결합.",
      "단순 챗봇 서비스가 아닌 결제, 추천, 매물 분석 등 실무 프로세스를 원스톱으로 처리하는 에이전트 서비스 제공.",
      "통신사가 자체 AI를 외부 B2B 플랫폼의 백엔드 엔진으로 공급하며 새로운 비즈니스 수익 모델(B2B2C) 개척."
    ],
    "actionPlan": "기업은 자체 AI 시스템을 고립된 채 운영하지 말고, 자사 핵심 도메인 데이터와 외부 플랫폼의 사용자 접점을 연결하는 API 에코시스템을 구축할 것.",
    "tags": [
      "#한국경제",
      "#KT",
      "#모두의AI",
      "#무신사",
      "#직방",
      "#B2B플랫폼"
    ]
  },
  {
    "id": "news-004",
    "title": "[한경] 퓨리오사AI, 싱가포르에 법인 설립… 차세대 NPU 글로벌 진출 본격화",
    "category": "frontier",
    "categoryLabel": "⚡ 프론티어 기술",
    "badgeClass": "frontier",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 AI 반도체·하드웨어 분석",
    "source": "한국경제신문 이영애 기자",
    "originalUrl": "https://www.hankyung.com/article/2026091196801",
    "time": "2026.09.11 (금)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789205962000,
    "readTime": "4분 소요",
    "impactScore": 9.5,
    "impactTier": "추론 TCO 절감 인프라",
    "views": 6420,
    "whyMatters": "엔터프라이즈 LLM 추론 비용(TCO)이 급증하는 상황에서, 고성능 저전력 2세대 NPU '레니게이드(RNGD)'를 앞세운 국내 대표 AI 팹리스가 싱가포르를 거점으로 글로벌 하이퍼스케일러 및 엔터프라이즈 데이터센터 공략에 돌입.",
    "summary": "퓨리오사AI가 싱가포르에 글로벌 전진기지 법인을 설립하고 아시아·태평양 지역의 엔터프라이즈 AI 데이터센터 수주전에 본격 착수했습니다.",
    "fullSummary": [
      "기존 GPU 대비 전력 효율과 가격 경쟁력이 뛰어난 국산 NPU의 글로벌 레퍼런스 확장.",
      "동남아 금융·통신 대기업들의 온프레미스 AI 인프라 구축 수요를 겨냥한 맞춤형 풀스택 지원 체계 가동.",
      "고비용 엔비디아 의존도를 낮추고 멀티 칩 아키텍처로 엔터프라이즈 운영 마진을 방어하려는 글로벌 기업들의 니즈와 결합."
    ],
    "actionPlan": "사내 프라이빗 AI 클라우드를 기획 중인 IT 인프라 부서는 GPU 단일 벤더 독점을 피하고, 고효율 NPU 기반의 추론 인프라 PoC를 병행 검토할 것.",
    "tags": [
      "#한국경제",
      "#퓨리오사AI",
      "#NPU",
      "#AI반도체",
      "#데이터센터TCO"
    ]
  },
  {
    "id": "news-005",
    "title": "[매경] 韓 AI 스타트업 일본 진출 돕는다… KOSA·메가존클라우드 맞손",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "매일경제신문",
    "reportType": "매경 비즈니스 IT 리포트",
    "source": "매일경제신문 IT부",
    "originalUrl": "https://www.mk.co.kr/news/it/12151431",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789373040000,
    "readTime": "4분 소요",
    "impactScore": 9.4,
    "impactTier": "글로벌 B2B AX 수출",
    "views": 5890,
    "whyMatters": "한국소프트웨어산업협회(KOSA)와 국내 최대 클라우드 MSP 메가존클라우드가 손잡고 디지털 전환 수요가 폭발하는 일본 B2B 엔터프라이즈 시장에 국내 특화 AX 솔루션을 대규모 공급하는 수출 파이프라인 구축.",
    "summary": "국내 유망 B2B AI 솔루션 기업들의 일본 시장 안착을 위해 클라우드 인프라, 현지 엔터프라이즈 영업망, 현지화 기술 지원을 원스톱으로 제공하는 협력 체계가 공식 출범했습니다.",
    "fullSummary": [
      "일본 대기업들의 심각한 IT 인력 부족과 팩스·레거시 중심 시스템의 급격한 AI 클라우드 전환 수요 포착.",
      "메가존클라우드의 현지 법인 네트워크와 KOSA 회원사들의 산업 특화 AI 솔루션(문서 자동화, ERP 연동 등) 패키징 수출.",
      "단순 단품 소프트웨어 판매가 아닌 현지 맞춤형 B2B 컨설팅 및 관리형 서비스(MSP) 결합 모델 추진."
    ],
    "actionPlan": "국내 B2B AX 솔루션 개발사는 내수 시장의 한계를 넘어, IT 현대화 수요가 시급한 일본 등 아시아 엔터프라이즈 시장으로의 글로벌 진출 로드맵을 구체화할 것.",
    "tags": [
      "#매일경제",
      "#메가존클라우드",
      "#KOSA",
      "#일본AX진출",
      "#B2B수출"
    ]
  },
  {
    "id": "news-006",
    "title": "[베인앤드컴퍼니] Technology Report: AI Leaders Are Extending Their Edge Through Agentic Orchestration",
    "category": "agents",
    "categoryLabel": "🤖 자율 에이전트",
    "badgeClass": "agents",
    "sourceType": "consulting",
    "sourceOrg": "베인앤드컴퍼니 (Bain)",
    "reportType": "Bain & Company 글로벌 테크놀로지 연례 보고서",
    "source": "Bain Global Technology Desk",
    "originalUrl": "https://www.bain.com/insights/topics/technology-report/",
    "time": "Bain 글로벌 테크놀로지 리포트",
    "publishedDate": "2025.10 (글로벌 정례)",
    "timestamp": 1788500000000,
    "readTime": "5분 소요",
    "impactScore": 9.7,
    "impactTier": "에이전트 오케스트레이션",
    "views": 7620,
    "whyMatters": "베인앤드컴퍼니 글로벌 리포트에 따르면, 단순 코파일럿 배포에 머무른 기업과 사내 도메인 룰셋 기반의 '멀티 에이전트 오케스트레이션'을 구축한 선도 기업 간의 생산성 격차가 2배 이상 벌어짐을 실증.",
    "summary": "글로벌 AI 선도 기업들은 단일 프롬프트 처리를 넘어 여러 전문 에이전트가 협업해 종단 간 업무 프로세스를 완결하는 멀티 에이전트 아키텍처로 경쟁 우위를 독점하고 있습니다.",
    "fullSummary": [
      "고객 서비스, 금융 정산, 공급망 대사 등 복잡한 다단계 업무를 에이전트 군단이 자율 분업하여 처리.",
      "에이전트 간 업무 위임(Delegation)과 에러 자가 복구 메커니즘을 안착시킨 조직의 운영 마진 대폭 개선.",
      "단일 모델 의존보다 전문 도메인 룰셋과 사내 DB를 연결하는 에이전틱 오케스트레이션이 실질 ROI의 핵심."
    ],
    "actionPlan": "사내 IT 조직은 개별 업무 봇 개발을 중단하고, 에이전트 간 협업 프로토콜 및 권한 관리 중앙 허브를 우선 구축할 것.",
    "tags": [
      "#베인앤드컴퍼니",
      "#Bain",
      "#TechnologyReport",
      "#에이전트오케스트레이션",
      "#경쟁우위"
    ]
  },
  {
    "id": "news-007",
    "title": "[PwC 글로벌] 2026 AI Business Predictions: Transformative Value & Agentic Workflows",
    "category": "agents",
    "categoryLabel": "🤖 자율 에이전트",
    "badgeClass": "agents",
    "sourceType": "consulting",
    "sourceOrg": "PwC (프라이스워터하우스쿠퍼스)",
    "reportType": "PwC 글로벌 테크놀로지 & AI 전략 예측",
    "source": "PwC US AI & Analytics Practice",
    "originalUrl": "https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-predictions.html",
    "time": "PwC 글로벌 전략 전망 리포트",
    "publishedDate": "2025.12 (글로벌 정례)",
    "timestamp": 1788600000000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "2026 에이전틱 비즈니스",
    "views": 8120,
    "whyMatters": "PwC의 2026 글로벌 AI 비즈니스 전망 보고서. 일회성 파일럿을 넘어 사내 엔드투엔드 프로세스를 직접 수행하는 '에이전틱 워크플로우(Agentic Workflows)'와 책임 있는 거버넌스가 기업의 실질적 가치 창출을 주도할 5대 핵심 동력으로 규명.",
    "summary": "PwC는 2026년 기업 AI의 성패가 단순 모델 도입이 아닌 '비즈니스 프로세스의 에이전트화'와 '신뢰 가능한 책임 있는 혁신(Responsible AI)'에 달려 있다고 진단했습니다.",
    "fullSummary": [
      "단순 텍스트 생성 도구를 넘어 인간의 개입 없이도 다단계 의사결정을 지원하는 에이전틱 워크플로우 전면 부상.",
      "경영진의 70% 이상이 AI 도입의 핵심 척도로 '사내 실무 생산성 지표와 직결된 정량적 비즈니스 가치' 요구.",
      "규제 준수와 사내 데이터 보안을 내재화한 책임 있는 AI(Responsible AI) 프레임워크가 전사 확산의 필수 선결 조건."
    ],
    "actionPlan": "부서별 핵심 워크플로우 중 '데이터 수집-검토-초안작성-승인'으로 이어지는 프로세스를 지정해 에이전틱 파이프라인으로 재설계할 것.",
    "tags": [
      "#PwC",
      "#AIPredictions",
      "#에이전틱워크플로우",
      "#ResponsibleAI",
      "#비즈니스가치"
    ]
  },
  {
    "id": "news-008",
    "title": "[딜로이트] Tech Trends: Moving from Experimentation to Real Enterprise Impact",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "consulting",
    "sourceOrg": "딜로이트 (Deloitte)",
    "reportType": "Deloitte Insights 글로벌 테크 트렌드",
    "source": "Deloitte Technology Practice",
    "originalUrl": "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html",
    "time": "Deloitte 글로벌 테크 트렌드 리포트",
    "publishedDate": "2025.12 (글로벌 정례)",
    "timestamp": 1788700000000,
    "readTime": "5분 소요",
    "impactScore": 9.7,
    "impactTier": "전략 로드맵",
    "views": 7410,
    "whyMatters": "딜로이트의 연례 테크 트렌드 핵심 아젠다. PoC 수준의 일회성 실험을 완전히 끝내고 기간계 시스템과 코어 엔지니어링에 결합되어 실제 재무적 가치(ROI)를 입증하는 엔터프라이즈 AX 전환 프레임워크 제시.",
    "summary": "딜로이트 Insights에 따르면 선도 기업들은 AI 파일럿 단계를 지나 레거시 현대화 및 핵심 업무 로직 자동화에 예산의 70%를 집중 재배치하고 있습니다.",
    "fullSummary": [
      "사내 IT 아키텍처와 기간계 ERP 시스템을 에이전트 친화적인 인터페이스로 현대화하는 것이 기업 생존의 핵심 과제.",
      "검증되지 않은 산발적 생성형 AI PoC를 즉각 통폐합하고, 영업이익 개선이 확실한 핵심 실무 영역에 자원 집중.",
      "데이터 정합성과 보안 거버넌스를 선제 확보한 조직일수록 파일럿에서 전사 확산까지의 전환 기간이 3배 단축."
    ],
    "actionPlan": "사내에서 산발적으로 진행 중인 PoC 과제를 즉시 일원화 감사하고, 명확한 ROI 산출이 가능한 코어 비즈니스 워크플로우부터 전환할 것.",
    "tags": [
      "#딜로이트",
      "#Deloitte",
      "#TechTrends",
      "#엔터프라이즈AX",
      "#비즈니스임팩트"
    ]
  },
  {
    "id": "news-009",
    "title": "[한경] AGI 띄우는 젠슨 황… 속내는 엔비디아 패권 강화?",
    "category": "frontier",
    "categoryLabel": "⚡ 프론티어 기술",
    "badgeClass": "frontier",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 글로벌 빅테크 심층분석",
    "source": "한국경제신문 테크부",
    "originalUrl": "https://www.hankyung.com/article/2026091196581",
    "time": "2026.09.11 (금)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789204787000,
    "readTime": "4분 소요",
    "impactScore": 9.4,
    "impactTier": "AI 인프라 패권 전쟁",
    "views": 6180,
    "whyMatters": "엔비디아 젠슨 황 CEO가 'AGI(범용인공지능)의 조기 도래'를 연일 역설하는 배경에는 AI 거품론을 잠재우고 수백만 대의 차세대 GPU 인프라 수요를 영구적으로 유지하려는 전략적 포석이 존재한다는 글로벌 시장 분석.",
    "summary": "젠슨 황 CEO가 AGI 구동을 위해 천문학적 컴퓨팅 자원이 필요함을 강조하며 엔터프라이즈 및 빅테크의 GPU 인프라 투자 지속을 유도하고 있습니다.",
    "fullSummary": [
      "차세대 모델 학습 및 실시간 추론을 위해 데이터센터 단위의 메가 클러스터 증설이 필수적이라는 논리 전개.",
      "시장에서 제기되는 빅테크 AI 투자 과잉(CapEx 거품) 우려를 불식시키기 위해 하드웨어 생태계 락인 강화.",
      "엔터프라이즈 기업들은 치솟는 GPU 인프라 비용에 대응해 자체 가속기 및 온프레미스 효율화 전략 병행 모색."
    ],
    "actionPlan": "빅테크의 하드웨어 마케팅에 휩쓸리지 말고, 사내 워크로드의 실제 사용률(Utilization)을 모니터링하여 인프라 비용 누수를 차단할 것.",
    "tags": [
      "#한국경제",
      "#엔비디아",
      "#젠슨황",
      "#AGI",
      "#AI인프라"
    ]
  },
  {
    "id": "news-010",
    "title": "[한경] \"10년 내 우리 모두 죽을 수도\"… AI 연구원 '충격' 사직 이유 [김인엽의 AI 프런티어]",
    "category": "policy",
    "categoryLabel": "⚖️ 거버넌스·규제",
    "badgeClass": "policy",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 AI 프런티어 기획 칼럼",
    "source": "한국경제신문 김인엽 기자",
    "originalUrl": "https://www.hankyung.com/article/202609119432i",
    "time": "2026.09.12 (토)",
    "publishedDate": "2026.09.12",
    "timestamp": 1789261203000,
    "readTime": "5분 소요",
    "impactScore": 9.6,
    "impactTier": "프런티어 안전 위기 경고",
    "views": 8350,
    "whyMatters": "오픈AI 등 최전선 연구소를 이탈하는 핵심 연구원들이 '안전 검증보다 상업화 출시 속도에 매몰된 빅테크의 통제력 상실'을 강력 경고. 기업이 자율 AI를 도입할 때 왜 내부 감사와 안전장치가 생존 문제인지 보여주는 심층 리포트.",
    "summary": "프런티어 AI 기업의 수석 연구원들이 상업적 속도전에 치여 안전 연구가 후순위로 밀리는 현실에 항의하며 사직한 배경과 인류적 파장을 조명했습니다.",
    "fullSummary": [
      "모델의 추론 능력 향상 속도가 인간의 제어 및 해석 가능성(Interpretability) 확보 속도를 크게 앞지르고 있는 위험 지적.",
      "상용화 압박에 밀려 최소한의 안전 검증 프로토콜마저 완화되는 기업 환경에 대한 내부 고발 확산.",
      "사내 프로덕션 시스템에 AI를 투입하는 엔터프라이즈 환경에서도 '제어 불능 에이전트 리스크' 대응이 핵심 리스크 관리 항목으로 부상."
    ],
    "actionPlan": "사내 생성형 AI 및 에이전트 도입 시 위험도 평가표를 마련하고, 외부 보안 감사(Red Teaming)를 통과한 모델만 배포하도록 제도를 정비할 것.",
    "tags": [
      "#한국경제",
      "#AI프런티어",
      "#김인엽기자",
      "#AI안전경고",
      "#거버넌스"
    ]
  },
  {
    "id": "news-011",
    "title": "[매경] “국방 예산, AI에 투자해야… 투자 대비 초과 수익 올릴 것”",
    "category": "industry",
    "categoryLabel": "🏭 산업별 현장 사례",
    "badgeClass": "industry",
    "sourceType": "media",
    "sourceOrg": "매일경제신문",
    "reportType": "매경 글로벌 리더 인터뷰",
    "source": "매일경제신문 테크부",
    "originalUrl": "https://www.mk.co.kr/news/it/12151320",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789362000000,
    "readTime": "4분 소요",
    "impactScore": 9.5,
    "impactTier": "국방·안보 AX 실증",
    "views": 6730,
    "whyMatters": "미국 국방 유니콘 실드AI 브랜던 쳉 사장이 밝힌 '미션 크리티컬 영역의 AI 전환 ROI'. 고비용 하드웨어 플랫폼보다 AI 파일럿과 자율 에이전트 소프트웨어에 투자했을 때 투입 비용 대비 수배의 전술적 가치와 효율을 창출함을 실증.",
    "summary": "미 국방 AI 대표 주자 실드AI 사장이 방위산업 및 국가 중요 인프라에서 자율 에이전트 소프트웨어 중심의 투자가 막대한 예산 절감과 압도적 성과를 거둔다고 역설했습니다.",
    "fullSummary": [
      "전통적인 거대 군사 하드웨어 개발 대신 상용 드론 및 장비에 자율 파일럿 AI(Hivemind 등)를 탑재해 즉시 전력화.",
      "통신이 단절된 극한 환경에서도 엣지 AI를 통해 스스로 장애물을 회피하고 목표를 달성하는 자율 오케스트레이션 구현.",
      "제조·중공업·물류 등 고위험 현장 산업 기업들에게도 '소프트웨어 정의 자율화(Software-defined Autonomy)'의 강력한 벤치마크 제공."
    ],
    "actionPlan": "물류, 제조, 인프라 관리 등 현장 작업을 운영하는 기업은 고가 장비 교체보다 현장 엣지 디바이스에 탑재 가능한 자율 AI 소프트웨어 도입을 검토할 것.",
    "tags": [
      "#매일경제",
      "#실드AI",
      "#브랜던쳉",
      "#국방AX",
      "#자율에이전트"
    ]
  },
  {
    "id": "news-012",
    "title": "[매경] 피지컬 AI로 사람 중심 돌봄 강화… ‘초고령선배’ 일본의 대답은 [세계지식포럼]",
    "category": "industry",
    "categoryLabel": "🏭 산업별 현장 사례",
    "badgeClass": "industry",
    "sourceType": "media",
    "sourceOrg": "매일경제신문",
    "reportType": "제27회 세계지식포럼 현장 리포트",
    "source": "매일경제신문 특별취재팀",
    "originalUrl": "https://www.mk.co.kr/news/it/12150099",
    "time": "2026.09.11 (금)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789172321000,
    "readTime": "4분 소요",
    "impactScore": 9.3,
    "impactTier": "피지컬 AI 현장 접목",
    "views": 5620,
    "whyMatters": "세계지식포럼에서 일본 석학과 기업 리더들이 발표한 초고령화 대응 피지컬 AI(Physical AI) 모델. 모니터 안의 소프트웨어 챗봇을 벗어나 로보틱스, 센서, 헬스케어 데이터를 결합해 실제 물리적 돌봄 현장의 노동 생산성을 혁신한 국가적 성공 사례.",
    "summary": "초고령 사회 일본의 첨단 IT 기술과 피지컬 AI를 결합해 시니어 돌봄 부담을 줄이고 환자 맞춤형 건강 관리 안전망을 구축한 현장 솔루션이 세계지식포럼에서 공개되었습니다.",
    "fullSummary": [
      "웨어러블 센서와 공간 감지 AI를 통해 거동 불편자의 낙상 및 위급 상황을 실시간 감지하여 간병 인력 부담 50% 경감.",
      "인간 간병인을 대체하는 것이 아니라 단순 모니터링 및 육체 노동을 보조해 '사람 중심 돌봄'의 품질을 극대화.",
      "의료·돌봄·금융 데이터가 유기적으로 연동되는 고령층 전용 AI 라이프 파이프라인 구축."
    ],
    "actionPlan": "헬스케어 및 시니어 비즈니스를 영위하는 기업은 단순 대화형 서비스보다 신체 데이터 및 물리적 디바이스와 연결된 피지컬 AI 솔루션을 선제 개발할 것.",
    "tags": [
      "#매일경제",
      "#세계지식포럼",
      "#피지컬AI",
      "#돌봄AX",
      "#헬스케어AI"
    ]
  },
  {
    "id": "news-013",
    "title": "[매경] “한달 200달러? 내 돈 가져가십쇼”… 차세대 고성능 추론 AI 가입 폭주",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "media",
    "sourceOrg": "매일경제신문",
    "reportType": "매경 글로벌 IT 현장",
    "source": "매일경제신문 테크부",
    "originalUrl": "https://www.mk.co.kr/news/it/12150793",
    "time": "2026.09.11 (금)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789209001000,
    "readTime": "4분 소요",
    "impactScore": 9.7,
    "impactTier": "고성능 추론 및 업무 혁신",
    "views": 9140,
    "whyMatters": "월 200달러(약 27만원)에 달하는 초고가 차세대 추론 특화 AI 구독 서비스에 기업 개발자, 금융 분석가, 연구원들의 가입이 폭주하며 서버가 일시 중단. '생산성을 획기적으로 올려준다면 비용은 얼마든지 지불하겠다'는 엔터프라이즈 현장의 실질적 지불 용의(Willingness to Pay)를 입증.",
    "summary": "오픈AI의 차세대 고성능 추론 모델 구독 서비스가 고가 책정에도 불구하고 업무 생산성 혁신을 체감한 글로벌 기업 및 전문가들의 수요 폭증으로 서버 과부하를 겪었습니다.",
    "fullSummary": [
      "단순 글짓기 챗봇 수준을 넘어 복잡한 수학 증명, 대규모 코드베이스 리팩토링, 금융 모델링을 완결하는 추론(Reasoning) AI의 실전 가치 확인.",
      "지식 근로자의 주당 고부가가치 과업 처리 속도를 3배 이상 끌어올리며 월 200달러 이상의 재무적 가치를 즉시 회수.",
      "기업들이 무료나 저가 모델 대신 '확실한 생산성 보장 모델'에 아낌없이 예산을 투입하는 엔터프라이즈 시장의 양극화 가속."
    ],
    "actionPlan": "사내 IT 지원팀은 저가 범용 툴의 일괄 지급 방식에서 벗어나, 핵심 직무(개발, 데이터, 법무 등) 인력에게 고성능 추론 AI 라이선스를 선별 지원해 ROI를 극대화할 것.",
    "tags": [
      "#매일경제",
      "#추론AI",
      "#업무생산성",
      "#일하는방식",
      "#엔터프라이즈구독"
    ]
  }
];

// Trending keywords list (Curated from Bain, PwC, Deloitte, Hankyung, MK)
const TRENDING_KEYWORDS = [
  "AI 개발 속도 조절",
  "KT 모두의 AI 플랫폼",
  "퓨리오사AI NPU 진출",
  "메가존 일본 AX 수출",
  "베인 자율에이전트",
  "PwC 에이전틱 워크플로우",
  "딜로이트 테크트렌드",
  "젠슨 황 AGI 인프라",
  "피지컬 AI 현장 돌봄"
];
// Category metadata definitions (ordered by logical priority)
const CATEGORY_DEFINITIONS = [
  { 
    id: "enterprise", 
    label: "🏢 기업·엔터프라이즈 AX", 
    icon: "fa-building",
    desc: "KT 플랫폼 연합, 메가존 일본 진출, 딜로이트 테크 트렌드 등 실전 B2B 엔터프라이즈 전환 및 ROI 전략" 
  },
  { 
    id: "workplace", 
    label: "💼 일하는 방식 변화", 
    icon: "fa-briefcase",
    desc: "차세대 고성능 추론 AI 서비스 가입 폭주와 지식 근로자의 실질 업무 생산성 혁신" 
  },
  { 
    id: "frontier", 
    label: "⚡ 프론티어 기술", 
    icon: "fa-bolt-lightning",
    desc: "퓨리오사AI 싱가포르 법인 및 차세대 NPU 글로벌 진출, 엔비디아 AGI 인프라 패권 분석" 
  },
  { 
    id: "agents", 
    label: "🤖 자율 에이전트", 
    icon: "fa-robot",
    desc: "베인앤드컴퍼니와 PwC가 제시한 엔터프라이즈 에이전틱 오케스트레이션 및 비즈니스 가치" 
  },
  { 
    id: "industry", 
    label: "🏭 산업별 현장 사례", 
    icon: "fa-industry",
    desc: "실드AI 국방 소프트웨어 자율화 실증, 피지컬 AI 초고령 돌봄 등 버티컬 산업 현장 혁신" 
  },
  { 
    id: "policy", 
    label: "⚖️ 거버넌스·규제", 
    icon: "fa-scale-balanced",
    desc: "빅테크 수장들의 AI 개발 속도조절론, 통제 불능 리스크 경고 및 기업 엔터프라이즈 안전 거버넌스" 
  }
];

// Top tab definitions (including "1면 종합")
const CATEGORIES = [
  { id: "all", label: "1면 종합 (전체 카테고리 행)" },
  ...CATEGORY_DEFINITIONS
];

// ==========================================================================
// 2. State Management
// ==========================================================================
const state = {
  currentCategory: "all",
  sourceTypeFilter: "all", // "all" | "consulting" | "media"
  searchQuery: "",
  sortBy: "latest",
  onlyBookmarks: false,
  bookmarks: JSON.parse(localStorage.getItem("aiax_pulse_bookmarks") || "[]"),
  selectedNews: null
};

// ==========================================================================
// 3. DOM Elements
// ==========================================================================
const DOM = {
  tickerContent: document.getElementById("tickerContent"),
  totalNewsCount: document.getElementById("totalNewsCount"),
  trendingTags: document.getElementById("trendingTags"),
  categoryTabs: document.getElementById("categoryTabs"),
  sourceFilterPills: document.getElementById("sourceFilterPills"),
  sourceCountAll: document.getElementById("sourceCountAll"),
  sourceCountConsulting: document.getElementById("sourceCountConsulting"),
  sourceCountMedia: document.getElementById("sourceCountMedia"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  sortSelect: document.getElementById("sortSelect"),
  bookmarkFilterBtn: document.getElementById("bookmarkFilterBtn"),
  bookmarkBadge: document.getElementById("bookmarkBadge"),
  filterStatusBar: document.getElementById("filterStatusBar"),
  filterStatusText: document.getElementById("filterStatusText"),
  resetFilterBtn: document.getElementById("resetFilterBtn"),
  newsGrid: document.getElementById("newsGrid"),
  emptyState: document.getElementById("emptyState"),
  emptyResetBtn: document.getElementById("emptyResetBtn"),
  // Detail Modal
  detailModal: document.getElementById("detailModal"),
  closeDetailModalBtn: document.getElementById("closeDetailModalBtn"),
  modalCategory: document.getElementById("modalCategory"),
  modalDate: document.getElementById("modalDate"),
  modalDomainBadge: document.getElementById("modalDomainBadge"),
    modalExtLinkBottom: document.getElementById("modalExtLinkBottom"),
  modalTitle: document.getElementById("modalTitle"),
  modalSource: document.getElementById("modalSource"),
  modalWhyMatters: document.getElementById("modalWhyMatters"),
  modalSummaryList: document.getElementById("modalSummaryList"),
  modalActionPlan: document.getElementById("modalActionPlan"),
  modalTags: document.getElementById("modalTags"),
  modalBookmarkToggleBtn: document.getElementById("modalBookmarkToggleBtn"),
  modalCopySummaryBtn: document.getElementById("modalCopySummaryBtn"),
  // Briefing Modal
  briefingBtn: document.getElementById("briefingBtn"),
  briefingModal: document.getElementById("briefingModal"),
  closeBriefingModalBtn: document.getElementById("closeBriefingModalBtn"),
  briefingDate: document.getElementById("briefingDate"),
  briefingContentText: document.getElementById("briefingContentText"),
  copyBriefingBtn: document.getElementById("copyBriefingBtn"),
  // Toast
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 4. Initialization & Setup
// ==========================================================================
async function initApp() {
  try {
    const response = await fetch('./news.json?v=' + Date.now());
    if (response.ok) {
      const remoteData = await response.json();
      if (Array.isArray(remoteData) && remoteData.length > 0) {
        NEWS_DATA = remoteData;
        console.info(`[AX Chronicle] Successfully loaded ${NEWS_DATA.length} reports dynamically from news.json`);
      } else {
        NEWS_DATA = FALLBACK_NEWS_DATA;
      }
    } else {
      NEWS_DATA = FALLBACK_NEWS_DATA;
    }
  } catch (err) {
    console.info("[AX Chronicle] Running in offline/file:// mode, using fallback dataset.");
    NEWS_DATA = FALLBACK_NEWS_DATA;
  }

  renderTicker();
  renderMetrics();
  renderSourceFilterCounts();
  renderTrendingKeywords();
  renderCategoryTabs();
  renderNewsGrid();
  updateBookmarkBadge();
  setupEventListeners();
}

// Render the top marquee ticker
function renderTicker() {
  if (!DOM.tickerContent) return;
  const itemsHTML = NEWS_DATA.map(item => {
    const isConsulting = item.sourceType === "consulting";
    const icon = isConsulting ? "fa-building-columns" : "fa-newspaper";
    return `
      <div class="ticker-item" data-id="${item.id}">
        <span class="ticker-source-tag"><i class="fa-solid ${icon}"></i> ${item.sourceOrg}</span>
        <span class="ticker-tag">${item.categoryLabel}</span>
        <span class="ticker-title">${item.title}</span>
      </div>
    `;
  }).join("");

  // Duplicate for seamless infinite loop
  DOM.tickerContent.innerHTML = itemsHTML + itemsHTML;

  // Add click handler to jump/open detail
  DOM.tickerContent.querySelectorAll(".ticker-item").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-id");
      openDetailModal(id);
    });
  });
}

// Render top hero metrics
function renderMetrics() {
  if (DOM.totalNewsCount) {
    DOM.totalNewsCount.textContent = NEWS_DATA.length;
  }
}

// Render source filter counts (All, Consulting, Media)
function renderSourceFilterCounts() {
  const consultingCount = NEWS_DATA.filter(n => n.sourceType === "consulting").length;
  const mediaCount = NEWS_DATA.filter(n => n.sourceType === "media").length;

  if (DOM.sourceCountAll) DOM.sourceCountAll.textContent = NEWS_DATA.length;
  if (DOM.sourceCountConsulting) DOM.sourceCountConsulting.textContent = consultingCount;
  if (DOM.sourceCountMedia) DOM.sourceCountMedia.textContent = mediaCount;
}

// Render trending keyword pills
function renderTrendingKeywords() {
  if (!DOM.trendingTags) return;
  DOM.trendingTags.innerHTML = TRENDING_KEYWORDS.map(kw => `
    <button class="tag-pill-btn" data-keyword="${kw}">
      # ${kw}
    </button>
  `).join("");

  DOM.trendingTags.querySelectorAll(".tag-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const kw = btn.getAttribute("data-keyword");
      DOM.searchInput.value = kw;
      handleSearchChange(kw);
    });
  });
}

// Render category filter tabs with dynamic counts
function renderCategoryTabs() {
  if (!DOM.categoryTabs) return;
  DOM.categoryTabs.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === "all" 
      ? NEWS_DATA.length 
      : NEWS_DATA.filter(item => item.category === cat.id).length;
    
    const activeClass = state.currentCategory === cat.id && !state.onlyBookmarks ? "active" : "";
    return `
      <button class="category-tab-btn ${activeClass}" data-category="${cat.id}">
        <span>${cat.label}</span>
        <span class="tab-count">${count}</span>
      </button>
    `;
  }).join("");

  DOM.categoryTabs.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      state.currentCategory = cat;
      state.onlyBookmarks = false;
      DOM.bookmarkFilterBtn.setAttribute("data-active", "false");
      updateCategoryTabsActive();
      renderNewsGrid();
    });
  });
}

function updateCategoryTabsActive() {
  if (!DOM.categoryTabs) return;
  DOM.categoryTabs.querySelectorAll(".category-tab-btn").forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat === state.currentCategory && !state.onlyBookmarks) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function updateSourcePillsActive() {
  if (!DOM.sourceFilterPills) return;
  DOM.sourceFilterPills.querySelectorAll(".source-pill-btn").forEach(btn => {
    const type = btn.getAttribute("data-source-type");
    if (type === state.sourceTypeFilter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// ==========================================================================
// 5. News Filtering & Row-based Rendering
// ==========================================================================
function getFilteredNews() {
  let list = [...NEWS_DATA];

  // Source Type Filter (Consulting vs Media)
  if (state.sourceTypeFilter !== "all") {
    list = list.filter(item => item.sourceType === state.sourceTypeFilter);
  }

  // Bookmark filter
  if (state.onlyBookmarks) {
    list = list.filter(item => state.bookmarks.includes(item.id));
  } else if (state.currentCategory !== "all") {
    list = list.filter(item => item.category === state.currentCategory);
  }

  // Search filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(item => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.sourceOrg.toLowerCase().includes(q) ||
        item.reportType.toLowerCase().includes(q) ||
        item.whyMatters.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q)) ||
        item.source.toLowerCase().includes(q)
      );
    });
  }

  // Sort
  if (state.sortBy === "latest") {
    list.sort((a, b) => b.timestamp - a.timestamp);
  } else if (state.sortBy === "views") {
    list.sort((a, b) => b.views - a.views);
  }

  return list;
}

// Helper: Render single news card HTML
function renderCardHtml(item) {
  const isBookmarked = state.bookmarks.includes(item.id);
  const isConsulting = item.sourceType === "consulting";
  const sourceIcon = isConsulting ? "fa-building-columns" : "fa-newspaper";
  const sourceBadgeClass = isConsulting ? "source-consulting" : "source-media";
  const sourceLabel = isConsulting ? "글로벌 컨설팅 리포트" : "정론 경제·글로벌 유력지";

  return `
    <article class="news-card" data-id="${item.id}">
      <!-- Top Meta Row -->
      <div class="card-meta-top">
        <div class="card-meta-left">
          <span class="card-category-badge ${item.badgeClass}">
            <i class="fa-solid fa-tag"></i> ${item.categoryLabel}
          </span>
          <span class="card-source-seal ${sourceBadgeClass}" title="${sourceLabel}: ${item.sourceOrg}">
            <i class="fa-solid ${sourceIcon}"></i>
            <strong>${item.sourceOrg}</strong>
          </span>
        </div>
        <div class="card-time-info">
          <span class="card-date-badge" title="발행일자"><i class="fa-regular fa-calendar-days"></i> ${item.time}</span>
          <span class="card-meta-dot">•</span>
          <span class="card-read-badge"><i class="fa-regular fa-clock"></i> ${item.readTime}</span>
        </div>
      </div>

      <div class="card-main">
        <div class="card-report-badge">
          <i class="fa-solid fa-file-lines"></i> ${item.reportType}
        </div>
        <h3 class="card-title">${item.title}</h3>
        
        <!-- Editorial Column / Why It Matters -->
        <div class="card-impact-highlight">
          <div class="card-impact-header">
            <i class="fa-solid fa-lightbulb"></i>
            <span>${item.sourceOrg} 주간 핵심 인사이트</span>
          </div>
          <p class="card-impact-text">${item.whyMatters}</p>
        </div>

        <p class="card-desc">${item.summary}</p>

        <div class="card-tags">
          ${item.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}
        </div>
      </div>

      <div class="card-footer">
        <div class="card-footer-meta">
          <span class="card-domain-badge">
            <i class="fa-solid fa-compass"></i> ${item.impactTier}
          </span>
          <span class="card-views-count">
            <i class="fa-regular fa-eye"></i> ${item.views.toLocaleString()}회 조회
          </span>
        </div>

        <div class="card-action-btns">
          <button class="icon-btn bookmark-toggle-btn ${isBookmarked ? 'active' : ''}" 
                  data-id="${item.id}" 
                  title="${isBookmarked ? '리포트 스크랩 취소' : '리포트 스크랩(북마크)'}">
            <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
          </button>
          <a href="${item.originalUrl || '#'}" target="_blank" rel="noopener noreferrer" 
             class="btn btn-outline btn-sm card-ext-link-btn" 
             title="원문 기사/리포트 발행처(외부)로 바로 이동"
             onclick="event.stopPropagation();">
            <span>원문 바로가기</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <button class="btn btn-primary btn-sm open-detail-btn" data-id="${item.id}">
            <span>상세 분석</span>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

// Render news grouped into distinct row sections by category
function renderNewsGrid() {
  const filtered = getFilteredNews();

  // Handle active filter status bar
  updateFilterStatusBar(filtered.length);

  if (filtered.length === 0) {
    DOM.newsGrid.innerHTML = "";
    DOM.emptyState.style.display = "block";
    return;
  }

  DOM.emptyState.style.display = "none";

  // If a single category is selected (not 'all')
  if (state.currentCategory !== "all") {
    const catMeta = CATEGORY_DEFINITIONS.find(c => c.id === state.currentCategory) || {
      id: state.currentCategory,
      label: state.currentCategory,
      icon: "fa-folder-open",
      desc: "선택된 카테고리의 주간 엄선 리포트입니다."
    };

    DOM.newsGrid.innerHTML = `
      <section class="category-row-section" data-category="${catMeta.id}">
        <div class="category-row-header">
          <div class="category-row-header-top">
            <div class="category-row-title-wrap">
              <span class="category-row-icon"><i class="fa-solid ${catMeta.icon}"></i></span>
              <h2 class="category-row-title">${catMeta.label}</h2>
              <span class="category-row-count-badge">${filtered.length}편 엄선</span>
            </div>
            <button class="btn-text show-all-rows-btn" title="전체 카테고리 행 다시 보기">
              <i class="fa-solid fa-table-cells-large"></i>
              <span>전체 지면(1면)으로 복귀</span>
            </button>
          </div>
          <p class="category-row-desc">${catMeta.desc}</p>
        </div>
        <div class="category-row-grid">
          ${filtered.map(item => renderCardHtml(item)).join("")}
        </div>
      </section>
    `;
  } else {
    // "1면 종합": Render sequentially row-by-row for each category that has matching items
    let rowsHTML = "";

    CATEGORY_DEFINITIONS.forEach(catDef => {
      const itemsInCat = filtered.filter(item => item.category === catDef.id);
      if (itemsInCat.length === 0) return; // Skip empty categories under current search/filter

      rowsHTML += `
        <section class="category-row-section" id="row-section-${catDef.id}" data-category="${catDef.id}">
          <div class="category-row-header">
            <div class="category-row-header-top">
              <div class="category-row-title-wrap">
                <span class="category-row-icon"><i class="fa-solid ${catDef.icon}"></i></span>
                <h2 class="category-row-title">${catDef.label}</h2>
                <span class="category-row-count-badge">${itemsInCat.length}편 엄선</span>
              </div>
              <button class="category-row-focus-btn" data-category="${catDef.id}" title="이 카테고리만 집중 보기">
                <span>이 섹션만 보기</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <p class="category-row-desc">${catDef.desc}</p>
          </div>
          <div class="category-row-grid">
            ${itemsInCat.map(item => renderCardHtml(item)).join("")}
          </div>
        </section>
      `;
    });

    DOM.newsGrid.innerHTML = rowsHTML;
  }

  // Bind Section Focus button clicks ("이 섹션만 보기")
  DOM.newsGrid.querySelectorAll(".category-row-focus-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const catId = btn.getAttribute("data-category");
      state.currentCategory = catId;
      updateCategoryTabsActive();
      renderNewsGrid();
      window.scrollTo({ top: DOM.categoryTabs.offsetTop - 80, behavior: "smooth" });
    });
  });

  // Bind "전체 지면(1면)으로 복귀" button
  const showAllBtn = DOM.newsGrid.querySelector(".show-all-rows-btn");
  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      state.currentCategory = "all";
      updateCategoryTabsActive();
      renderNewsGrid();
    });
  }

  // Attach card event listeners
  DOM.newsGrid.querySelectorAll(".news-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Don't trigger if clicked on bookmark button or external link
      if (e.target.closest(".bookmark-toggle-btn") || e.target.closest(".card-ext-link-btn")) return;
      const id = card.getAttribute("data-id");
      openDetailModal(id);
    });
  });

  DOM.newsGrid.querySelectorAll(".bookmark-toggle-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      toggleBookmark(id);
    });
  });
}

function updateFilterStatusBar(count) {
  const isFiltering = 
    state.searchQuery.trim() !== "" || 
    state.onlyBookmarks || 
    state.currentCategory !== "all" || 
    state.sourceTypeFilter !== "all";

  if (!isFiltering) {
    DOM.filterStatusBar.style.display = "none";
    return;
  }

  DOM.filterStatusBar.style.display = "flex";
  let statusText = `현재 공신력 조건 결과: <strong>${count}</strong>건 표시 중`;

  const sourceDesc = state.sourceTypeFilter === "consulting" 
    ? " [글로벌 컨설팅 리포트 (MBB · Big4)]" 
    : state.sourceTypeFilter === "media" 
    ? " [정론 경제·글로벌 유력 언론사]" 
    : "";

  if (state.onlyBookmarks) {
    statusText = `저장된 북마크 목록: <strong>${count}</strong>건${sourceDesc}`;
  } else if (state.searchQuery.trim()) {
    statusText = `"${state.searchQuery}" 검색 결과: <strong>${count}</strong>건${sourceDesc}`;
  } else if (state.currentCategory !== "all") {
    const catObj = CATEGORIES.find(c => c.id === state.currentCategory);
    statusText = `[${catObj ? catObj.label : state.currentCategory}] 섹션: <strong>${count}</strong>건${sourceDesc}`;
  } else if (sourceDesc) {
    statusText = `${sourceDesc} 필터링 결과: <strong>${count}</strong>건`;
  }
  DOM.filterStatusText.innerHTML = statusText;
}

// ==========================================================================
// 6. Bookmarks & LocalStorage
// ==========================================================================
function toggleBookmark(id) {
  const index = state.bookmarks.indexOf(id);
  let isAdded = false;

  if (index > -1) {
    state.bookmarks.splice(index, 1);
    isAdded = false;
  } else {
    state.bookmarks.push(id);
    isAdded = true;
  }

  localStorage.setItem("aiax_pulse_bookmarks", JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  renderNewsGrid();

  // If modal is open, update modal bookmark button state
  if (state.selectedNews && state.selectedNews.id === id) {
    updateModalBookmarkBtnState();
  }

  showToast(
    isAdded ? "리포트가 북마크에 저장되었습니다." : "북마크에서 제거되었습니다.",
    isAdded ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
  );
}

function updateBookmarkBadge() {
  if (DOM.bookmarkBadge) {
    DOM.bookmarkBadge.textContent = state.bookmarks.length;
  }
}

// ==========================================================================
// 7. Detail Modal Logic
// ==========================================================================
function openDetailModal(id) {
  const news = NEWS_DATA.find(item => item.id === id);
  if (!news) return;

  state.selectedNews = news;
  news.views += 1; // Increment view count

  const isConsulting = news.sourceType === "consulting";
  const sourceIcon = isConsulting ? "fa-building-columns" : "fa-newspaper";
  const sourceCategory = isConsulting ? "글로벌 톱티어 전략 컨설팅 리포트" : "역사·규모 공신력 검증 경제 정론지";

  DOM.modalCategory.textContent = news.categoryLabel;
  DOM.modalCategory.className = `modal-category ${news.badgeClass}`;
  DOM.modalDate.innerHTML = `<span class="modal-date-chip"><i class="fa-regular fa-calendar-days"></i> 발행일자: <strong>${news.time}</strong></span> <span class="modal-meta-separator">•</span> <span class="modal-read-chip"><i class="fa-regular fa-clock"></i> ${news.readTime}</span>`;
  if (DOM.modalDomainBadge) {
    DOM.modalDomainBadge.innerHTML = `<i class="fa-solid fa-compass"></i> ${news.impactTier}`;
  }
  
  if (DOM.modalExtLinkBottom) {
    DOM.modalExtLinkBottom.href = news.originalUrl || "#";
  }
  DOM.modalTitle.textContent = news.title;

  // Credible source container
  DOM.modalSource.innerHTML = `
    <div class="modal-source-trust-box">
      <div class="trust-badge-row">
        <span class="trust-seal-pill ${isConsulting ? 'consulting' : 'media'}">
          <i class="fa-solid fa-shield-halved"></i> 100% 공신력 검증 출처
        </span>
        <span class="trust-source-type">${sourceCategory}</span>
      </div>
      <div class="trust-meta-row">
        <span><i class="fa-solid ${sourceIcon}"></i> 발행 기관: <strong>${news.sourceOrg}</strong></span>
        <span>·</span>
        <span>리포트 유형: <strong>${news.reportType}</strong></span>
        <span>·</span>
        <span>조회수: ${news.views.toLocaleString()}회</span>
      </div>
      <div class="trust-source-full">
        <i class="fa-solid fa-link"></i> 원문 퍼머링크: 
        <a href="${news.originalUrl || '#'}" target="_blank" rel="noopener noreferrer" class="trust-url-link">
          <strong>${news.source}</strong> <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `;

  DOM.modalWhyMatters.textContent = news.whyMatters;

  // Summary bullets
  DOM.modalSummaryList.innerHTML = news.fullSummary.map(point => `<li>${point}</li>`).join("");

  // Action plan
  DOM.modalActionPlan.innerHTML = `<strong>${news.sourceOrg} 권고 실행 액션 플랜:</strong> ${news.actionPlan}`;

  // Tags
  DOM.modalTags.innerHTML = news.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("");

  updateModalBookmarkBtnState();

  DOM.detailModal.classList.add("open");
  DOM.detailModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  DOM.detailModal.classList.remove("open");
  DOM.detailModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.selectedNews = null;
}

function updateModalBookmarkBtnState() {
  if (!state.selectedNews || !DOM.modalBookmarkToggleBtn) return;
  const isBookmarked = state.bookmarks.includes(state.selectedNews.id);
  const icon = DOM.modalBookmarkToggleBtn.querySelector("i");
  const span = DOM.modalBookmarkToggleBtn.querySelector("span");

  if (isBookmarked) {
    DOM.modalBookmarkToggleBtn.classList.add("active");
    if (icon) icon.className = "fa-solid fa-bookmark";
    if (span) span.textContent = "스크랩 완료";
  } else {
    DOM.modalBookmarkToggleBtn.classList.remove("active");
    if (icon) icon.className = "fa-regular fa-bookmark";
    if (span) span.textContent = "리포트 스크랩";
  }
}

// ==========================================================================
// 8. Weekly Briefing Modal Logic
// ==========================================================================
function openBriefingModal() {
  const briefingDateText = "2026년 9월 2주차 위클리 에디션 (2026.09.08 ~ 09.14)";
  DOM.briefingDate.textContent = briefingDateText;

  // Group by category for structured briefing
  let catSectionsText = "";
  CATEGORY_DEFINITIONS.forEach(cat => {
    const items = NEWS_DATA.filter(n => n.category === cat.id);
    if (items.length === 0) return;
    catSectionsText += `
[${cat.label}]
`;
    items.forEach((item, idx) => {
      catSectionsText += `  ${idx + 1}. ${item.title}
`;
      catSectionsText += `     - 핵심 요약: ${item.whyMatters}
`;
      catSectionsText += `     - 실행 제언: ${item.actionPlan}
`;
      catSectionsText += `     - 원문 링크: ${item.originalUrl}

`;
    });
  });

  const fullBriefing = `[AX 트렌드 리포트 | 2026년 9월 2주차 위클리 종합 브리핑]
발행일자: ${briefingDateText}
발행처: AX 트렌드 리포트 인텔리전스 데스크
엄선 대상: 정론 경제·IT 유력지 (한국경제, 매일경제) 및 글로벌 씽크탱크·컨설팅 (Bain, PwC, Deloitte)
총 분석 리포트: ${NEWS_DATA.length}건

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ WEEKLY 1분 핵심 총평 (Executive Takeaways)
1. "속도전에서 안전 거버넌스로의 대전환": 앤트로픽·오픈AI·xAI·구글 딥마인드 등 글로벌 4대 빅테크 수장들이 자율 에이전트 통제 불능 리스크에 대응해 '개발 속도 조절(Pacing)'에 전격 합의하며 엔터프라이즈 안전 거버넌스가 최우선 과제로 부상했습니다.
2. "플랫폼 연합과 에이전틱 B2B 실전 돌입": KT의 '모두의 AI'(다음·무신사·직방) 연합과 메가존클라우드의 일본 시장 진출, 베인·PwC의 에이전틱 워크플로우 실증처럼 기업들이 일회성 PoC를 끝내고 실질적인 비즈니스 임팩트(ROI) 창출에 집중하고 있습니다.
3. "추론 인프라 TCO 절감과 현장 피지컬 AX": 퓨리오사AI의 차세대 NPU 글로벌 진출, 실드AI의 국방 소프트웨어 자율화 실증, 피지컬 AI 기반 고령층 돌봄 등 버티컬 산업 현장의 물리적 AI 전환이 가속화되고 있습니다.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${catSectionsText}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
본 브리핑은 100% 공신력 있는 글로벌 기관의 원문 리포트만을 기반으로 구성된 주간 정례 인텔리전스입니다.`;

  DOM.briefingContentText.textContent = fullBriefing;
  DOM.briefingContentText.innerText = fullBriefing;
  DOM.briefingContentText.value = fullBriefing;
  DOM.briefingModal.classList.add("open");
  DOM.briefingModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeBriefingModal() {
  DOM.briefingModal.classList.remove("open");
  DOM.briefingModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 9. Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Search input
  DOM.searchInput.addEventListener("input", (e) => {
    handleSearchChange(e.target.value);
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    handleSearchChange("");
    DOM.searchInput.focus();
  });

  // Sort
  DOM.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderNewsGrid();
  });

  // Source Type Filter (All / Consulting / Media)
  if (DOM.sourceFilterPills) {
    DOM.sourceFilterPills.querySelectorAll(".source-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-source-type");
        state.sourceTypeFilter = type;
        updateSourcePillsActive();
        renderNewsGrid();
      });
    });
  }

  // Bookmark filter button
  DOM.bookmarkFilterBtn.addEventListener("click", () => {
    state.onlyBookmarks = !state.onlyBookmarks;
    DOM.bookmarkFilterBtn.setAttribute("data-active", state.onlyBookmarks ? "true" : "false");
    updateCategoryTabsActive();
    renderNewsGrid();
  });

  // Reset filter status button
  DOM.resetFilterBtn.addEventListener("click", resetAllFilters);
  DOM.emptyResetBtn.addEventListener("click", resetAllFilters);

  // Detail Modal Controls
  if (DOM.closeDetailModalBtn) DOM.closeDetailModalBtn.addEventListener("click", closeDetailModal);
  DOM.detailModal?.querySelector(".modal-backdrop")?.addEventListener("click", closeDetailModal);

  if (DOM.modalBookmarkToggleBtn) {
    DOM.modalBookmarkToggleBtn.addEventListener("click", () => {
      if (state.selectedNews) {
        toggleBookmark(state.selectedNews.id);
      }
    });
  }

  if (DOM.modalCopySummaryBtn) {
    DOM.modalCopySummaryBtn.addEventListener("click", () => {
      if (!state.selectedNews) return;
      const text = `[${state.selectedNews.sourceOrg}] ${state.selectedNews.title}\n\n■ 왜 주목해야 하는가:\n${state.selectedNews.whyMatters}\n\n■ 핵심 요약:\n${state.selectedNews.fullSummary.join('\n')}\n\n■ 실행 액션:\n${state.selectedNews.actionPlan}\n\n■ 원문 퍼머링크: ${state.selectedNews.originalUrl}`;
      copyToClipboard(text, "리포트 분석 요약이 클립보드에 복사되었습니다.");
    });
  }

  // Briefing Modal Controls
  if (DOM.briefingBtn) DOM.briefingBtn.addEventListener("click", openBriefingModal);
  if (DOM.closeBriefingModalBtn) DOM.closeBriefingModalBtn.addEventListener("click", closeBriefingModal);
  DOM.briefingModal?.querySelector(".modal-backdrop")?.addEventListener("click", closeBriefingModal);

  if (DOM.copyBriefingBtn) {
    DOM.copyBriefingBtn.addEventListener("click", () => {
      const text = DOM.briefingContentText.textContent || DOM.briefingContentText.innerText || DOM.briefingContentText.value || "";
      copyToClipboard(text, "위클리 종합 브리핑 전문이 복사되었습니다. 경영진 및 팀 슬랙에 공유하세요!");
    });
  }

  // Global Keyboard Shortcuts (Esc to close modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (DOM.detailModal.classList.contains("open")) closeDetailModal();
      if (DOM.briefingModal.classList.contains("open")) closeBriefingModal();
    }
    // Search focus on / or Ctrl+K
    if ((e.key === "/" || (e.ctrlKey && e.key === "k")) && document.activeElement !== DOM.searchInput) {
      e.preventDefault();
      DOM.searchInput.focus();
    }
  });
}

function handleSearchChange(val) {
  state.searchQuery = val;
  DOM.clearSearchBtn.style.display = val.trim() ? "flex" : "none";
  renderNewsGrid();
}

function resetAllFilters() {
  state.currentCategory = "all";
  state.sourceTypeFilter = "all";
  state.searchQuery = "";
  state.onlyBookmarks = false;
  DOM.searchInput.value = "";
  DOM.clearSearchBtn.style.display = "none";
  DOM.bookmarkFilterBtn.setAttribute("data-active", "false");
  updateCategoryTabsActive();
  updateSourcePillsActive();
  renderNewsGrid();
}

// ==========================================================================
// 10. Utilities (Clipboard & Toast)
// ==========================================================================
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg, "fa-solid fa-check");
  }).catch(() => {
    showToast("클립보드 복사에 실패했습니다.", "fa-solid fa-triangle-exclamation");
  });
}

function showToast(message, iconClass = "fa-solid fa-info") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${message}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", initApp);
