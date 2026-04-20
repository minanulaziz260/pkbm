"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

export default function About() {
  useScrollAnimation();
  return (
    <section id="tentang" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Tentang Kami</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Mengenal <span className="gradient-text">PKBM MUGI SAE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Sejarah */}
          <div className="reveal">
            <h3 className="font-display font-bold text-2xl text-primary-DEFAULT dark:text-white mb-4">Sejarah Singkat</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              PKBM MUGI SAE didirikan dengan semangat memberikan akses pendidikan setara bagi seluruh
              lapisan masyarakat. Berawal dari kepedulian terhadap warga yang tidak dapat mengakses
              pendidikan formal, lembaga ini hadir sebagai jembatan antara harapan dan kenyataan.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Dengan NPSN <strong className="text-primary-DEFAULT">P2964100</strong> dan akreditasi
              <strong className="text-gold-DEFAULT"> A</strong>, PKBM MUGI SAE telah membuktikan
              komitmennya dalam layanan pendidikan berkualitas bagi ratusan alumni.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title:"Inklusif",  desc:"Pendidikan untuk semua",           icon:"🤝" },
                { title:"Inovatif",  desc:"Metode belajar modern & adaptif",  icon:"💡" },
                { title:"Integritas",desc:"Amanah dalam proses belajar",      icon:"🏛️" },
                { title:"Inspiratif",desc:"Memotivasi meraih mimpi",           icon:"🌟" },
              ].map((v) => (
                <div key={v.title} className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="font-semibold text-primary-DEFAULT dark:text-white text-sm">{v.title}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visi Misi */}
          <div className="reveal space-y-6">
            <div className="bg-card-gradient rounded-3xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-4">🎯 Visi</h3>
              <p className="text-white/90 leading-relaxed">
                Menjadi pusat pendidikan nonformal terdepan yang menghasilkan warga belajar cerdas,
                berkarakter, dan berdaya saing tinggi demi masyarakat yang maju dan sejahtera.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="font-display font-bold text-xl text-primary-DEFAULT dark:text-white mb-4">🚀 Misi</h3>
              <ul className="space-y-3">
                {[
                  "Menyelenggarakan pendidikan kesetaraan berkualitas dan berstandar nasional",
                  "Mengembangkan program pembelajaran yang inovatif dan berbasis kebutuhan masyarakat",
                  "Membangun lingkungan belajar yang inklusif, aman, dan menyenangkan",
                  "Memberdayakan potensi warga belajar untuk meningkatkan taraf hidup",
                  "Menjalin kemitraan strategis dengan instansi pemerintah dan swasta",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-DEFAULT/10 text-teal-DEFAULT flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sambutan Kepala Sekolah */}
        <div className="reveal bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-3">
            <div className="bg-hero-gradient p-10 flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-5xl mb-4">👨‍💼</div>
              <div className="text-white font-display font-bold text-xl">Munandar</div>
              <div className="text-white/70 text-sm mt-1">Kepala PKBM MUGI SAE</div>
              <div className="mt-4 px-4 py-2 bg-gold-DEFAULT/20 border border-gold-DEFAULT/40 rounded-full text-gold-light text-xs font-medium">NPSN: P2964100</div>
            </div>
            <div className="md:col-span-2 p-10 flex flex-col justify-center">
              <Quote className="w-10 h-10 text-teal-DEFAULT/30 mb-4" />
              <h3 className="font-display font-bold text-2xl text-primary-DEFAULT dark:text-white mb-4">Sambutan Kepala PKBM</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">
                "Pendidikan adalah hak setiap warga negara tanpa terkecuali. PKBM MUGI SAE hadir sebagai
                wujud nyata komitmen kami bahwa tidak ada kata terlambat untuk belajar. Kami percaya
                setiap individu memiliki potensi luar biasa yang hanya perlu ruang dan kesempatan yang tepat."
              </p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="font-display font-bold text-primary-DEFAULT dark:text-white">Munandar</div>
                <div className="text-gray-400 text-sm">Kepala PKBM MUGI SAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
