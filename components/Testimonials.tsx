"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name:"Rini Wulandari",   level:"Alumni Paket C",         year:"2023", avatar:"👩",    rating:5, text:"Saya ibu rumah tangga 2 anak. Sempat menyerah untuk melanjutkan pendidikan. Tapi berkat PKBM MUGI SAE, saya akhirnya punya ijazah SMA dan kini bekerja di kantor desa. Terima kasih!" },
  { name:"Doni Setiawan",    level:"Alumni Paket B",         year:"2022", avatar:"👨",    rating:5, text:"Saya putus sekolah karena harus bantu orang tua. Di PKBM ini saya bisa belajar malam hari sambil kerja siang. Alhamdulillah lulus!" },
  { name:"Siti Fauziah",     level:"Warga Belajar Paket C",  year:"2024", avatar:"👩‍🎓",  rating:5, text:"Gurunya sabar sekali. Saya usia 35 tahun pun diperlakukan sama. Materinya mudah dipahami. Sangat direkomendasikan!" },
  { name:"Ari Budi Santoso", level:"Alumni Paket A",         year:"2021", avatar:"👨‍💼", rating:5, text:"Saya tidak pernah kelar SD karena harus merantau. Di usia 45 tahun, akhirnya punya ijazah SD. Anak-anak saya bangga!" },
  { name:"Dewi Rahayu",      level:"Alumni Paket C",         year:"2023", avatar:"👩‍💻", rating:5, text:"Prosesnya mudah dan tidak ribet. Dari pendaftaran sampai ujian semua dibantu. Sekarang saya mempersiapkan diri untuk kuliah!" },
  { name:"Hasan Nugroho",    level:"Warga Belajar Paket B",  year:"2024", avatar:"👨‍🏫", rating:5, text:"Biayanya sangat terjangkau, jauh lebih murah dari yang saya bayangkan. Fasilitas lengkap, tutor kompeten dan selalu siap membantu." },
];

export default function Testimonials() {
  useScrollAnimation();
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Testimoni</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Kata Mereka yang Telah <span className="gradient-text">Membuktikan</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal card p-8 flex flex-col gap-4" style={{ transitionDelay:`${i*80}ms` }}>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-DEFAULT text-gold-DEFAULT" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-11 h-11 rounded-full bg-primary-DEFAULT/10 flex items-center justify-center text-2xl">{t.avatar}</div>
                <div>
                  <div className="font-semibold text-primary-DEFAULT dark:text-white text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.level} · {t.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
