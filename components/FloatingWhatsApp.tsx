"use client";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WA_NUMBER = "6283113447280";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 w-72 animate-scale-in overflow-hidden">
          <div className="bg-green-500 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-2xl">👨‍💼</div>
            <div>
              <div className="text-white font-bold text-sm">PKBM MUGI SAE</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-200 animate-pulse" />
                <span className="text-green-100 text-xs">Online sekarang</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/80 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-gray-700 dark:text-gray-300 text-sm mb-4">
              Halo! 👋 Ada yang bisa kami bantu? Tanyakan info pendaftaran, program, atau jadwal belajar di sini.
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=Halo+PKBM+MUGI+SAE,+saya+ingin+bertanya+tentang+pendaftaran`}
              target="_blank" rel="noopener"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
              <MessageCircle className="w-4 h-4" /> Mulai Chat WhatsApp
            </a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-glow">
        {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
}
