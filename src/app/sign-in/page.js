'use client';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SignIn() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center">Sign In</h1>
          
          <form className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
} 