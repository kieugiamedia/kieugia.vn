import type { Metadata } from "next";

import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Thiết kế Website",
  description:
    "Thiết kế website chuẩn UX/UI, tốc độ và chuyển đổi cho doanh nghiệp bởi KIỀU GIA GROUP.",
};

export default function WebsiteDesignPage() {
  return <ServicePageTemplate slug="thiet-ke-website" />;
}
