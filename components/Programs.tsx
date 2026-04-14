"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowRight } from "lucide-react";

const programs = [
  {
    level: "Paket A", setara: "Setara SD",
    color: "from-teal-DEFAULT to-teal-dark", textColor: "text-teal-DEFAULT",
    borderColor: "border-teal-DEFAULT", icon: "🎒", badge: "Dasar",
    desc: "Program kesetaraan SD bagi warga belajar yang belum menyelesaikan pendidikan SD/MI.",
    features: ["Usia minimal 15 tahun","Modul belajar mandiri","Ujian Nasional resmi","Ijazah diakui pemerintah","Bimbingan tutor berpengalaman"],
    duration: "3 – 6 Tahun",
  },
  {
    level: "Paket B", setara: "Setara SMP",
    color: "from-primary-700 to-primary-600", textColor: "text-primary-DEFAULT",
    borderColor: "border-primary-DEFAULT", icon: "📚", badge: "Populer", highlight: true,
    desc: "Program kesetaraan SMP/MTs untuk melanjutkan pendidikan tingkat menengah pertama.",
    features: ["Lulusan Paket A / SD sederajat","Tatap muka & daring","Kurikulum Merdeka","Nilai rapor terintegrasi","Bisa sambil bekerja"],
    duration: "3 – 5 Tahun",
  },
  {
    level: "Paket C", setara: "Setara SMA",
    color: "from-gold-DEFAULT to-gold-dark", textColor: "text-gold-dark",
    borderColor: "border-gold-DEFAULT", icon: "🎓", badge: "Unggulan",
    desc: "Program kesetaraan SMA/MA untuk membuka peluang ke perguruan tinggi dan dunia kerja.",
    features: ["Lulusan Paket B / SMP sederajat","Pilihan jurusan IPA / IPS","Persiapan SNBT / SNBP","Magang & sertifikasi profesi"],
    duration: "3 – 4 Tahun",
  },
];

export default function Programs() {
  useScrollAnimation();
  return (
    <section id="program" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Program Kami</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4">
            Pilih Jenjang <span className="gradient-text">Pendidikan Anda</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Tiga program kesetaraan resmi berdasarkan Permendikbud, ijazah diakui secara nasional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={p.level} className={`reveal relative rounded-3xl overflow-hidden border-2 ${p.borderColor} ${p.highlight ? "ring-4 ring-primary-DEFAULT/20 shadow-2xl scale-[1.02]" : "shadow-lg"} bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`} style={{ transitionDelay:`${i*120}ms` }}>
              <div className={`h-2 bg-gradient-to-r ${p.color}`} />
              <div className={`absolute top-6 right-6 bg-gradient-to-r ${p.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>{p.badge}</div>
              <div className="p-8">
                <div className="text-5xl mb-4">{p.icon}</div>
                <div className={`${p.textColor} font-display font-bold text-2xl mb-1`}>{p.level}</div>
                <div className="text-gray-500 dark:text-gray-400 font-medium mb-3">{p.setara}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.textColor}`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <div className="text-gray-400 text-xs">Durasi belajar</div>
                    <div className={`${p.textColor} font-bold text-sm`}>{p.duration}</div>
                  </div>
                  <a href="#daftar" className={`flex items-center gap-1.5 text-sm font-semibold ${p.textColor} hover:gap-3 transition-all`}>
                    Daftar <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flexibility note */}
        <div className="reveal mt-12 bg-gradient-to-r from-teal-DEFAULT/10 to-primary-DEFAULT/10 rounded-3xl p-8 border border-teal-DEFAULT/20">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-5xl">⚡</div>
            <div>
              <h3 className="font-display font-bold text-xl text-primary-DEFAULT dark:text-white mb-2">
                Fleksibilitas Penuh — Belajar di Mana Saja & Kapan Saja
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Semua program dirancang untuk Anda yang sibuk bekerja, mengurus keluarga, atau tinggal di daerah terpencil. Tersedia kelas pagi, sore, dan malam.
              </p>
            </div>
            <a href="#daftar" className="flex-shrink-0 btn-primary">Mulai Sekarang</a>
          </div>
        </div>
      </div>
    </section>
  );
}
