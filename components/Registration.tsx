"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle } from "lucide-react";

const WA_NUMBER = "6283113447280"; // ← Ganti nomor WA aktif

export default function Registration() {
  useScrollAnimation();
  const [form, setForm] = useState({ nama:"", umur:"", hp:"", jenjang:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo PKBM MUGI SAE, saya ingin mendaftar:\n\n` +
      `Nama: ${form.nama}\nUmur: ${form.umur} tahun\nNo HP: ${form.hp}\nJenjang: ${form.jenjang}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="daftar" className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-DEFAULT/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-teal-light font-semibold text-sm tracking-widest uppercase">Pendaftaran</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-4">
            Mulai Perjalanan Belajar <span className="text-gold-DEFAULT">Anda Sekarang</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Isi formulir di bawah dan tim kami akan segera menghubungi Anda via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="reveal bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-display font-bold text-xl text-primary-DEFAULT dark:text-white mb-6">📝 Formulir Pendaftaran</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-teal-DEFAULT mb-4" />
                <h4 className="font-bold text-xl text-primary-DEFAULT dark:text-white mb-2">Berhasil!</h4>
                <p className="text-gray-500 text-sm">Anda diarahkan ke WhatsApp. Tim kami akan segera menghubungi Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id:"nama", label:"Nama Lengkap", type:"text",   placeholder:"Masukkan nama lengkap" },
                  { id:"umur", label:"Usia",          type:"number", placeholder:"Contoh: 25" },
                  { id:"hp",   label:"Nomor HP / WA", type:"tel",    placeholder:"Contoh: 08123456789" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{f.label}</label>
                    <input
                      type={f.type} required placeholder={f.placeholder}
                      value={(form as Record<string,string>)[f.id]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT transition-all placeholder-gray-400 text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Jenjang yang Diminati</label>
                  <select required value={form.jenjang} onChange={(e) => setForm((p) => ({ ...p, jenjang: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT transition-all text-sm">
                    <option value="">-- Pilih Program --</option>
                    <option value="Paket A (Setara SD)">Paket A – Setara SD</option>
                    <option value="Paket B (Setara SMP)">Paket B – Setara SMP</option>
                    <option value="Paket C (Setara SMA)">Paket C – Setara SMA</option>
                  </select>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="submit" className="flex-1 btn-primary justify-center py-3.5 rounded-xl">
                    <Send className="w-4 h-4" /> Kirim via WhatsApp
                  </button>
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <MessageCircle className="w-4 h-4" /> Chat Langsung
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Info syarat */}
          <div className="reveal space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <h3 className="font-display font-bold text-xl text-white mb-5">📋 Syarat Pendaftaran</h3>
              <ul className="space-y-4">
                {[
                  "Fotokopi ijazah terakhir (atau surat keterangan belum punya ijazah)",
                  "Fotokopi KTP / Kartu Keluarga",
                  "Pas foto 3×4 sebanyak 2 lembar",
                  "Mengisi formulir pendaftaran (bisa online / offline)",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-teal-DEFAULT flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i+1}</span>
                    <span className="text-white/85 text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gold-DEFAULT/20 border border-gold-DEFAULT/40 rounded-3xl p-8">
              <h3 className="font-display font-bold text-xl text-gold-light mb-3">🎁 Informasi Biaya</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Biaya pendidikan sangat terjangkau dan transparan. Tersedia cicilan dan program keringanan
                bagi warga belajar yang membutuhkan.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[{label:"Paket A",info:"Terjangkau"},{label:"Paket B",info:"Fleksibel"},{label:"Paket C",info:"Kompetitif"}].map((p) => (
                  <div key={p.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-gold-light font-bold text-sm">{p.label}</div>
                    <div className="text-white/70 text-xs mt-0.5">{p.info}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-xs mt-3">* Hubungi kami untuk info biaya lengkap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
