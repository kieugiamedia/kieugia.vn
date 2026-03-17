import Link from "next/link";

import BrandLogo from "./BrandLogo";

const productLinks = [
  { label: "Domain", href: "/domain" },
  { label: "Hosting", href: "/hosting" },
  { label: "VPS / Cloud", href: "/vps-cloud" },
  { label: "Thiết kế Website", href: "/thiet-ke-website" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "SEO System", href: "/seo-system" },
];

const companyLinks = [
  { label: "Giới thiệu", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="layout-shell grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-12" />
            <div>
              <p className="text-base font-semibold tracking-[0.1em] text-[var(--text)]">
                KIỀU GIA GROUP
              </p>
              <p className="text-muted text-xs uppercase tracking-[0.18em]">
                KIGI Design Language
              </p>
            </div>
          </div>
          <p className="text-muted mt-5 max-w-sm text-sm leading-7">
            Hạ tầng số và giải pháp AI dành cho doanh nghiệp cần tăng trưởng
            nhanh, vận hành chắc và mở rộng bền vững.
          </p>
        </div>

        <div>
          <p className="text-subtle text-sm font-semibold uppercase tracking-[0.2em]">
            Dịch vụ
          </p>
          <div className="mt-4 space-y-2">
            {productLinks.map((item) => (
              <Link key={item.href} href={item.href} className="brand-link block text-sm">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-subtle text-sm font-semibold uppercase tracking-[0.2em]">
            Công ty
          </p>
          <div className="mt-4 space-y-2">
            {companyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="brand-link block text-sm">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-subtle text-sm font-semibold uppercase tracking-[0.2em]">
            Liên hệ
          </p>
          <div className="text-muted mt-4 space-y-2 text-sm leading-6">
            <p>Hotline: 0822 223 112</p>
            <p>Email: support@kieugia.vn</p>
            <p>Nha Trang, Khánh Hòa</p>
          </div>
          <div className="glass-card mt-4 overflow-hidden rounded-2xl">
            <iframe
              title="Kieu Gia Group Map"
              src="https://www.google.com/maps?q=Nha%20Trang&output=embed"
              className="h-32 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

