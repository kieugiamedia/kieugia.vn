"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import {
  blogPosts,
  homePricing,
  homepageServices,
  homeStats,
  partnerNames,
  whyKigi,
} from "./site-content";

const sectionFade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const serviceRoutes = [
  "/domain",
  "/hosting",
  "/vps-cloud",
  "/thiet-ke-website",
  "/ai-automation",
  "/seo-system",
];

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted = useMemo(() => {
    if (value % 1 !== 0) {
      return displayValue.toFixed(1);
    }
    return Math.round(displayValue).toLocaleString("vi-VN");
  }, [displayValue, value]);

  return (
    <div ref={ref} className="brand-card glass-card interactive-card rounded-[26px] p-6 text-center">
      <p className="text-4xl font-semibold text-[var(--text)]">
        {formatted}
        {suffix}
      </p>
      <p className="text-muted mt-2 text-sm">{label}</p>
    </div>
  );
}

export default function HomepageLanding() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-[100px] md:pt-36">
        <div className="hero-section-bg absolute inset-0" />
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-80" />
        <div className="hero-radial pointer-events-none absolute inset-0" />
        <div className="hero-orbit animate-float-gentle absolute -top-10 -right-20 h-72 w-72 rounded-full opacity-70" />
        <div className="hero-orbit animate-float-gentle-delayed absolute -left-20 top-36 h-60 w-60 rounded-full opacity-50" />

        <div className="layout-shell relative grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="brand-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
              <LockKeyhole className="h-4 w-4 text-[var(--yellow)]" />
              KIGI Design Language
            </div>

            <h1 className="hero-text mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Hạ tầng số & AI cho doanh nghiệp thời đại mới
            </h1>

            <p className="hero-text mt-6 max-w-2xl text-lg leading-8">
              Hosting - Domain - Cloud - Website - AI - SEO
            </p>

            <p className="hero-text-muted mt-4 max-w-2xl text-base leading-8">
              KIỀU GIA GROUP giúp doanh nghiệp xây nền tảng công nghệ chắc, tăng
              tốc marketing & sales với hạ tầng mạnh, website chuẩn conversion và
              AI automation thực dụng.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="primary-button inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition"
              >
                Bắt đầu ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="secondary-button inline-flex min-h-14 items-center justify-center rounded-full px-7 text-sm font-semibold transition"
              >
                Tư vấn
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["10.000+", "Khách hàng sử dụng dịch vụ công nghệ và hạ tầng số"],
                ["99.9%", "Cam kết uptime cho hệ thống doanh nghiệp"],
                ["24/7", "Đội ngũ kỹ thuật hỗ trợ liên tục"],
              ].map(([value, label]) => (
                <div key={value} className="glass-card rounded-[22px] p-4">
                  <p className="hero-text text-2xl font-semibold">{value}</p>
                  <p className="hero-text-muted mt-2 text-sm leading-6">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="gradient-border hero-preview-bg rounded-[30px] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {homepageServices.slice(0, 4).map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-4">
                  <div className="brand-icon flex h-10 w-10 items-center justify-center rounded-xl">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="hero-text mt-4 text-sm font-semibold">{item.title}</h3>
                  <p className="hero-text-muted mt-2 text-xs leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[var(--panel-border)] bg-[var(--brand-gradient)] p-4">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Infrastructure Dashboard
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">
                  Theo dõi uptime, tải hệ thống và tốc độ chuyển đổi theo thời gian thực
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--surface-alt)] p-3 text-center text-xs text-[var(--text-secondary)]">
                    Uptime 99.9%
                  </div>
                  <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--surface-alt)] p-3 text-center text-xs text-[var(--text-secondary)]">
                    42 Nodes
                  </div>
                  <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--surface-alt)] p-3 text-center text-xs text-[var(--text-secondary)]">
                    35ms Avg
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block layout-shell">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12%" }}
          variants={sectionFade}
          transition={{ duration: 0.48 }}
        >
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title">6 trụ cột dịch vụ cho hệ thống tăng trưởng hiện đại</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homepageServices.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ delay: index * 0.05 }}
              className={`brand-card glass-card interactive-card rounded-[28px] p-6 ${
                index === 1 ? "gradient-border" : ""
              }`}
            >
              <div className="brand-icon flex h-12 w-12 items-center justify-center rounded-2xl">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="text-muted mt-3 text-sm leading-7">{item.description}</p>
              <Link
                href={serviceRoutes[index]}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
              >
                Xem chi tiết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block relative overflow-hidden">
        <div className="advantages-section-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--hero-glow),transparent_34%)]" />

        <div className="layout-shell relative">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12%" }}
            variants={sectionFade}
            transition={{ duration: 0.48 }}
          >
            <p className="section-eyebrow section-eyebrow-dark">WHY KIGI</p>
            <h2 className="hero-text mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Tại sao doanh nghiệp chọn KIỀU GIA GROUP?
            </h2>
            <p className="hero-text-muted mt-5 max-w-2xl text-base leading-8">
              Chúng tôi xây hệ thống tăng trưởng từ hạ tầng tới funnel, không chỉ
              cung cấp dịch vụ rời rạc.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {whyKigi.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ delay: index * 0.04 }}
                className="brand-card glass-card interactive-card rounded-[24px] p-6"
              >
                <div className="brand-pill flex h-11 w-11 items-center justify-center rounded-xl">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="hero-text mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="hero-text-muted mt-3 text-sm leading-7">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">Chọn gói phù hợp với quy mô doanh nghiệp</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {homePricing.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`interactive-card rounded-[30px] border p-7 ${
                plan.highlight ? "gradient-border glass-card" : "brand-card glass-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[var(--text)]">{plan.name}</h3>
                {plan.highlight ? (
                  <span className="brand-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
                    Popular
                  </span>
                ) : null}
              </div>

              <p className="mt-5 text-4xl font-semibold text-[var(--text)]">{plan.price}</p>
              <p className="text-muted mt-4 text-sm leading-7">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="primary-button mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold"
              >
                Chọn gói
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Social Proof</p>
          <h2 className="section-title">Con số thể hiện năng lực vận hành hệ thống</h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((item) => (
            <Counter key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <p className="section-eyebrow">Clients</p>
        <div className="glass-card mt-6 overflow-hidden rounded-[28px] py-5 shadow-[var(--shadow-card)]">
          <div className="marquee-track flex items-center gap-5 px-5">
            {[...partnerNames, ...partnerNames].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="glass-card rounded-2xl px-5 py-4 text-center text-sm font-semibold text-[var(--text-secondary)]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Blog</p>
            <h2 className="section-title">Kiến thức triển khai hạ tầng, AI và SEO thực chiến</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-[var(--primary)]">
            Xem tất cả bài viết
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ delay: index * 0.05 }}
              className="brand-card glass-card interactive-card rounded-[26px] p-6"
            >
              <span className="brand-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                {post.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-[var(--text)]">
                {post.title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-7">{post.excerpt}</p>
              <Link
                href="/blog"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
              >
                Đọc tiếp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="final-cta-bg gradient-border rounded-[36px] px-7 py-14 md:px-12">
          <h2 className="text-inverse text-4xl font-semibold tracking-tight md:text-5xl">
            Khởi động dự án của bạn ngay hôm nay
          </h2>
          <p className="text-inverse-muted mt-5 max-w-2xl text-base leading-8">
            Nhận đề xuất giải pháp phù hợp từ KIỀU GIA GROUP cho hạ tầng số, AI
            automation và hệ thống SEO theo mục tiêu kinh doanh thực tế.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="accent-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-semibold transition"
            >
              Bắt đầu ngay
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[var(--panel-border)] px-8 text-sm font-semibold text-inverse transition hover:bg-[var(--hero-surface-alt)]"
            >
              Tư vấn miễn phí
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

