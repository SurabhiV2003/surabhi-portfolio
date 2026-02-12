import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex justify-between items-center shadow-2xl">
        <span className="font-bold text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          SV.
        </span>
        
        <div className="flex gap-6 text-sm text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="https://github.com/SurabhiV2003" 
          target="_blank"
          className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-500 hover:text-white transition-all"
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}