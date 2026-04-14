"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react";
import clsx from "clsx";

const links = [
  { label: "Beranda",    href: "#home" },
  { label: "Tentang",    href: "#tentang" },
  { label: "Program",    href: "#program" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Galeri",     href: "#galeri" },
  { label: "Kontak",     href: "#kontak" },
];

interface Props { dark: boolean; setDark: (v: boolean) => void; }

export default function Navbar({ dark, setDark }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={clsx(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500",
      scrolled
        ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button onClick={() => handleNav("#home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-teal-gradient flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg">
            <span className={scrolled ? "text-primary-DEFAULT dark:text-white" : "text-white"}>PKBM</span>
            <span className="text-teal-DEFAULT"> MUGI SAE</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-teal-DEFAULT",
                  scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-teal-DEFAULT/10"
                    : "text-white/90 hover:bg-white/10"
                )}
              >{l.label}</button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className={clsx("p-2 rounded-lg transition-all",
              scrolled ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" : "text-white/90 hover:bg-white/10"
            )}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => handleNav("#daftar")} className="hidden lg:flex btn-primary text-sm py-2 px-5">
            Daftar Sekarang
          </button>
          <button onClick={() => setOpen(!open)} className={clsx("lg:hidden p-2 rounded-lg", scrolled ? "text-gray-700 dark:text-gray-200" : "text-white")}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={clsx(
        "lg:hidden bg-white dark:bg-gray-950 shadow-xl border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300",
        open ? "max-h-screen py-4" : "max-h-0 py-0"
      )}>
        <ul className="px-4 space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <button onClick={() => handleNav(l.href)} className="w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-teal-DEFAULT/10 hover:text-teal-DEFAULT transition-colors">
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => handleNav("#daftar")} className="w-full mt-2 btn-primary justify-center">
              Daftar Sekarang
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
