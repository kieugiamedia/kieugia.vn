import { Cpu, LineChart, Megaphone, Plane } from "lucide-react";

import Navbar from "../components/Navbar";

const ecosystem = [
  {
    title: "Kiều Gia Media",
    description: "Digital Marketing & Production Agency.",
    icon: Megaphone,
    accent: "border-gold/40 text-gold",
  },
  {
    title: "KIGI AI",
    description: "Artificial Intelligence Solutions & Mobile Apps.",
    icon: Cpu,
    accent: "border-cyan-300/40 text-cyan-200",
  },
  {
    title: "BookingTravel.vn",
    description: "Travel & Hospitality Platform.",
    icon: Plane,
    accent: "border-emerald-300/40 text-emerald-200",
  },
  {
    title: "Fintech",
    description: "Automated Trading Solutions.",
    icon: LineChart,
    accent: "border-amber-300/40 text-amber-200",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      <div className="mx-auto min-h-screen w-full max-w-md bg-[#0f172a] lg:my-10 lg:rounded-[32px] lg:border lg:border-white/10 lg:shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-[#0f172a]">
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-gold/40 via-gold/5 to-transparent blur-3xl opacity-70 animate-float" />
            <div className="absolute bottom-10 -left-12 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-transparent blur-3xl opacity-70 animate-float" />
          </div>
          <div className="relative flex h-screen flex-col justify-center px-6 pb-24 pt-10 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-200">
              Kiều Gia Group
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Kiều Gia Group - Vị Thế Tiên Phong, Nâng Tầm Giá Trị
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              Hệ sinh thái Truyền thông - Công nghệ - Du lịch hàng đầu tại Nha
              Trang, kiến tạo chuẩn mực mới cho doanh nghiệp trong kỷ nguyên số.
            </p>
            <button
              type="button"
              className="mt-8 w-full min-h-[52px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#e9cd75] to-[#c6971a] text-base font-semibold text-slate-900 shadow-[0_16px_40px_-24px_rgba(212,175,55,0.9)] transition active:scale-95"
            >
              Khám phá hệ sinh thái
            </button>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left">
                Trụ sở
                <p className="mt-1 text-sm text-white">26 Nguyễn Đình Chiểu</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left">
                Thành phố
                <p className="mt-1 text-sm text-white">Nha Trang</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left">
                Hotline
                <p className="mt-1 text-sm text-white">082.222.3112</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left">
                CEO
                <p className="mt-1 text-sm text-white">Kiều Thiên Bảo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8 pt-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold/90">
                Hệ sinh thái
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                4 trụ cột chiến lược
              </h2>
            </div>
            <span className="text-xs text-slate-400">Swipe</span>
          </div>
          <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {ecosystem.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className="relative min-h-[220px] w-[240px] flex-shrink-0 snap-center rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/90 p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.8)] transition active:scale-95"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
                <div className="relative flex h-full flex-col justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-white/5 ${accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300/80">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold/90">
                Tầm nhìn
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                Kiến tạo hệ sinh thái công nghệ & dịch vụ đẳng cấp quốc tế
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                CEO Kiều Thiên Bảo định hướng Kiều Gia Group trở thành biểu
                tượng doanh nghiệp đa ngành tại Nha Trang, tiên phong ứng dụng
                công nghệ để nâng tầm giá trị cho cộng đồng và đối tác.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold/90">
                Sứ mệnh
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                Kết nối truyền thông, AI, du lịch và tài chính
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Từ trung tâm 26 Nguyễn Đình Chiểu, chúng tôi đồng hành cùng
                doanh nghiệp trong chuyển đổi số, cung cấp giải pháp tối ưu hóa
                vận hành và trải nghiệm khách hàng trên mọi điểm chạm.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/90">
                Liên hệ
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                <span>26 Nguyễn Đình Chiểu, Nha Trang</span>
                <span className="font-semibold text-white">082.222.3112</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Navbar />
    </main>
  );
}
