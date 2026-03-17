"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

const values = [
  {
    title: "Tập trung kết quả kinh doanh",
    description:
      "Mọi giải pháp đều bắt đầu từ mục tiêu tăng trưởng thực tế của doanh nghiệp.",
    icon: Sparkles,
  },
  {
    title: "Hạ tầng chắc và bảo mật",
    description:
      "Kiến trúc tối ưu tốc độ, an toàn dữ liệu và khả năng mở rộng trong dài hạn.",
    icon: ShieldCheck,
  },
  {
    title: "Ứng dụng AI thực dụng",
    description:
      "AI được thiết kế để giải quyết bài toán vận hành, marketing và sales cụ thể.",
    icon: BrainCircuit,
  },
  {
    title: "Đồng hành như team nội bộ",
    description:
      "Tư vấn, triển khai và tối ưu liên tục như một bộ phận công nghệ mở rộng.",
    icon: Cloud,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-[100px] md:pt-36">
        <div className="hero-section-bg absolute inset-0" />
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-80" />
        <div className="hero-radial pointer-events-none absolute inset-0" />

        <div className="layout-shell relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="brand-badge inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            About KIỀU GIA GROUP
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="hero-text mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl"
          >
            KIỀU GIA GROUP xây hạ tầng số và AI giúp doanh nghiệp tăng trưởng bền vững
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="hero-text-muted mt-6 max-w-3xl text-base leading-8"
          >
            Chúng tôi tập trung vào một điều: biến công nghệ thành lợi thế cạnh
            tranh rõ ràng cho doanh nghiệp Việt Nam qua hạ tầng số mạnh, website
            chuẩn chuyển đổi, AI automation và hệ thống SEO dài hạn.
          </motion.p>
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">KIGI Design Language</p>
          <h2 className="section-title">
            Triết lý thiết kế và triển khai của KIỀU GIA GROUP
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {values.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ delay: index * 0.05 }}
              className="brand-card glass-card interactive-card rounded-[28px] p-7"
            >
              <div className="brand-icon flex h-12 w-12 items-center justify-center rounded-2xl">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-7">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block layout-shell">
        <div className="final-cta-bg gradient-border rounded-[34px] px-7 py-14 md:px-12">
          <h2 className="text-inverse text-4xl font-semibold tracking-tight md:text-5xl">
            Đồng hành cùng KIỀU GIA GROUP để xây nền tảng tăng trưởng dài hạn
          </h2>
          <p className="text-inverse-muted mt-5 max-w-2xl text-base leading-8">
            Đội ngũ chuyên gia của chúng tôi sẽ cùng bạn xây lộ trình hạ tầng,
            website và AI theo từng giai đoạn phát triển cụ thể.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="accent-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-semibold"
            >
              Làm việc cùng chúng tôi
            </Link>
            <Link
              href="/blog"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[var(--panel-border)] px-8 text-sm font-semibold text-inverse transition hover:bg-[var(--hero-surface-alt)]"
            >
              Xem case study
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

