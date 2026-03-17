"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import { servicePageMap } from "./site-content";

type ServicePageTemplateProps = {
  slug: string;
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicePageTemplate({ slug }: ServicePageTemplateProps) {
  const content = servicePageMap[slug];

  if (!content) {
    return (
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <Navbar />
        <section className="layout-shell section-block pt-40">
          <h1 className="text-4xl font-semibold">Dịch vụ không tồn tại.</h1>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-[100px] md:pt-36">
        <div className="hero-section-bg absolute inset-0" />
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-80" />
        <div className="hero-radial pointer-events-none absolute inset-0" />

        <div className="layout-shell relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="brand-badge inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              {content.heroBadge}
            </span>
            <h1 className="hero-text mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="hero-text-muted mt-5 max-w-2xl text-base leading-8">
              {content.heroSubtitle}
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
                Tư vấn giải pháp
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="gradient-border hero-preview-bg rounded-[28px] p-6"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {content.features.slice(0, 4).map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-4">
                  <div className="brand-icon flex h-10 w-10 items-center justify-center rounded-xl">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="hero-text mt-4 text-sm font-semibold">{item.title}</p>
                  <p className="hero-text-muted mt-2 text-xs leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
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
          variants={fadeIn}
          transition={{ duration: 0.45 }}
        >
          <p className="section-eyebrow">Điểm mạnh dịch vụ</p>
          <h2 className="section-title">{content.featureTitle}</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.features.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="brand-card glass-card interactive-card rounded-[26px] p-6"
            >
              <div className="brand-icon flex h-12 w-12 items-center justify-center rounded-2xl">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-7">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">{content.pricingTitle}</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.pricing.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`interactive-card rounded-[30px] border p-7 ${
                plan.highlight ? "gradient-border glass-card" : "brand-card glass-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[var(--text)]">{plan.name}</h3>
                {plan.highlight ? (
                  <span className="brand-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
                    Best fit
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-4xl font-semibold text-[var(--text)]">{plan.price}</p>
              <p className="text-muted mt-3 text-sm leading-7">{plan.description}</p>

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
                Đăng ký tư vấn
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">Những câu hỏi thường gặp</h2>
        </div>

        <div className="mt-12 space-y-4">
          {content.faq.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="brand-card glass-card interactive-card rounded-[22px] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--text)]">{item.question}</h3>
              <p className="text-muted mt-3 text-sm leading-7">{item.answer}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="final-cta-bg gradient-border rounded-[34px] px-7 py-14 md:px-12">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl text-inverse">
            Sẵn sàng triển khai {content.menuLabel} cho doanh nghiệp của bạn?
          </h2>
          <p className="text-inverse-muted mt-5 max-w-2xl text-base leading-8">
            Đội ngũ KIỀU GIA GROUP sẽ tư vấn kiến trúc phù hợp với mục tiêu vận
            hành và tăng trưởng thực tế của doanh nghiệp.
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
