'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { biodiversityData as data } from '@/lib/data';
import { useState } from 'react';

export default function Hero() {
 return (
  <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center px-6 max-w-[1280px] mx-auto border-b border-slate-100/30">
   <div className="w-full space-y-24">
    <div className="space-y-6">
     <motion.p
      className="text-[11px] uppercase font-bold tracking-[0.4em] text-slate-400"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
     >
      {data.industry} Engineering
     </motion.p>

     <motion.h1
      className="text-7xl md:text-[9rem] lg:text-[11rem] font-light text-slate-800 tracking-tighter leading-[0.85] -ml-1 md:-ml-2"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
     >
      {data.firstName}<br />
      <span className="text-slate-300 transition-colors duration-1000 group-hover:text-slate-400">
       {data.lastName}
      </span>
     </motion.h1>
    </div>

    <motion.div
     className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-12"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.8, duration: 1 }}
    >
     <div className="max-w-md">
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
       {data.role} focused on modern web architectures. Building digital solutions with a blend of logic and aesthetics.
      </p>
     </div>

     <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 border-l border-slate-200/50 pl-8">
      <StatBox label="Age" value={`${data.stats.age} Yrs`} />
      <StatBox
       label="Height"
       value={data.stats.height}
       tooltip="this is my strength"
      />
      <StatBox label="Hometown" value="Indore" />
      <StatBox label="Status" value={data.stats.status} />
     </div>
    </motion.div>
   </div>
  </section>
 );
}

function StatBox({ label, value, tooltip }: { label: string; value: string | number; tooltip?: string }) {
 const [isHovered, setIsHovered] = useState(false);

 return (
  <div
   className="flex flex-col relative group cursor-help"
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  >
   <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-1 leading-none">
    {label}
   </span>

   <span className="text-sm text-slate-700 font-medium whitespace-nowrap">
    {value}
   </span>

   <AnimatePresence>
    {isHovered && tooltip && (
     <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: -45, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute z-50 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl pointer-events-none"
      style={{ left: '50%', translateX: '-50%' }}
     >
      <p className="text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">
       {tooltip}
      </p>
      {/* Tooltip arrow */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 );
}
