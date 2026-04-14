"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, BookOpen, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users,    value: "500+",   label: "Alumni Sukses",      color: "text-teal-DEFAULT",   bg: "bg-teal-DEFAULT/10" },
  { icon: BookOpen, value: "3",      label: "Program Pendidikan", color: "text-gold-dark",      bg: "bg-gold-DEFAULT/10" },
  { icon: Award,    value: "B",      label: "Status Akreditasi",  color: "text-primary-DEFAULT",bg: "bg-primary-DEFAULT/10" },
  { icon: Clock,    value: "10+",    label: "Tahun Pengalaman",   color: "text-teal-dark",      bg: "bg-teal-dark/10" },
];

export default function Stats() {
  useScrollAnimation();
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal card p-8 text-center group" style={{ transitionDelay:`${i*100}ms` }}>
              <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <div className={`font-display font-extrabold text-4xl ${s.color} mb-1`}>{s.value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
