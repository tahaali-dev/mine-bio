'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundGradients() {
 const { scrollYProgress } = useScroll();

 // Balanced movement
 const blob1X = useTransform(scrollYProgress, [0, 0.5, 1], ["5%", "25%", "15%"]);
 const blob1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "30%", "60%"]);

 const blob2X = useTransform(scrollYProgress, [0, 0.5, 1], ["85%", "65%", "80%"]);
 const blob2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "70%", "40%"]);

 // Muted, medium pastel tones
 // Blue: soft cool blue -> dusty indigo -> slate
 const blueColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#e0e7ff", "#dbeafe", "#f1f5f9"]);
 // Red: muted rose -> soft salmon -> warm grey
 const redColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#ffe4e6", "#fee2e2", "#f9fafb"]);

 return (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#fbfcfd]">
   {/* Balanced Blue Blob */}
   <motion.div
    className="absolute w-[60vw] h-[60vw] rounded-full blur-[130px] opacity-[0.28]"
    style={{
     x: blob1X,
     y: blob1Y,
     backgroundColor: blueColor,
    }}
   />

   {/* Balanced Red Blob */}
   <motion.div
    className="absolute w-[55vw] h-[55vw] rounded-full blur-[150px] opacity-[0.22]"
    style={{
     x: blob2X,
     y: blob2Y,
     backgroundColor: redColor,
    }}
   />

   {/* Noise Texture Overlay - very subtle premium touch */}
   <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
   />
  </div>
 );
}
