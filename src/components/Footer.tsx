'use client';

import { motion } from 'framer-motion';
import { biodiversityData as data } from '@/lib/data';

export default function Footer() {
 return (
  <footer id="connect" className="py-32 px-6 mt-20 border-t border-slate-100/50">
   <div className="max-w-4xl mx-auto text-center space-y-16">
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     className="space-y-8"
    >
     <h2 className="text-4xl md:text-6xl font-light text-slate-800 leading-tight">
      I'm building more than websites – I'm building a <span className="italic text-indigo-400 font-normal">beautiful life</span> together.
     </h2>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, scale: 0.95 }}
     whileInView={{ opacity: 1, scale: 1 }}
     transition={{ delay: 0.2 }}
     viewport={{ once: true }}
    >
     <a
      href="mailto:hello@tahax.com"
      className="inline-block border border-slate-300 text-slate-600 px-12 py-5 rounded-full text-sm font-semibold tracking-wide hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-500 shadow-sm"
     >
      Let's Connect
     </a>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left pt-20 border-t border-slate-200/50">
     <div className="space-y-6">
      <h4 className="text-[11px] uppercase tracking-[0.4em] text-slate-400 font-bold">Contact</h4>
      <ul className="space-y-4 text-base md:text-lg text-slate-600 font-light">
       <li>hello@tahax.com</li>
       <li>+91 98765 43210</li>
       <li className="text-slate-400 text-sm">{data.stats.hometown}</li>
      </ul>
     </div>
     <div className="space-y-6">
      <h4 className="text-[11px] uppercase tracking-[0.4em] text-slate-400 font-bold">Social</h4>
      <div className="flex flex-wrap gap-8 text-base text-slate-600 font-light">
       <a href="#" className="hover:text-indigo-400 transition-all duration-300 border-b border-transparent hover:border-indigo-400 pb-1">Instagram</a>
       <a href="#" className="hover:text-indigo-400 transition-all duration-300 border-b border-transparent hover:border-indigo-400 pb-1">LinkedIn</a>
       <a href="#" className="hover:text-indigo-400 transition-all duration-300 border-b border-transparent hover:border-indigo-400 pb-1">Vsco</a>
      </div>
     </div>
    </div>

    <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] uppercase tracking-[0.4em] font-medium">
     <p>© 2026 {data.name}</p>
     <p>Made with ❤️ in Indore</p>
    </div>
   </div>
  </footer>
 );
}
