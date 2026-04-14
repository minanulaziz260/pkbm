"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Wallet, Users, Briefcase, Shield, Star } from "lucide-react";

const advantages = [
  { icon: Clock,    title: "Jadwal Fleksibel",    desc: "Pilih jadwal pagi, sore, atau malam — sesuai aktivitas Anda.",                              color: "text-teal-DEFAULT",   bg: "bg-teal-DEFAULT/10",   border: "hover:border-teal-DEFAULT" },
  { icon: Wallet,   title: "Biaya Terjangkau",    desc: "Investasi ringan dengan cicilan fleksibel. Ada beasiswa bagi yang membutuhkan.",             color: "text-gold-dark",      bg: "bg-gold-DEFAULT/10",   border: "hover:border-gold-DEFAULT" },
  { icon: Users,    title: "Guru Berpengalaman",  desc: "Tenaga pendidik bersertifikat dengan pengalaman mengajar lebih dari 5 tahun.",               color: "text-primary-DEFAULT",bg: "bg-primary-DEFAULT/10",border: "hover:border-primary-DEFAULT" },
  { icon: Briefcase,title: "Sambil Kerja/Usaha",  desc: "Tidak perlu berhenti bekerja. Program kami bisa dijalankan bersama aktivitas sehari-hari.",  color: "text-teal-dark",      bg: "bg-teal-dark/10",      border: "hover:border-teal-dark" },
  { icon: Shield,   title: "Ijazah Resmi Diakui", desc: "Ijazah diterbitkan resmi dan diakui Kemendikbud RI untuk keperluan kerja & studi lanjut.",   color: "text-primary-600",    bg: "bg-primary-100",       border: "hover:border-primary-400" },
  { icon: Star,     title: "Komunitas Aktif",     desc: "Bergabung dengan ratusan warga belajar yang saling mendukung dan menginspirasi.",            color: "text-gold-DEFAULT",   bg: "bg-gold-DEFAULT/10",   border: "hover:border-gold-DEFAULT" },
];

export default function Advantages() {
  useScrollAnimation();
  return (
    <section id="keunggulan" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Keunggulan</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Mengapa Memilih <span className="gradient-text">PKBM MUGI SAE</span>?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Kami berkomitmen menghadirkan pengalaman belajar nyaman, bermakna, dan memberdayakan setiap warga belajar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <div key={a.title} className={`reveal card p-8 border-2 border-transparent ${a.border} group cursor-default`} style={{ transitionDelay:`${i*80}ms` }}>
              <div className={`w-14 h-14 ${a.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <a.icon className={`w-7 h-7 ${a.color}`} />
              </div>
              <h3 className={`font-display font-bold text-lg ${a.color} mb-2`}>{a.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
