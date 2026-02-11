import { motion } from 'motion/react';

export default function Reveal({ children, width = "fit-content" }) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }} // Ensures it only animates once
      >
        {children}
      </motion.div>
    </div>
  );
}