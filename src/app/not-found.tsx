import Link from 'next/link';

export default function NotFound() {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
   <h1 className="text-9xl font-bold text-gold/20 absolute select-none">404</h1>
   <div className="relative z-10 space-y-6">
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Lost in my story?</h2>
    <p className="text-xl text-white/60 italic font-light">"Sometimes the best paths are the ones we haven't found yet." ✨</p>
    <div className="pt-8">
     <Link
      href="/"
      className="inline-block border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-medium"
     >
      Go Home ✨
     </Link>
    </div>
   </div>
  </div>
 );
}
