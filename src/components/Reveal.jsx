import { motion } from 'motion/react';

export default function Reveal({ children, width = "fit-content" }) {
  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        viewport={{ once: true, amount: 0.1  }} // Ensures it only animates once
      >
        {children}
      </motion.div>
    </div>
  );
}