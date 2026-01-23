import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kiều Gia Group - Tiên Phong Công Nghệ & Truyền Thông",
  description:
    "Kiều Gia Group kiến tạo hệ sinh thái truyền thông, công nghệ, du lịch và tài chính tại Nha Trang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-navy text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
