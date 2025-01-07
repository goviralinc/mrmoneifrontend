import SubNav from "./components/SubNav";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Partners from "./components/Partners";
import JoinWaitlist from "./components/JoinWaitlist";
import How from "./components/How";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <main>
      <SubNav />
      <HeroSection />
      <VisionMission />
      <About />
      <Partners />
      <JoinWaitlist />
      <How />
      <Footer />
    </main>
  );
}
