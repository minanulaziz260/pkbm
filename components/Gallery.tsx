"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const photos = [
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", alt: "Kegiatan belajar Paket C",  span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80", alt: "Diskusi kelompok belajar",  span: "" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", alt: "Ujian nasional kesetaraan", span: "" },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", alt: "Wisuda alumni PKBM",       span: "" },
  { src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80", alt: "Pembelajaran digital",     span: "" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80", alt: "Workshop keterampilan",     span: "col-span-2" },
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
