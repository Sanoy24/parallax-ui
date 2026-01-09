"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="mission"
      ref={ref}
      className="py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-dark to-dark-lighter"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8"
        >
          Crowdsourcing our collective intelligence to build the best AI
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-4 mb-10">
          <p className="text-lg text-text-secondary">
            Open source AI has been lagging behind the likes of Google and OpenAI's claims of dollars.
          </p>
          <p className="text-lg text-text-secondary">
            But there is more than just the investment which separates open source developers and incredible for the largest enterprise, we believe that the best AI will be built by a community of developers who are incentivized to build the best AI models.
          </p>
          <p className="text-lg text-text-secondary">
            That's why we built the $AI token, a new economic primitive for funding decentralized AI models.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button variant="primary">Use The Cutting Edge AI</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
