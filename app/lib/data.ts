export const PROFILE = {
  name: "이지성",
  role: "백엔드 개발자 · AI 서비스 연동",
  tagline: ["AI 결과를 서비스로", "잇는 개발자입니다."],
  statement:
    "Spring Boot로 API를 만들고 AWS에 직접 배포·운영해 왔습니다. Gemini와 OpenAI 같은 생성형 AI를 서비스에 연동하면서, AI가 만든 결과를 실제 데이터와 연결하는 백엔드 설계에 집중하고 있습니다. 동작하는 코드를 넘어, 왜 그렇게 만들었는지 설명할 수 있는 코드를 씁니다.",
  location: "Seoul, Korea",
  experience: "Backend Developer",
};

export const STATS = [
  { value: "3+", label: "주요 프로젝트" },
  { value: "2", label: "AI 연동 프로젝트" },
  { value: "10+", label: "사용 기술" },
];

// icon: public/skills/ 아래 로고 파일 이름. 로고가 없는 기술은 mono 약자를 표시
export const SKILL_GROUPS: {
  title: string;
  label: string;
  items: { name: string; icon?: string; mono?: string }[];
}[] = [
  {
    title: "Backend",
    label: "백엔드",
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Spring Security", icon: "springsecurity" },
      { name: "JPA", icon: "hibernate" },
      { name: "JWT", icon: "jwt" },
      { name: "WebSocket", mono: "WS" },
    ],
  },
  {
    title: "AI & API",
    label: "AI · 외부 연동",
    items: [
      { name: "OpenAI API", mono: "AI" },
      { name: "Gemini API", icon: "gemini" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Riot API", icon: "riot" },
      { name: "TourAPI", mono: "TA" },
      { name: "OAuth", icon: "oauth" },
    ],
  },
  {
    title: "Frontend",
    label: "프론트엔드",
    items: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    title: "Data & Infra",
    label: "데이터 · 배포",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Gradle", icon: "gradle" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "여백 (旅白)",
    summary: "AI 기반 공동 여행 일정 · 예산 관리 플랫폼 — 졸업작품, 백엔드 담당",
    description:
      "Gemini가 자유 텍스트로 만든 여행 일정을 장소 유형(placeType)과 장소 ID(placeId)로 실제 DB 장소에 연결하도록 저장 구조를 재설계해, AI 결과를 바로 서비스 데이터로 쓸 수 있게 했습니다. 한국관광공사 TourAPI 데이터(서울 기준 약 2,000건)를 적재하고, 소셜 로그인 3종 · JWT 인증 · WebSocket 실시간 일정 공유를 구현했습니다.",
    tags: ["Spring Boot", "JWT", "WebSocket", "MySQL", "Docker", "FastAPI", "Gemini API", "TourAPI"],
    metrics: [
      { k: "장소 데이터", v: "2,000+" },
      { k: "소셜 로그인", v: "3종" },
    ],
    link: "https://github.com/keumbyeol/Yeoback-2026",
    motif: "chat" as const,
  },
  {
    num: "02",
    title: "탑시야 (TopSiya)",
    summary: "소환사명만 입력하면 AI가 라인전 코칭 리포트를 써 주는 LoL 복기 서비스 — 개인",
    description:
      "Riot API로 경기 타임라인을 자동 수집하고, 서버에서 분 단위 CS · 골드 격차와 데스 직전 60초 상황 등 핵심 구간만 추린 요약 JSON을 OpenAI에 전달합니다. 근거(시간 · 수치) 강제와 JSON 출력 고정 프롬프트로 믿을 수 있는 리포트를 만들고, 같은 경기는 한 번만 분석해 저장하는 방식으로 비용을 관리했습니다.",
    tags: ["Spring Boot", "React", "OpenAI API", "Riot API", "MySQL", "Docker", "AWS Lightsail"],
    metrics: [
      { k: "AI 검증", v: "실경기 10개" },
      { k: "개발", v: "기획~배포 단독" },
    ],
    link: "https://github.com/leejiseong20/topsiya",
    motif: "logs" as const,
  },
  {
    num: "03",
    title: "사우스에스이 홈페이지",
    summary: "GMP 클린룸 엔지니어링 기업 홈페이지 반응형 리팩터링 — 외주",
    description:
      "PC · 모바일 페이지 두 벌을 JavaScript로 확대 · 축소하던 구조에서 모바일 마크업 누락으로 화면이 깨지는 원인을 찾아, 단일 시맨틱 HTML과 flex / grid · clamp() 기반 반응형으로 다시 만들었습니다. 인증서 13종 · 시공 실적 24건 등 원본 콘텐츠는 하나도 잃지 않도록 백업 후 작업했습니다.",
    tags: ["HTML5", "CSS3", "Flexbox", "Grid", "clamp()", "JavaScript"],
    metrics: [
      { k: "브레이크포인트", v: "3단계" },
      { k: "콘텐츠 보존", v: "100%" },
    ],
    link: "http://www.southse.co.kr/",
    motif: "commerce" as const,
  },
];

export const CONTACT = {
  email: "leejiseonghope20@gmail.com",
  links: [
    { label: "GitHub", handle: "@leejiseong20", href: "https://github.com/leejiseong20" },
  ],
};

export const NAV_ITEMS = [
  { id: "hero", label: "홈" },
  { id: "about", label: "소개" },
  { id: "skills", label: "기술 스택" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

export type Motif = "chat" | "commerce" | "logs" | "url" | "cicd";
