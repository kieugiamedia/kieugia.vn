import { Home, LayoutGrid, Newspaper, Phone } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

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
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-6 py-4 text-sm text-slate-600 backdrop-blur-md shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)] transition-colors dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_20px_60px_-40px_rgba(2,6,23,0.65)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white dark:bg-amber-200 dark:text-slate-950">
                KG
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Kiều Gia Group
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Hệ sinh thái cao cấp
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6">
                {items.map(({ label, active }) => (
                  <button
                    key={label}
                    type="button"
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-sm transition ${
                      active
                        ? "bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-auto w-full max-w-md px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-center justify-between gap-2 rounded-3xl border border-slate-200 bg-white/95 px-3 py-3 text-xs text-slate-500 backdrop-blur-md shadow-[0_10px_30px_-18px_rgba(15,23,42,0.2)] transition-colors dark:border-slate-800 dark:bg-slate-900/95 dark:text-slate-400 dark:shadow-[0_10px_30px_-18px_rgba(2,6,23,0.6)]">
            {items.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                type="button"
                aria-current={active ? "page" : undefined}
                className={`flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 transition active:scale-95 ${
                  active
                    ? "bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px] font-medium">{label}</span>
              </button>
            ))}
            <ThemeToggle
              showLabel={false}
              className="flex-none rounded-2xl px-2 py-2"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
