import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <div className="overflow-hidden flex flex-col items-center gap-8">
            <div className="loader-uiverse">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-bold text-white"
            >
              DENTA<span className="text-accent">STUDIO</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-text-secondary font-mono text-sm tracking-widest uppercase"
          >
            Crafting Digital Smiles
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
