import type { Metadata } from "next";

import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Domain doanh nghiệp",
  description:
    "Dịch vụ domain của KIỀU GIA GROUP: tra cứu, đăng ký, quản lý và bảo vệ tên miền thương hiệu.",
};

export default function DomainPage() {
  return <ServicePageTemplate slug="domain" />;
}
