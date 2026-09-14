# 🚀 AX 트렌드 리포트: 100% 무료 자동 배포 & 스케줄링 가이드

본 가이드는 **GitHub Actions + GitHub Pages**를 이용해 **서버 비용 0원(완전 무료)**으로 매주 월요일 아침 06시에 최신 AI/AX 뉴스를 자동 갱신하고 웹에 서비스하는 4단계 설정법을 안내합니다.

---

## 📌 전체 자동화 구조

1. **매주 월요일 아침 06:00 (한국 시간)**: GitHub Actions가 클라우드에서 깨어나 `update_news.py`를 실행합니다.
2. **뉴스 수집 & AI 요약**: 한국경제, 매일경제, 글로벌 컨설팅 피드에서 기사를 수집하고 Gemini AI로 3줄 요약 및 비즈니스 임팩트를 분석합니다.
3. **자동 배포**: 새로 가공된 `news.json`이 저장소로 자동 Push되며, GitHub Pages를 통해 전 세계에 즉시 실시간 반영됩니다.

---

## 🛠️ 4단계 세팅 가이드 (최초 1회만 진행)

### 1단계: GitHub 새 저장소(Repository) 만들기
1. [GitHub](https://github.com/)에 로그인 후 우측 상단의 **[+] → [New repository]**를 클릭합니다.
2. 저장소 이름(예: `ax-trend-report` 또는 `practice-main`)을 입력하고 **[Public]**으로 설정한 뒤 **[Create repository]**를 누릅니다.

---

### 2단계: 내 컴퓨터 코드를 GitHub에 업로드
VS Code나 터미널(PowerShell)에서 프로젝트 폴더 위치(`c:\Users\82107\Desktop\practice-main`)로 이동 후 아래 명령어를 순서대로 입력합니다:

```bash
# 1. git 초기화 (아직 안 되어 있는 경우)
git init

# 2. 모든 파일 추가 및 첫 커밋
git add .
git commit -m "feat: 클래식 모던 신문 톤앤매너 및 자동화 파이프라인 구축"

# 3. 기본 브랜치를 main으로 설정
git branch -M main

# 4. 내 GitHub 저장소 주소 연결 (YOUR_USERNAME과 REPO_NAME을 본인 것으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 5. GitHub에 업로드 (Push)
git push -u origin main
```

---

### 3단계: GitHub Pages 무료 웹사이트 켜기 (1분 완료)
1. 내 GitHub 저장소 페이지 상단의 **[Settings]** 탭을 클릭합니다.
2. 좌측 메뉴에서 **[Pages]**를 클릭합니다.
3. **Build and deployment** 섹션의 Source를 **[Deploy from a branch]**로 두고:
   - Branch: **`main`** 선택
   - Folder: **`/ (root)`** 선택
4. **[Save]** 버튼을 누릅니다.
5. 약 1~2분 후 페이지 상단에 **`https://YOUR_USERNAME.github.io/REPO_NAME/`** 형식의 전 세계 무료 접속 주소가 생성됩니다! 🎉

---

### 4단계: Gemini AI API 키 등록 (선택 사항, 무료)
> **안내**: API 키가 없어도 기본 규칙 기반 엔진이 작동하지만, Gemini API 키를 넣으면 기사의 핵심 분석과 액션 플랜이 훨씬 정교한 AI 요약으로 생성됩니다.

1. [Google AI Studio](https://aistudio.google.com/)에서 무료 API 키를 발급받습니다 (`Get API key`).
2. 내 GitHub 저장소의 **[Settings] → [Secrets and variables] → [Actions]**로 이동합니다.
3. **[New repository secret]** 녹색 버튼을 누릅니다.
   - Name: `GEMINI_API_KEY`
   - Secret: 발급받은 Gemini API 키 붙여넣기
4. **[Add secret]**을 클릭하여 저장합니다.

---

### 5단계: GitHub Actions 권한 확인 (최초 1회 확인)
GitHub Actions가 갱신된 `news.json`을 저장소에 다시 커밋할 수 있도록 쓰기 권한을 확인합니다:
1. 저장소 **[Settings] → [Actions] → [General]**로 이동합니다.
2. 페이지 아래쪽 **Workflow permissions** 섹션에서:
   - ✅ **Read and write permissions** 에 체크되어 있는지 확인 후 **[Save]**합니다.

---

## ⚡ 즉시 수동 업데이트 테스트 방법 (언제든 1초 만에 실행)

월요일 아침까지 기다릴 필요 없이 지금 당장 잘 돌아가는지 테스트해 볼 수 있습니다:

1. 내 저장소 상단의 **[Actions]** 탭을 누릅니다.
2. 좌측 워크플로우 목록에서 **[Weekly AX Trend Report Auto Update]**를 클릭합니다.
3. 우측의 **[Run workflow]** 버튼을 누르고 초록색 **[Run workflow]**를 클릭합니다.
4. 약 30초~1분 후 실행이 완료(녹색 체크 표시)되며, 내 웹사이트의 뉴스가 최신으로 자동 갱신됩니다!
