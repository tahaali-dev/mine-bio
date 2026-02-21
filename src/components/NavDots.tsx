'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { biodata as data } from '@/lib/data';

export default function NavDots() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    ...data.sections.map((s, i) => ({ id: `section-${i}`, label: s.title })),
    { id: 'connect', label: 'Connect' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${section.label}`}
        >
          <span className="absolute right-6 text-[10px] whitespace-nowrap uppercase tracking-[0.2em] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {section.label}
          </span>
          <motion.div
            className={`w-[6px] h-[6px] rounded-full transition-all duration-500 ${activeSection === section.id ? 'bg-indigo-400 scale-125' : 'bg-slate-300/60'
              }`}
          />
        </a>
      ))}
    </div>
  );
}
