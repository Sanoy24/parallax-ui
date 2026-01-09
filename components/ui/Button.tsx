"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost"|"third";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50",
    secondary: "bg-transparent border-none border-white/20 text-white hover:border-primary hover:bg-primary/10",
    third: "bg-transparent border-2 border-white/20 text-white hover:border-primary hover:bg-primary/10",
    
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
