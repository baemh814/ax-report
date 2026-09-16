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
    "title": "[한경] 삼성, 외부 AI 전면 도입… \"일하는 방식 다 바꾼다\"",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 산업·테크 단독 기획",
    "source": "한국경제신문 테크부",
    "originalUrl": "https://www.hankyung.com/article/2026060965991",
    "time": "2026.06.09",
    "publishedDate": "2026.06.09",
    "timestamp": 1780997857000,
    "readTime": "5분 소요",
    "impactScore": 9.9,
    "impactTier": "대기업 Smart Workplace",
    "views": 9850,
    "whyMatters": "삼성전자 DX부문이 사내 보안망 통제를 거쳐 챗GPT, 제미나이 엔터프라이즈, 클로드 등 외부 생성형 AI를 임직원 업무에 전면 개방하고 사장단 AX 부트캠프 가동. 국내 최대 대기업이 사내 업무 툴을 넘어 일하는 방식과 조직 문화를 AI 중심으로 전면 재설계한 대표적 스마트 워크플레이스 이정표.",
    "summary": "삼성전자가 생성형 AI 전사 개방과 함께 경영진부터 실무진까지 일하는 방식을 AI 중심으로 근본 혁신하는 'AI 대전환'에 착수했습니다.",
    "fullSummary": [
      "임직원들이 번역, 코딩, 문서 작성, 데이터 분석 등 실무 전반에서 복수의 글로벌 프런티어 AI를 자유롭게 활용할 수 있는 사내 보안 환경 구축.",
      "사장단 및 주요 임원 대상의 'AX 부트캠프'를 정례화해 리더십 차원에서 AI 워크플로우 재설계를 직접 주도.",
      "단순 도구 사용을 넘어 임직원 평가와 핵심 과제에 AX 실행 여부를 연동하는 선제적 조직문화 혁신 단행."
    ],
    "actionPlan": "사내 보안 가드레일을 선제 정비하고, 임직원들이 보안 걱정 없이 실무에 AI를 즉시 결합할 수 있는 엔터프라이즈 통합 플랫폼을 배포할 것.",
    "tags": [
      "#한국경제",
      "#삼성전자",
      "#일하는방식",
      "#스마트워크플레이스",
      "#AX부트캠프"
    ]
  },
  {
    "id": "news-002",
    "title": "[ZDNet] 한국앤컴퍼니그룹, 기획부터 글로벌 협업까지… AI로 일하는 방식 바꾼다",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "media",
    "sourceOrg": "ZDNet Korea",
    "reportType": "ZDNet Korea 엔터프라이즈 심층",
    "source": "ZDNet Korea SW·엔터프라이즈팀",
    "originalUrl": "https://zdnet.co.kr/view/?no=20260901102217",
    "time": "2026.09.01",
    "publishedDate": "2026.09.01",
    "timestamp": 1788312137000,
    "readTime": "4분 소요",
    "impactScore": 9.7,
    "impactTier": "전사 워크플로우 임베디드",
    "views": 7920,
    "whyMatters": "한국앤컴퍼니그룹이 기획, 마케팅, 글로벌 공급망 협업 등 전사 코어 업무 프로세스에 생성형 AI 플랫폼을 직접 결합. 현업 실무진이 코딩 지식 없이도 자체 업무 봇을 만들어 워크플로우를 자동화하는 실전 Smart Workplace 모델 정착.",
    "summary": "한국앤컴퍼니그룹이 임직원 누구나 업무용 AI 에이전트를 제작·활용할 수 있는 전사 공통 플랫폼을 구축하고 일하는 방식의 데이터 기반 혁신을 실증했습니다.",
    "fullSummary": [
      "사내 지식 데이터베이스(RAG)와 결합된 프라이빗 AI 포털을 통해 보고서 초안 작성 및 해외 법인 협업 시간 60% 단축.",
      "현업 담당자가 본인 직무에 최적화된 노코드 AI 워크플로우를 직접 설계해 사내에 공유하는 지식 자산화 체계 구축.",
      "기존 그룹웨어 및 ERP와 자연스럽게 연결되는 싱글 사인온(SSO) 환경으로 전사 침투율 80% 달성."
    ],
    "actionPlan": "현업 부서별로 반복되는 고부하 업무를 선정해 현업 주도형(Citizen Developer) 사내 업무 봇 템플릿을 신속히 배포할 것.",
    "tags": [
      "#ZDNet",
      "#한국앤컴퍼니",
      "#스마트워크플레이스",
      "#업무자동화",
      "#글로벌협업"
    ]
  },
  {
    "id": "news-003",
    "title": "[베인앤드컴퍼니] AI 전환과 조직 변화 관리: \"두려움은 새로워도 해답은 명확하다\"",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "consulting",
    "sourceOrg": "베인앤드컴퍼니 (Bain)",
    "reportType": "Bain & Company 코리아 인사이트",
    "source": "Bain 글로벌 전략팀",
    "originalUrl": "https://www.bain.com/ko/insights/ai-transformation-the-fears-are-new-the-answer-isnt/",
    "time": "Bain 코리아 전략 인사이트",
    "publishedDate": "2025.10 (공식 리포트)",
    "timestamp": 1788500000000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "변화 관리 & 신뢰 구축",
    "views": 8450,
    "whyMatters": "\"자신을 대체할 로봇을 훈련시키고 있다고 두려워하는 구성원에게 혁신의 영감을 줄 수는 없다.\" 베인앤드컴퍼니가 기업 AX 도입 시 발생하는 임직원의 심리적 저항과 고용 불안을 극복하고, 매력적이고 쉬운 AI 경험을 통해 전사적 신뢰와 동기부여를 이끌어내는 변화 관리(Change Management) 해법 제시.",
    "summary": "AI 전환의 최대 난제인 사내 불안감을 해소하고 구성원들이 자발적으로 AI를 활용해 일하는 방식을 바꾸도록 유도하는 조직 문화 설계 원칙을 실증했습니다.",
    "fullSummary": [
      "AI 도입을 '인력 감축 수단'이 아닌 '구성원의 고부가가치 역량 증폭기'로 명확히 포지셔닝하는 리더십 커뮤니케이션 수립.",
      "실무자가 거부감 없이 접근할 수 있도록 일상 업무의 사소한 불편을 즉시 해결해 주는 직관적 UI/UX 우선 배포.",
      "AI 도구를 적극 활용해 성과를 낸 직원을 가시적으로 보상하고 실패를 용인하는 심리적 안전감(Psychological Safety) 제도화."
    ],
    "actionPlan": "경영진은 일방적 툴 배포에 앞서 'AI 도입에 따른 고용 안정 가이드라인'을 천명하고, 작은 성공 체험(Quick Win)을 제공하는 변화 관리 프로그램을 병행할 것.",
    "tags": [
      "#베인앤드컴퍼니",
      "#Bain",
      "#변화관리",
      "#조직문화",
      "#신뢰구축",
      "#일하는방식"
    ]
  },
  {
    "id": "news-004",
    "title": "[한경] 생산성 10배 시대… AI가 바꾼 인재의 조건과 직무 리스킬링",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 미래 인재 & 생산성 기획",
    "source": "한국경제신문 테크·HR부",
    "originalUrl": "https://www.hankyung.com/article/202608247923G",
    "time": "2026.09.03",
    "publishedDate": "2026.09.03",
    "timestamp": 1788476443000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "직무 리스킬링 & 인재 대전환",
    "views": 8840,
    "whyMatters": "단순 반복 업무를 AI가 대체하는 속도가 빨라지면서, 지식 근로자의 가치가 '직접 작업하는 능력'에서 'AI 에이전트를 지휘하고 결과를 비즈니스 맥락에서 판별하는 디렉팅 능력'으로 급변. 선도 기업들의 직무 리스킬링(Reskilling) 커리큘럼 심층 분석.",
    "summary": "AI 활용 능력에 따라 개인과 조직의 생산성 격차가 최대 10배까지 벌어지는 가운데, 기업들이 요구하는 핵심 인재상과 직무 재설계 전략을 조명했습니다.",
    "fullSummary": [
      "과거의 지식 암기와 단순 숙련도 대신 질문하는 역량(프롬프트 엔지니어링)과 비판적 검증(Validation) 역량이 핵심 인재 척도로 부상.",
      "주요 대기업들은 기존 직무 기술서(JD)를 전면 폐기하고 'AI 협업 오퍼레이터' 중심의 새로운 직무 체계로 개편 중.",
      "전사 임직원 대상 리스킬링 교육을 정례화한 기업이 그렇지 못한 기업 대비 프로젝트 리드타임을 평균 45% 단축."
    ],
    "actionPlan": "인사·교육 부서는 단순 툴 사용법 강의를 넘어, 직무별 과업 분해와 AI 위임·검증 역량을 측정하는 실전 리스킬링 체계를 제도화할 것.",
    "tags": [
      "#한국경제",
      "#인재의조건",
      "#생산성10배",
      "#직무리스킬링",
      "#일하는방식"
    ]
  },
  {
    "id": "news-005",
    "title": "[베인앤드컴퍼니] AI 혁명의 승자는 기술 아닌 조직… 구조 갖추고 학습 설계하라",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "consulting",
    "sourceOrg": "베인앤드컴퍼니 (Bain)",
    "reportType": "Bain & Company 新경영 기획",
    "source": "Bain 글로벌 테크놀로지 프랙티스",
    "originalUrl": "https://www.bain.com/ko/insights/winning-the-ai-revolution-is-about-organization/",
    "time": "Bain 新경영 공식 리포트",
    "publishedDate": "2025.10 (공식 리포트)",
    "timestamp": 1788500000000,
    "readTime": "5분 소요",
    "impactScore": 9.9,
    "impactTier": "조직 구조 & 학습 설계",
    "views": 9120,
    "whyMatters": "베인앤드컴퍼니 한국 오피스의 정밀 진단. AI 혁명의 최종 승자는 가장 비싼 최신 모델을 구매한 기업이 아니라, 에이전트와 협업하도록 조직 구조를 바꾸고 전사적 학습 루프를 설계한 기업임을 실증한 최고 수준의 경영 리포트.",
    "summary": "AI 도입 경쟁에서 앞서나가는 기업들은 모델의 파라미터 크기보다 조직 내 의사결정 권한 위임과 지속적인 학습 파이프라인 구축에 투자하고 있습니다.",
    "fullSummary": [
      "기술 인프라 투자에만 치중한 조직은 1년 내 PoC 정체기를 겪는 반면, 부서 간 장벽을 없애고 에이전트 중심 팀 구조를 짠 기업은 3배 빠른 ROI 회수.",
      "임직원이 일상 업무에서 얻은 AI 활용 프랙티스를 즉시 사내 데이터 자산으로 환류시키는 조직적 학습(Organizational Learning) 메커니즘 필수.",
      "경영진은 단순한 IT 예산 증액을 넘어 사업부별 KPI를 'AI 기반 생산성 증대'와 직결시켜야 함."
    ],
    "actionPlan": "사업 부문별 리더십은 부서 내 에이전트 협업 표준 프로세스를 설계하고, 업무 노하우가 사내 프롬프트 자산으로 자동 축적되도록 시스템을 정비할 것.",
    "tags": [
      "#베인앤드컴퍼니",
      "#Bain",
      "#조직구조",
      "#학습설계",
      "#엔터프라이즈AX"
    ]
  },
  {
    "id": "news-006",
    "title": "[PwC 코리아] 2026년의 AI: AI 네이티브 기업 (The AI-Native Enterprise)",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "consulting",
    "sourceOrg": "PwC (삼일회계법인)",
    "reportType": "PwC 글로벌 트렌드 한국어 보고서",
    "source": "PwC 코리아 디지털·AI 컨설팅팀",
    "originalUrl": "https://www.pwc.com/kr/ko/insights/global-trends/the-ai-native-enterprise.html",
    "time": "PwC 2026 글로벌 트렌드",
    "publishedDate": "2025.12 (글로벌 정례)",
    "timestamp": 1788600000000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "2026 AI 네이티브 실행 전략",
    "views": 8750,
    "whyMatters": "삼일PwC가 분석한 '2026년 AI 네이티브 기업으로의 진화 로드맵'. AI가 단순한 지원 부서의 실험을 넘어 전략(Strategy), 운영(Operations), 거버넌스(Governance), 성장(Growth)의 4대 핵심 축으로 자리 잡아야 전사적 실행 체계로 확장될 수 있음을 구체적 프레임워크로 제시.",
    "summary": "기업이 단편적 파일럿을 넘어 비즈니스 전반이 AI를 중심으로 구동되는 'AI 네이티브 엔터프라이즈'로 전환하기 위한 4대 실행 영역을 제시했습니다.",
    "fullSummary": [
      "전략: AI를 통한 신규 수익 창출과 차별화된 고객 가치 제안(Value Proposition) 재정립.",
      "운영: 복합 업무를 종단 간 수행하는 에이전틱 워크플로우와 코어 기간계 시스템(ERP·CRM) 통합.",
      "거버넌스 & 성장: 사내 데이터 보안, 규제 준수, 그리고 인적 자본의 지속 성장을 아우르는 통합 책임 체계 수립."
    ],
    "actionPlan": "경영기획 및 DX 총괄 부서는 자사의 현 AX 성숙도를 전략·운영·거버넌스 4대 축으로 자체 진단하고 2026 실행 로드맵을 확정할 것.",
    "tags": [
      "#PwC",
      "#삼일PwC",
      "#AI네이티브",
      "#글로벌트렌드",
      "#실행로드맵"
    ]
  },
  {
    "id": "news-007",
    "title": "[한경 심층] \"'AI 도입했다' 자족하면 안 돼… 'AI가 움직이는 회사'만 생존\" [2026 한경 AX 서밋]",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "한국경제신문",
    "reportType": "한경 AX 서밋 특별 취재",
    "source": "한경 특별취재팀",
    "originalUrl": "https://www.hankyung.com/article/202607068136g",
    "time": "2026.07.07",
    "publishedDate": "2026.07.07",
    "timestamp": 1783383381000,
    "readTime": "5분 소요",
    "impactScore": 9.9,
    "impactTier": "실행형 AX 전략",
    "views": 9540,
    "whyMatters": "국내 최고 권위의 '한경 AX 서밋'에서 대기업 CEO 및 테크 리더들이 일제히 '실행형 AX'의 시급성 역설. 단순 PoC나 툴 도입에 자족하는 기업은 도태되고, 기업의 비즈니스 프로세스 자체가 AI 중심으로 구동되는 'AI 네이티브 기업'만이 살아남는다는 강력한 경영 인사이트.",
    "summary": "2026 한경 AX 서밋에서 주요 기업 총수들과 IT 전문가들이 'AI를 곁다리로 쓰는 기업'과 'AI가 코어 엔진이 된 기업'의 생존 격차를 경고했습니다.",
    "fullSummary": [
      "기술 도입 자체보다 비즈니스 모델과 운영 프로세스에 AI를 유기적으로 내재화하는 실행력이 승패를 결정.",
      "실질적인 원가 절감과 매출 기여도를 입증하는 정량적 ROI 지표를 중심으로 AI 투자 우선순위 재편 필수.",
      "현업 실무자의 저항을 극복하고 변화 관리를 이끌어내는 C-Level의 강력한 거버넌스 리더십 강조."
    ],
    "actionPlan": "사내 모든 AI 과제에 대해 '실질 비즈니스 임팩트(EBITDA 기여도)'를 기준으로 재감사를 실시하고 핵심 파이프라인으로 자원을 집중할 것.",
    "tags": [
      "#한국경제",
      "#한경AX서밋",
      "#실행형AX",
      "#비즈니스임팩트",
      "#CEO아젠다"
    ]
  },
  {
    "id": "news-008",
    "title": "[ZDNet] SK AX, 머서와 기업 운영방식 'AI 네이티브' 재설계 맞손",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "ZDNet Korea",
    "reportType": "ZDNet Korea 글로벌 파트너십 분석",
    "source": "ZDNet Korea 엔터프라이즈팀",
    "originalUrl": "https://zdnet.co.kr/view/?no=20260608112344",
    "time": "2026.06.08",
    "publishedDate": "2026.06.08",
    "timestamp": 1780887840000,
    "readTime": "4분 소요",
    "impactScore": 9.7,
    "impactTier": "AI 네이티브 조직 재설계",
    "views": 7650,
    "whyMatters": "SK AX가 세계 최대 인사·조직 컨설팅 기업 머서(Mercer)와 전격 제휴하여, 기업의 조직 구조, 업무 분장, 성과 평가 시스템을 AI 중심으로 근본 재설계하는 'AI+휴먼' 결합 오퍼레이팅 모델 구축. 기술과 인적 자본을 통합한 최고 수준의 전사 AX 방법론 제시.",
    "summary": "SK AX와 머서가 기업 운영 체계 전반을 'AI 네이티브(AI-Native)'로 전환하기 위한 글로벌 표준 엔터프라이즈 컨설팅 프레임워크를 공동 개발합니다.",
    "fullSummary": [
      "단순 IT 시스템 개발을 넘어 조직 내 의사결정 구조와 부서 간 협업 체계를 AI 에이전트와 인간이 공존하는 형태로 재설계.",
      "AI 도입 후 잉여 시간이 발생한 임직원을 고부가가치 기획 및 고객 접점 직무로 재배치하는 최적 인력 플래닝 제공.",
      "글로벌 엔터프라이즈 고객사에 기술과 HR을 결합한 통합 AX 턴키 컨설팅 패키지 공급 추진."
    ],
    "actionPlan": "AI 프로젝트 기획 시 기술 도입 팀과 인사·조직 팀이 공동 TF를 구성하여, 업무 자동화 이후의 직무 재배치 계획을 함께 수립할 것.",
    "tags": [
      "#ZDNet",
      "#SKAX",
      "#머서",
      "#Mercer",
      "#AI네이티브",
      "#조직재설계"
    ]
  },
  {
    "id": "news-009",
    "title": "[ZDNet] SK AX도 오픈AI 동맹 합류… IT서비스 업계, '실행형 AX' 경쟁 가속",
    "category": "enterprise",
    "categoryLabel": "🏢 기업·엔터프라이즈 AX",
    "badgeClass": "enterprise",
    "sourceType": "media",
    "sourceOrg": "ZDNet Korea",
    "reportType": "ZDNet Korea IT서비스 심층",
    "source": "ZDNet Korea SW팀",
    "originalUrl": "https://zdnet.co.kr/view/?no=20260514142104",
    "time": "2026.05.14",
    "publishedDate": "2026.05.14",
    "timestamp": 1778736064000,
    "readTime": "4분 소요",
    "impactScore": 9.6,
    "impactTier": "에이전틱 AI 동맹",
    "views": 7380,
    "whyMatters": "국내 대형 IT서비스 기업들이 오픈AI 등 글로벌 프런티어 파트너십을 체결하고, 국내 대기업들의 사내 ERP, 공급망, 금융 시스템과 결합되는 맞춤형 '에이전틱 AI 솔루션' 시장 선점 경쟁 돌입.",
    "summary": "SK AX가 오픈AI와의 공식 파트너십을 바탕으로 국내 주요 산업군에 특화된 B2B 실행형 AI 에이전트 플랫폼 구축을 전면 가속화합니다.",
    "fullSummary": [
      "글로벌 최상위 파운데이션 모델과 기업 내부의 보안 데이터베이스를 초저지연으로 결합하는 엔터프라이즈 커넥터 구축.",
      "단순 질의응답을 넘어 시스템 간 데이터 대사 및 트랜잭션을 자율 완결하는 에이전트 파이프라인 상용화.",
      "국내 제조·화학·금융 대기업 고객사의 핵심 비즈니스 로직에 특화된 프라이빗 sLLM 및 에이전트 오케스트레이션 패키지 제공."
    ],
    "actionPlan": "사내 IT 거버넌스는 글로벌 빅테크 모델과의 보안 연결을 지원하는 엔터프라이즈 파트너십 채널을 확보할 것.",
    "tags": [
      "#ZDNet",
      "#SKAX",
      "#오픈AI",
      "#실행형AX",
      "#IT서비스",
      "#에이전틱AI"
    ]
  },
  {
    "id": "news-010",
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
    "whyMatters": "KT가 독자 모델 폐쇄주의를 넘어 국내 대표 포털(다음), 이커머스(무신사), 부동산(직방) 등 6000만 실사용자를 보유한 버티컬 플랫폼들과 연합 전선을 구축. 일상 및 비즈니스 접점에 직접 침투하는 실전 엔터프라이즈 AX 모델 실증.",
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
    "id": "news-011",
    "title": "[딜로이트] AI 에이전트는 일터에 어떻게 공존하는가: 4대 미래 시나리오와 조직 거버넌스 (How will AI agents fit into the human workplace?)",
    "category": "workplace",
    "categoryLabel": "💼 일하는 방식 변화",
    "badgeClass": "workplace",
    "sourceType": "consulting",
    "sourceOrg": "딜로이트 (Deloitte)",
    "reportType": "Deloitte Insights 미래 일터 심층 시나리오",
    "source": "Deloitte Center for Integrated Research & Human Capital",
    "originalUrl": "https://www.deloitte.com/us/en/insights/topics/technology-management/ai-agents-human-workplace.html",
    "time": "2026.09.10 (Deloitte Insights)",
    "publishedDate": "2026.09.10",
    "timestamp": 1789030800000,
    "impactScore": 9.8,
    "impactTier": "전략 로드맵",
    "whyMatters": "2028년 포춘 500대 기업의 평균 AI 에이전트 보유 수가 15만 개에 달할 것으로 전망되는 가운데, 딜로이트는 에이전트를 단순히 많이 배포하는 속도 경쟁보다 '동료 머신'과 '에이전틱 인프라' 등 일터 결합 방식에 맞춘 책임 거버넌스와 신뢰 구축이 기업의 승패를 결정짓는다고 강조.",
    "summary": "딜로이트 리서치에 따르면 멀티 에이전트 확산기에는 에이전트 생산물 폭증으로 인한 인간 검토자의 '형식적 승인(고무도장)' 리스크를 차단하고, 최종 맥락 판단·공감 등 인간 고유의 역량을 중심으로 업무 프로세스를 재설계해야 합니다.",
    "fullSummary": [
      "[15만 에이전트 시대와 4대 시나리오] 포춘 500대 기업 평균 15만 개 에이전트 도입 예상 속, 에이전트를 동료(Colleague)로 대우하는 모델, 인프라 자동화 레이어로 관리하는 모델 등 4가지 일터 미래 시나리오 제시.",
      "['고무도장(Rubber Stamp)' 함정과 인지 과부하] 에이전트 산출물이 기하급수적으로 늘어날 때 인간의 품질 검토가 형식적 결재로 전락하는 거버넌스 붕괴를 경고하며 실질적 감시 체계 구축 촉구.",
      "[인간 고유 가치의 재정의] 정형화된 프로세스를 에이전트가 흡수할수록 맥락 판단력, 윤리적 의사결정, 감성적 공감 등 인간의 소프트 스킬이 기업의 최고 차별화 자산으로 부상."
    ],
    "actionPlan": "전사 에이전트 배포에 앞서 승인 프로세스의 '형식적 승인(고무도장)' 함정을 막는 책임 거버넌스를 수립하고, 중간 관리자를 '에이전트 오케스트레이터 및 품질 감사자'로 재교육할 것.",
    "tags": [
      "#딜로이트",
      "#Deloitte",
      "#미래일터",
      "#AIAgent",
      "#일하는방식혁신",
      "#거버넌스"
    ]
  },
  {
    "id": "news-012",
    "title": "[한경 단독] '앙숙' AI 수장들 입 모아 \"개발 속도 늦춰야\"… 자율 AI 통제 불능 우려에 전격 속도조절론",
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
    "id": "news-013",
    "title": "[구글 딥마인드] 차세대 실시간 멀티모달 자율 에이전트 '프로젝트 아스트라(Project Astra)' 기술 백서",
    "category": "frontier",
    "categoryLabel": "⚡ 프론티어 기술",
    "badgeClass": "frontier",
    "sourceType": "consulting",
    "sourceOrg": "구글 딥마인드 (Google DeepMind)",
    "reportType": "Google DeepMind 리서치 기술 백서",
    "source": "Google DeepMind Research Lab",
    "originalUrl": "https://deepmind.google/technologies/project-astra/",
    "time": "Google DeepMind 공식 백서",
    "publishedDate": "2025 (공식 기술 백서)",
    "timestamp": 1789344000000,
    "readTime": "5분 소요",
    "impactScore": 9.8,
    "impactTier": "실시간 비전 에이전트",
    "views": 8920,
    "whyMatters": "단순 텍스트 대화형 챗봇을 완전히 탈피해 연속 비디오 프레임과 실시간 오디오를 초저지연으로 처리하며 화면 공유와 복합 도구(Tool Use)를 자율 오케스트레이션하는 차세대 범용 어시스턴트 아키텍처 공개. 현장 엔지니어링 및 스마트 팩토리의 물리적 AX를 혁신할 핵심 기반.",
    "summary": "구글 딥마인드가 공간 인지(Spatial Processing)와 스크린 실시간 해석 역량을 결합한 범용 AI 어시스턴트 프로토타입 '프로젝트 아스트라'의 실전 적용 기술 백서를 발표했습니다.",
    "fullSummary": [
      "실시간 카메라 스트림 및 화면 공유 환경에서 시각적 맥락을 지연 없이 파악해 실시간 코드 디버깅 및 시스템 운영 가이드 제공.",
      "인간의 음성 질문과 환경 변화를 동시에 인지하여 즉각적인 도구 호출(Tool Calling) 및 과업 완결.",
      "모바일 디바이스와 엔터프라이즈 스마트 글래스 등에 탑재되어 현장 작업자의 물리적 AX(피지컬 AI)를 혁신할 핵심 기반 구축."
    ],
    "actionPlan": "현장 엔지니어링 및 생산 공정을 보유한 기업은 텍스트 챗봇에 머물지 말고, 실시간 비디오 스트림을 해석하는 비전-언어 에이전트(Project Astra 류)의 파일럿 도입을 준비할 것.",
    "tags": [
      "#구글딥마인드",
      "#ProjectAstra",
      "#멀티모달",
      "#실시간비전에이전트",
      "#범용AI"
    ]
  }
];

// Trending keywords list (Curated from Samsung, SK, Deloitte, Bain, PwC, Hankyung, ZDNet)
const TRENDING_KEYWORDS = [
  '전체', '딜로이트 미래 일터', '삼성전자 AX', '베인 변화관리', 'PwC AI 네이티브',
  '스마트 워크플레이스', 'SK 실리콘밸리', 'KT 얼라이언스', '구글 아스트라', '에이전틱 AI'
];
// Category metadata definitions (ordered by logical priority)
const CATEGORY_DEFINITIONS = [
  { 
    id: "enterprise", 
    label: "🏢 기업·엔터프라이즈 AX", 
    icon: "fa-building",
    desc: "KT 플랫폼 연합, 메가존 일본 진출, PwC AI 네이티브 엔터프라이즈 등 실전 B2B 기업 전환 및 ROI 전략" 
  },
  { 
    id: "workplace", 
    label: "💼 일하는 방식 변화", 
    icon: "fa-briefcase",
    desc: "딜로이트 AI 에이전트 일터 4대 시나리오, 삼성전자·한국앤컴퍼니 스마트 워크플레이스 등 지식 근로자 업무 방식 혁신" 
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

  renderWeeklyCover();
  renderTicker();
  renderMetrics();
  renderSourceFilterCounts();
  renderTrendingKeywords();
  renderCategoryTabs();
  renderNewsGrid();
  setupEventListeners();
}


// Dynamically enforce latest Weekly Cover headline & summary (bypasses browser HTML caching)
function renderWeeklyCover() {
  const headlineEl = document.getElementById("leadHeadline");
  const summaryEl = document.getElementById("leadSummary");
  if (headlineEl) {
    headlineEl.innerHTML = `"도구의 도입을 넘어 <span class=\"ink-accent\">'일하는 방식의 재설계'</span>로: 대기업 Smart Workplace와 실행형 AX 전면화"`;
  }
  if (summaryEl) {
    summaryEl.innerHTML = `<strong>삼성전자·SK·한국앤컴퍼니</strong>와 <strong>딜로이트·베인·PwC·한국경제·ZDNet</strong>이 공통 제시한 2026 기업 AI의 핵심 분기점: 단순 챗봇 툴을 사내에 배포하던 실험 단계를 완전히 끝내고, 전 임직원이 생성형 AI와 에이전트를 실무에 직접 투입하는 <strong>'스마트 워크플레이스'</strong> 구축과 조직 구조 자체를 AI 중심으로 뜯어고치는 <strong>'AI 네이티브(AI-Native) 오퍼레이팅 모델'</strong>로의 체질 전환이 본격화되고 있습니다.`;
  }
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
    
    const activeClass = state.currentCategory === cat.id ? "active" : "";
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
      updateCategoryTabsActive();
      renderNewsGrid();
    });
  });
}

function updateCategoryTabsActive() {
  if (!DOM.categoryTabs) return;
  DOM.categoryTabs.querySelectorAll(".category-tab-btn").forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat === state.currentCategory) {
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

  // Category filter
  if (state.currentCategory !== "all") {
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
  } else if (state.sortBy === "impact") {
    list.sort((a, b) => b.impactScore - a.impactScore);
  }

  return list;
}

// Helper: Render single news card HTML
function renderCardHtml(item) {
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
        </div>

        <div class="card-action-btns">
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
      // Don't trigger if clicked on external link
      if (e.target.closest(".card-ext-link-btn")) return;
      const id = card.getAttribute("data-id");
      openDetailModal(id);
    });
  });
}

function updateFilterStatusBar(count) {
  const isFiltering = 
    state.searchQuery.trim() !== "" || 
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

  if (state.searchQuery.trim()) {
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
// 6. Detail Modal Logic
// ==========================================================================
function openDetailModal(id) {
  const news = NEWS_DATA.find(item => item.id === id);
  if (!news) return;

  state.selectedNews = news;

  const isConsulting = news.sourceType === "consulting";
  const sourceIcon = isConsulting ? "fa-building-columns" : "fa-newspaper";
  const sourceCategory = isConsulting ? "글로벌 톱티어 전략 컨설팅 리포트" : "역사·규모 공신력 검증 경제 정론지";

  DOM.modalCategory.textContent = news.categoryLabel;
  DOM.modalCategory.className = `modal-category ${news.badgeClass}`;
  DOM.modalDate.innerHTML = `<span class="modal-date-chip"><i class="fa-regular fa-calendar-days"></i> 발행일자: <strong>${news.time}</strong></span>`;
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
엄선 대상: 정론 경제·IT 유력지 (한국경제, ZDNet Korea) 및 글로벌 씽크탱크·컨설팅 (Bain & Company, PwC, Deloitte, Google DeepMind)
총 분석 리포트: ${NEWS_DATA.length}건

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ WEEKLY 1분 핵심 총평 (Executive Takeaways)
1. "도구의 도입에서 '일하는 방식의 재설계'로": 삼성전자 DX부문의 외부 생성형 AI 전면 도입과 사장단 AX 부트캠프, 한국앤컴퍼니의 전사 업무 봇 임베디드, 베인(Bain)의 AI 전환 변화관리 및 두려움 극복처럼 대기업들이 일회성 파일럿을 끝내고 '스마트 워크플레이스' 구축에 사활을 걸고 있습니다.
2. "AI 네이티브 조직과 직무 리스킬링": SK AX와 글로벌 1위 HR 컨설팅 머서의 조직 모델 재설계, 2026 한경 AX 서밋 제언처럼 근로자의 역할을 '작업자'에서 'AI 오케스트레이터'로 리스킬링하는 조직이 10배의 생산성 격차를 만듭니다.
3. "엔터프라이즈 에이전틱 B2B와 프런티어 멀티모달": 베인·PwC가 실증한 에이전틱 오케스트레이션과 AI 네이티브 엔터프라이즈, 구글 딥마인드(Project Astra)의 차세대 실시간 공간 멀티모달, 빅테크 수장들의 안전 가드레일이 결합되어 실질적 비즈니스 임팩트와 거버넌스가 기업 AI의 양대 축으로 안착했습니다.
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

  // Reset filter status button
  DOM.resetFilterBtn.addEventListener("click", resetAllFilters);
  DOM.emptyResetBtn.addEventListener("click", resetAllFilters);

  // Detail Modal Controls
  if (DOM.closeDetailModalBtn) DOM.closeDetailModalBtn.addEventListener("click", closeDetailModal);
  DOM.detailModal?.querySelector(".modal-backdrop")?.addEventListener("click", closeDetailModal);

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
