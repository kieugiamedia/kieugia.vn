import { Cpu, LineChart, Megaphone, Plane } from "lucide-react";

import Navbar from "../components/Navbar";

const ecosystem = [
  {
    title: "Kiều Gia Media",
    description: "Digital Marketing & Production Agency.",
    icon: Megaphone,
    accent: "border-amber-200 bg-amber-50 text-amber-600",
  },
  {
    title: "KIGI AI",
    description: "Artificial Intelligence Solutions & Mobile Apps.",
    icon: Cpu,
    accent: "border-sky-200 bg-sky-50 text-sky-600",
  },
  {
    title: "BookingTravel.vn",
    description: "Travel & Hospitality Platform.",
    icon: Plane,
    accent: "border-emerald-200 bg-emerald-50 text-emerald-600",
  },
  {
    title: "Fintech",
    description: "Automated Trading Solutions.",
    icon: LineChart,
    accent: "border-indigo-200 bg-indigo-50 text-indigo-600",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="mx-auto min-h-screen w-full max-w-md bg-white md:my-8 md:max-w-[1200px] md:rounded-[32px] md:border md:border-slate-200 md:shadow-[0_30px_70px_-50px_rgba(15,23,42,0.25)]">
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl opacity-70 animate-float" />
            <div className="absolute bottom-10 -left-12 h-48 w-48 rounded-full bg-sky-200/70 blur-3xl opacity-80 animate-float" />
          </div>
          <div className="relative mx-auto flex min-h-screen flex-col justify-center px-6 pb-24 pt-16 text-center md:min-h-[640px] md:flex-row md:items-center md:gap-16 md:px-12 md:pb-28 md:pt-32 md:text-left">
            <div className="flex-1">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-amber-700 md:mx-0">
                Kiều Gia Group
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-5xl lg:text-6xl">
                Kiều Gia Group - Vị Thế Tiên Phong, Nâng Tầm Giá Trị
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base md:max-w-xl md:text-lg">
                Hệ sinh thái Truyền thông - Công nghệ - Du lịch hàng đầu tại Nha
                Trang, kiến tạo chuẩn mực mới cho doanh nghiệp trong kỷ nguyên số.
              </p>
              <button
                type="button"
                className="mt-8 w-full min-h-[52px] rounded-full bg-slate-900 text-base font-semibold text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] transition hover:shadow-[0_22px_45px_-24px_rgba(15,23,42,0.45)] active:scale-95 md:w-auto md:px-10"
              >
                Khám phá hệ sinh thái
              </button>
              <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-500 md:grid-cols-4 md:gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm">
                  Trụ sở
                  <p className="mt-1 text-sm text-slate-900">
                    26 Nguyễn Đình Chiểu
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm">
                  Thành phố
                  <p className="mt-1 text-sm text-slate-900">Nha Trang</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm">
                  Hotline
                  <p className="mt-1 text-sm text-slate-900">082.222.3112</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm">
                  CEO
                  <p className="mt-1 text-sm text-slate-900">Kiều Thiên Bảo</p>
                </div>
              </div>
            </div>
            <div className="relative mt-12 flex-1 md:mt-0">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.25)] md:max-w-none">
                <div className="absolute -top-10 -right-12 h-40 w-40 rounded-full bg-amber-200/70 blur-3xl animate-float" />
                <div className="absolute -bottom-12 left-0 h-48 w-48 rounded-full bg-sky-200/70 blur-3xl animate-float" />
                <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(248,250,252,0.95)_55%,_rgba(226,232,240,0.85)_100%)] p-6">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-slate-500">
                    <span>Luxury Digital</span>
                    <span className="text-amber-600">3D Core</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs text-slate-600">
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                      Media
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                      AI
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                      Travel
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                      Fintech
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                      Strategy
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                      Growth
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Precision meets prestige.</span>
                    <span className="font-semibold text-amber-700">Kiều Gia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8 pt-10 md:px-10 md:pt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-600">
                Hệ sinh thái
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                4 trụ cột chiến lược
              </h2>
            </div>
            <span className="text-xs text-slate-500 md:hidden">Swipe</span>
          </div>
          <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
            {ecosystem.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className="relative min-h-[220px] w-[240px] flex-shrink-0 snap-center rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.18)] transition active:scale-95 md:w-auto md:snap-none md:p-6"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50 via-transparent to-transparent opacity-70" />
                <div className="relative flex h-full flex-col justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm ${accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-600">
                Tầm nhìn
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                Kiến tạo hệ sinh thái công nghệ & dịch vụ đẳng cấp quốc tế
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                CEO Kiều Thiên Bảo định hướng Kiều Gia Group trở thành biểu
                tượng doanh nghiệp đa ngành tại Nha Trang, tiên phong ứng dụng
                công nghệ để nâng tầm giá trị cho cộng đồng và đối tác.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-600">
                Sứ mệnh
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                Kết nối truyền thông, AI, du lịch và tài chính
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Từ trung tâm 26 Nguyễn Đình Chiểu, chúng tôi đồng hành cùng
                doanh nghiệp trong chuyển đổi số, cung cấp giải pháp tối ưu hóa
                vận hành và trải nghiệm khách hàng trên mọi điểm chạm.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-600">
                Liên hệ
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span>26 Nguyễn Đình Chiểu, Nha Trang</span>
                <span className="font-semibold text-slate-900">082.222.3112</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
