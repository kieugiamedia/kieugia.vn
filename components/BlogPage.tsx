"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import { blogPosts } from "./site-content";

export default function BlogPage() {
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
            Blog / Knowledge Hub
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="hero-text mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl"
          >
            Thư viện kiến thức về hạ tầng số, AI và hệ thống tăng trưởng
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="hero-text-muted mt-6 max-w-3xl text-base leading-8"
          >
            Nội dung thực chiến giúp doanh nghiệp ra quyết định nhanh và đúng
            hơn khi đầu tư vào website, cloud, automation và SEO.
          </motion.p>
        </div>
      </section>

      <section className="section-block layout-shell pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ delay: index * 0.05 }}
              className="brand-card glass-card interactive-card rounded-[28px] p-7"
            >
              <div className="flex items-center justify-between">
                <span className="brand-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                  {post.category}
                </span>
                <span className="text-muted text-xs font-medium">{post.readTime}</span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold leading-9 text-[var(--text)]">
                {post.title}
              </h2>
              <p className="text-muted mt-3 text-sm leading-7">{post.excerpt}</p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
              >
                Đọc chi tiết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

