import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KIỀU GIA GROUP | Hạ tầng số & AI cho doanh nghiệp thời đại mới",
    template: "%s | KIỀU GIA GROUP",
  },
  description:
    "KIỀU GIA GROUP cung cấp giải pháp Hosting, Domain, VPS, Cloud, Website, AI Automation và SEO System cho doanh nghiệp.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`(() => {
  const stored = window.localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
})();`}
        </Script>
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
