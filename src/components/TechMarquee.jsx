import { motion } from 'motion/react';

const techStack = [
  "Java", "Python", "C++", "Spring Boot", "GCP", "Vertex AI", 
  "TensorFlow", "Keras", "OpenCV", "MySQL", "PostgreSQL", 
  "Angular", "REST APIs", "Maven", "Git", "Scikit-learn"
];

export default function TechMarquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-900/30 py-10 border-y border-white/5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {/* We double the list to create a seamless infinite loop */}
        {[...techStack, ...techStack].map((tech, index) => (
          <span 
            key={index} 
            className="text-2xl md:text-3xl font-bold text-slate-500 hover:text-blue-400 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
      
      {/* Gradient overlays to fade the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent" />
    </div>
  );
}