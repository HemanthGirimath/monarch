import dynamic from 'next/dynamic';
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";
import { Suspense } from 'react';

// Optimize imports with separate chunks
const Features = dynamic(() => import("@/components/sections/features"), {
  loading: () => <SectionLoader />,
});

const HowItWorks = dynamic(() => import("../components/sections/how-it-works"), {
  loading: () => <SectionLoader />,
});

const SignupForm = dynamic(() => import("@/components/sections/signup-form"), {
  loading: () => <SectionLoader height="300px" />,
});

function SectionLoader({ height = "400px" }) {
  return (
    <div className="w-full animate-pulse bg-gray-800/50" style={{ height }} />
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SignupForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

// Keep only essential metadata
export const metadata = {
  title: 'Monarch Assistant',
  description: 'Your Developer Sidekick for GitHub Repos'
};
