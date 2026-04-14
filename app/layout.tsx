"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <title>PKBM MUGI SAE – Belajar Tanpa Batas, Raih Masa Depan Cerah</title>
        <meta name="description" content="PKBM MUGI SAE adalah Pusat Kegiatan Belajar Masyarakat terakreditasi B yang menyediakan program Paket A, B, dan C. Pendidikan kesetaraan fleksibel, terjangkau, dan berkualitas." />
        <meta name="keywords" content="PKBM, kesetaraan, Paket A, Paket B, Paket C, pendidikan nonformal, MUGI SAE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="PKBM MUGI SAE – Pendidikan Kesetaraan Berkualitas" />
        <meta property="og:description" content="Raih ijazah setara SD, SMP, SMA dengan jadwal fleksibel bersama PKBM MUGI SAE." />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Navbar dark={dark} setDark={setDark} />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
