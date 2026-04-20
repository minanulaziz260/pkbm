"use client";
import { ArrowRight, Users, Award, Play } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    setTimeout(() => titleRef.current?.classList.add("visible"), 100);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-teal-DEFAULT/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-gold-DEFAULT/20 rounded-full blur-3xl animate-float" style={{ animationDelay:"3s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="reveal visible inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Award className="w-4 h-4 text-gold-DEFAULT" />
            <span className="text-white/90 text-sm font-medium">Akreditasi A · NPSN P2964100</span>
          </div>

          {/* Headline */}
          <h1 ref={titleRef} className="reveal font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Belajar Tanpa Batas,{" "}
            <span className="gradient-text">Raih Masa Depan</span>{" "}
            Cerah
          </h1>

          <p className="reveal text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
            PKBM MUGI SAE hadir untuk memberikan kesempatan pendidikan berkualitas bagi semua —
            tanpa batasan usia, tempat, atau waktu. Program Paket A, B, dan C dengan jadwal
            fleksibel yang bisa disesuaikan dengan aktivitas Anda.
          </p>

          {/* CTA */}
          <div className="reveal flex flex-wrap gap-4 mb-12">
            <a href="#daftar" className="btn-gold font-bold text-base px-8 py-4 rounded-2xl group">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#program" className="btn-secondary text-base px-8 py-4 rounded-2xl">
              <Play className="w-5 h-5" /> Lihat Program
            </a>
          </div>

          {/* Mini stats */}
          <div className="reveal grid grid-cols-3 gap-4 max-w-sm">
            {[
              { icon: Users, val: "500+",    label: "Alumni Sukses" },
              { val: "3",                    label: "Jenjang Paket" },
              { icon: Award, val: "Akred. A", label: "Terakreditasi" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <div className="font-display font-bold text-white text-xl">{s.val}</div>
                <div className="text-white/70 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-white/30 rounded-full overflow-hidden">
          <div className="w-full h-4 bg-teal-DEFAULT rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
            }
