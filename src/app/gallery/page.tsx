import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import GalleryShowcase from '@/components/GalleryShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gallery | Featured Dressing Tables | GRACE™ Furniture Salem',
  description: 'Explore the GRACE™ featured collection of modern and luxury dressing tables. Hotel, showroom, and bespoke residential grade furniture manufactured in Salem, Tamil Nadu.',
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <GalleryShowcase />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
