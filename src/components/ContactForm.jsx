'use client';

export default function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">联系我们</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-6">Contact Us</h4>
              
              <div className="mb-4">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer pt-6"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Name
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer pt-6"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Email*
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="relative">
                  <input 
                    type="tel" 
                    id="mobile" 
                    className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer pt-6"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="mobile"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Mobile
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <textarea 
                  id="message" 
                  rows="6" 
                  className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="I am interested in..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-black text-white font-bold px-8 py-3 rounded uppercase tracking-wider hover:bg-gray-800 transition duration-300 w-full"
              >
                Apply
              </button>
            </form>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Please kindly share your thoughts!</h4>
            <p className="text-gray-700 mb-8">Connection creates values.</p>
            
            <h4 className="text-xl font-bold mb-4">FAMILyS</h4>
          </div>
        </div>
      </div>
    </section>
  )
} 