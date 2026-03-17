"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadModal({ open, onClose }: LeadModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Đóng hộp thoại"
            onClick={onClose}
            className="absolute inset-0 bg-[color-mix(in_srgb,var(--dark-bg-fixed)_72%,transparent)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card relative z-10 w-full max-w-[560px] rounded-[28px] p-7 shadow-[var(--shadow-soft)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng"
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--panel-border)] text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="section-eyebrow">Tư vấn nhanh</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">
              Nhận đề xuất giải pháp phù hợp cho doanh nghiệp
            </h3>
            <p className="text-muted mt-3 text-sm leading-7">
              Đội ngũ KIỀU GIA GROUP sẽ liên hệ trong 15 phút để tư vấn gói phù
              hợp về hạ tầng số, AI và SEO.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                onClose();
              }}
            >
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Họ và tên
                </span>
                <input
                  type="text"
                  placeholder="Ví dụ: Sếp Bảo"
                  className="brand-input w-full rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Số điện thoại
                  </span>
                  <input
                    type="tel"
                    placeholder="08xx xxx xxx"
                    className="brand-input w-full rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Dịch vụ quan tâm
                  </span>
                  <select className="brand-input w-full rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]">
                    <option>Hosting</option>
                    <option>Domain</option>
                    <option>VPS / Cloud</option>
                    <option>Thiết kế Website</option>
                    <option>AI Automation</option>
                    <option>SEO System</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Mô tả nhanh nhu cầu
                </span>
                <textarea
                  rows={4}
                  placeholder="Mục tiêu hiện tại, ngân sách và timeline triển khai..."
                  className="brand-input w-full resize-none rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                />
              </label>

              <button
                type="submit"
                className="primary-button mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition"
              >
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
