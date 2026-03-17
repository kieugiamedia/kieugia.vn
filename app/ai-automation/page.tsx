import type { Metadata } from "next";

import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "AI Automation cho Marketing & Sales: tự động hóa pipeline lead và quy trình vận hành.",
};

export default function AiAutomationPage() {
  return <ServicePageTemplate slug="ai-automation" />;
}
