'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const steps = [
	{
		title: 'Hover & Activate',
		description:
			'Simply hover near your Mac\'s camera notch to reveal Monarch\'s sleek interface',
		image: '/images/hover-activate.png', // Updated path
		delay: 0.2,
	},
	{
		title: 'Choose Your Mode',
		description:
			'Switch between General AI assistant or GitHub mode for repository-specific help',
		image: '/images/github-mode.png', // Updated path
		delay: 0.4,
	},
	{
		title: 'Voice or Text',
		description:
			'Speak naturally or type your questions - Monarch understands both',
		image: '/images/voice-mode.png', // Updated path
		delay: 0.6,
	},
];

export default function HowItWorks() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section id="how-it-works" className="py-20 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none"></div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
						How It Works
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg">
						Experience a seamless workflow with Monarch&apos;s intuitive
						interface
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.5, delay: step.delay }}
							className="relative"
						>
							<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
								<div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
									{index + 1}
								</div>
								<h3 className="text-xl font-semibold mb-3 mt-2 text-white">
									{step.title}
								</h3>
								<p className="text-gray-400 mb-4">
									{step.description}
								</p>
								<div className="relative h-48 rounded-lg overflow-hidden bg-gray-800">
									{step.image ? (
										<Image
											src={step.image}
											alt={step.title}
											fill
											className="object-fit"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											priority={index === 0}
											onError={(e) => {
												console.log(`Failed to load image: ${step.image}`);
												e.currentTarget.style.display = 'none';
											}}
										/>
									) : (
										<div className="flex items-center justify-center h-full">
											<span className="text-gray-400">Image coming soon</span>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
