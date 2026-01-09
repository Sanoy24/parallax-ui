"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GradientSphere() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        style={{ y, opacity }}
        className="w-[500px] h-[500px] rounded-full blur-[80px] animate-float"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(100, 150, 255, 0.4) 0%, rgba(150, 100, 255, 0.3) 30%, rgba(200, 100, 200, 0.2) 60%, transparent 100%)",
          }}
        />
      </motion.div>
    </div>
  );
}
