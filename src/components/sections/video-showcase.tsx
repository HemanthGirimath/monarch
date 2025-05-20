'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Experience Monarch in Action
          </h2>
          <p className="text-gray-400">
            Watch how Monarch transforms your coding experience with intelligent AI assistance and seamless integration.
          </p>
        </div>
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YvTAFuSNE20?autoplay=1&mute=1&loop=1&playlist=YvTAFuSNE20"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}