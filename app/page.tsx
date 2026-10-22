
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedSeries from "./components/FeaturedSeries";
import BehindTheScenes from "./components/BehindTheScenes";
import AboutWema from "./components/AboutWema";
import SupportSection from "./components/SupportSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5E5]">
      <Navbar />
      <Hero />
      <FeaturedSeries />
      <BehindTheScenes />
      <AboutWema/>
      <SupportSection/>

      <section id="characters" className="scroll-mt-24" />
      <section id="about" className="scroll-mt-24" />
      <section id="support" className="scroll-mt-24" />
    </main>
  );
}
