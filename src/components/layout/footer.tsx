import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full py-12 bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/monarch-logo.jpeg"
              alt="Monarch"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Monarch Assistant
            </h3>
            <p className="text-gray-400">
              Your Developer Sidekick for GitHub Repos
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#features" className="block text-gray-400 hover:text-white">Features</Link>
              <Link href="#how-it-works" className="block text-gray-400 hover:text-white">How it Works</Link>
              <Link href="#signup" className="block text-gray-400 hover:text-white">Get Early Access</Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              <a href="https://github.com/HemanthGirimath/personalAssistant" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white">
                Documentation
              </a>
              <a href="https://github.com/HemanthGirimath/personalAssistant" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white">
                GitHub Repository
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/HemanthGirimath/personalAssistant" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Monarch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
