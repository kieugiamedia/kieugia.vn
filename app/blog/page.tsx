import type { Metadata } from "next";

import BlogPage from "../../components/BlogPage";

export const metadata: Metadata = {
  title: "Blog công nghệ",
  description:
    "Thư viện kiến thức về Hosting, Domain, Cloud, AI Automation và SEO thực chiến từ KIỀU GIA GROUP.",
};

export default function BlogRoutePage() {
  return <BlogPage />;
}
