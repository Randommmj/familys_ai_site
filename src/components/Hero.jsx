'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            From Families For Families
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700">
            Family Alliance for Multi-generational International LegacY and Sustainability
          </p>
          <div className="mt-10">
            <Link
              href="/signin"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 