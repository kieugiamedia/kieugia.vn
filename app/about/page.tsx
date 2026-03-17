import type { Metadata } from "next";

import AboutPage from "../../components/AboutPage";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu KIỀU GIA GROUP - đối tác hạ tầng số, website, AI và SEO cho doanh nghiệp.",
};

export default function AboutRoutePage() {
  return <AboutPage />;
}
