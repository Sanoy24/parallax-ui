"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CrowdsourcingSection() {
  return (
    <section className="relative py-24 z-10 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight tracking-tight mb-8">
            Crowdsourcing our collective intelligence to build the best AI
          </h2>
          
          <div className="space-y-6 text-lg text-text-secondary max-w-xl">
            <p>
              Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
            </p>
            <p>
              Salt aims to solve that by rewarding open source developers who contribute to the democratization 
              of AI. We run competitions between AI models to find and reward the best AI models. As a result, our 
              users will be able to access the latest cutting edge AI models.
            </p>
          </div>

          <div className="mt-10">
            <Button variant="secondary" className="border-red-500/50 text-white hover:bg-red-500/10 hover:border-red-500">
               Use The Cutting Edge AI
            </Button>
          </div>
        </motion.div>

        {/* Right Side (Visual Space/Sphere Context) */}
        <div className="hidden lg:block">
           {/* Leaving empty to allow the global sphere/background to be the visual focus here as implied by the design */}
        </div>

      </div>
    </section>
  );
}
