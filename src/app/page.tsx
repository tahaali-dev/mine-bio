import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import GridSection from '@/components/GridSection';
import Footer from '@/components/Footer';
import NavDots from '@/components/NavDots';
import BackgroundGradients from '@/components/BackgroundGradients';
import { biodata as data } from '@/lib/data';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <BackgroundGradients />
      {/* <NavDots /> */}
      <Hero />
      <AboutSection />

      {data.sections.map((section: any, index: number) => (
        <GridSection
          key={section.title}
          id={`section-${index}`}
          title={section.title}
          description={section.description}
          images={section.images}
          index={index}
        />
      ))}

      <Footer />
    </main>
  );
}