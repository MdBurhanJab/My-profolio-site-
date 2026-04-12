import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-surface border-thin text-text-primary hover:text-accent transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: theme === 'dark' ? 0 : 40,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'backOut' }}
      >
        <Moon size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: theme === 'light' ? -20 : 20,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'backOut' }}
        className="absolute top-2 left-2"
      >
        <Sun size={20} />
      </motion.div>
    </motion.button>
  );
}
