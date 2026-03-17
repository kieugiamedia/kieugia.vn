"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import BrandLogo from "./BrandLogo";
import LeadModal from "./LeadModal";
import ThemeToggle from "./ThemeToggle";

const mainLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Domain", href: "/domain" },
  { label: "Hosting", href: "/hosting" },
  { label: "VPS / Cloud", href: "/vps-cloud" },
  { label: "Website", href: "/thiet-ke-website" },
  { label: "AI", href: "/ai-automation" },
  { label: "SEO", href: "/seo-system" },
];

const extraLinks = [
  { label: "Giới thiệu", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

const getThemeFromDom = () =>
  document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    const handleThemeChange = () => setTheme(getThemeFromDom());

    handleScroll();
    handleThemeChange();

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("themechange", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const desktopShellClass = useMemo(
    () =>
      [
        "navbar-shell mt-6 flex items-center justify-between rounded-full px-4 py-3 text-sm text-[var(--text-secondary)]",
        theme === "dark" && !scrolled ? "backdrop-blur-0" : "backdrop-blur-xl",
      ].join(" "),
    [scrolled, theme],
  );

  const mobileShellClass = useMemo(
    () =>
      [
        "navbar-shell flex items-center justify-between rounded-[28px] px-4 py-3",
        theme === "dark" && !scrolled ? "backdrop-blur-0" : "backdrop-blur-xl",
      ].join(" "),
    [scrolled, theme],
  );

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 hidden lg:block">
        <div className="layout-shell">
          <div data-scrolled={scrolled} className={desktopShellClass}>
            <div className="flex items-center gap-3">
              <BrandLogo className="h-12 w-12" />
              <div>
                <p className="text-sm font-semibold tracking-[0.1em] text-[var(--text)]">
                  KIỀU GIA GROUP
                </p>
                <p className="text-muted text-[10px] uppercase tracking-[0.24em]">
                  Tech Infrastructure
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                    isActive(item.href)
                      ? "bg-[var(--button-secondary-hover)] text-[var(--primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/blog"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--surface)] hover:text-[var(--primary)]"
              >
                Blog
              </Link>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="secondary-button inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold transition"
              >
                Tư vấn
              </button>
              <Link
                href="/contact"
                className="primary-button inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition"
              >
                Bắt đầu ngay
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="layout-shell pt-4">
          <div data-scrolled={scrolled} className={mobileShellClass}>
            <Link href="/" className="flex items-center gap-3">
              <BrandLogo className="h-10 w-10" />
              <p className="text-sm font-semibold tracking-[0.08em] text-[var(--text)]">
                KIỀU GIA GROUP
              </p>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle
                showLabel={false}
                className="h-10 w-10 justify-center rounded-2xl px-0"
              />
              <button
                type="button"
                aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
                onClick={() => setMobileOpen((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="layout-shell mt-3"
            >
              <div className="glass-card rounded-[24px] p-4">
                <div className="grid grid-cols-2 gap-2">
                  {mainLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                        isActive(item.href)
                          ? "bg-[var(--button-secondary-hover)] text-[var(--primary)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--button-secondary-hover)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[var(--border)] pt-3">
                  {extraLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-muted rounded-xl px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em] transition hover:bg-[var(--button-secondary-hover)] hover:text-[var(--primary)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="secondary-button inline-flex min-h-11 items-center justify-center rounded-full px-4 text-xs font-semibold uppercase tracking-[0.08em]"
                  >
                    Tư vấn
                  </button>
                  <Link
                    href="/contact"
                    className="primary-button inline-flex min-h-11 items-center justify-center rounded-full px-4 text-xs font-semibold uppercase tracking-[0.08em]"
                  >
                    Bắt đầu
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

