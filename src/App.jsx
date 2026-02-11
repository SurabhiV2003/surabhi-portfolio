import Navbar from './components/Navbar';
import HeroSummary from './components/HeroSummary'; // 1. Import the new component
import BentoGrid from './components/BentoGrid';
import ResumeSection from './components/ResumeSection'; // Import this too for the PDF part
import TechMarquee from './components/TechMarquee';
import Contact from './components/Contact';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen selection:bg-blue-500/30">
      {/* Background radial glow */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_farthest-side_at_60%_20%,#1e293b,transparent)] opacity-50" />
      
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <HeroSummary /> 
        <TechMarquee />
        <Reveal width="100%">
          <BentoGrid />
        </Reveal>
        <Reveal width="100%"><ResumeSection /></Reveal>
        <Reveal width="100%">
          <Contact />
        </Reveal>
      </main>
    </div>
  );
}

export default App;