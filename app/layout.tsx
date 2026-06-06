import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이지성 · 백엔드/풀스택 개발자 — 포트폴리오",
  description: "안정적인 대용량 트래픽 처리와 깔끔한 API 설계를 좋아하는 백엔드 개발자 이지성의 포트폴리오입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
