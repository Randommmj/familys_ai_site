'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Members() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-10 text-center">Our Members</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                FAMILyS is an exclusive network of single family offices, professionals, and principals who share a common vision for the future.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Our members are carefully selected through a thorough background checking process to ensure the highest level of integrity and commitment to our shared values.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                We believe in the power of connection and collaboration among like-minded families who are committed to preserving and growing their legacies across generations.
              </p>
              
              <p className="text-lg text-gray-700">
                To learn more about becoming a member, please contact us through the form on our homepage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 