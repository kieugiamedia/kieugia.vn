import { Home, LayoutGrid, Newspaper, Phone } from "lucide-react";

const items = [
  { label: "Trang chủ", icon: Home, active: true },
  { label: "Hệ sinh thái", icon: LayoutGrid },
  { label: "Tin tức", icon: Newspaper },
  { label: "Liên hệ", icon: Phone },
];

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-4 text-sm text-slate-200 backdrop-blur-md shadow-[0_20px_60px_-40px_rgba(15,23,42,0.85)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-sm font-semibold text-slate-900">
                KG
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Kiều Gia Group</p>
                <p className="text-xs text-slate-400">Hệ sinh thái cao cấp</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {items.map(({ label, active }) => (
                <button
                  key={label}
                  type="button"
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm transition hover:text-white ${
                    active ? "text-white" : "text-slate-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-auto w-full max-w-md px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-center justify-between gap-2 rounded-3xl border border-white/10 bg-slate-950/70 px-3 py-3 text-xs text-slate-300 backdrop-blur-md shadow-[0_10px_30px_-18px_rgba(15,23,42,0.8)]">
            {items.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                type="button"
                aria-current={active ? "page" : undefined}
                className={`flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 transition active:scale-95 ${
                  active ? "text-white" : "text-slate-400"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px] font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
