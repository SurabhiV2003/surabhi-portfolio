import { motion } from 'motion/react';

export default function HeroSummary() {
  return (
    <section className="max-w-4xl mx-auto text-center pt-24 pb-12 px-6">
      {/* Your Name as the Primary Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
      >
        Surabhi Verma
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-4xl font-bold text-slate-300 mb-8 leading-tight"
      >
        Building scalable backends and <br/>
        <span className="text-blue-400">intelligent systems.</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
      >
        I'm a <span className="text-white font-semibold">Software Engineer </span> 
        at <span className="text-emerald-400 font-medium">LTI Mindtree </span> 
        with a strong foundation in backend development and applied machine learning. 
        My work spans Java, Python, Spring Boot, and GCP, with a research background that includes 
        an <span className="text-blue-400 font-medium">IEEE-published framework for Human Activity Recognition</span>. I enjoy designing systems 
        that are reliable, data-driven, and built to scale.
      </motion.p>
    </section>
  );
}