'use client';

import { motion } from 'framer-motion';
import { biodata as data } from '@/lib/data';

export default function AboutSection() {
 return (
  <section id="about" className="py-16 md:py-32 px-6 max-w-[1280px] mx-auto overflow-hidden">
   <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

    {/* About Text */}
    <div className="lg:col-span-7 self-start">
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
     >
      <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">the person</span>
      <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed">
       {data.about.split("I’m not perfect,").map((part, i, arr) => (
        <span key={i}>
         {part}
         {i < arr.length - 1 && (
          <span className="text-emerald-600 font-normal italic">
           I’m not perfect,
          </span>
         )}
        </span>
       ))}
      </p>
     </motion.div>
    </div>

    {/* Family & Education Sidebar */}
    <div className="lg:col-span-5 space-y-16">
     <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-12 bg-white/40 p-10 md:p-12 rounded-2xl border border-white/60 shadow-xl shadow-slate-100/20 backdrop-blur-md"
     >
      <div className="space-y-10">
       <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase block">Family Details</span>
       <div className="space-y-6">
        <DetailRow label="Father" value={data.family.father} />
        <DetailRow label="Mother" value={data.family.mother} />
        <DetailRow label="Siblings" value={data.family.siblings} />
        <DetailRow label="Hometown" value={data.stats.hometown} />
       </div>
      </div>

      <div className="space-y-6 pt-12 border-t border-slate-200/50">
       <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase block">Academic Path</span>
       <ul className="space-y-3">
        {(data.education as string[]).map((item, i) => (
         <li key={i} className="text-sm text-slate-700 font-light leading-relaxed flex gap-3">
          <span className="text-emerald-400">•</span>
          {item}
         </li>
        ))}
       </ul>
      </div>

      <div className="space-y-6 pt-12 border-t border-slate-200/50">
       <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase block">Current Work</span>
       <div className="space-y-2">
        <p className="text-sm text-slate-700 font-medium leading-relaxed">
         {(data.career as any).current}
        </p>
        <a
         href={(data.career as any).insta}
         target="_blank"
         rel="noopener noreferrer"
         className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest pt-2 hover:text-emerald-700 transition-colors inline-block border-b border-emerald-400/30 pb-0.5"
        >
         {(data.career as any).income}
        </a>
       </div>
      </div>

      <div className="space-y-6 pt-12 border-t border-slate-200/50">
       <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase block">Achievements</span>
       <p className="text-sm text-slate-700 font-light leading-relaxed italic">
        {(data.milestones as any).home}
       </p>
      </div>
     </motion.div>
    </div>

   </div>
  </section>
 );
}

function DetailRow({ label, value }: { label: string; value: string }) {
 return (
  <div className="flex justify-between items-baseline gap-6 group">
   <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold group-hover:text-emerald-500 transition-colors whitespace-nowrap">{label}</span>
   <div className="flex-1 border-b border-dotted border-slate-200" />
   <span className="text-sm md:text-base text-slate-700 font-light text-right">{value}</span>
  </div>
 );
}
