'use client';

import { motion } from 'framer-motion';
import { biodiversityData as data } from '@/lib/data';

export default function AboutSection() {
 return (
  <section id="about" className="py-32 px-6 max-w-[1280px] mx-auto overflow-hidden">
   <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

    {/* About Text */}
    <div className="lg:col-span-7 space-y-12">
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
     >
      <span className="text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase">the person</span>
      <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
       "{data.about}"
      </p>
     </motion.div>

     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="space-y-6 pt-12 border-t border-slate-100"
     >
      <span className="text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase">outlook</span>
      <p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed">
       {data.outlook}
      </p>
     </motion.div>
    </div>

    {/* Family & Education Sidebar */}
    <div className="lg:col-span-5 space-y-16">
     <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-10 bg-slate-50/50 p-10 rounded-2xl border border-slate-100/50 backdrop-blur-sm"
     >
      <div className="space-y-6">
       <span className="text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase block">Family Details</span>
       <div className="space-y-4">
        <DetailRow label="Father" value={data.family.father} />
        <DetailRow label="Mother" value={data.family.mother} />
        <DetailRow label="Siblings" value={data.family.siblings} />
        <DetailRow label="Hometown" value={data.stats.hometown} />
       </div>
      </div>

      <div className="space-y-6 pt-10 border-t border-slate-200/50">
       <span className="text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase block">Academic Path</span>
       <p className="text-sm text-slate-600 font-medium leading-relaxed">
        {data.education}
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
  <div className="flex justify-between items-baseline gap-4 group">
   <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-indigo-400 transition-colors">{label}</span>
   <div className="flex-1 border-b border-dotted border-slate-200" />
   <span className="text-sm text-slate-600 font-light">{value}</span>
  </div>
 );
}
