'use client';

import SimpleNav from '../../components/SimpleNav';
import SimpleFooter from '../../components/SimpleFooter';

export default function SignIn() {
  return (
    <>
      <SimpleNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign In</h1>
        <p className="text-lg mb-4 text-center">Sign-in functionality coming soon.</p>
        <div className="mt-8 text-center">
          <a href="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md">Return Home</a>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
} 