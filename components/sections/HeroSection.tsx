"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import GradientSphere from "@/components/ui/GradientSphere";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <div className="gradient-text">
                A new economic primitive for funding decentralized AI
              </div>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl"
            >
              We stake, vote and pay for the best open source decentralized LLMs to compete against OpenAI.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary">Buy $AI</Button>
              <Button variant="secondary">Try Now</Button>
            </motion.div>
          </motion.div>

          {/* Gradient Sphere */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <GradientSphere />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
