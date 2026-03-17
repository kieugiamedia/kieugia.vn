"use client";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cloud,
  Cpu,
  Gauge,
  Globe,
  Headset,
  LockKeyhole,
  MonitorSmartphone,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import BrandLogo from "./BrandLogo";
import Navbar from "./Navbar";

const services = [
  {
    title: "Domain",
    description:
      "Tra cứu, đăng ký và bảo vệ tên miền thương hiệu nhanh chóng cho doanh nghiệp.",
    icon: Globe,
  },
  {
    title: "Hosting",
    description:
      "Hosting hiệu năng cao, ổn định cho website doanh nghiệp, landing page và bán hàng.",
    icon: Cloud,
  },
  {
    title: "VPS / Cloud Server",
    description:
      "Hạ tầng linh hoạt, dễ mở rộng tài nguyên theo lưu lượng truy cập và nhu cầu vận hành.",
    icon: Server,
  },
  {
    title: "Thiết kế Website",
    description:
      "Website hiện đại, tối ưu UX/UI, SEO và chuyển đổi cho nhiều mô hình kinh doanh.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO AI System",
    description:
      "Hệ thống SEO ứng dụng AI giúp tăng hiển thị tìm kiếm và tạo lead bền vững.",
    icon: Search,
  },
  {
    title: "AI Automation",
    description:
      "Tự động hóa marketing, chăm sóc khách hàng và vận hành nội bộ bằng AI.",
    icon: Bot,
  },
];

const advantages = [
  {
    title: "Hạ tầng mạnh mẽ",
    description: "Triển khai trên kiến trúc tối ưu tốc độ, uptime và khả năng mở rộng.",
    icon: Cpu,
  },
  {
    title: "Tốc độ cao",
    description: "Tối ưu hiệu năng truy cập cho website, hệ thống bán hàng và landing page.",
    icon: Gauge,
  },
  {
    title: "Bảo mật cao",
    description: "SSL, backup, firewall và quy trình bảo vệ hệ thống chặt chẽ.",
    icon: ShieldCheck,
  },
  {
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ khi hệ thống cần xử lý nhanh.",
    icon: Headset,
  },
  {
    title: "Giá cạnh tranh",
    description: "Bài toán chi phí được tối ưu theo từng giai đoạn phát triển của doanh nghiệp.",
    icon: Sparkles,
  },
  {
    title: "Công nghệ AI tiên phong",
    description: "Kết hợp AI vào SEO, tự động hóa và hệ thống tăng trưởng doanh nghiệp.",
    icon: BrainCircuit,
  },
];

const pricingPlans = [
  {
    name: "Basic",
    category: "Hosting",
    price: "399.000đ",
    subtitle: "/tháng",
    description: "Phù hợp cho startup và doanh nghiệp mới khởi động hiện diện số.",
    features: [
      "Hosting tiêu chuẩn",
      "SSL cơ bản",
      "1 website doanh nghiệp",
      "Hỗ trợ ticket",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    category: "VPS",
    price: "899.000đ",
    subtitle: "/tháng",
    description: "Lựa chọn tối ưu cho doanh nghiệp cần tốc độ, ổn định và khả năng mở rộng.",
    features: [
      "Cloud VPS linh hoạt",
      "Hosting NVMe hiệu năng cao",
      "Dashboard giám sát",
      "Hỗ trợ ưu tiên",
    ],
    highlight: true,
  },
  {
    name: "Business",
    category: "Website",
    price: "Liên hệ",
    subtitle: "",
    description: "Giải pháp trọn gói cho hệ thống lớn cần website, server và SEO tăng trưởng.",
    features: [
      "Website theo yêu cầu",
      "Máy chủ riêng",
      "Tư vấn kiến trúc hệ thống",
      "SLA doanh nghiệp",
    ],
    highlight: false,
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Khách hàng tin dùng" },
  { value: 99.9, suffix: "%", label: "Uptime hạ tầng" },
  { value: 5000, suffix: "+", label: "Website đang vận hành" },
  { value: 24, suffix: "/7", label: "Hỗ trợ kỹ thuật" },
];

const partners = [
  "Doanh nghiệp địa phương",
  "Startup công nghệ",
  "Agency marketing",
  "Thương mại điện tử",
  "Giáo dục số",
  "Y tế - dịch vụ",
  "Khách sạn - du lịch",
  "Tài chính - SaaS",
];

const posts = [
  {
    title: "Cách chọn hosting phù hợp cho doanh nghiệp năm 2026",
    description:
      "5 tiêu chí quan trọng giúp bạn chọn đúng hạ tầng lưu trữ ngay từ đầu.",
    tag: "Hosting",
  },
  {
    title: "Khi nào nên nâng cấp từ hosting lên Cloud VPS?",
    description:
      "Nhận biết đúng thời điểm để tối ưu hiệu năng, chi phí và khả năng tăng trưởng.",
    tag: "Cloud VPS",
  },
  {
    title: "SEO AI System giúp doanh nghiệp tăng traffic bền vững như thế nào?",
    description:
      "Cách kết hợp nội dung, kỹ thuật SEO và AI để tạo ra hệ thống tăng trưởng dài hạn.",
    tag: "SEO AI",
  },
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
    <div ref={ref} className="brand-card rounded-[28px] p-6 text-center">
      <p className="text-4xl font-semibold text-[var(--text-primary)]">
        {formatted}
        {suffix}
      </p>
      <p className="text-muted mt-2 text-sm">{label}</p>
    </div>
  );
}

export default function HomepageLanding() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-primary)]">
      <Navbar />

      <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-80" />
        <div className="hero-radial pointer-events-none absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[580px] bg-[linear-gradient(180deg,rgba(6,17,31,0.92),rgba(6,17,31,0.35),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-24 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,136,229,0.35)] bg-[rgba(10,24,45,0.72)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100 shadow-[0_0_0_1px_rgba(30,136,229,0.08)] backdrop-blur">
              <LockKeyhole className="h-4 w-4 text-[var(--brand-yellow)]" />
              Hạ tầng số cho doanh nghiệp tăng trưởng
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Giải pháp công nghệ toàn diện cho doanh nghiệp thời đại AI
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Hosting - Domain - Cloud - Website - AI Automation - SEO System
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              KIỀU GIA GROUP đồng hành cùng doanh nghiệp từ nền tảng hạ tầng số
              đến hệ thống website, SEO và AI tự động hóa, giúp vận hành nhanh,
              ổn định và tăng trưởng bền vững.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="primary-button inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Bắt đầu ngay
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/12"
              >
                Tư vấn miễn phí
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["10.000+", "Khách hàng sử dụng dịch vụ công nghệ và hạ tầng số"],
                ["99.9%", "Cam kết uptime cho hệ thống doanh nghiệp"],
                ["24/7", "Đội ngũ kỹ thuật hỗ trợ liên tục"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[22px] border border-white/10 bg-white/6 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative"
          >
            <div className="gradient-border rounded-[30px] bg-[rgba(7,18,35,0.78)] p-4 shadow-[0_30px_90px_-35px_rgba(30,136,229,0.38)] backdrop-blur-xl">
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,23,43,0.98),rgba(12,33,61,0.95))] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BrandLogo className="h-11 w-11" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        KIỀU GIA GROUP
                      </p>
                      <p className="text-xs text-slate-300">
                        Infrastructure Control Center
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[rgba(255,193,7,0.14)] px-3 py-1 text-xs font-semibold text-[var(--brand-yellow)]">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Uptime", "99.9%"],
                    ["Cloud Nodes", "42"],
                    ["Response", "35ms"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/8 bg-white/6 p-3"
                    >
                      <p className="text-xs text-slate-300">{label}</p>
                      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[24px] border border-white/8 bg-[linear-gradient(135deg,rgba(30,136,229,0.32),rgba(0,168,107,0.22),rgba(255,193,7,0.18))] p-5">
                  <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[20px] bg-[rgba(255,255,255,0.9)] p-4 text-slate-900">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue-deep)]">
                        Dashboard
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        Theo dõi toàn bộ hạ tầng trong một giao diện
                      </h3>
                      <div className="mt-4 space-y-3">
                        <div className="h-20 rounded-2xl bg-[linear-gradient(135deg,#e9f5ff,#cce7ff)]" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-12 rounded-xl bg-slate-100" />
                          <div className="h-12 rounded-xl bg-slate-100" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Hosting hiệu năng cao cho website doanh nghiệp",
                        "Cloud VPS mở rộng linh hoạt theo nhu cầu",
                        "AI Automation hỗ trợ vận hành và tăng trưởng",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-slate-100"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Dịch vụ chính</p>
          <h2 className="section-title">
            Hệ sinh thái dịch vụ công nghệ dành cho doanh nghiệp hiện đại
          </h2>
          <p className="section-copy">
            Từ nền tảng hạ tầng số đến website, AI và SEO, mọi dịch vụ đều được
            xây dựng để phục vụ mục tiêu tăng trưởng dài hạn.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface-2)] p-6 shadow-[0_24px_70px_-45px_rgba(7,26,49,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_26px_80px_-40px_rgba(30,136,229,0.22)]"
            >
              <div className="brand-icon flex h-12 w-12 items-center justify-center rounded-2xl">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-7">{description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[var(--brand-blue-deep)]">
                Khám phá giải pháp
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="advantages" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#071726,#0a2038)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,136,229,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="section-eyebrow section-eyebrow-dark">
              Lợi thế cạnh tranh
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Tại sao chọn KIỀU GIA GROUP?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Chúng tôi không chỉ cung cấp dịch vụ, mà xây dựng hệ thống công
              nghệ giúp doanh nghiệp vận hành hiệu quả và tăng trưởng an toàn.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[26px] border border-white/10 bg-white/6 p-6 backdrop-blur"
              >
                <div className="brand-pill flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Bảng giá</p>
          <h2 className="section-title">
            Chọn gói phù hợp với quy mô và tốc độ phát triển của doanh nghiệp
          </h2>
          <p className="section-copy">
            Từ nhu cầu cơ bản đến hạ tầng doanh nghiệp chuyên sâu, mỗi gói đều
            được thiết kế để tối ưu cả hiệu năng lẫn chi phí.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-[30px] border p-7 ${
                plan.highlight
                  ? "gradient-border bg-[linear-gradient(180deg,rgba(30,136,229,0.08),rgba(255,255,255,0.94))] shadow-[0_28px_80px_-38px_rgba(30,136,229,0.32)]"
                  : "border-[var(--border-soft)] bg-[var(--surface-2)] shadow-[0_24px_70px_-45px_rgba(7,26,49,0.18)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                    {plan.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{plan.name}</h3>
                </div>
                {plan.highlight && (
                  <span className="rounded-full bg-[rgba(30,136,229,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-deep)]">
                    Nổi bật
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <p className="text-4xl font-semibold text-[var(--text-primary)]">
                  {plan.price}
                </p>
                <p className="pb-1 text-sm text-[var(--text-tertiary)]">
                  {plan.subtitle}
                </p>
              </div>

              <p className="text-muted mt-4 text-sm leading-7">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="primary-button mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold"
              >
                Chọn gói
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Social proof</p>
          <h2 className="section-title">
            Những con số phản ánh năng lực vận hành và sự tin tưởng của khách hàng
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Counter key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="section-eyebrow">Khách hàng / Đối tác</p>
          <div className="mt-6 overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface-2)] py-5 shadow-[0_24px_70px_-45px_rgba(7,26,49,0.16)]">
            <div className="marquee-track flex items-center gap-5 px-5">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-3)] px-5 py-4 text-center text-sm font-semibold text-[var(--text-secondary)]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Blog / SEO content</p>
            <h2 className="section-title">
              Nội dung chuyên sâu giúp doanh nghiệp hiểu đúng và đầu tư đúng
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-[var(--brand-blue-deep)]"
          >
            Xem tất cả bài viết
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface-2)] p-6 shadow-[0_24px_70px_-45px_rgba(7,26,49,0.18)]"
            >
              <span className="rounded-full bg-[rgba(30,136,229,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-deep)]">
                {post.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-[var(--text-primary)]">
                {post.title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-7">{post.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex text-sm font-semibold text-[var(--brand-blue-deep)]"
              >
                Đọc tiếp
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="gradient-border rounded-[36px] bg-[linear-gradient(135deg,#071726,#0a2341,#10407a)] px-7 py-12 text-white shadow-[0_32px_90px_-36px_rgba(30,136,229,0.38)] md:px-12">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Khởi động dự án của bạn ngay hôm nay
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/85">
            Nhận tư vấn miễn phí từ đội ngũ KIỀU GIA GROUP để chọn đúng giải
            pháp domain, hosting, cloud, website, SEO và AI phù hợp với mục
            tiêu tăng trưởng của doanh nghiệp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#top"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[var(--brand-blue-deep)] transition hover:bg-sky-50"
            >
              Đăng ký ngay
            </a>
            <a
              href="tel:+84822223112"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-soft)] bg-[var(--surface-2)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo className="h-12 w-12" />
              <p className="text-lg font-semibold text-[var(--text-primary)]">
                KIỀU GIA GROUP
              </p>
            </div>
            <p className="text-muted mt-5 text-sm leading-7">
              Giải pháp công nghệ và hạ tầng số cho doanh nghiệp trong thời đại AI.
            </p>
          </div>

          <div>
            <p className="text-subtle text-sm font-semibold uppercase tracking-[0.2em]">
              Liên hệ
            </p>
            <div className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
              <p>Hotline: 0822 223 112</p>
              <p>Email: support@kieugia.vn</p>
              <p>Nha Trang, Khánh Hòa</p>
            </div>
          </div>

          <div>
            <p className="text-subtle text-sm font-semibold uppercase tracking-[0.2em]">
              Social
            </p>
            <div className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
              <a href="#top" className="block hover:text-[var(--brand-blue-deep)]">
                Facebook
              </a>
              <a href="#top" className="block hover:text-[var(--brand-blue-deep)]">
                LinkedIn
              </a>
              <a href="#top" className="block hover:text-[var(--brand-blue-deep)]">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <p className="text-subtle text-sm font-semibold uppercase tracking-[0.2em]">
              Bản đồ
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border-soft)]">
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
    </main>
  );
}
