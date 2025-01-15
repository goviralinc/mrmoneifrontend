"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  isIndexPage: boolean; // Indicates the direction of animation
  className?: string; // For Tailwind or custom classes
  style?: React.CSSProperties; // For inline styles
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  isIndexPage,
  className,
  style,
}) => {
  return (
    <motion.p
      initial={{
        y: isIndexPage ? 0 : -100,
        opacity: isIndexPage ? 1 : 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: isIndexPage ? -100 : 0,
        opacity: 0,
      }}
      transition={{ duration: 0.8 }}
      className={`${className}`} // Use className prop
      style={style} // Apply inline styles
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
