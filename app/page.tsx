import { Cpu, LineChart, Megaphone, Plane } from "lucide-react";

const ecosystem = [
  {
    title: "Kiều Gia Media",
    description: "Digital Marketing & Production Agency.",
    icon: Megaphone,
  },
  {
    title: "KIGI AI",
    description: "Artificial Intelligence Solutions & Mobile Apps.",
    icon: Cpu,
  },
  {
    title: "BookingTravel.vn",
    description: "Travel & Hospitality Platform.",
    icon: Plane,
  },
  {
    title: "Fintech",
    description: "Automated Trading Solutions.",
    icon: LineChart,
  },
];

export default function HomePage() {
  return (
    <main className="bg-navy text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gold">
              Kiều Gia Group
            </div>
            <h1 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Kiều Gia Group - Vị Thế Tiên Phong, Nâng Tầm Giá Trị
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-200/90 sm:text-lg">
              Hệ sinh thái Truyền thông - Công nghệ - Du lịch hàng đầu tại Nha
              Trang, kiến tạo chuẩn mực mới cho doanh nghiệp trong kỷ nguyên số.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200/80">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                Trụ sở: 26 Nguyễn Đình Chiểu
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                Nha Trang, Khánh Hòa
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                Hotline 082.222.3112
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">
                Ecosystem Highlights
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-base font-semibold text-white">
                    Technology & Service Leadership
                  </p>
                  <p className="mt-2 text-sm text-slate-300/80">
                    Dẫn dắt bởi CEO Kiều Thiên Bảo với chiến lược mở rộng bền vững.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-base font-semibold text-white">
                    Premium Corporate Identity
                  </p>
                  <p className="mt-2 text-sm text-slate-300/80">
                    Khẳng định vị thế doanh nghiệp đa ngành tại miền Trung.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-base font-semibold text-white">
                    Digital Transformation Partner
                  </p>
                  <p className="mt-2 text-sm text-slate-300/80">
                    Tối ưu trải nghiệm khách hàng bằng dữ liệu và tự động hóa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Hệ sinh thái
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              4 trụ cột chiến lược của Kiều Gia Group
            </h2>
          </div>
          <div className="hidden text-sm text-slate-300/80 md:block">
            Đồng bộ công nghệ - dịch vụ - truyền thông
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Tầm nhìn
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Kiến tạo hệ sinh thái công nghệ & dịch vụ đẳng cấp quốc tế
            </h3>
            <p className="mt-4 text-sm text-slate-300/80">
              CEO Kiều Thiên Bảo định hướng Kiều Gia Group trở thành biểu tượng
              doanh nghiệp đa ngành tại Nha Trang, tiên phong ứng dụng công nghệ
              để nâng tầm giá trị cho cộng đồng và đối tác.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Sứ mệnh
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Kết nối truyền thông, AI, du lịch và tài chính
            </h3>
            <p className="mt-4 text-sm text-slate-300/80">
              Từ trung tâm 26 Nguyễn Đình Chiểu, chúng tôi đồng hành cùng doanh
              nghiệp trong chuyển đổi số, cung cấp giải pháp tối ưu hóa vận hành
              và trải nghiệm khách hàng trên mọi điểm chạm.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-300/80 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">
              Kiều Gia Group
            </p>
            <p className="mt-2">26 Nguyễn Đình Chiểu, Nha Trang</p>
          </div>
          <div className="text-right">
            <p className="uppercase tracking-[0.2em] text-gold">Hotline</p>
            <p className="mt-2 text-base font-semibold text-white">
              082.222.3112
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
