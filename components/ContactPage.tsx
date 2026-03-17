"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";

import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

const contacts = [
  { icon: PhoneCall, title: "Hotline", value: "0822 223 112" },
  { icon: Mail, title: "Email", value: "support@kieugia.vn" },
  { icon: MapPin, title: "Địa chỉ", value: "Nha Trang, Khánh Hòa" },
];

export default function ContactPage() {
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
            Contact KIỀU GIA GROUP
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="hero-text mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl"
          >
            Bắt đầu dự án hạ tầng số & AI cho doanh nghiệp của bạn
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="hero-text-muted mt-6 max-w-3xl text-base leading-8"
          >
            Điền thông tin, đội ngũ KIỀU GIA GROUP sẽ gửi đề xuất giải pháp phù
            hợp với ngân sách và mục tiêu tăng trưởng trong 24h.
          </motion.p>
        </div>
      </section>

      <section className="section-block layout-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            onSubmit={(event) => event.preventDefault()}
            className="brand-card glass-card rounded-[30px] p-7"
          >
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              Gửi yêu cầu tư vấn
            </h2>
            <p className="text-muted mt-2 text-sm leading-7">
              Chúng tôi phản hồi nhanh với đề xuất rõ ràng về giải pháp và lộ trình triển khai.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Họ và tên
                </span>
                <input
                  className="brand-input w-full rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                  placeholder="Nhập họ và tên"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Số điện thoại
                </span>
                <input
                  className="brand-input w-full rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                  placeholder="08xx xxx xxx"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Email
                </span>
                <input
                  className="brand-input w-full rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                  placeholder="you@company.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Dịch vụ quan tâm
                </span>
                <select className="brand-input w-full rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--primary)]">
                  <option>Hosting</option>
                  <option>Domain</option>
                  <option>VPS / Cloud</option>
                  <option>Thiết kế Website</option>
                  <option>AI Automation</option>
                  <option>SEO System</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                Mục tiêu dự án
              </span>
              <textarea
                rows={5}
                className="brand-input w-full resize-none rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                placeholder="Mô tả ngắn mục tiêu, timeline và ngân sách dự kiến..."
              />
            </label>

            <button
              type="submit"
              className="primary-button mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold"
            >
              Nhận tư vấn ngay
            </button>
          </motion.form>

          <div className="space-y-5">
            {contacts.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ delay: index * 0.05 }}
                className="brand-card glass-card interactive-card rounded-[26px] p-6"
              >
                <div className="brand-icon flex h-11 w-11 items-center justify-center rounded-xl">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-muted mt-4 text-xs font-semibold uppercase tracking-[0.18em]">
                  {item.title}
                </p>
                <p className="mt-2 text-xl font-semibold text-[var(--text)]">{item.value}</p>
              </motion.article>
            ))}

            <div className="glass-card overflow-hidden rounded-[26px]">
              <iframe
                title="Kieu Gia Group Map"
                src="https://www.google.com/maps?q=Nha%20Trang&output=embed"
                className="h-52 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
