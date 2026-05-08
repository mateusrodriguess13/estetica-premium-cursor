import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { BeforeAfter } from '@/components/before-after';
import { Differentials } from '@/components/differentials';
import { Testimonials } from '@/components/testimonials';
import { Gallery } from '@/components/gallery';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-matte-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Differentials />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
