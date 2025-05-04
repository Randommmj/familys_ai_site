'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Values() {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty, ethics, and transparency in all our interactions and dealings."
    },
    {
      title: "Legacy",
      description: "We are committed to preserving and enhancing family legacies across generations while adapting to changing times."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of shared knowledge and resources to achieve greater outcomes for all our members."
    },
    {
      title: "Innovation",
      description: "We embrace technological advances and creative solutions to address the challenges of wealth preservation and growth."
    },
    {
      title: "Sustainability",
      description: "We are dedicated to responsible stewardship of resources for long-term social, environmental, and economic well-being."
    },
    {
      title: "Privacy",
      description: "We respect and protect the confidentiality and privacy of our members and their families."
    }
  ]

  return (
    <main>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-10 text-center">Our Values and Principles</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <p className="text-lg text-gray-700 mb-6">
                At FAMILyS, we are guided by a set of core values and principles that inform everything we do. These values are the foundation of our community and help us create a meaningful and impactful network for families around the world.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                We exist to empower families to shape the future guided by their heritage, leveraging the power of connection, technology, and shared wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 