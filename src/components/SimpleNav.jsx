'use client';

export default function SimpleNav() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">FAMILyS</a>
          
          <div className="flex space-x-6">
            <a href="/" className="hover:underline font-medium text-gray-500 hover:text-blue-500">
              Home
            </a>
            <a href="/our-members" className="hover:underline font-medium text-gray-500 hover:text-blue-500">
              Our Members
            </a>
            <a href="/our-values-and-principles" className="hover:underline font-medium text-gray-500 hover:text-blue-500">
              Our Values
            </a>
            <a href="/sign-in" className="hover:underline font-medium text-gray-500 hover:text-blue-500">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 