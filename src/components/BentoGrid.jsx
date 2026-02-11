import { motion } from 'motion/react';
import { LeetCodeCard, GitHubStatsCard } from './StatsCards';

export default function BentoGrid() {
  return (
    <div id="work" className="max-w-6xl mx-auto p-4 py-20 space-y-16">
      
      {/* SECTION 1: PROFESSIONAL EXPERIENCE */}
      <section>
        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-emerald-400/50"></span> Professional Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 group hover:bg-emerald-500/10 transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold text-white">Software Engineer @ LTI Mindtree</h4>
                <p className="text-emerald-400 font-medium mt-1 text-sm uppercase tracking-wider">Sept 2025 — Present</p>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest animate-pulse">Live</div>
            </div>
            <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl text-sm md:text-base">
              Focusing on cloud-native applications using **Spring Boot** and **Java**. 
              Developing RESTful APIs and exploring **Vertex AI** pipelines for enterprise solutions[cite: 14, 15, 18].
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Java", "Spring Boot", "GCP", "Vertex AI", "MySQL"].map(tag => (
                <span key={tag} className="text-[10px] bg-white/5 px-3 py-1 rounded-full border border-white/10 text-slate-300 font-medium">{tag}</span>
              ))}
            </div>
          </motion.div>
          
          <div className="md:col-span-1 bg-slate-800/40 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping mb-2" />
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Base</p>
            <p className="text-white font-bold">Bengaluru, IN</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESEARCH PUBLICATION */}
      <section>
        <h3 className="text-xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-purple-400/50"></span> Research Work
        </h3>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-purple-500/5 border border-purple-400/20 rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white">IEEE Sensors Journal (Published)</h4>
            <p className="text-slate-300 mt-2 font-medium italic">"A Real-Time Deployable Attention-Driven CNN-LSTM Framework for HAR" [cite: 23]</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { val: "99.7%", lab: "Accuracy" },
                { val: "130.8 KB", lab: "Model Size" },
                { val: "13.5 ms", lab: "Latency" },
                { val: "NIT Bhopal", lab: "Institution" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-purple-400 font-bold text-xl">{stat.val}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{stat.lab}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: TECHNICAL PROJECTS */}
      <section>
        <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-blue-400/50"></span> Engineering Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 group transition-all">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Licence Plate Recognition System</h4>
              <span className="text-[10px] text-slate-500 font-bold">YOLOv8 & EasyOCR</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Accurately locates and interprets vehicle license plates in real-time with 94% precision[cite: 29, 30].
            </p>
            <div className="flex gap-2">
                <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Computer Vision</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 group transition-all">
             <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Bitcoin Prediction</h4>
              <span className="text-[10px] text-slate-500 font-bold">NLP & ML</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Integrates sentiment analysis and financial indicators for price forecasting using social media data[cite: 35, 36].
            </p>
            <div className="flex gap-2">
                <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Sentiment Analysis</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LIVE CODING ACTIVITY */}
      <section>
        <h3 className="text-xl font-semibold text-orange-400 mb-6 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-orange-400/50"></span> Coding Activity & Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <LeetCodeCard username="surabhiver123" />
          </div>
          <div className="md:col-span-3">
            <GitHubStatsCard username="SurabhiV2003" />
          </div>
        </div>
      </section>

    </div>
  );
}