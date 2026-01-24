import { Cpu, LineChart, Megaphone, Plane } from "lucide-react";

import Navbar from "../components/Navbar";

const ecosystem = [
  {
    title: "Kiều Gia Media",
    description: "Digital Marketing & Production Agency.",
    icon: Megaphone,
    accent:
      "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200",
  },
  {
    title: "KIGI AI",
    description: "Artificial Intelligence Solutions & Mobile Apps.",
    icon: Cpu,
    accent:
      "border-sky-200 bg-sky-50 text-sky-600 dark:border-sky-400/40 dark:bg-sky-400/10 dark:text-sky-200",
  },
  {
    title: "BookingTravel.vn",
    description: "Travel & Hospitality Platform.",
    icon: Plane,
    accent:
      "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-200",
  },
  {
    title: "Fintech",
    description: "Automated Trading Solutions.",
    icon: LineChart,
    accent:
      "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-400/40 dark:bg-indigo-400/10 dark:text-indigo-200",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <div className="mx-auto min-h-screen w-full max-w-md bg-white transition-colors duration-300 md:my-8 md:max-w-[1200px] md:rounded-[32px] md:border md:border-slate-200 md:shadow-[0_30px_70px_-50px_rgba(15,23,42,0.25)] dark:bg-slate-900/90 dark:md:border-slate-800 dark:md:shadow-[0_30px_70px_-55px_rgba(2,6,23,0.75)]">
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl opacity-70 animate-float dark:bg-amber-400/20" />
            <div className="absolute bottom-10 -left-12 h-48 w-48 rounded-full bg-sky-200/70 blur-3xl opacity-80 animate-float dark:bg-sky-500/20" />
          </div>
          <div className="relative mx-auto flex min-h-screen flex-col justify-center px-6 pb-24 pt-16 text-center md:min-h-[640px] md:flex-row md:items-center md:gap-16 md:px-12 md:pb-28 md:pt-32 md:text-left">
            <div className="flex-1">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-amber-700 transition-colors duration-300 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200 md:mx-0">
                Kiều Gia Group
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-5xl lg:text-6xl dark:text-white">
                Kiều Gia Group - Vị Thế Tiên Phong, Nâng Tầm Giá Trị
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base md:max-w-xl md:text-lg dark:text-slate-300">
                Hệ sinh thái Truyền thông - Công nghệ - Du lịch hàng đầu tại Nha
                Trang, kiến tạo chuẩn mực mới cho doanh nghiệp trong kỷ nguyên số.
              </p>
              <button
                type="button"
                className="mt-8 w-full min-h-[52px] rounded-full bg-slate-900 text-base font-semibold text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] transition hover:shadow-[0_22px_45px_-24px_rgba(15,23,42,0.45)] active:scale-95 dark:bg-amber-300 dark:text-slate-950 dark:shadow-[0_20px_45px_-24px_rgba(251,191,36,0.45)] dark:hover:bg-amber-200 md:w-auto md:px-10"
              >
                Khám phá hệ sinh thái
              </button>
              <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-500 dark:text-slate-400 md:grid-cols-4 md:gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_12px_30px_-24px_rgba(2,6,23,0.8)]">
                  Trụ sở
                  <p className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                    26 Nguyễn Đình Chiểu
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_12px_30px_-24px_rgba(2,6,23,0.8)]">
                  Thành phố
                  <p className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                    Nha Trang
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_12px_30px_-24px_rgba(2,6,23,0.8)]">
                  Hotline
                  <p className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                    082.222.3112
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_12px_30px_-24px_rgba(2,6,23,0.8)]">
                  CEO
                  <p className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                    Kiều Thiên Bảo
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-12 flex-1 md:mt-0">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.25)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_30px_70px_-55px_rgba(2,6,23,0.75)] md:max-w-none">
                <div className="absolute -top-10 -right-12 h-40 w-40 rounded-full bg-amber-200/70 blur-3xl animate-float dark:bg-amber-400/20" />
                <div className="absolute -bottom-12 left-0 h-48 w-48 rounded-full bg-sky-200/70 blur-3xl animate-float dark:bg-sky-500/20" />
                <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(248,250,252,0.95)_55%,_rgba(226,232,240,0.85)_100%)] p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top,_rgba(30,41,59,0.9),_rgba(15,23,42,0.95)_55%,_rgba(2,6,23,0.95)_100%)]">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    <span>Luxury Digital</span>
                    <span className="text-amber-600 dark:text-amber-300">
                      3D Core
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                      Media
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                      AI
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                      Travel
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                      Fintech
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                      Strategy
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                      Growth
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Precision meets prestige.</span>
                    <span className="font-semibold text-amber-700 dark:text-amber-300">
                      Kiều Gia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8 pt-10 md:px-10 md:pt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
                Hệ sinh thái
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                4 trụ cột chiến lược
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 md:hidden">
              Swipe
            </span>
          </div>
          <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
            {ecosystem.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className="relative min-h-[220px] w-[240px] flex-shrink-0 snap-center rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.18)] transition active:scale-95 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_16px_40px_-30px_rgba(2,6,23,0.7)] md:w-auto md:snap-none md:p-6"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50 via-transparent to-transparent opacity-70 dark:from-amber-500/10" />
                <div className="relative flex h-full flex-col justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 ${accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_12px_40px_-32px_rgba(2,6,23,0.7)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
                Tầm nhìn
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                Kiến tạo hệ sinh thái công nghệ & dịch vụ đẳng cấp quốc tế
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                CEO Kiều Thiên Bảo định hướng Kiều Gia Group trở thành biểu
                tượng doanh nghiệp đa ngành tại Nha Trang, tiên phong ứng dụng
                công nghệ để nâng tầm giá trị cho cộng đồng và đối tác.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_12px_40px_-32px_rgba(2,6,23,0.7)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
                Sứ mệnh
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                Kết nối truyền thông, AI, du lịch và tài chính
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Từ trung tâm 26 Nguyễn Đình Chiểu, chúng tôi đồng hành cùng
                doanh nghiệp trong chuyển đổi số, cung cấp giải pháp tối ưu hóa
                vận hành và trải nghiệm khách hàng trên mọi điểm chạm.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-[0_12px_40px_-32px_rgba(2,6,23,0.7)]">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
                Liên hệ
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>26 Nguyễn Đình Chiểu, Nha Trang</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  082.222.3112
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
