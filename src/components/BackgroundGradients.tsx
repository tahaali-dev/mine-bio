'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundGradients() {
 const { scrollYProgress } = useScroll();

 // Dynamic movement for deeper parallax feel
 const blob1X = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "30%", "10%"]);
 const blob1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["5%", "40%", "70%"]);

 const blob2X = useTransform(scrollYProgress, [0, 0.5, 1], ["90%", "60%", "110%"]);
 const blob2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "80%", "30%"]);

 // Increased Color Saturations for more impact
 // Blue: Royal Sky -> Electric Indigo -> Deep Slate
 const blueColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#60a5fa", "#818cf8", "#94a3b8"]);
 // Red: Bright Coral -> Deep Rose -> Soft Terracotta
 const redColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#f87171", "#fb7185", "#fca5a5"]);

 return (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#f4f7fa]">
   {/* High-Impact Blue Blob */}
   <motion.div
    className="absolute w-[75vw] h-[75vw] rounded-full blur-[200px] opacity-[0.2]"
    style={{
     x: blob1X,
     y: blob1Y,
     backgroundColor: blueColor,
    }}
   />

   {/* High-Impact Red Blob */}
   <motion.div
    className="absolute w-[70vw] h-[70vw] rounded-full blur-[220px] opacity-[0.38]"
    style={{
     x: blob2X,
     y: blob2Y,
     backgroundColor: redColor,
    }}
   />

   {/* Noise Texture Overlay */}
   <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
   />

   {/* Subtle bottom vignette to ground the sections */}
   <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-linear-to-t from-[#f4f7fa] to-transparent" />
  </div>
 );
}
