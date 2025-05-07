'use client';

import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6">
            <div className="text-4xl text-gray-400 mb-4">❝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              No man is an island, entire of itself; Every man is a piece of the continent, a part of the main.
            </h3>
            <hr className="border-t-2 border-gray-300 w-16 mb-6" />
            <p className="text-gray-600 font-medium">John Donne</p>
          </div>
          <div className="relative w-full h-64 lg:h-80">
            <Image 
              src="https://img1.wsimg.com/isteam/stock/84943/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" 
              alt="Ocean Quote" 
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 