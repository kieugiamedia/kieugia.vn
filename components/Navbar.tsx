import { Home, LayoutGrid, Newspaper, Phone } from "lucide-react";

const items = [
  { label: "Trang chủ", icon: Home, active: true },
  { label: "Hệ sinh thái", icon: LayoutGrid },
  { label: "Tin tức", icon: Newspaper },
  { label: "Liên hệ", icon: Phone },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
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
  );
}
