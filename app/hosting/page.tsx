import type { Metadata } from "next";

import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Hosting hiệu năng cao",
  description:
    "Hosting doanh nghiệp hiệu năng cao, ổn định và bảo mật bởi KIỀU GIA GROUP.",
};

export default function HostingPage() {
  return <ServicePageTemplate slug="hosting" />;
}
