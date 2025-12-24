import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { OurStorySection } from '../components/OurStorySection';
import { JourneySection } from '../components/JourneySection';
import { TeamSection } from '../components/TeamSection';
import { Footer } from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <OurStorySection />
        <JourneySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}