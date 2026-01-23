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
      <Navbar />
      <div className="mx-auto min-h-screen w-full max-w-md bg-[#0f172a] md:my-10 md:max-w-[1280px] md:rounded-[32px] md:border md:border-white/10 md:shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-[#0f172a]">
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-gold/40 via-gold/5 to-transparent blur-3xl opacity-70 animate-float" />
            <div className="absolute bottom-10 -left-12 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-transparent blur-3xl opacity-70 animate-float" />
          </div>
          <div className="relative mx-auto flex min-h-screen flex-col justify-center px-6 pb-24 pt-16 text-center md:min-h-[640px] md:flex-row md:items-center md:gap-16 md:px-12 md:pb-28 md:pt-32 md:text-left">
            <div className="flex-1">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-gold-soft md:mx-0">
                Kiều Gia Group
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                Kiều Gia Group - Vị Thế Tiên Phong, Nâng Tầm Giá Trị
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base md:max-w-xl md:text-lg">
                Hệ sinh thái Truyền thông - Công nghệ - Du lịch hàng đầu tại Nha
                Trang, kiến tạo chuẩn mực mới cho doanh nghiệp trong kỷ nguyên số.
              </p>
              <button
                type="button"
                className="mt-8 w-full min-h-[52px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#e9cd75] to-[#c6971a] text-base font-semibold text-slate-900 shadow-[0_16px_40px_-24px_rgba(212,175,55,0.9)] transition active:scale-95 md:w-auto md:px-10"
              >
                Khám phá hệ sinh thái
              </button>
              <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-300 md:grid-cols-4 md:gap-4">
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
            <div className="relative mt-12 flex-1 md:mt-0">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_-50px_rgba(2,6,23,0.9)] md:max-w-none">
                <div className="absolute -top-10 -right-12 h-40 w-40 rounded-full bg-gold/30 blur-3xl animate-float" />
                <div className="absolute -bottom-12 left-0 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl animate-float" />
                <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_rgba(15,23,42,0.2)_55%,_rgba(15,23,42,0.95)_100%)] p-6">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-slate-200/80">
                    <span>Luxury Digital</span>
                    <span className="text-gold/90">3D Core</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs text-slate-200">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                      Media
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                      AI
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                      Travel
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                      Fintech
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                      Strategy
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                      Growth
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Precision meets prestige.</span>
                    <span className="font-semibold text-gold-soft">Kiều Gia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8 pt-10 md:px-10 md:pt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold/90">
                Hệ sinh thái
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                4 trụ cột chiến lược
              </h2>
            </div>
            <span className="text-xs text-slate-400 md:hidden">Swipe</span>
          </div>
          <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
            {ecosystem.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className="relative min-h-[220px] w-[240px] flex-shrink-0 snap-center rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/90 p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.8)] transition active:scale-95 md:w-auto md:snap-none md:p-6"
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

        <section className="px-6 pb-24 md:px-10 md:pb-16">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
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
    </main>
  );
}
