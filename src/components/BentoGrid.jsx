import { motion } from 'motion/react';
import { LeetCodeCard, GitHubStatsCard } from './StatsCards';
import { section } from 'motion/react-client';

const projects = [
  {
    title: "IEEE Publication: Real-Time HAR",
    description: "Hybrid CNN-CBAM-LSTM architecture achieving 99.7% accuracy. Compressed to 130.8 KB for edge deployment.",
    tags: ["Deep Learning", "Edge AI", "Python"],
    size: "md:col-span-2 md:row-span-2", 
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "LTI Mindtree | Software Engineer",
    description: "Building cloud-native apps with Spring Boot, GCP, and Angular. Specialized in RESTful API development.",
    tags: ["Java", "Spring Boot", "GCP"],
    size: "md:col-span-2", 
    color: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "Bitcoin Prediction",
    description: "NLP-driven sentiment analysis integrated with financial indicators for price forecasting.",
    tags: ["NLP", "Scikit-Learn"],
    size: "md:col-span-1",
    color: "bg-orange-500/10 border-orange-500/20"
  },
  {
    title: "License Plate Recognition",
    description: "YOLOv8 & EasyOCR system with 94% precision for real-time vehicle monitoring.",
    tags: ["YOLOv8", "Computer Vision"],
    size: "md:col-span-1",
    color: "bg-purple-500/10 border-purple-500/20"
  }
];

export default function BentoGrid() {
  return (
    <section id="work" className="max-w-6xl mx-auto p-4 py-20">
    <div className="max-w-6xl mx-auto p-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(200px,_auto)]">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${proj.size} ${proj.color} border rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group shadow-xl`}
          >
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                {proj.description}
              </p>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md text-slate-300 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
        <div className="md:col-span-1 h-full">
    <LeetCodeCard username="surabhi123" /> 
  </div>

  <div className="md:col-span-3 h-full">
    <GitHubStatsCard username="SurabhiV2003" />
  </div>
      </div>
    </div>
    </section>
  );
}