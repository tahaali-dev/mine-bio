'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GridSectionProps {
  id: string;
  title: string;
  description?: string;
  images: string[];
  index: number;
}

export default function GridSection({ id, title, description, images, index }: GridSectionProps) {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [randomRots, setRandomRots] = useState<number[]>([]);

  useEffect(() => {
    // Shuffle images and generate subtle random rotations on mount
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    const rotations = images.map(() => (Math.random() - 0.5) * 2); // -1 to 1 degree
    setShuffledImages(shuffled);
    setRandomRots(rotations);
  }, [images]);

  // Grid Span Logic for a dense, balanced editorial feel
  const getSpanClass = (idx: number, sIdx: number) => {
    const patterns = [
      [
        "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-2",
        "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-1",
        "md:col-span-1 md:row-span-1",
      ],
      [
        "md:col-span-1 md:row-span-2", "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1",
        "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-2",
      ],
      [
        "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-2",
        "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1",
      ]
    ];
    const currentPattern = patterns[sIdx % patterns.length];
    return currentPattern[idx % currentPattern.length];
  };

  // We use images if shuffled list isn't ready yet (hydration safety)
  const displayImages = shuffledImages.length > 0 ? shuffledImages : images;

  return (
    <section id={id} className="py-12 md:py-24 max-w-[1280px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-6 px-2 items-end">
        <motion.div
          className="lg:col-span-5 flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight mb-6">
            {title}
          </h2>
        </motion.div>
        <div className="hidden lg:block lg:col-span-7 h-px bg-slate-200/50 mb-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
        {displayImages.map((src, idx) => (
          <motion.div
            key={`${id}-${src}-${idx}`}
            className={`relative overflow-hidden group rounded-xs border border-white/10 shadow-sm bg-slate-100 ${getSpanClass(idx, index)}`}
            style={{
              rotate: `${randomRots[idx] || 0}deg`
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: (idx % 4) * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`${title} element`}
                fill
                className="object-cover transition-all duration-1000 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index === 0 && idx < 2}
                quality={85}
              />
              {/* Mobile Grayscale Reveal Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/1 backdrop-grayscale md:hidden pointer-events-none"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              {/* Subtle Darkening Overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
