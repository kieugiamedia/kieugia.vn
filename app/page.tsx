import Script from "next/script";

import HomepageLanding from "../components/HomepageLanding";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KIỀU GIA GROUP",
  url: "https://kieugia.vn",
  logo: "https://kieugia.vn/logo.png",
  description:
    "Dịch vụ công nghệ và hạ tầng số: Domain, Hosting, Cloud VPS, Server, Website, AI Automation, SEO System.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+84-822-223-112",
    areaServed: "VN",
    availableLanguage: ["vi", "en"],
  },
  sameAs: [
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
    "https://www.youtube.com/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Infrastructure Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domain" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hosting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud VPS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Server" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO System" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HomepageLanding />
    </>
  );
}
