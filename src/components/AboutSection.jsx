'use client';
export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">About FAMILyS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://img1.wsimg.com/isteam/stock/uWVPyJJYrgFoopjjn/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" 
              alt="A Serious Family Network" 
              className="w-full h-48 object-cover mb-6"
            />
            <h4 className="text-xl font-bold mb-4">A Serious Family Network</h4>
            <p className="text-gray-700 mb-3">Exclusive to single family office</p>
            <p className="text-gray-700 mb-3">Professionals and Principals</p>
            <p className="text-gray-700">Backed by thorough background checking</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://img1.wsimg.com/isteam/stock/NBy0bD8/:/cr=t:9.79%25,l:0%25,w:100%25,h:80.42%25/rs=w:600,h:300,cg:true" 
              alt="Shared Vision" 
              className="w-full h-48 object-cover mb-6"
            />
            <h4 className="text-xl font-bold mb-4">Shared Vision</h4>
            <p className="text-gray-700 mb-3">Shape the future guided by our heritage</p>
            <p className="text-gray-700">Faith in globalization and technology</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://img1.wsimg.com/isteam/stock/uGweQ08yQdTydWk21/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" 
              alt="Member-led Community" 
              className="w-full h-48 object-cover mb-6"
            />
            <h4 className="text-xl font-bold mb-4">Member-led Community</h4>
            <p className="text-gray-700 mb-3">Decentralized leadership by all members</p>
            <p className="text-gray-700">AI-driven platform for sharing</p>
          </div>
        </div>
      </div>
    </section>
  )
} 