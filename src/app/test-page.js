'use client';

import SimpleNav from '../components/SimpleNav';
import SimpleFooter from '../components/SimpleFooter';

export default function TestPage() {
  return (
    <>
      <SimpleNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Test Page</h1>
        <p className="text-lg mb-4">This is a simple test page to verify deployment.</p>
        <div className="mt-8">
          <a href="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md">Return Home</a>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
} 