import type { Metadata } from "next";

import ContactPage from "../../components/ContactPage";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ KIỀU GIA GROUP để nhận tư vấn triển khai hạ tầng số, website, AI automation và SEO system.",
};

export default function ContactRoutePage() {
  return <ContactPage />;
}
