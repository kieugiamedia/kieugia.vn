import type { Metadata } from "next";

import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO System",
  description:
    "Hệ thống SEO ứng dụng AI giúp doanh nghiệp tăng traffic chất lượng và lead bền vững.",
};

export default function SeoSystemPage() {
  return <ServicePageTemplate slug="seo-system" />;
}
