export const PROFILE = {
  name: "이지성",
  role: "백엔드 · 풀스택 개발자",
  tagline: ["아이디어를 실제 서비스로", "구현하는 개발자입니다."],
  statement:
    "백엔드 개발자를 목표로 Spring Boot 기반 웹 서비스를 개발하고 있습니다. JWT 인증, 데이터베이스 설계, REST API 개발, 실시간 통신 기능을 직접 구현하며 문제 해결 능력과 개발 역량을 키워가고 있습니다.",
  location: "Seoul, Korea",
  experience: "Backend Developer",
};

export const STATS = [
  { value: "3+", label: "주요 프로젝트" },
  { value: "10+", label: "사용 기술" },
  { value: "2+", label: "년 학습 경험" },
];

export const SKILL_GROUPS = [
  {
    title: "Backend",
    label: "백엔드",
    items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Querydsl", "JWT"],
  },
  {
    title: "Frontend",
    label: "프론트엔드",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
  },
  {
    title: "Database",
    label: "데이터베이스",
    items: ["MySQL", "JPA", "Hibernate"],
  },
  {
    title: "Tools & DevOps",
    label: "도구 · 배포",
    items: ["Git", "GitHub", "Docker", "AWS EC2", "Gradle"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "여백 (旅白)",
    summary: "AI 기반 공동 여행 일정 계획 및 예산 관리 웹 플랫폼",
    description:
      "Google · Kakao · Naver 소셜 로그인과 JWT 인증 시스템을 구축하고, WebSocket/STOMP 기반 실시간 일정 공유 기능을 구현했습니다. Gemini API와 Google Maps API를 연동해 AI 여행 일정 추천 기능을 제공합니다.",
    tags: ["Spring Boot", "WebSocket", "OAuth2", "JWT", "Gemini API", "Docker", "FastAPI"],
    metrics: [
      { k: "소셜 로그인", v: "3종" },
      { k: "실시간 공유", v: "WebSocket" },
    ],
    motif: "chat" as const,
  },
  {
    num: "02",
    title: "CommuniTalk",
    summary: "게시글·팔로우·알림 기능을 갖춘 커뮤니티 SNS 플랫폼",
    description:
      "JWT HttpOnly Cookie 기반 Access Token(15분) + Refresh Token(7일) 이중 토큰 전략으로 보안을 강화했습니다. 게시글 작성/수정/삭제/검색·팔로우·좋아요·북마크·댓글·알림 등 SNS 핵심 기능 10종 이상을 단독 설계 및 구현했습니다.",
    tags: ["Spring Boot", "Java 21", "Spring Security", "JWT", "MySQL", "Thymeleaf"],
    metrics: [
      { k: "구현 기능", v: "10종+" },
      { k: "인증 전략", v: "이중 토큰" },
    ],
    motif: "commerce" as const,
  },
  {
    num: "03",
    title: "Board Community",
    summary: "Spring Boot + React 기반 커뮤니티 게시판 플랫폼",
    description:
      "JWT 인증, 게시글·댓글 CRUD, 좋아요, 이미지 업로드, 관리자 기능 등 커뮤니티 핵심 기능을 구현했습니다. N+1 쿼리 개선, 조회수 중복 방지, AJAX 기반 좋아요 처리 등 성능 및 사용자 경험을 개선했습니다.",
    tags: ["Spring Boot", "React", "JWT", "MySQL", "AWS EC2", "Vite"],
    metrics: [
      { k: "아키텍처", v: "풀스택" },
      { k: "배포", v: "AWS EC2" },
    ],
    motif: "logs" as const,
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
