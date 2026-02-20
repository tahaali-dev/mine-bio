'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GridSectionProps {
  id: string;
  title: string;
  images: string[];
  index: number;
}

export default function GridSection({ id, title, images, index }: GridSectionProps) {
  // Grid Span Logic per index for variety
  const getSpanClass = (idx: number, sIdx: number) => {
    const patterns = [
      ["md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-1"],
      ["md:col-span-1 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-1"],
      ["md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-2", "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1"]
    ];
    const currentPattern = patterns[sIdx % patterns.length];
    return currentPattern[idx % currentPattern.length];
  };

  return (
    <section id={id} className="py-24 max-w-[1280px] mx-auto px-6">
      <div className="flex items-center gap-10 mb-20 px-2">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 mb-2 uppercase">SECTION 0{index + 1}</span>
          <h2 className="text-2xl md:text-3xl font-light text-slate-800 tracking-tight lowercase">
            {title}
          </h2>
        </motion.div>
        <div className="flex-1 h-px bg-slate-200/50" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((src, idx) => (
          <motion.div
            key={`${id}-${idx}`}
            className={`relative overflow-hidden group rounded-sm ${getSpanClass(idx, index)}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (idx % 4) * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`${title} element`}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
