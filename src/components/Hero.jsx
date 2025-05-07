'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-dark-bg text-white py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-opacity-25 bg-black" 
           style={{
             backgroundImage: "url('https://img1.wsimg.com/isteam/stock/6y5k2Wz')",
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundBlendMode: 'overlay',
             opacity: 0.8
           }}>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">From Families For Families</h1>
          <p className="text-xl md:text-2xl mb-12">Family Alliance for Multi-generational International LegacY and Sustainability</p>
          <Link href="/sign-in" className="inline-block bg-transparent border-2 border-white px-8 py-3 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition duration-300">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
} 