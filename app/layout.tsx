import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "YPIMWI - Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah",
    template: "%s | YPIMWI",
  },
  description: "Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah - Membangun generasi Qur'ani yang berakhlak mulia dan berprestasi. TK, SD, SMP, SMA, dan Pondok Pesantren Tahfidz.",
  keywords: ["yayasan pendidikan", "wahdah islamiyah", "tahfidz quran", "pondok pesantren", "homeschooling islami", "pendidikan islam"],
  authors: [{ name: "YPIMWI" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ypimwi.sch.id",
    siteName: "YPIMWI",
    title: "YPIMWI - Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah",
    description: "Membangun generasi Qur'ani yang berakhlak mulia dan berprestasi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="pt-[72px] md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
