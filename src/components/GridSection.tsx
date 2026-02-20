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
  // Layout logic for editorial feel
  const getLayout = (sIdx: number) => {
    if (sIdx % 3 === 0) {
      return "columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2";
    }
    if (sIdx % 3 === 1) {
      return "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2";
    }
    return "columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4";
  };

  const getItemStyle = (imgIdx: number, sIdx: number) => {
    if (sIdx % 3 === 1) { // Bento-style logic
      const patterns = [
        "col-span-2 row-span-2 aspect-[4/5]",
        "col-span-1 row-span-1 aspect-square",
        "col-span-1 row-span-2 aspect-[3/5]",
        "col-span-2 row-span-1 aspect-[2/1]",
        "col-span-1 row-span-1 aspect-square",
      ];
      return patterns[imgIdx % patterns.length];
    }
    return "w-full";
  };

  return (
    <section id={id} className="py-20 max-w-[1280px] mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-10 mb-12">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-mono text-slate-300 mb-1">SECTION {index + 1}</span>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 tracking-tight lowercase">
            {title}
          </h2>
        </motion.div>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className={getLayout(index)}>
        {images.map((src, imgIdx) => (
          <motion.div
            key={`${id}-${imgIdx}`}
            className={`relative overflow-hidden bg-slate-50 group flex ${getItemStyle(imgIdx, index)}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: (imgIdx % 4) * 0.1,
              ease: [0.33, 1, 0.68, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Image
              src={src}
              alt={`${title} image ${imgIdx + 1}`}
              width={1000}
              height={1400}
              className="w-full h-full object-cover grayscale transition-all duration-1500 group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
