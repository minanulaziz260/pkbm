"use client";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const WA_NUMBER = "628XXXXXXXXXX";

export default function Footer() {
  const scroll = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
  return (
    <footer className="bg-primary-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal-gradient flex items-center justify-center">🎓</div>
              <span className="font-display font-bold text-lg">PKBM <span className="text-teal-light">MUGI SAE</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Pusat Kegiatan Belajar Masyarakat yang berkomitmen menghadirkan pendidikan berkualitas untuk semua.
            </p>
            <div className="flex gap-3">
              {[
                { icon:Instagram,     href:"#",                          label:"Instagram" },
                { icon:Facebook,      href:"#",                          label:"Facebook" },
                { icon:Youtube,       href:"#",                          label:"YouTube" },
                { icon:MessageCircle, href:`https://wa.me/${WA_NUMBER}`, label:"WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 bg-white/10 hover:bg-teal-DEFAULT rounded-lg flex items-center justify-center transition-colors">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {[
            { title:"Program",    links:[{label:"Paket A – Setara SD",href:"#program"},{label:"Paket B – Setara SMP",href:"#program"},{label:"Paket C – Setara SMA",href:"#program"},{label:"Pendaftaran",href:"#daftar"}] },
            { title:"Informasi",  links:[{label:"Tentang Kami",href:"#tentang"},{label:"Keunggulan",href:"#keunggulan"},{label:"Galeri",href:"#galeri"},{label:"Kontak",href:"#kontak"}] },
            { title:"Legalitas",  links:[{label:"NPSN: P2964100",href:"#"},{label:"Akreditasi: B",href:"#"},{label:"Status: Swasta",href:"#"},{label:"Kemendikbud RI",href:"https://kemdikbud.go.id"}] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gold-DEFAULT mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button onClick={() => l.href.startsWith("#") ? scroll(l.href) : window.open(l.href,"_blank")}
                      className="text-white/60 hover:text-teal-light text-sm transition-colors text-left">
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} PKBM MUGI SAE. All rights reserved.</p>
          <div className="text-white/40 text-sm">Kepala Sekolah: <span className="text-gold-DEFAULT font-medium">Munandar</span></div>
        </div>
      </div>
    </footer>
  );
}
