"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SecondHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Parallax (Stars move slower)
  const starsY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  
  // Sphere Animation (Scales up and moves down slightly)
  const sphereScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const sphereY = useTransform(smoothProgress, [0, 1], ["0%","0%"]);
  const sphereOpacity = useTransform(smoothProgress, [0.6, 0.9], [1, 0]);

  // Text Animation (Moves up slightly but stays visible longer)
  const textY = useTransform(smoothProgress, [0, 0.6], ["0%", "-20%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.5, 0.8], [1, 1, 0]);

  // Stats Layer (Slides in from bottom)
  const statsOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const statsY = useTransform(smoothProgress, [0.1, 0.4], ["20vh", "0vh"]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-dark">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Layer 1: Background (Handled globally in layout.tsx) */}
        
        {/* Layer 2: Hero Image (Right Side) */}
        <motion.div 
          style={{ scale: sphereScale, y: sphereY, opacity: sphereOpacity }}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]">
             <Image 
              src="/images/hero-sphere.jpg"
              alt="Decentralized AI Sphere"
              fill
              className="object-contain animate-float"
              priority
            />
          </div>
        </motion.div>

        {/* Layer 3: Main Text (Left Side) */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center h-full pointer-events-none"
        >
          <div className="pointer-events-auto mt-[-100px]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sans leading-tight tracking-tight mb-6 text-left"
            >
              <span className="block gradient-text-scroll">A new economic primitive</span>
              <span className="block gradient-text-scroll">for funding decentralized AI</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-text-secondary mb-8 text-left"
            >
               We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-4 justify-start"
            >
               <Button variant="third">Buy Salt AI</Button>
               <Button variant="secondary">Try Now</Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 4: Stats Reveal (Scrolls in) */}
        <motion.div 
          style={{ opacity: statsOpacity, y: statsY }}
          className="absolute z-30 bottom-[-10vh] w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
           {/* Card 1 */}
           <div className="relative p-8 rounded-[2rem] bg-gradient-to-b from-[#3d1a1a] to-[#1a0a0a] border border-white/5 shadow-2xl overflow-visible">
              <h3 className="text-4xl lg:text-5xl font-bold stats-gradient-text mb-2">1,873</h3>
              <p className="text-text-secondary font-medium">LLM models</p>
           </div>
           
           {/* Card 2 */}
           <div className="relative p-8 rounded-[2rem] bg-gradient-to-b from-[#3d1a1a] to-[#1a0a0a] border border-white/5 shadow-2xl">
              <h3 className="text-4xl lg:text-5xl font-bold stats-gradient-text mb-2">$326,734</h3>
              <p className="text-text-secondary font-medium">Paid to data scientists</p>
           </div>

           {/* Card 3 */}
           <div className="relative p-8 rounded-[2rem] bg-gradient-to-b from-[#3d1a1a] to-[#1a0a0a] border border-white/5 shadow-2xl">
              <h3 className="text-4xl lg:text-5xl font-bold stats-gradient-text mb-2">6,557</h3>
              <p className="text-text-secondary font-medium">Developers</p>
           </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 animate-bounce"
        >
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          

          </svg>
        </motion.div>

      </div>
    </div>
  );
}
