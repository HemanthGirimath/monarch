'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ref, push } from 'firebase/database';
import { db } from '@/lib/firebase';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await push(ref(db, 'signups'), {
        timestamp: new Date().toISOString(),
        username,
        email
      });

      setStatus('success');
      setEmail('');
      setUsername('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="signup" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <h2 className="text-2xl text-green-400">Thanks for signing up!</h2>
            <p className="text-gray-400 mt-2">We'll be in touch soon.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Get Early Access
          </h2>
          <p className="text-gray-400 mb-8">
            Join the waitlist to be one of the first to experience Monarch Assistant.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === 'loading' ? 'Signing up...' : 'Sign Up for Early Access'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
