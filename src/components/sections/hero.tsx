// src/components/sections/hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  "What's the weather in Bangalore?",
  "Summarize my GitHub repo",
  "Explain how this function works",
  "Convert 10$ to rupees now"
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let text = questions[currentIndex];
    let index = 0;
    
    const typingTimer = setInterval(() => {
      if (index <= text.length) {
        setCurrentText(text.slice(0, index));
        index++;
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Gradient background with blur effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50"></div>
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mt-20">
            Monarch Assistant
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-300">
            Your Developer Sidekick for GitHub Repos
          </p>

          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            A futuristic macOS app with a dynamic, notch-style interface that helps you understand codebases,
            answer questions live, and visualize repositories — all with voice or text.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#signup"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              Get Early Access
            </Link>
            <a
              href="https://github.com/HemanthGirimath/personalAssistant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors font-medium"
            >
              View on GitHub
            </a>
          </div>

          {/* App Interface Mockup */}
          <div className="mt-16 relative w-full max-w-2xl mx-auto">
            <div className="bg-black/70 backdrop-blur-md rounded-xl p-4 border border-gray-800">
              <div className="relative h-64 rounded-lg overflow-hidden bg-black/80 backdrop-blur-sm border border-gray-800">
                {/* Mode selector */}
                <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center border-b border-gray-800">
                  <span className="text-gray-400 text-sm">AgentMode:</span>
                  <div className="flex space-x-2">
                    <div className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">General</div>
                    <div className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">GitHub</div>
                  </div>
                  <span className="text-gray-400 text-sm">History</span>
                </div>

                {/* Voice indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-blue-400 opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Code background effect */}
            <div className="absolute -z-10 -inset-10 opacity-30">
              <pre className="text-xs text-gray-500 overflow-hidden">
{`// Monarch Assistant Core
class MonarchAssistant {
  async processVoiceCommand(input: string) {
    const mode = this.currentMode;
    return mode === 'github' 
      ? await this.githubAgent.analyze(input)
      : await this.generalAgent.respond(input);
  }
}`}
              </pre>
            </div>
          </div>

          {/* Typing text animation */}
          <div className="absolute bottom-20 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">
              {currentText}<span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}