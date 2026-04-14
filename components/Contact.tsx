"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const WA_NUMBER = "6283113447280";

export default function Contact() {
  useScrollAnimation();
  return (
    <section id="kontak" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Kontak</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal space-y-5">
            {[
              { icon:MapPin,        label:"Alamat",            value:"JL Kh. Syahroni No. 51, [Jatibarang], [Brebes]",  color:"text-teal-DEFAULT",   bg:"bg-teal-DEFAULT/10" },
              { icon:Phone,         label:"Telepon / WA",      value:"+6283113447280",  color:"text-green-600",      bg:"bg-green-100 dark:bg-green-900/20", link:`https://wa.me/${WA_NUMBER}` },
              { icon:Mail,          label:"Email",             value:"pkbm.mugisae@gmail.com", color:"text-primary-DEFAULT", bg:"bg-primary-DEFAULT/10", link:"mailto:info@pkbmmugisae.sch.id" },
              { icon:Clock,         label:"Jam Operasional",   value:"Senin – Sabtu: 08.00 – 20.00 WIB", color:"text-gold-dark", bg:"bg-gold-DEFAULT/10" },
            ].map((c) => (
              <div key={c.label} className="card p-6 flex items-start gap-4">
                <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <c.icon className={`w-6 h-6 ${c.color}`} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">{c.label}</div>
                  {c.link
                    ? <a href={c.link} className={`font-semibold ${c.color} hover:underline`}>{c.value}</a>
                    : <div className="font-semibold text-gray-800 dark:text-gray-100">{c.value}</div>
                  }
                </div>
              </div>
            ))}
            <a href={`https://wa.me/${WA_NUMBER}?text=Halo+PKBM+MUGI+SAE`} target="_blank" rel="noopener"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg">
              <MessageCircle className="w-6 h-6" /> Chat WhatsApp Sekarang
            </a>
          </div>

          {/* Google Maps */}
          <div className="reveal rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 min-h-80">
            <iframe
              title="Lokasi PKBM MUGI SAE"
              src="https://www.google.com/maps?q=-6.9649,109.0621"
              width="100%" height="100%" style={{ border:0, minHeight:"320px" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
