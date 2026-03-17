import type { Metadata } from "next";

import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "VPS / Cloud Server",
  description:
    "Giải pháp VPS và Cloud linh hoạt cho doanh nghiệp cần tốc độ, uptime và khả năng scale.",
};

export default function VpsCloudPage() {
  return <ServicePageTemplate slug="vps-cloud" />;
}
