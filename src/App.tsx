import { Hero } from './components/Hero';
import { CoupleSection } from './components/CoupleSection';
import { WeddingDetails } from './components/WeddingDetails';
import { Location } from './components/Location';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <Hero />
      <CoupleSection />
      <Gallery />
      <WeddingDetails />
      <Location />
      <Footer />
    </div>
  );
}
