"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EcosystemSection() {
  return (
    <section className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Projects integrated into the Arrakis AI Ecosystem
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
            {/* Solana */}
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195]" />
               <span className="text-xl font-bold font-sans tracking-tight">SOLANA</span>
            </div>

            {/* Arweave */}
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs">a</div>
               <span className="text-xl font-bold font-mono">arweave</span>
            </div>

            {/* Bittensor */}
            <div className="flex items-center gap-2">
               <span className="text-xl font-bold">bitten<span className="opacity-70">sor</span></span>
            </div>

            {/* Render */}
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center border border-white/20">
                 <div className="w-4 h-4 bg-white rounded-full opacity-80" />
               </div>
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-5 h-5 text-black transform -translate-x-0.5 translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
