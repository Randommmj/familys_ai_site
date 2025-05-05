'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              FAMILyS
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-8 w-full">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/members" className="text-gray-700 hover:text-primary font-medium">
              Our Members
            </Link>
            <Link href="/values" className="text-gray-700 hover:text-primary font-medium">
              Our Values and Principles
            </Link>
            <Link href="/signin" className="text-gray-700 hover:text-primary font-medium">
              Sign In
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center mt-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/members"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Members
              </Link>
              <Link
                href="/values"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Values and Principles
              </Link>
              <Link
                href="/signin"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header 