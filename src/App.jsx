import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen selection:bg-blue-500/30">
      {/* Background radial glow for that "alive" feel */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_farthest-side_at_60%_20%,#1e293b,transparent)] opacity-50" />
      
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <BentoGrid />
      </main>
    </div>
  );
}

export default App;