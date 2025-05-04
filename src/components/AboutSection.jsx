'use client'

import React from 'react'

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About FAMILyS</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-center">A Serious Family Network</h3>
              <ul className="space-y-2">
                <li className="text-center">Exclusive to single family office</li>
                <li className="text-center">Professionals and Principals</li>
                <li className="text-center">Backed by thorough background checking</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-center">Shared Vision</h3>
              <ul className="space-y-2">
                <li className="text-center">Shape the future guided by our heritage</li>
                <li className="text-center">Faith in globalization and technology</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-center">Member-led Community</h3>
              <ul className="space-y-2">
                <li className="text-center">Decentralized leadership by all members</li>
                <li className="text-center">AI-driven platform for sharing</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <blockquote className="text-xl italic text-gray-700">
              "No man is an island, entire of itself; Every man is a piece of the continent, a part of the main."
            </blockquote>
            <p className="mt-4 text-gray-600">— John Donne</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 