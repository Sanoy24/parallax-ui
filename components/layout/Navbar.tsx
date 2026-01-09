"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            OpenAI
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={() => scrollToSection("mission")}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How it Works
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("hero")}
              className="px-4 py-2 bg-gradient-to-r from-primary to-primary-light rounded-md text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $AI
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
