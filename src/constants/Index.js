// 이미지는 public/images 에 있으므로 문자열 경로로 참조한다.
const IMG = "/images/works";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "workflow",
    url: "#skill",
  },
  {
    title: "career",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const intorText = {
  title: "vibe coder",
  desc: ["AI로 아이디어를", "서비스로 만드는", "9년차 바이브 코더"],
};

// Skill 섹션 = AI 워크플로우 (기획 → 디자인 → 개발 → 배포)
export const skillText = [
  {
    title: "기획 · 구조 설계 — Claude",
    desc: "대화로 요구사항을 정리하고 화면 구조와 사용자 플로우를 설계합니다. 9년간 쌓은 화면 감각으로 무엇을 만들지부터 명확하게 잡습니다.",
  },
  {
    title: "UI 디자인 — Claude · Figma",
    desc: "화면 시안과 디자인 시스템을 AI로 빠르게 잡고, 퍼블리셔의 눈으로 간격·타이포·색을 다듬어 실제 서비스 품질로 끌어올립니다.",
  },
  {
    title: "개발 · 구현 — Claude Code",
    desc: "Claude Code를 활용해 반응형·웹표준을 지키는 화면을 빠르게 구현합니다. AI의 결과물을 직접 검수·수정해 완성도를 책임집니다.",
  },
  {
    title: "배포 · 운영 — Vercel · Netlify",
    desc: "Git으로 버전을 관리하고 원클릭으로 배포합니다. 아이디어를 다음 날 라이브 링크로 보여줄 수 있는 것 — 그게 저의 방식입니다.",
  },
];

// Skill 섹션 상단 헤드라인 + 성과 뱃지 (원본 #ai 섹션)
export const aiHead = {
  sub: "“AI를 쓴다”가 아니라 “AI로 완성한다”. 9년간 쌓은 화면 감각으로 AI의 결과물을 검수·수정해, 실제 배포 가능한 품질까지 끌어올립니다.",
  proof: [
    "🔁 레거시 화면 → AI 리디자인 3종",
    "⏱️ 아이디어 → 라이브 링크 D+1",
    "✅ 이 포트폴리오도 Claude Code로 제작",
  ],
};

// Site 섹션 = 스킬 & 경력 (원본 #skills 섹션)
export const skillBars = [
  { label: "AI 활용 개발 (Claude Code)", percent: 90 },
  { label: "프롬프트 설계 · AI 디자인 (Claude)", percent: 85 },
  { label: "HTML · CSS / SCSS · 웹표준", percent: 95 },
  { label: "JavaScript · React · Vue", percent: 80 },
];

export const toolChips = [
  "Claude Code",
  "Claude (디자인 · 기획)",
  "프롬프트 엔지니어링",
  "HTML5",
  "CSS3 / SCSS",
  "JavaScript (ES6)",
  "React.js",
  "Vue.js (Vuex · Router)",
  "Figma",
  "워드프레스",
  "Git · Vercel · Netlify",
];

export const careerTimeline = [
  {
    year: "NOW",
    role: "바이브 코더 · AI 활용 개발",
    desc: "Claude Code로 코딩하고 Claude로 디자인·기획. 홈페이지·앱을 기획부터 개발·배포까지 혼자 완성합니다. (이 포트폴리오도 그렇게 만들었습니다.)",
  },
  {
    year: "GROWTH",
    role: "React · Vue 전환 & 기업 시스템",
    desc: "AIP Migration 등 React/SCSS 전환, 삼성DS 일정동기화, LG하이프라자 메일시스템 등 기업 시스템 퍼블리싱 100% 전담.",
  },
  {
    year: "START",
    role: "대학 · 교육기관 웹퍼블리싱",
    desc: "한양사이버대, 숭실사이버대, 연세대 등 UI/UX 개발. 재직 당시 웹접근성 인증 획득 — 탄탄한 화면 기본기의 출발점.",
  },
];

// Port 섹션(가로 스크롤) = 대표 프로젝트
export const portText = [
  {
    num: "01",
    title: "관리자 사이트 표준 리디자인 (2026)",
    desc: "기획 · UI 디자인 · 개발을 모두 맡아 Claude Code·Claude로 만든 다른 디자인 버전입니다. 회사관리 대시보드와 데이터 테이블을 바이브 코딩으로 구현했습니다.",
    img: `${IMG}/admin_common.png`,
    code: "https://gw.ableintra.net/Publishing/2026/02.%EA%B4%80%EB%A6%AC%EC%9E%90%EC%82%AC%EC%9D%B4%ED%8A%B8_%EB%8B%A4%EB%A5%B8%EB%94%94%EC%9E%90%EC%9D%B8/Views/Company.html",
    view: "https://gw.ableintra.net/Publishing/2026/02.%EA%B4%80%EB%A6%AC%EC%9E%90%EC%82%AC%EC%9D%B4%ED%8A%B8_%EB%8B%A4%EB%A5%B8%EB%94%94%EC%9E%90%EC%9D%B8/Views/Company.html",
    name: "🤖 Vibe Coded · 기업 시스템",
  },
  {
    num: "02",
    title: "AIP 문서반출 포털 리디자인 (2026)",
    desc: "기획 · UI 디자인 · 개발 전 과정을 Claude Code·Claude로 진행한 바이브 코딩 작업입니다. 카드형 대시보드로 문서반출 포털을 리디자인했습니다.",
    img: `${IMG}/doc_export_new.png`,
    code: "https://gw.ableintra.net/Publishing/2026/05.문서반출_다른디자인/DocumentExport_new/views/index.html",
    view: "https://gw.ableintra.net/Publishing/2026/05.문서반출_다른디자인/DocumentExport_new/views/index.html",
    name: "🤖 Vibe Coded · 문서보안",
  },
  {
    num: "03",
    title: "공유파일 관리 리디자인 (2026)",
    desc: "기획 · UI 디자인 · 개발을 모두 맡은 바이브 코딩 작업입니다. 트리 탐색과 민감도 등급 UI를 Claude Code·Claude로 새로 디자인했습니다.",
    img: `${IMG}/file_manager_new.png`,
    code: "https://gw.ableintra.net/Publishing/2026/04.%EA%B3%B5%EC%9C%A0%ED%8C%8C%EC%9D%BC_%EB%8B%A4%EB%A5%B8%EB%94%94%EC%9E%90%EC%9D%B8/file-manager.html",
    view: "https://gw.ableintra.net/Publishing/2026/04.%EA%B3%B5%EC%9C%A0%ED%8C%8C%EC%9D%BC_%EB%8B%A4%EB%A5%B8%EB%94%94%EC%9E%90%EC%9D%B8/file-manager.html",
    name: "🤖 Vibe Coded · 문서보안",
  },
  {
    num: "04",
    title: "한양사이버대학교 · 대학원",
    desc: "UI/UX 개발과 웹퍼블리싱을 담당했습니다. HTML·CSS·jQuery 기반 반응형·웹표준으로 제작했으며 재직 당시 웹접근성 인증을 획득했습니다.",
    img: `${IMG}/hycu.png`,
    code: "https://www.hycu.ac.kr/user/index.do",
    view: "https://www.hycu.ac.kr/user/index.do",
    name: "대학 · 교육",
  },
  {
    num: "05",
    title: "숭실사이버대학교",
    desc: "UI/UX 개발과 웹퍼블리싱을 담당했습니다. HTML·CSS·jQuery 기반 반응형·웹표준으로 제작했으며 웹접근성 인증을 획득한 사이트입니다.",
    img: `${IMG}/kcu.png`,
    code: "https://www.kcu.ac/?sso=ok",
    view: "https://www.kcu.ac/?sso=ok",
    name: "대학 · 교육",
  },
  {
    num: "06",
    title: "연세대학교 · 학과 홈페이지",
    desc: "UI/UX 개발과 웹퍼블리싱을 담당했습니다. 한양대미래인재교육원 등 8개 사이트를 반응형·웹표준으로 제작했습니다.",
    img: `${IMG}/yonsei.png`,
    code: "https://portal.yonsei.ac.kr/ui/index.html",
    view: "https://portal.yonsei.ac.kr/ui/index.html",
    name: "대학 · 교육",
  },
  {
    num: "07",
    title: "LG하이프라자 메일시스템",
    desc: "웹퍼블리싱 100%를 전담했습니다. 대용량첨부·알림 UI를 포함한 메일 시스템으로, 문서반출·공유파일 시스템까지 함께 작업했습니다.",
    img: `${IMG}/groupware_mail.png`,
    code: "https://gw.ableintra.net/Publishing/portal/Views/email/main_topLine.html",
    view: "https://gw.ableintra.net/Publishing/portal/Views/email/main_topLine.html",
    name: "그룹웨어 · 포털",
  },
  {
    num: "08",
    title: "그룹웨어 포털 (메일 · 결재 · 근태)",
    desc: "전 모듈 웹퍼블리싱을 전담했습니다. 전자결재·일정·자원예약을 아우르는 그룹웨어 포털의 모든 화면을 제작했습니다.",
    img: `${IMG}/groupware_portal.png`,
    code: "https://gw.ableintra.net/Publishing/portal/Views/index.html",
    view: "https://gw.ableintra.net/Publishing/portal/Views/index.html",
    name: "그룹웨어 · 포털",
  },
  {
    num: "09",
    title: "한독하모니 포털사이트",
    desc: "웹퍼블리싱 100%를 전담했습니다. 위젯형 메인과 배너 슬라이드로 구성된 포털이며 한독제안 시스템까지 포함해 작업했습니다.",
    img: `${IMG}/harmony.png`,
    code: "https://gw.ableintra.net/Publishing/front_harmony/Views/Home/main.html",
    view: "https://gw.ableintra.net/Publishing/front_harmony/Views/Home/main.html",
    name: "그룹웨어 · 포털",
  },
  {
    num: "10",
    title: "삼성DS 일정동기화 1 · 2차",
    desc: "웹퍼블리싱 100%를 전담했습니다. 월간·주간·일간 캘린더 UI를 HTML·CSS·jQuery로 구현했습니다.",
    img: `${IMG}/samsung_schedule.png`,
    code: "https://gw.ableintra.net/Publishing/Samsung_schedule/Views/work.schedule/main-monthly.html",
    view: "https://gw.ableintra.net/Publishing/Samsung_schedule/Views/work.schedule/main-monthly.html",
    name: "기업 시스템",
  },
  {
    num: "11",
    title: "우리은행 공유파일 · 관리자",
    desc: "사용자·관리자 화면의 웹퍼블리싱 100%를 전담했습니다. 트리 탐색과 파일관리 UI를 구현했습니다.",
    img: `${IMG}/woori_file.png`,
    code: "https://gw.ableintra.net/Publishing/2025/08.우리은행/우리은행%20공유파일/Views/FileManage/Index.html",
    view: "https://gw.ableintra.net/Publishing/2025/08.우리은행/우리은행%20공유파일/Views/FileManage/Index.html",
    name: "기업 시스템",
  },
  {
    num: "12",
    title: "신한라이프 조직도 · 관리자",
    desc: "웹퍼블리싱 100%를 전담했습니다. 3단 조직도와 멀티 선택 UI, 채팅·일정예약 연동 UI를 구현했습니다.",
    img: `${IMG}/shinhan_org.png`,
    code: "https://gw.ableintra.net/Publishing/2025/12.신한라이프/신한라이프_조직도2/View/Default/index.html",
    view: "https://gw.ableintra.net/Publishing/2025/12.신한라이프/신한라이프_조직도2/View/Default/index.html",
    name: "기업 시스템",
  },
  {
    num: "13",
    title: "삼성 도면반출 시스템",
    desc: "문서반출 전 화면의 웹퍼블리싱 100%를 전담했습니다. 결재·반출 프로세스 UI를 구현했습니다.",
    img: `${IMG}/samsung_doc.png`,
    code: "https://gw.ableintra.net/Publishing/labelPolicy-Samsung2024/Page/index.html",
    view: "https://gw.ableintra.net/Publishing/labelPolicy-Samsung2024/Page/index.html",
    name: "문서보안 · 반출",
  },
  {
    num: "14",
    title: "Zillion Document",
    desc: "사용자·관리자 화면의 웹퍼블리싱 100%를 전담했습니다. 문서 트리와 민감도 등급 UI를 구현했습니다.",
    img: `${IMG}/zillion_doc.png`,
    code: "https://gw.ableintra.net/Publishing/2025/10.Zillion%20Document/25문서_사용자/Views/index.html",
    view: "https://gw.ableintra.net/Publishing/2025/10.Zillion%20Document/25문서_사용자/Views/index.html",
    name: "문서보안 · 반출",
  },
  {
    num: "15",
    title: "MIP 관리자 사이트",
    desc: "웹퍼블리싱 100%를 전담했습니다. 차트 대시보드와 관리자 UI, AIP 권한·로그 관리 화면을 구현했습니다.",
    img: `${IMG}/mip_admin.png`,
    code: "https://gw.ableintra.net/Publishing/2025/03.MIP%EA%B4%80%EB%A6%AC%EC%9E%90/Views/Dashboard.html",
    view: "https://gw.ableintra.net/Publishing/2025/03.MIP%EA%B4%80%EB%A6%AC%EC%9E%90/Views/Dashboard.html",
    name: "문서보안 · 반출",
  },
  {
    num: "16",
    title: "AIP Migration (레거시 → React)",
    desc: "웹퍼블리싱 100%를 담당했습니다. 레이블 정책·반출 대시보드를 HTML·SCSS·React.js로 전환한 마이그레이션 작업입니다.",
    img: `${IMG}/doc_dashboard.png`,
    code: "https://gw.ableintra.net/Publishing/labelPolicy/samsung/View/dashboard.html",
    view: "https://gw.ableintra.net/Publishing/labelPolicy/samsung/View/dashboard.html",
    name: "React · 마이그레이션",
  },
  {
    num: "17",
    title: "React 공유파일 (Vercel 배포)",
    desc: "설계·개발 100%로 진행했습니다. 실서비스 UI를 React로 재구현했으며 컴포넌트 설계와 상태 관리를 직접 맡았습니다.",
    img: `${IMG}/react_sharefile.png`,
    code: "https://shared-file-rust.vercel.app/",
    view: "https://shared-file-rust.vercel.app/",
    name: "React · 개인",
  },
  {
    num: "18",
    title: "React 조직도 (Vercel 배포)",
    desc: "설계·개발 100%로 진행했습니다. 트리 구조와 멀티 선택 UI를 구현했고 API 연동·컴포넌트 설계를 담당했습니다.",
    img: `${IMG}/react_org.png`,
    code: "https://organization-chart-chi.vercel.app/",
    view: "https://organization-chart-chi.vercel.app/",
    name: "React · 개인",
  },
  {
    num: "19",
    title: "메가박스 · 가비아 클론",
    desc: "웹퍼블리싱 100%로 진행한 클론·리뉴얼 스터디입니다. 반응형·웹표준을 준수해 제작했습니다.",
    img: `${IMG}/megabox.png`,
    code: "https://www.megabox.co.kr/",
    view: "https://www.megabox.co.kr/",
    name: "개인 · 스터디",
  },
  {
    num: "20",
    title: "유튜브 클론 (YouTube API)",
    desc: "설계·개발 100%로 진행했습니다. YouTube API를 연동하고 SPA 라우팅을 구현했으며 Netlify·Vercel에 배포했습니다.",
    img: `${IMG}/react_youtube.png`,
    code: "https://webs-youtube.netlify.app/",
    view: "https://webs-youtube.netlify.app/",
    name: "React · 개인",
  },
  {
    num: "21",
    title: "React 포트폴리오 사이트",
    desc: "설계·개발 100%로 진행했습니다. React.js·SCSS·GSAP 기반 패럴랙스·스무스 스크롤로 GSAP·Lenis 인터랙션을 구현했습니다.",
    img: `${IMG}/react_port2023.png`,
    code: "https://port2023-react.netlify.app",
    view: "https://port2023-react.netlify.app",
    name: "React · 개인",
  },
  {
    num: "22",
    title: "Vue 포트폴리오 사이트",
    desc: "설계·개발 100%로 진행했습니다. Vue 3·Vite·SCSS·GSAP 기반 Composition API·패럴랙스로, 동일 UI를 React·Vue로 각각 구현했습니다.",
    img: `${IMG}/vue_port2023.png`,
    code: "https://port2023-vue.netlify.app/",
    view: "https://port2023-vue.netlify.app/",
    name: "Vue · 개인",
  },
];

export const contactText = [
  {
    link: "mailto:pooh9868@naver.com",
    title: "mail : pooh9868@naver.com",
  },
  {
    link: "https://port2023-react.netlify.app",
    title: "portfolio : port2023-react.netlify.app",
  },
];

export const footerText = [
  {
    title: "share file",
    desc: "React로 만든 공유파일 서비스입니다.",
    link: "https://shared-file-rust.vercel.app/",
  },
  {
    title: "org chart",
    desc: "React로 만든 조직도 서비스입니다.",
    link: "https://organization-chart-chi.vercel.app/",
  },
  {
    title: "youtube clone",
    desc: "YouTube API를 연동한 유튜브 클론입니다.",
    link: "https://webs-youtube.netlify.app/",
  },
  {
    title: "react portfolio",
    desc: "React·GSAP로 만든 포트폴리오입니다.",
    link: "https://port2023-react.netlify.app",
  },
  {
    title: "vue portfolio",
    desc: "Vue 3로 만든 포트폴리오입니다.",
    link: "https://port2023-vue.netlify.app/",
  },
  {
    title: "mail",
    desc: "프로젝트 협업·채용 문의 환영합니다.",
    link: "mailto:pooh9868@naver.com",
  },
];
