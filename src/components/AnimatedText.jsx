import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  // Animation for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Animation for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Floating animation
  const float = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        overflow: 'hidden',
        background: 'var(--theme-bg-gradient, linear-gradient(to right, #4a90e2, #9b59b6))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
          whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0], transition: { duration: 0.3 } }}
        >
          <motion.span
            animate={float}
            style={{ display: 'inline-block' }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;