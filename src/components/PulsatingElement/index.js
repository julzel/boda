import React from 'react';
import { motion } from 'framer-motion';

const PulsatingElement = ({ children }) => {
  const pulseAnimation = {
    scale: [2, 2.5, 2],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  };

  return <motion.div animate={pulseAnimation}>{children}</motion.div>;
};

export default PulsatingElement;
