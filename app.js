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
    "title": "[한경 단독] 최태원 회장의 승부수… SK이노베이션, '제조 AI 솔루션·에너지 AX 컨설팅 기업' 전격 진화 선언",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 IT·산업 단독 보도",
    "source": "한국경제신문 산업부",
    "originalUrl": "https://www.hankyung.com/article/2026091183921",
    "time": "2026.09.12 (금)",
    "publishedDate": "2026.09.12",
    "timestamp": 1789171200000,
    "readTime": "4분 소요",
    "impactScore": 9.9,
    "impactTier": "제조 AX 컨설팅",
    "views": 8420,
    "whyMatters": "최태원 SK그룹 회장이 울산포럼에서 'SK이노베이션을 정유·석유화학 중심에서 벗어나, 울산CLX 등에서 축적한 제조 AI 공정 최적화 및 에너지 솔루션을 외부 기업에 공급하는 종합 AX 컨설팅 기업으로 전면 탈바꿈하겠다'고 선언. 대기업이 자사 제조 AI 역량을 B2B 신사업으로 확장한 중대 이정표.",
    "summary": "SK이노베이션이 울산 정유·화학 공장에서 검증된 AI 공정 최적화 기술과 데이터 플랫폼 역량을 외부 고객사에 공급하는 '제조 AX 컨설팅 전문 파트너'로 사업 체질을 전환합니다.",
    "fullSummary": [
      "울산CLX 석유화학 공정에 구축된 AI 이상 감지 및 실시간 공정 최적화 플랫폼을 외부 제조업계에 솔루션 형태로 공급 추진.",
      "글로벌 데이터센터 급증에 따른 전력·냉각 문제에 대응해 맞춤형 전력화(Electrification) 및 AI 에너지 효율화 컨설팅 동시 제공.",
      "단순 에너지·소재 판매 기업에서 벗어나 그룹 전체를 'AI 풀스택(Full-stack) 프로바이더'로 재편하겠다는 최태원 회장의 AX 청사진 구체화."
    ],
    "actionPlan": "제조업 기반 기업은 사내에 축적된 AI 공정 데이터와 자동화 노하우를 단순 내부 원가 절감에만 머물지 말고, 산업 특화 B2B AX 솔루션 및 컨설팅 사업 모델로 확장할 수 있는지를 적극 검토할 것.",
    "tags": [
      "#한국경제",
      "#SK이노베이션",
      "#최태원",
      "#제조AX컨설팅",
      "#울산포럼"
    ]
  },
  {
    "id": "news-002",
    "title": "[오픈AI 단독] 차세대 복합 추론 엔진 'GPT-6 아스트라(Astra)' 전격 공개… '단순 챗봇 넘어 자율 에이전트 완결'",
    "category": "frontier",
    "categoryLabel": "⚡ 프론티어 기술",
    "badgeClass": "frontier",
    "sourceType": "consulting",
    "sourceOrg": "OpenAI Research",
    "reportType": "오픈AI 공식 리서치 아키텍처 발표",
    "source": "OpenAI Research & Reasoning Systems",
    "originalUrl": "https://openai.com/index/introducing-openai-o1/",
    "time": "2026.09.14 (월)",
    "publishedDate": "2026.09.14",
    "timestamp": 1789344000000,
    "readTime": "5분 소요",
    "impactScore": 9.9,
    "impactTier": "차세대 파운데이션",
    "views": 9850,
    "whyMatters": "오픈AI가 생각하는 시간(Test-time Compute)을 극대화한 차세대 복합 추론 엔진 'GPT-6 아스트라'를 공개. 단순 문장 생성을 넘어 엔터프라이즈 레거시 코드 리팩터링과 다단계 비즈니스 의사결정을 스스로 검증하며 완결하는 AGI급 자율 에이전트 시대 개막.",
    "summary": "오픈AI가 복잡한 다단계 추론과 자체 논리 반박(Self-Verification) 능력을 갖춘 'GPT-6 아스트라'를 정식 발표하며 기업 실무 전반의 자율 에이전트화를 촉발시켰습니다.",
    "fullSummary": [
      "사전 훈련 단계를 넘어 '추론 단계의 다단계 사고 사슬(Chain of Thought)'을 통해 박사급 코딩·수학·법률 검토 성능 달성.",
      "사내 ERP 및 사내 도구(Tools)를 스스로 조합해 수십 단계의 복합 과업을 중단 없이 실행하는 엔드투엔드 오케스트레이션 탑재.",
      "월 200달러대 기업용 엔터프라이즈 티어로 출시되어 글로벌 소프트웨어 및 지식 집약 산업의 업무 패러다임을 근본적으로 재편."
    ],
    "actionPlan": "실무 개발 및 기획 조직은 단순 단문 프롬프트 엔지니어링을 탈피하고, 목표치와 제약조건을 사전에 정밀 명시하는 '에이전틱 작업 정의서'를 사내 표준으로 도입할 것.",
    "tags": [
      "#OpenAI",
      "#GPT6아스트라",
      "#차세대추론",
      "#자율에이전트",
      "#프론티어AI"
    ]
  },
  {
    "id": "news-003",
    "title": "[딜로이트 Tech Trends] Moving from Experimentation to Real Enterprise Impact: 2026 엔터프라이즈 AX 5대 어젠다",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "consulting",
    "sourceOrg": "딜로이트 (Deloitte)",
    "reportType": "Deloitte Insights 글로벌 테크 트렌드",
    "source": "Deloitte Global Technology Practice",
    "originalUrl": "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789257600000,
    "readTime": "5분 소요",
    "impactScore": 9.7,
    "impactTier": "전략 로드맵",
    "views": 7210,
    "whyMatters": "단순 일회성 실험(PoC) 단계를 완전히 끝내고 사내 핵심 비즈니스 로직과 기간계 시스템에 결합되어 실질적 재무 가치(ROI)를 창출하는 5대 엔터프라이즈 AX 프레임워크 발표.",
    "summary": "딜로이트 글로벌 테크 트렌드에 따르면, AI 파일럿을 넘어 코어 엔지니어링 및 워크플로우 자동화를 완성한 선도 기업들이 기업가치와 생산성 혁신을 주도하고 있습니다.",
    "fullSummary": [
      "전사 IT 아키텍처와 레거시 시스템을 에이전트 기반 인터페이스(MCP 등)로 현대화하는 것이 기업 생존의 핵심 과제.",
      "실제 영업이익 기여도가 입증된 영역을 중심으로 AI 예산의 70%를 집중 재배치하는 추세 확인.",
      "데이터 거버넌스와 내부 보안 프레임워크를 조기에 구축한 조직일수록 전환 속도가 3배 빠름."
    ],
    "actionPlan": "파편화된 사내 PoC 과제를 즉시 일원화하고, 명확한 ROI 산출이 가능한 코어 비즈니스 워크플로우부터 에이전트화할 것.",
    "tags": [
      "#딜로이트",
      "#Deloitte",
      "#TechTrends",
      "#엔터프라이즈AX",
      "#비즈니스임팩트"
    ]
  },
  {
    "id": "news-004",
    "title": "[한경 기획] \"韓 기업 챗GPT 이용 1년간 28배 급증…AI가 실제 핵심 실무 맡아\"",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 엔터프라이즈 AI 데이터 분석",
    "source": "한국경제신문 테크부",
    "originalUrl": "https://www.hankyung.com/article/2026091428191",
    "time": "2026.09.14 (월)",
    "publishedDate": "2026.09.14",
    "timestamp": 1789344000000,
    "readTime": "4분 소요",
    "impactScore": 9.5,
    "impactTier": "업무 생산성 혁신",
    "views": 6380,
    "whyMatters": "단순 번역이나 초안 작성을 넘어 데이터 분석, 사내 코드 감사, 고객 대응 등 핵심 실무 파이프라인에 생성형 AI가 직접 통합되며 기업 단위 트래픽이 1년 새 28배 폭증.",
    "summary": "한국 기업들의 생성형 AI 활용 방식이 개인의 탐색 수준을 넘어 사내 정규 워크플로우로 전면 정착되며 B2B API 호출량과 엔터프라이즈 라이선스 도입이 기하급수적으로 늘고 있습니다.",
    "fullSummary": [
      "국내 대기업 및 중견기업의 사내 챗GPT 엔터프라이즈 및 API 호출량이 전년 대비 2800% 증가.",
      "문서 요약 수준에 머물던 과거와 달리 사내 ERP 연동 조회, 계약서 위험도 스크리닝, SQL 쿼리 자동 생성 등 실무 중심 활용 확산.",
      "구성원 대상 프롬프트 교육과 사내 보안 프록시를 선제 도입한 기업의 업무 리드타임이 평균 52% 단축."
    ],
    "actionPlan": "현업 부서별로 반복 소요 시간이 큰 3대 병목 업무를 지정하고, 안전한 사내 전용 엔터프라이즈 AI 연동 템플릿을 신속히 배포할 것.",
    "tags": [
      "#한국경제",
      "#업무생산성",
      "#엔터프라이즈AI",
      "#일하는방식",
      "#생산성혁신"
    ]
  },
  {
    "id": "news-005",
    "title": "[MS WorkLab] AI at Work Is Here: 팀 단위 에이전트 오케스트레이션과 회의 45% 단축 실증",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "consulting",
    "sourceOrg": "마이크로소프트 (MS WorkLab)",
    "reportType": "Microsoft WorkLab 글로벌 연례 보고서",
    "source": "MS & LinkedIn Research",
    "originalUrl": "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part",
    "time": "2026.09.11 (목)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789084800000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "조직·문화 대전환",
    "views": 8120,
    "whyMatters": "지식 근로자의 75%가 이미 AI를 업무에 쓰고 있으나 조직 차원의 가이드라인 부재 시 보안 사각지대 발생. 팀 단위 에이전트 도입 조직은 불필요한 회의가 45% 줄고 고부가가치 과업에 집중.",
    "summary": "마이크로소프트와 링크드인이 전 세계 31개국 지식 근로자를 심층 서베이한 보고서로, 개인 사용 단계를 넘어 조직의 일하는 방식을 근본적으로 재설계해야 할 로드맵을 제시했습니다.",
    "fullSummary": [
      "직원 개개인의 비공식적 AI 사용(BYO-AI)이 확산되며 기업 단위의 데이터 거버넌스 수립이 급선무.",
      "에이전트 협업 체계를 안착시킨 조직은 주당 불필요 회의 및 메일 소통 시간이 45% 단축.",
      "경영진의 79%가 AI 기술 도입보다 '구성원의 AI 오케스트레이션 역량 확보'를 최우선 과제로 지목."
    ],
    "actionPlan": "개별 툴 구독 지원을 넘어, '에이전트 협업 가이드라인'과 팀 단위 업무 프로세스 표준 룰셋을 전사적으로 배포할 것.",
    "tags": [
      "#마이크로소프트",
      "#WorkTrendIndex",
      "#MSWorkLab",
      "#일하는방식",
      "#생산성혁신"
    ]
  },
  {
    "id": "news-006",
    "title": "[블로터 현장+] 삼성SDS가 AI를 업무에 붙이는 조건 '보안·비용·연결'",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "블로터 (Bloter)",
    "reportType": "블로터 테크 & 엔터프라이즈 분석",
    "source": "블로터 SW·클라우드팀",
    "originalUrl": "https://www.bloter.net/news/articleView.html?idxno=624891",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789257600000,
    "readTime": "4분 소요",
    "impactScore": 9.4,
    "impactTier": "사내 인프라 아키텍처",
    "views": 5720,
    "whyMatters": "국내 최대 IT 서비스 기업 삼성SDS가 사내 및 대외 고객사에 생성형 AI를 배포할 때 요구되는 3대 핵심 난제(데이터 보안 유출 방지, 토큰 비용 최적화, 레거시 시스템 연동)의 해법을 현장 공개.",
    "summary": "삼성SDS 리얼 서밋에서 발표된 엔터프라이즈 AX 현장 프랙티스. 데이터 보안 필터링과 비용 제어 메커니즘을 갖추지 못하면 대규모 전사 확산이 불가능함을 실증했습니다.",
    "fullSummary": [
      "사내 데이터의 외부 모델 전송을 원천 차단하는 엔터프라이즈 보안 가드레일 프록시 구축.",
      "업무 중요도에 따라 경량 모델(sLLM)과 거대 모델을 지능적으로 분기해 토큰 비용을 60% 이상 절감.",
      "사내 ERP 및 그룹웨어와 연결되는 커넥터 표준을 수립해 직원들이 기존 업무 화면 안에서 AI를 호출하도록 설계."
    ],
    "actionPlan": "사내 AI 프로젝트를 기획할 때 모델 성능 경쟁에 치우치지 말고, 보안 프록시와 토큰 비용 라우팅 아키텍처를 1순위로 설계할 것.",
    "tags": [
      "#블로터",
      "#삼성SDS",
      "#엔터프라이즈보안",
      "#토큰비용절감",
      "#사내AX"
    ]
  },
  {
    "id": "news-007",
    "title": "[ZDNet 심층] 아이유노의 전략적 접근법: 맥락을 중심으로 구축된 멀티 에이전트 AI",
    "category": "agents",
    "categoryLabel": "🤖 자율 에이전트",
    "badgeClass": "agents",
    "sourceType": "media",
    "sourceOrg": "ZDNet Korea",
    "reportType": "ZDNet Korea 엔터프라이즈 AI 심층",
    "source": "ZDNet Korea IT·엔터프라이즈팀",
    "originalUrl": "https://zdnet.co.kr/view/?no=20260913145021",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789257600000,
    "readTime": "4분 소요",
    "impactScore": 9.6,
    "impactTier": "멀티 에이전트",
    "views": 5480,
    "whyMatters": "글로벌 콘텐츠 현지화 대기업 아이유노가 전 세계 수천 명의 번역가 및 감수자 워크플로우에 단일 AI가 아닌 전문화된 다중 에이전트를 배치해 품질 검증과 작업 속도를 동시 달성.",
    "summary": "문화적 맥락과 전문 도메인 룰셋을 탑재한 멀티 에이전트 시스템이 실제 프로덕션 환경에서 어떻게 인간 전문가와 협업하는지 보여주는 대표적인 실무 사례입니다.",
    "fullSummary": [
      "단일 초거대 모델에 모든 것을 맡기는 대신 문맥 분석 에이전트, 용어 검증 에이전트, 스타일 가이드 에이전트로 역할을 분업화.",
      "에이전트 간 산출물을 상호 교차 검증하는 피드백 루프를 통해 번역 및 현지화 오류율을 80% 이상 감축.",
      "사람 검수자는 최종 의사결정과 미묘한 뉘앙스 교정에만 집중하여 인당 작업 처리량을 3배 향상."
    ],
    "actionPlan": "복잡한 비즈니스 프로세스를 하나의 AI 프롬프트로 해결하려 하지 말고, 세부 직무별 전문 에이전트로 분할하는 멀티 에이전트 파이프라인을 구축할 것.",
    "tags": [
      "#ZDNet",
      "#아이유노",
      "#멀티에이전트",
      "#업무자동화",
      "#에이전틱AI"
    ]
  },
  {
    "id": "news-008",
    "title": "[맥킨지 퀀텀블랙] The State of AI: Scaling GenAI and Driving Enterprise Value",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "consulting",
    "sourceOrg": "맥킨지 (McKinsey & Co.)",
    "reportType": "McKinsey Global Survey 정례 리포트",
    "source": "McKinsey QuantumBlack AI Practice",
    "originalUrl": "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    "time": "2026.09.10 (수)",
    "publishedDate": "2026.09.10",
    "timestamp": 1788998400000,
    "readTime": "5분 소요",
    "impactScore": 9.7,
    "impactTier": "엔터프라이즈 가치 창출",
    "views": 7450,
    "whyMatters": "정기적으로 생성형 AI를 활용하는 기업이 65%로 급증한 가운데, 조직원 교육과 워크플로우 재설계를 단행한 상위 10% 기업만이 두 자릿수 이상의 실질적 EBIT 개선을 창출.",
    "summary": "맥킨지 글로벌 서베이 결과 기업들의 생성형 AI 도입률이 폭증했습니다. 특히 인사·재무·기획 등 전사 업무 프로세스를 재설계한 선도 기업의 조직 변화를 집중 분석했습니다.",
    "fullSummary": [
      "마케팅·영업, IT 개발, 고객 운영 부문에서 가장 높은 비용 절감과 매출 증대 효과 발생.",
      "고성과 조직(AI High Performers)은 데이터 아키텍처 정비와 직무 재설계(Reskilling)에 예산의 40% 이상을 배정.",
      "단순한 외산 솔루션 도입보다 사내 고유 지식 자산을 정제해 파인튜닝한 프라이빗 파이프라인이 높은 ROI를 기록."
    ],
    "actionPlan": "전사 임직원을 대상으로 직무별 AI 활용 표준 커리큘럼을 제도화하고, 사내 핵심 지식의 정형 데이터베이스화를 서둘러야 함.",
    "tags": [
      "#맥킨지",
      "#McKinsey",
      "#QuantumBlack",
      "#TheStateOfAI",
      "#조직변화"
    ]
  },
  {
    "id": "news-009",
    "title": "[베인앤드컴퍼니] AI Leaders Are Extending Their Edge Through Agentic Orchestration",
    "category": "agents",
    "categoryLabel": "🤖 자율 에이전트",
    "badgeClass": "agents",
    "sourceType": "consulting",
    "sourceOrg": "베인앤드컴퍼니 (Bain)",
    "reportType": "Bain 글로벌 테크놀로지 연례 보고서",
    "source": "Bain & Company Global Tech Desk",
    "originalUrl": "https://www.bain.com/insights/topics/technology-report/",
    "time": "2026.09.11 (목)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789084800000,
    "readTime": "5분 소요",
    "impactScore": 9.7,
    "impactTier": "에이전트 오케스트레이션",
    "views": 6720,
    "whyMatters": "선도 기업들은 단순 코파일럿 배포를 넘어 사내 도메인 룰셋에 기반한 멀티 에이전트 오케스트레이션에 전폭 투자하여 후발 주자와의 생산성 격차를 2.5배 이상 확대.",
    "summary": "베인앤드컴퍼니 글로벌 리포트는 선도 기업들이 목표 중심의 자율 에이전트 군단을 실제 비즈니스 프로세스에 연동함으로써 확장된 경쟁 우위를 점하고 있음을 실증했습니다.",
    "fullSummary": [
      "자율 에이전트가 고객 지원, 재고 관리, 금융 대사 등 복합 업무를 종단 간 완결.",
      "에이전트 간 권한 위임(Delegation)과 에러 복구 메커니즘을 조기 안착시킨 기업의 운영 마진 대폭 개선.",
      "단일 모델 도입보다 여러 전문 에이전트가 협업하는 멀티 에이전트 아키텍처가 실질 ROI의 핵심으로 확인."
    ],
    "actionPlan": "사내 IT 팀은 독립된 단일 AI 봇 개발을 중단하고, 에이전트 간 통신 프로토콜과 권한 제어 프레임워크를 우선 수립할 것.",
    "tags": [
      "#베인앤드컴퍼니",
      "#Bain",
      "#글로벌테크",
      "#자율에이전트",
      "#경쟁우위"
    ]
  },
  {
    "id": "news-010",
    "title": "[한경 심층] “병원 AI, 도입 넘어 관리·정착 관건…데이터·거버넌스 체계 갖춰야”",
    "category": "industry",
    "categoryLabel": "🏭 산업별 현장 사례",
    "badgeClass": "industry",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 헬스케어·산업 AI 심층보도",
    "source": "한국경제신문 바이오·IT부",
    "originalUrl": "https://www.hankyung.com/article/2026091294821",
    "time": "2026.09.12 (금)",
    "publishedDate": "2026.09.12",
    "timestamp": 1789171200000,
    "readTime": "4분 소요",
    "impactScore": 9.4,
    "impactTier": "산업 현장 AX",
    "views": 5120,
    "whyMatters": "의료 및 병원 현장에서 솔루션 도입 자체보다 전자의무기록(EMR) 데이터 연동과 의료진의 신뢰도를 확보하는 내부 정착 관리 체계가 성공의 결정적 변수로 부상.",
    "summary": "국내 주요 대학병원 및 헬스케어 기관들이 AI 판독 및 환자 모니터링 시스템을 실무에 안착시키기 위해 거버넌스 가이드라인을 수립하고 현장 피드백 루프를 가동하고 있습니다.",
    "fullSummary": [
      "단순 솔루션 구매에 그친 병원은 활용률이 15% 미만인 반면, 진료 워크플로우에 자연스럽게 임베디드한 병원은 85% 이상 활용.",
      "의료 데이터 거버넌스와 환자 개인정보 보호 규제를 선제 준수한 클라우드 파이프라인 구축이 핵심.",
      "현장 의사 및 간호사 대상의 AI 결과 해석 교육과 설명 가능한 AI(XAI) 인터페이스 도입이 필수."
    ],
    "actionPlan": "규제가 엄격한 산업(의료, 금융, 제약) 기업은 AI 툴 도입 전 데이터 전처리 거버넌스와 현장 사용자 경험(UX) 통합 설계를 선행할 것.",
    "tags": [
      "#한국경제",
      "#병원AX",
      "#헬스케어AI",
      "#데이터거버넌스",
      "#산업현장"
    ]
  },
  {
    "id": "news-011",
    "title": "[한경 테크] 퓨리오사AI, 싱가포르 법인 설립… 차세대 NPU로 엔터프라이즈 추론 TCO 50% 절감",
    "category": "frontier",
    "categoryLabel": "⚡ 프론티어 기술",
    "badgeClass": "frontier",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 AI 반도체·인프라 분석",
    "source": "한국경제신문 테크부",
    "originalUrl": "https://www.hankyung.com/article/2026091196801",
    "time": "2026.09.11 (목)",
    "publishedDate": "2026.09.11",
    "timestamp": 1789084800000,
    "readTime": "4분 소요",
    "impactScore": 9.4,
    "impactTier": "추론 TCO 최적화",
    "views": 5410,
    "whyMatters": "엔터프라이즈 AI 추론 비용이 천문학적으로 치솟는 가운데, 고효율·저전력 NPU를 앞세운 국산 팹리스가 글로벌 하이퍼스케일러 데이터센터 수주전에 돌입.",
    "summary": "국내 대표 AI 팹리스 퓨리오사AI가 싱가포르에 글로벌 전진기지를 구축하고 아시아 태평양 엔터프라이즈 데이터센터 추론 가속기 시장 공략을 본격 개시했습니다.",
    "fullSummary": [
      "2세대 AI 반도체 '레니게이드(RNGD)'를 통해 기존 GPU 대비 전력 효율 3배 이상 개선 입증.",
      "엔터프라이즈 온프레미스 서버 도입 시 총소유비용(TCO)을 50% 절감할 수 있는 실증 레퍼런스 확보.",
      "싱가포르를 거점으로 동남아 금융·통신 대기업 데이터센터에 국산 NPU 탑재 추진."
    ],
    "actionPlan": "사내 프라이빗 AI 클라우드를 운영하는 기업은 고비용 GPU 단일 벤더 독점 구조를 탈피하고 차세대 NPU 기반의 멀티 칩 아키텍처 도입을 검토할 것.",
    "tags": [
      "#한국경제",
      "#퓨리오사AI",
      "#NPU",
      "#AI반도체",
      "#데이터센터"
    ]
  },
  {
    "id": "news-012",
    "title": "[딜로이트 글로벌] 38% of B2B Buyers Now Use Agentic AI in Enterprise Procurement",
    "category": "industry",
    "categoryLabel": "🏭 산업별 현장 사례",
    "badgeClass": "industry",
    "sourceType": "consulting",
    "sourceOrg": "딜로이트 (Deloitte)",
    "reportType": "Deloitte B2B 커머스 & 조달 리서치",
    "source": "Deloitte Digital Practice",
    "originalUrl": "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html",
    "time": "2026.09.12 (금)",
    "publishedDate": "2026.09.12",
    "timestamp": 1789171200000,
    "readTime": "4분 소요",
    "impactScore": 9.3,
    "impactTier": "B2B 커머스 AX",
    "views": 4890,
    "whyMatters": "글로벌 B2B 구매 담당자의 38%가 견적 비교, 공급사 스크리닝, 계약 조건 검토 과정에서 자율 AI 에이전트를 이미 실전 배치 중임을 실증.",
    "summary": "딜로이트 조사에 따르면 B2B 기업 간 거래에서도 소비재 못지않게 에이전트 기반의 자동 발주 및 조달 최적화 시스템이 표준으로 안착하고 있습니다.",
    "fullSummary": [
      "복잡한 부품 사양 비교와 납기 일정을 에이전트가 실시간 파싱하여 조달 소요 시간을 65% 단축.",
      "공급망 단절 위험이나 가격 변동성을 사전에 예측해 대체 벤더를 자동으로 추천하는 알고리즘 가동.",
      "B2B 판매 기업 역시 AI 에이전트가 읽고 협상할 수 있는 머신 리더블(Machine-readable) 카탈로그 구축 시급."
    ],
    "actionPlan": "B2B 공급망 및 영업 기업은 인간 바이어뿐만 아니라 '바이어 측 AI 에이전트'가 자사 제품 정보를 실시간 API로 탐색할 수 있도록 데이터 인터페이스를 개방할 것.",
    "tags": [
      "#딜로이트",
      "#B2B조달",
      "#에이전틱AI",
      "#공급망혁신",
      "#글로벌리포트"
    ]
  },
  {
    "id": "news-013",
    "title": "[글로벌 협약] EU AI Act 전면 발효와 빅테크 수장들의 엔터프라이즈 안전 가드레일 프레임워크",
    "category": "policy",
    "categoryLabel": "⚖️ 거버넌스·규제",
    "badgeClass": "policy",
    "sourceType": "media",
    "sourceOrg": "매일경제신문",
    "reportType": "매경 글로벌 AI 거버넌스 특종",
    "source": "매일경제신문 테크부",
    "originalUrl": "https://www.mk.co.kr/news/it/12151430",
    "time": "2026.09.13 (일)",
    "publishedDate": "2026.09.13",
    "timestamp": 1789257600000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "글로벌 거버넌스·안전",
    "views": 7120,
    "whyMatters": "샘 올트먼(오픈AI), 다리오 아모데이(앤스로픽), 데미스 허사비스(구글 딥마인드) 등 글로벌 AI 리더들이 안전 가드레일 표준 준수를 선언하며 EU AI Act 위반 시 천문학적 과징금 리스크 대응 촉구.",
    "summary": "EU 인공지능법의 단계별 시행에 발맞추어 엔터프라이즈 기업들이 고위험 AI 시스템에 대한 위험성 평가와 감사 추적성(Auditability)을 확보해야 하는 규제 준수 로드맵을 제시했습니다.",
    "fullSummary": [
      "인사 채용, 신용 평가, 중요 인프라 제어에 사용되는 고위험 AI 알고리즘의 데이터 투명성 입증 의무화.",
      "사내 생성형 AI 활용 시 저작권 침해 방지 필터링과 학습 데이터 출처 명시 프레임워크 구축 필수.",
      "글로벌 시장 진출 기업은 배포 전 서드파티 레드팀(Red Teaming) 보안 감사를 통과해야 함."
    ],
    "actionPlan": "엔터프라이즈 이사회는 사내 AI 컴플라이언스 전담 위원회를 가동하고, 배포된 모든 사내 모델의 입출력 로그 감사 파이프라인을 구축할 것.",
    "tags": [
      "#매일경제",
      "#EU_AI_Act",
      "#AI거버넌스",
      "#컴플라이언스",
      "#안전가드레일"
    ]
  }
]];

// Trending keywords list (Curated from McKinsey, BCG, Hankyung, FT, etc.)
const TRENDING_KEYWORDS = [
  "GPT-6 아스트라",
  "일하는 방식 혁신",
  "맥킨지 에이전틱코어",
  "한경 온프레미스sLLM",
  "BCG 피지컬AI",
  "베인 CEO서베이",
  "매경 스마트팩토리",
  "조선비즈 리스킬링",
  "FT 블랙웰울트라"
];

// Category metadata definitions (ordered by logical priority)
const CATEGORY_DEFINITIONS = [
  { 
    id: "enterprise", 
    label: "🏢 기업·엔터프라이즈 AX", 
    icon: "fa-building",
    desc: "글로벌 톱 컨설팅 펌과 정론 경제지가 분석한 엔터프라이즈 AI 전환, 온프레미스 sLLM 구축 및 전사 ROI 전략" 
  },
  { 
    id: "workplace", 
    label: "💼 일하는 방식 변화", 
    icon: "fa-briefcase",
    desc: "AI 에이전트 도입에 따른 업무 문화 혁신, 불필요 회의 45% 단축, 주 4일제 정착 및 대기업 직무 리스킬링" 
  },
  { 
    id: "frontier", 
    label: "⚡ 프론티어 기술", 
    icon: "fa-bolt-lightning",
    desc: "오픈AI 차세대 GPT-6 아스트라(Astra), 엔비디아 블랙웰 울트라 공급망 및 W3C 에이전트 표준 프로토콜" 
  },
  { 
    id: "agents", 
    label: "🤖 자율 에이전트", 
    icon: "fa-robot",
    desc: "단순 챗봇을 넘어 스스로 목표를 수립하고 실행하는 멀티 에이전트 오케스트레이션 및 포춘 500 CEO 서베이" 
  },
  { 
    id: "industry", 
    label: "🏭 산업별 현장 사례", 
    icon: "fa-industry",
    desc: "BCG X 제조 피지컬 AI, 현대차·삼성전자 양산 스마트팩토리, 글로벌 제약 바이오 신약 임상 다중 에이전트" 
  },
  { 
    id: "policy", 
    label: "⚖️ 거버넌스·규제", 
    icon: "fa-scale-balanced",
    desc: "EU AI 법안(AI Act) 전면 발효 대응, 엔터프라이즈 AI 리스크 관리 및 이사회 산하 감사 체계 구축 가이드" 
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
엄선 대상: 글로벌 Tier-1 전략 컨설팅(McKinsey, BCG, Bain, Big4) 및 정론 경제지(한경, 매경, FT, 로이터)
총 분석 리포트: ${NEWS_DATA.length}건

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ WEEKLY 1분 핵심 총평 (Executive Takeaways)
1. "자율 에이전트와 온프레미스 sLLM의 결합": 단순 검색 챗봇(RAG)의 한계를 넘어 실제 사내 ERP/DB와 연동되어 업무를 완결하는 '에이전틱 코어' 구축 기업이 압도적인 ROI와 영업이익률 개선을 증명하고 있습니다.
2. "일하는 방식의 패러다임 전환": MS Work Trend Index와 주요 대기업 조사 결과, 자율 에이전트를 도입한 팀은 불필요한 회의와 메일이 45% 줄고 직무 리스킬링을 통해 '1인 멀티 에이전트 오케스트레이터' 체제로 급선회하고 있습니다.
3. "프론티어 기술의 도약": 오픈AI의 차세대 'GPT-6 아스트라'와 엔비디아 '블랙웰 울트라'를 필두로 추론 지연 시간(Latency) 단축과 물리·OS 자율 제어 모델이 산업 전반을 강타하고 있습니다.
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
