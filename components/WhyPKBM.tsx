"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const comparisons = [
  { aspect: "Jadwal belajar",       pkbm: "Sangat fleksibel",          formal: "Terikat jam sekolah" },
  { aspect: "Usia peserta didik",   pkbm: "Semua usia",                formal: "Usia sekolah tertentu" },
  { aspect: "Biaya pendidikan",     pkbm: "Terjangkau & ada beasiswa", formal: "Relatif lebih mahal" },
  { aspect: "Lokasi belajar",       pkbm: "Bisa di mana saja",         formal: "Harus di sekolah" },
  { aspect: "Kecepatan belajar",    pkbm: "Sesuai kemampuan individu", formal: "Seragam satu kelas" },
  { aspect: "Sambil kerja",         pkbm: "Sangat mendukung",          formal: "Tidak fleksibel" },
  { aspect: "Ijazah diakui",        pkbm: "✅ Diakui nasional",         formal: "✅ Diakui nasional" },
  { aspect: "Pendekatan personal",  pkbm: "Intensif & individual",     formal: "Klasikal umum" },
];

export default function WhyPKBM() {
  useScrollAnimation();
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Perbandingan</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">PKBM vs Sekolah Formal</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Pahami perbedaannya dan temukan mengapa PKBM menjadi pilihan cerdas jutaan warga Indonesia.
          </p>
        </div>
        <div className="reveal overflow-hidden rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold p-5 text-left">Aspek</th>
                <th className="bg-primary-700 text-white font-bold p-5 text-center">⭐ PKBM MUGI SAE</th>
                <th className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold p-5 text-center">Sekolah Formal</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={row.aspect} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
                  <td className="p-5 font-medium text-gray-700 dark:text-gray-300">{row.aspect}</td>
                  <td className="p-5 text-center">
                    <span className="inline-flex items-center gap-1 text-teal-dark dark:text-teal-light font-medium">
                      <Check className="w-4 h-4 text-teal-DEFAULT" /> {row.pkbm}
                    </span>
                  </td>
                  <td className="p-5 text-center text-gray-500 dark:text-gray-400">{row.formal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="reveal text-center mt-12">
          <a href="#daftar" className="btn-primary text-base px-10 py-4 rounded-2xl inline-flex">
            Bergabung Sekarang — Gratis Konsultasi
          </a>
        </div>
      </div>
    </section>
  );
}
