// src/components/layout/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/monarch-logo.jpeg"
            alt="Monarch"
            width={150}
            height={80}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
            Roadmap
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/HemanthGirimath/personalAssistant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <Link 
            href="#signup" 
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </motion.header>
  );
}