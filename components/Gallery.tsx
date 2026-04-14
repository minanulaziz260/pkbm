"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const photos = [
  { src: "/images/foto1.jpg", alt: "Kegiatan belajar Paket C",  span: "col-span-2 row-span-2" },
  { src: "/images/foto2.jpg", alt: "Diskusi kelompok belajar",  span: "" },
  { src: "/images/foto3.jpg", alt: "Ujian nasional kesetaraan", span: "" },
  { src: "/images/foto4.jpg", alt: "Wisuda alumni PKBM",        span: "" },
  { src: "/images/foto5.jpg", alt: "Pembelajaran digital",      span: "" },
  { src: "/images/foto6.jpg", alt: "Workshop keterampilan",     span: "col-span-2" },
];

export default function Gallery() {
  useScrollAnimation();
  return (
    <section id="galeri" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Galeri</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Momen <span className="gradient-text">Belajar Bersama</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Setiap foto menceritakan semangat warga belajar PKBM MUGI SAE dalam meraih pendidikan lebih baik.
          </p>
        </div>
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl ${p.span} group cursor-pointer`}>
              <Image src={p.src} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-primary-DEFAULT/0 group-hover:bg-primary-DEFAULT/50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {p.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    }
