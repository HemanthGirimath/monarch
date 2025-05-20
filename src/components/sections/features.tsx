// src/components/sections/features.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaMicrophone, FaTools, FaBrain } from 'react-icons/fa';
import { RiUserVoiceFill } from 'react-icons/ri';
import { IoCodeSlash } from 'react-icons/io5';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col h-full"
    >
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 flex-grow">{description}</p>
    </motion.div>
  );
};

export default function Features() {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true });

  const features = [
    {
      icon: <FaGithub size={24} />,
      title: "Live Q&A over GitHub Repos",
      description: "Ask questions about your codebase in natural language. Get accurate, up-to-date answers with summaries and visual flow of repository logic.",
    },
    {
      icon: <RiUserVoiceFill size={24} />,
      title: "Voice & Text Interface",
      description: "Interact with Monarch using your voice or text with real-time speech-to-text conversion. Experience word-by-word animated responses.",
    },
    {
      icon: <IoCodeSlash size={24} />,
      title: "Notch-Style UI",
      description: "Enjoy a sleek, transparent notch overlay that auto-hides and reappears near the camera area on hover, providing an intuitive and non-intrusive experience.",
    },
    {
      icon: <FaTools size={24} />,
      title: "GitHub Repo Tools",
      description: "Add, remove, and list connected repositories easily. Get file-level summarization and generate visual flow diagrams to understand structure.",
    },
    {
      icon: <FaBrain size={24} />,
      title: "Agent Intelligence",
      description: "Powered by advanced AI models with real-time conversation memory via Redis. Enhanced with RAG capabilities for context-aware responses.",
    },
    {
      icon: <FaMicrophone size={24} />,
      title: "Smart Assistant",
      description: "More than just a coding tool, Monarch can answer general questions, perform conversions, and provide information - all in context of your work.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Monarch Assistant comes packed with features designed to make developers more productive and help them understand codebases faster.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}