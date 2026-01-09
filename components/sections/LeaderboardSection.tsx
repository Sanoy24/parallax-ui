"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { LEADERBOARD_DATA } from "@/lib/constants";
import Button from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function LeaderboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="leaderboard"
      ref={ref}
      className="py-20 lg:py-32 px-6 lg:px-8 bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              LLM Leaderboard
            </h2>
            <p className="text-text-secondary max-w-3xl">
              We evaluate LLMs on key benchmarks using the BlindTest AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="secondary" className="whitespace-nowrap">
              Submit your model
            </Button>
          </motion.div>
        </div>

        {/* Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Rank</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Model Name</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Chatbot</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Code</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Reasoning</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Safety</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Creativity</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">Price/1M</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">TTFT</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-text-secondary">LPM/1M</th>
                </tr>
              </thead>
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {LEADERBOARD_DATA.map((model, index) => (
                  <motion.tr
                    key={model.rank}
                    variants={rowVariants}
                    className="border-b border-white/10 hover:bg-primary/5 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <td className="px-4 py-4 text-sm font-semibold text-primary">{model.rank}</td>
                    <td className="px-4 py-4 text-sm font-medium">{model.modelName}</td>
                    <td className="px-4 py-4 text-sm">{model.chatbot}</td>
                    <td className="px-4 py-4 text-sm">{model.code}</td>
                    <td className="px-4 py-4 text-sm">{model.reasoning}</td>
                    <td className="px-4 py-4 text-sm">{model.safety}</td>
                    <td className="px-4 py-4 text-sm">{model.creativity}</td>
                    <td className="px-4 py-4 text-sm">{model.price}</td>
                    <td className="px-4 py-4 text-sm">{model.ttft}</td>
                    <td className="px-4 py-4 text-sm">{model.lpm}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
