export default function ResumeSection() {
  const resumeUrl = "/Surabhi_Verma_Resume.pdf"; 

  return (
    <section id="resume" className="max-w-5xl mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Resume</h2>
          <p className="text-slate-400 mt-2">B.Tech in AI & ML | CGPA: 8.72</p>
        </div>
        
        <a 
          href={resumeUrl}
          download="Surabhi_Verma_Resume.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20"
        >
          <span>Download PDF</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </div>

      <div className="w-full h-[600px] bg-slate-800/50 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <iframe 
          src={`${resumeUrl}#toolbar=0`} 
          className="w-full h-full"
          title="Surabhi Verma Resume"
        />
      </div>
    </section>
  );
}