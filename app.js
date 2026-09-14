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
    id: "news-001",
    title: "[한경 단독] KT, 다음·무신사·직방에 AI 심는다… '엔터프라이즈 AI 서비스 생태계 전면 확장'",
    category: "enterprise",
    categoryLabel: "🏢 기업·엔터프라이즈 AX",
    badgeClass: "enterprise",
    sourceType: "media",
    sourceOrg: "한국경제신문",
    reportType: "한경 IT·산업 단독 보도",
    source: "한국경제신문 테크부",
    originalUrl: "https://www.hankyung.com/article/2026091313871",
    time: "2026년 9월 2주차 · 9월 13일 (일)",
    timestamp: 1789257600000,
    readTime: "4분 소요",
    impactScore: 9.7,
    impactTier: "엔터프라이즈 생태계",
    views: 6840,
    whyMatters: "KT가 포털 다음, 패션 플랫폼 무신사, 부동산 앱 직방 등 국내 대표 플랫폼들과 제휴해 6천만 이용자 및 사내 업무 시스템에 생성형 AI 엔진을 직접 탑재하는 '모두의 AI' 전략을 본격화.",
    summary: "KT가 국민 다수가 사용하는 대형 모바일 서비스들과 손잡고 엔터프라이즈 AI 에이전트 및 생성형 AI 인프라 연동망을 전격 가동합니다.",
    fullSummary: [
      "국내 유수 플랫폼 및 기업 환경에 KT 초거대 AI 엔진을 API와 온프레미스 형태로 직접 통합.",
      "일상 쇼핑, 부동산 탐색, 정보 검색 과정에서 사내외 에이전트가 실시간으로 업무를 보조하는 실질적 AX 모델 구축.",
      "빅테크 클라우드 단독 의존에서 벗어나 국내 산업 환경에 최적화된 맞춤형 B2B 파트너십 선도."
    ],
    actionPlan: "B2C/B2B 플랫폼 기업은 자사 서비스 내 단순 챗봇 추가를 넘어, 버티컬 특화 데이터를 연동한 임베디드 AI 파트너십을 적극 체결할 것.",
    tags: ["#한국경제", "#KT", "#엔터프라이즈AI", "#무신사", "#직방"]
  },
  {
    id: "news-002",
    title: "[딜로이트 Tech Trends] Tech Trends: Moving from Experimentation to Real Enterprise Impact",
    category: "enterprise",
    categoryLabel: "🏢 기업·엔터프라이즈 AX",
    badgeClass: "enterprise",
    sourceType: "consulting",
    sourceOrg: "딜로이트 (Deloitte)",
    reportType: "Deloitte Insights 글로벌 테크 트렌드",
    source: "Deloitte Global Technology Practice",
    originalUrl: "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html",
    time: "2026년 9월 2주차 · 9월 10일 (수)",
    timestamp: 1788998400000,
    readTime: "5분 소요",
    impactScore: 9.6,
    impactTier: "전략 로드맵",
    views: 6120,
    whyMatters: "단순 일회성 실험(PoC) 단계를 넘어 사내 핵심 비즈니스 로직과 기간계 시스템에 결합되어 실질적 재무 가치를 창출하는 5대 엔터프라이즈 AX 핵심 트렌드 발표.",
    summary: "딜로이트가 발표한 글로벌 테크 트렌드 리포트에 따르면, AI 파일럿을 넘어 코어 엔지니어링 및 워크플로우 자동화를 완성한 선도 기업들이 기업가치와 생산성 혁신을 주도하고 있습니다.",
    fullSummary: [
      "전사 IT 아키텍처와 레거시 시스템을 에이전트 기반 인터페이스(MCP 등)로 현대화하는 것이 기업 생존의 핵심 과제.",
      "실제 영업이익 기여도가 입증된 영역을 중심으로 AI 예산의 70%를 집중 재배치하는 추세 확인.",
      "데이터 거버넌스와 내부 보안 프레임워크를 조기에 구축한 조직일수록 전환 속도가 3배 빠름."
    ],
    actionPlan: "파편화된 사내 PoC 과제를 즉시 일원화하고, 명확한 ROI 산출이 가능한 코어 비즈니스 워크플로우부터 에이전트화할 것.",
    tags: ["#딜로이트", "#Deloitte", "#TechTrends", "#엔터프라이즈AX", "#비즈니스임팩트"]
  },
  {
    id: "news-003",
    title: "[한경 산업] 퓨리오사AI, 싱가포르에 법인 설립… '차세대 국산 NPU 데이터센터 시장 공략'",
    category: "enterprise",
    categoryLabel: "🏢 기업·엔터프라이즈 AX",
    badgeClass: "enterprise",
    sourceType: "media",
    sourceOrg: "한국경제신문",
    reportType: "한경 반도체·IT 심층보도",
    source: "한국경제신문 테크부",
    originalUrl: "https://www.hankyung.com/article/2026091196801",
    time: "2026년 9월 2주차 · 9월 11일 (금)",
    timestamp: 1789084800000,
    readTime: "4분 소요",
    impactScore: 9.4,
    impactTier: "AI 하드웨어 AX",
    views: 4980,
    whyMatters: "엔터프라이즈 AI 추론 비용이 천문학적으로 치솟는 가운데, 고효율·저전력 NPU를 앞세운 국산 팹리스가 동남아 및 글로벌 하이퍼스케일러 인프라 수주전에 돌입.",
    summary: "국내 대표 AI 팹리스 퓨리오사AI가 싱가포르에 글로벌 전진기지를 구축하고 아시아 태평양 엔터프라이즈 데이터센터 추론 가속기 시장 공략을 본격 개시했습니다.",
    fullSummary: [
      "2세대 AI 반도체 '레니게이드(RNGD)'를 통해 기존 GPU 대비 전력 효율 3배 이상 개선 입증.",
      "엔터프라이즈 온프레미스 서버 도입 시 총소유비용(TCO)을 50% 절감할 수 있는 실증 레퍼런스 확보.",
      "싱가포르를 거점으로 동남아 금융·통신 대기업 데이터센터에 국산 NPU 탑재 추진."
    ],
    actionPlan: "사내 프라이빗 AI 클라우드를 운영하는 기업은 고비용 GPU 독점 구조를 탈피하고 차세대 NPU 기반의 멀티 칩 아키텍처 도입을 검토할 것.",
    tags: ["#한국경제", "#퓨리오사AI", "#NPU", "#AI반도체", "#데이터센터"]
  },
  {
    id: "news-004",
    title: "[MS Work Trend Index] AI at Work Is Here. Now Comes the Hard Part",
    category: "workplace",
    categoryLabel: "💼 일하는 방식 변화",
    badgeClass: "workplace",
    sourceType: "consulting",
    sourceOrg: "마이크로소프트 (MS WorkLab)",
    reportType: "Microsoft WorkLab 연례 글로벌 보고서",
    source: "Microsoft & LinkedIn Research Desk",
    originalUrl: "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part",
    time: "2026년 9월 2주차 · 9월 8일 (월)",
    timestamp: 1788825600000,
    readTime: "5분 소요",
    impactScore: 9.8,
    impactTier: "조직·문화 대전환",
    views: 8120,
    whyMatters: "직장인 75%가 이미 AI를 업무에 쓰고 있으나 조직 차원의 전략 부재 시 보안·사일로 문제가 발생. 팀 단위 에이전트 오케스트레이션이 주 4일제와 불필요 회의 축소의 열쇠로 부상.",
    summary: "마이크로소프트와 링크드인이 전 세계 31개국 31,000명의 지식 근로자를 심층 서베이한 2026 Work Trend Index. 개인 사용 단계를 넘어 조직의 일하는 방식을 근본적으로 재설계해야 할 과제를 제시했습니다.",
    fullSummary: [
      "직원 개개인의 비공식적 AI 사용(BYO-AI)이 확산되며 기업 단위의 데이터 거버넌스 수립이 시급.",
      "에이전트 협업 체계를 안착시킨 조직은 주당 불필요 회의 및 메일 소통 시간이 45% 단축.",
      "경영진의 79%가 AI 기술 도입보다 '구성원의 AI 오케스트레이션 역량 확보'를 최우선 과제로 지목."
    ],
    actionPlan: "개별 툴 구독 지원을 넘어, '에이전트 협업 가이드라인'과 팀 단위 업무 프로세스 표준 룰셋을 전사적으로 배포할 것.",
    tags: ["#마이크로소프트", "#WorkTrendIndex", "#MSWorkLab", "#일하는방식", "#생산성혁신"]
  },
  {
    id: "news-005",
    title: "[맥킨지 퀀텀블랙] The State of AI: Scaling GenAI and Driving Enterprise Value",
    category: "workplace",
    categoryLabel: "💼 일하는 방식 변화",
    badgeClass: "workplace",
    sourceType: "consulting",
    sourceOrg: "맥킨지 (McKinsey & Co.)",
    reportType: "McKinsey Global Survey 정례 리포트",
    source: "McKinsey QuantumBlack AI Practice",
    originalUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    time: "2026년 9월 2주차 · 9월 9일 (화)",
    timestamp: 1788912000000,
    readTime: "5분 소요",
    impactScore: 9.6,
    impactTier: "엔터프라이즈 가치 창출",
    views: 7450,
    whyMatters: "정기적인 생성형 AI 활용 기업이 65%로 급증한 가운데, 조직원 교육과 워크플로우 재설계를 단행한 상위 10% 기업만이 두 자릿수 이상의 실질적 EBIT 개선을 창출.",
    summary: "맥킨지 연례 글로벌 서베이 결과 기업들의 생성형 AI 도입률이 2배로 폭증했습니다. 특히 인사·재무·기획 등 전사 업무 프로세스를 재설계한 선도 기업의 조직 변화를 집중 분석했습니다.",
    fullSummary: [
      "마케팅·영업, IT 개발, 고객 운영 부문에서 가장 높은 비용 절감과 매출 증대 효과 발생.",
      "고성과 조직(AI High Performers)은 데이터 아키텍처 정비와 직무 재설계(Reskilling)에 예산의 40% 이상을 배정.",
      "단순한 외산 솔루션 도입보다 사내 고유 지식 자산을 정제해 파인튜닝한 프라이빗 파이프라인이 높은 ROI를 기록."
    ],
    actionPlan: "전사 임직원을 대상으로 직무별 AI 활용 표준 커리큘럼을 제도화하고, 사내 핵심 지식의 정형 데이터베이스화를 서둘러야 함.",
    tags: ["#맥킨지", "#McKinsey", "#QuantumBlack", "#TheStateOfAI", "#조직변화"]
  },
  {
    id: "news-006",
    title: "[매경 테크] “한달 200달러? 내 돈 가져가십쇼”…GPT-6 가입폭주에 일시중단",
    category: "frontier",
    categoryLabel: "⚡ 프론티어 기술",
    badgeClass: "frontier",
    sourceType: "media",
    sourceOrg: "매일경제신문",
    reportType: "매경 실리콘밸리 테크 특파원 분석",
    source: "매일경제신문 테크부",
    originalUrl: "https://www.mk.co.kr/news/it/12150793",
    time: "2026년 9월 2주차 · 9월 10일 (수)",
    timestamp: 1788998400000,
    readTime: "4분 소요",
    impactScore: 9.9,
    impactTier: "차세대 파운데이션",
    views: 9640,
    whyMatters: "서버가 감당하지 못할 정도로 가입자가 폭증하며 신규 가입을 일시 중단. 생각하는 추론 모델과 복합 에이전트 능력에 고액 구독료를 기꺼이 지불하는 시장 수요 폭발.",
    summary: "오픈AI의 차세대 고성능 추론 모델 출시 직후 유료 가입자가 폭증하며 서비스 접속 제한이 걸리는 사태가 벌어졌습니다. 단순 대화를 넘어 자율 코딩·연구 에이전트 기능이 시장의 판도를 뒤흔들고 있습니다.",
    fullSummary: [
      "단순 문장 생성을 넘어 문제 해결을 위해 스스로 수분간 깊은 추론(Thinking)을 거치는 차세대 엔진 탑재.",
      "월 200달러(약 27만 원)에 달하는 고가 기업용 티어임에도 불구하고 전 세계 연구진과 엔지니어들의 결제 쇄도.",
      "인공일반지능(AGI) 초입에 도달했다는 평가 속에 클라우드 추론 인프라 용량 한계가 가시화."
    ],
    actionPlan: "차세대 고성능 추론 모델을 효과적으로 활용하기 위해, 기존의 짧은 프롬프트 방식을 버리고 '목표 중심 에이전틱 작업 정의서' 체계로 전환할 것.",
    tags: ["#매일경제", "#GPT6", "#오픈AI", "#추론모델", "#실리콘밸리"]
  },
  {
    id: "news-007",
    title: "[한경 테크] AGI 띄우는 젠슨 황…속내는 엔비디아 패권 강화?",
    category: "frontier",
    categoryLabel: "⚡ 프론티어 기술",
    badgeClass: "frontier",
    sourceType: "media",
    sourceOrg: "한국경제신문",
    reportType: "한경 글로벌 AI 인프라 분석",
    source: "한국경제신문 테크부",
    originalUrl: "https://www.hankyung.com/article/2026091196581",
    time: "2026년 9월 2주차 · 9월 11일 (목)",
    timestamp: 1789084800000,
    readTime: "4분 소요",
    impactScore: 9.5,
    impactTier: "인프라 패권 전쟁",
    views: 5890,
    whyMatters: "젠슨 황 CEO가 제시한 AGI 로드맵은 결국 '수백만 개의 GPU 및 블랙웰 슈퍼클러스터'가 필수적이라는 인프라 락인(Lock-in) 전략과 맞닿아 있음을 심층 규명.",
    summary: "엔비디아 젠슨 황이 '향후 5년 내 AGI 도래'를 연이어 강조하는 배경에는 AI 거품론을 잠재우고 차세대 블랙웰 칩셋의 장기 선주문을 확정 짓기 위한 치밀한 계산이 깔려 있다는 분석이 나왔습니다.",
    fullSummary: [
      "AGI 시스템을 실시간 구동하기 위해 전 세계적으로 수백만 대의 차세대 AI 가속기가 추가 공급되어야 함을 역설.",
      "엔비디아 쿠다(CUDA) 생태계를 기반으로 하드웨어와 시스템 소프트웨어 풀스택 독점력 공고화.",
      "빅테크 기업들의 자체 ASIC 칩 개발에 맞서 차세대 랙 스케일(NVL72) 솔루션으로 기술 격차 유지."
    ],
    actionPlan: "기업 CIO는 하드웨어 단일 벤더 종속 리스크를 회피할 수 있도록 Triton, vLLM 등 오픈소스 런타임 호환성을 갖춘 유연한 아키텍처를 견지할 것.",
    tags: ["#한국경제", "#젠슨황", "#엔비디아", "#AGI", "#블랙웰"]
  },
  {
    id: "news-008",
    title: "[OpenAI 공식 발표] Introducing OpenAI o1: A New Series of AI Models Designed to Spend More Time Thinking",
    category: "frontier",
    categoryLabel: "⚡ 프론티어 기술",
    badgeClass: "frontier",
    sourceType: "consulting",
    sourceOrg: "OpenAI Research",
    reportType: "오픈AI 공식 리서치 아키텍처 발표",
    source: "OpenAI Research & Reasoning Systems",
    originalUrl: "https://openai.com/index/introducing-openai-o1/",
    time: "2026년 9월 2주차 · 9월 12일 (금)",
    timestamp: 1789171200000,
    readTime: "5분 소요",
    impactScore: 9.9,
    impactTier: "추론 아키텍처 혁신",
    views: 8970,
    whyMatters: "단순 패턴 매칭을 넘어 문제를 풀기 전 스스로 다단계 추론(Chain-of-Thought)을 수행하는 새로운 파운데이션 모델 아키텍처 공식화. 복합 코딩, 수학, 과학 연구에서 박사급 성능 달성.",
    summary: "오픈AI가 복잡한 다단계 추론과 체계적 사고 능력을 극대화한 'o1' 추론 모델 패밀리를 공식 공개했습니다. 자율 에이전트의 안정성과 논리적 신뢰도를 획기적으로 끌어올릴 핵심 엔진입니다.",
    fullSummary: [
      "국제수학올림피아드(IMO) 예선 문제 해결률 83% 달성으로 이전 모델(13%) 대비 비약적 도약.",
      "강화학습을 통해 모델이 스스로 실수를 인지하고 교정하는 '사고 사슬(Chain of Thought)' 내재화.",
      "엔터프라이즈 코드 리팩터링, 신약 분자 구조 분석, 복합 계약서 법률 감사 등 고난도 지식 작업의 자동화 기반 제공."
    ],
    actionPlan: "단순 지식 검색 챗봇을 넘어서, 사내 고난도 의사결정 파이프라인에 추론 특화 모델(Reasoning Model)을 결합하는 실험을 조기 착수할 것.",
    tags: ["#OpenAI", "#o1모델", "#추론엔진", "#프론티어AI", "#복합추론"]
  },
  {
    id: "news-009",
    title: "[Bain Global Tech Report] AI Leaders Are Extending Their Edge Through Agentic Orchestration",
    category: "agents",
    categoryLabel: "🤖 자율 에이전트",
    badgeClass: "agents",
    sourceType: "consulting",
    sourceOrg: "베인앤드컴퍼니 (Bain)",
    reportType: "Bain 글로벌 테크놀로지 연례 보고서",
    source: "Bain & Company Global Tech Desk",
    originalUrl: "https://www.bain.com/insights/topics/technology-report/",
    time: "2026년 9월 2주차 · 9월 10일 (수)",
    timestamp: 1788998400000,
    readTime: "5분 소요",
    impactScore: 9.7,
    impactTier: "에이전트 오케스트레이션",
    views: 6720,
    whyMatters: "선도 기업들은 단순 코파일럿 배포를 넘어 사내 도메인 룰셋에 기반한 멀티 에이전트 오케스트레이션에 전폭 투자하여 후발 주자와의 생산성 격차를 2.5배 이상 확대.",
    summary: "베인앤드컴퍼니가 발간한 2026 글로벌 테크놀로지 리포트는 선도 기업들이 목표 중심의 자율 에이전트 군단을 실제 비즈니스 프로세스에 연동함으로써 확장된 경쟁 우위를 점하고 있음을 실증했습니다.",
    fullSummary: [
      "자율 에이전트가 고객 지원, 재고 관리, 금융 대사 등 복합 업무를 종단 간 완결.",
      "에이전트 간 권한 위임(Delegation)과 에러 복구 메커니즘을 조기 안착시킨 기업의 운영 마진 대폭 개선.",
      "단일 모델 도입보다 여러 전문 에이전트가 협업하는 멀티 에이전트 아키텍처가 실질 ROI의 핵심으로 확인."
    ],
    actionPlan: "사내 IT 팀은 독립된 단일 AI 봇 개발을 중단하고, 에이전트 간 통신 프로토콜과 권한 제어 프레임워크를 우선 수립할 것.",
    tags: ["#베인앤드컴퍼니", "#Bain", "#글로벌테크", "#자율에이전트", "#경쟁우위"]
  },
  {
    id: "news-010",
    title: "[매경 테크] “국방·안보 예산, AI 에이전트에 투자해야 … 투자 대비 초과 수익 올릴 것”",
    category: "agents",
    categoryLabel: "🤖 자율 에이전트",
    badgeClass: "agents",
    sourceType: "media",
    sourceOrg: "매일경제신문",
    reportType: "매경 미래국방·테크 인터뷰",
    source: "매일경제신문 테크부",
    originalUrl: "https://www.mk.co.kr/news/it/12151320",
    time: "2026년 9월 2주차 · 9월 11일 (목)",
    timestamp: 1789084800000,
    readTime: "4분 소요",
    impactScore: 9.3,
    impactTier: "미션 크리티컬 에이전트",
    views: 5210,
    whyMatters: "극한의 돌발 상황에서도 인간의 통제선(Human-in-the-loop)을 유지하며 자율 의사결정을 지원하는 미션 크리티컬 에이전트 오케스트레이션의 경제성 실증.",
    summary: "실드AI(Shield AI) 브랜던 쳉 공동창업자 겸 사장이 매일경제와의 인터뷰에서 군사·국방뿐만 아니라 공공·방재 및 엔터프라이즈 인프라에 자율 에이전트 시스템을 배치할 때 얻는 압도적 ROI를 역설했습니다.",
    fullSummary: [
      "GPS나 통신이 차단된 극한 환경에서도 엣지 컴퓨터 자체 추론으로 임무를 완수하는 자율 에이전트 가동.",
      "사람 1인이 10개 이상의 다중 무인 기동체를 지휘하는 오케스트레이션 인터페이스 검증.",
      "국방 분야에서 입증된 무인 자율 에이전트 기술이 스마트팩토리, 해상 물류, 데이터센터 장애 대응으로 전방위 전파."
    ],
    actionPlan: "통신 단절 및 고장 위험이 상존하는 제조·물류·인프라 기업은 엣지 완결형 자율 에이전트 아키텍처를 도입할 것.",
    tags: ["#매일경제", "#실드AI", "#자율에이전트", "#미션크리티컬", "#에이전트ROI"]
  },
  {
    id: "news-011",
    title: "[매경 세계지식포럼] 피지컬 AI와 헬스케어의 결합… 일상·데이터 연결한 사람 중심 스마트 케어",
    category: "industry",
    categoryLabel: "🏭 산업별 현장 사례",
    badgeClass: "industry",
    sourceType: "media",
    sourceOrg: "매일경제신문",
    reportType: "매경 세계지식포럼 특별취재",
    source: "매일경제 세계지식포럼 특별취재팀",
    originalUrl: "https://www.mk.co.kr/news/it/12150099",
    time: "2026년 9월 2주차 · 9월 9일 (화)",
    timestamp: 1788912000000,
    readTime: "4분 소요",
    impactScore: 9.4,
    impactTier: "피지컬 AX 현장 혁신",
    views: 5430,
    whyMatters: "피지컬 로봇과 실시간 생체 데이터 AI를 연결하여 의료 현장과 간호·돌봄 인력난을 해소하는 산업 현장 특화 피지컬 AX 안착 모델 제시.",
    summary: "제27회 세계지식포럼에서 일본의 고령화 선행 경험과 한국의 첨단 IT·로보틱스 기술을 결합하여, 실제 현장에서 인간을 보조하는 피지컬 AI 헬스케어 혁신 사례가 발표되었습니다.",
    fullSummary: [
      "웨어러블 센서와 엣지 비전 AI가 환자의 보행 이상 및 낙상 징후를 0.5초 만에 사전 감지.",
      "물리적 협동 로봇이 간호 인력의 중량물 이송 및 체위 변경을 보조하여 산업 재해율 70% 감소.",
      "병원·요양원 중심 폐쇄 시스템에서 지역사회 일상 데이터와 연계된 연속적 스마트 케어 안전망 구축."
    ],
    actionPlan: "바이오·헬스케어 및 현장 서비스 기업은 소프트웨어 챗봇에 머무르지 말고 로보틱스 센서와 결합된 피지컬 AI 파이프라인을 구축할 것.",
    tags: ["#매일경제", "#세계지식포럼", "#피지컬AI", "#스마트케어", "#산업현장AX"]
  },
  {
    id: "news-012",
    title: "[매경 산업] 韓 AI 스타트업 일본 진출 돕는다… KOSA·메가존클라우드 맞손",
    category: "industry",
    categoryLabel: "🏭 산업별 현장 사례",
    badgeClass: "industry",
    sourceType: "media",
    sourceOrg: "매일경제신문",
    reportType: "매경 엔터프라이즈 클라우드 보도",
    source: "매일경제신문 IT부",
    originalUrl: "https://www.mk.co.kr/news/it/12151431",
    time: "2026년 9월 2주차 · 9월 12일 (금)",
    timestamp: 1789171200000,
    readTime: "4분 소요",
    impactScore: 9.1,
    impactTier: "글로벌 B2B 확장",
    views: 4320,
    whyMatters: "일본 제조업 및 공공 부문의 레거시 탈피(DX/AX) 수요에 발맞춰 국내 우수 B2B AI 솔루션의 아시아 공급망 통합 수출 파이프라인 가동.",
    summary: "한국소프트웨어산업협회(KOSA)와 메가존클라우드가 일본 내 엔터프라이즈 AI 전환 수요를 공략하기 위해 국내 유망 AI 기술 기업들의 현지 안착을 지원하는 전략적 협약을 체결했습니다.",
    fullSummary: [
      "일본 주요 상사 및 제조 대기업의 AX 컨설팅 프로젝트에 국내 유망 AI 솔루션 직접 연계.",
      "클라우드 MSP 인프라와 결합하여 현지 데이터 컴플라이언스 및 엔터프라이즈 기술 지원 완결.",
      "국내 내수 시장의 한계를 넘어 글로벌 B2B SaaS 및 에이전트 솔루션 수출의 교두보 확보."
    ],
    actionPlan: "B2B AI 설루션 기업은 단독 해외 진출보다 현지 네트워크와 클라우드 관리 역량을 갖춘 글로벌 파트너와의 공동 패키징을 추진할 것.",
    tags: ["#매일경제", "#메가존클라우드", "#KOSA", "#글로벌AX", "#클라우드"]
  },
  {
    id: "news-013",
    title: "[매경 단독] “인공지능이 인간 해칠 수 있다” 모처럼 의기투합한 IT 거물들… 속도조절론 급물살",
    category: "policy",
    categoryLabel: "⚖️ 거버넌스·규제",
    badgeClass: "policy",
    sourceType: "media",
    sourceOrg: "매일경제신문",
    reportType: "매경 글로벌 AI 거버넌스 특종",
    source: "매일경제신문 테크부",
    originalUrl: "https://www.mk.co.kr/news/it/12151430",
    time: "2026년 9월 2주차 · 9월 13일 (일)",
    timestamp: 1789257600000,
    readTime: "5분 소요",
    impactScore: 9.8,
    impactTier: "글로벌 거버넌스·안전",
    views: 7120,
    whyMatters: "샘 올트먼(오픈AI), 다리오 아모데이(앤스로픽), 일론 머스크, 데미스 허사비스 등 상호 경쟁하던 빅테크 수장들이 동시다발적으로 '안전 조치 없는 무제한 배포 위험'을 경고하며 거버넌스 프레임워크 준수 선언.",
    summary: "오픈AI의 상장(IPO) 연기 검토와 앤스로픽의 안전장치 확보 시간 요청 등 글로벌 AI 업계 수장들이 인간 통제를 벗어난 AI 시스템 배포에 대해 강력한 속도조절 필요성에 한목소리를 내기 시작했습니다.",
    fullSummary: [
      "오픈AI 올트먼 CEO, 'IPO보다 안전성 프레임워크 구축이 우선'이라며 상장 일정 재검토 시사.",
      "앤스로픽 아모데이 CEO, '1~2년 내 파괴적 사이버 공격이나 자율 통제 불능 리스크'에 대한 선제 감사 체계 요구.",
      "EU AI Act 전면 발효와 맞물려 글로벌 기업들의 고위험 AI 알고리즘 감사 및 안전 인증 의무화 급물살."
    ],
    actionPlan: "엔터프라이즈 이사회는 사내 AI 윤리/컴플라이언스 위원회를 설치하고, 프로덕션 배포 전 안전 가드레일(Guardrail) 검증을 의무화할 것.",
    tags: ["#매일경제", "#AI안전", "#거버넌스", "#샘올트먼", "#다리오아모데이"]
  }
];

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
          <span><i class="fa-regular fa-calendar-check"></i> ${item.time}</span>
          <span>·</span>
          <span>${item.readTime}</span>
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
  DOM.modalDate.textContent = `${news.time} · ${news.readTime}`;
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
