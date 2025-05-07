'use client';

import SimpleNav from '../components/SimpleNav';
import SimpleFooter from '../components/SimpleFooter';

export default function Home() {
  return (
    <>
      <SimpleNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">FAMILyS</h1>
        <p className="text-xl mb-4 text-center">From Families For Families</p>
        <p className="text-lg mb-4 text-center">Family Alliance for Multi-generational International LegacY and Sustainability</p>
        <div className="mt-8 text-center">
          <a href="/test-page" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md">View Test Page</a>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
} 