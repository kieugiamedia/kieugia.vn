import { Menu } from "lucide-react";

import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

const items = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Lợi thế", href: "#advantages" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="brand-panel mt-6 flex items-center justify-between rounded-full px-4 py-3 text-sm text-slate-600 transition-colors dark:text-slate-200">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-12 w-12" />
              <p className="text-sm font-semibold tracking-[0.08em] text-slate-900 dark:text-white">
                KIỀU GIA GROUP
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {items.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--surface-3)] hover:text-[var(--brand-blue-deep)] dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--surface-3)] hover:text-[var(--brand-blue-deep)]"
                >
                  Tư vấn miễn phí
                </a>
                <a
                  href="#services"
                  className="primary-button inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition"
                >
                  Bắt đầu ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-auto w-full px-4 pt-4">
          <div className="brand-panel flex items-center justify-between rounded-[28px] px-4 py-3">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-10 w-10" />
              <p className="text-sm font-semibold tracking-[0.08em] text-slate-950 dark:text-white">
                KIỀU GIA GROUP
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle
                showLabel={false}
                className="h-10 w-10 justify-center rounded-2xl px-0"
              />
              <a
                href="#services"
                className="primary-button inline-flex min-h-10 items-center justify-center rounded-full px-4 text-xs font-semibold"
              >
                Bắt đầu
              </a>
              <button
                type="button"
                aria-label="Mở điều hướng"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-2)] text-[var(--text-secondary)] dark:text-slate-200"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
