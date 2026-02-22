'use client';

import { motion } from 'framer-motion';
import { biodata as data } from '@/lib/data';

export default function Footer() {
 const whatsappNumber = "9424311753";
 const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

 return (
  <footer id="connect" className="py-16 md:py-32 px-6 mt-10 md:mt-20 border-t border-slate-100/50">
   <div className="max-w-4xl mx-auto text-center space-y-16">
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     className="space-y-8"
    >
     <h2 className="text-4xl md:text-6xl font-light text-slate-800 leading-tight">
      {data.final.title}
     </h2>
     {/* <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
      {data.final.message}
     </p> */}
    </motion.div>

    <motion.div
     initial={{ opacity: 0, scale: 0.95 }}
     whileInView={{ opacity: 1, scale: 1 }}
     transition={{ delay: 0.2 }}
     viewport={{ once: true }}
    >
     <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border border-slate-300 text-slate-600 px-12 py-5 rounded-full text-sm font-semibold tracking-wide hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-500 shadow-sm"
     >
      Begin a Conversation
     </a>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left pt-20 border-t border-slate-200/50">
     <div className="space-y-6">
      <h4 className="text-[11px] uppercase tracking-[0.4em] text-slate-400 font-bold">Reach Out</h4>
      <ul className="space-y-4 text-base md:text-lg text-slate-600 font-light">
       <li>
        <a href={`mailto:${data.final.email}`} className="hover:text-emerald-600 transition-colors">
         {data.final.email}
        </a>
       </li>
       <li>
        <a href={`tel:+91${data.final.phone}`} className="hover:text-emerald-600 transition-colors">
         +91 {data.final.phone}
        </a>
       </li>
       <li>
        <a
         href={data.career.insta}
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-emerald-600 transition-colors"
        >
         Instagram: tahas.diary
        </a>
       </li>
      </ul>
     </div>
     <div className="space-y-6">
      <h4 className="text-[11px] uppercase tracking-[0.4em] text-slate-400 font-bold">Roots</h4>
      <p className="text-base md:text-lg text-slate-600 font-light">
       Based in Indore, building a life with purpose and sincerity.
      </p>
     </div>
    </div>

    {/* <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] uppercase tracking-[0.4em] font-medium">
     <p>© 2026 {data.name}</p>
     <p>Made with ❤️ in Indore</p>
    </div> */}
   </div>
  </footer>
 );
}
