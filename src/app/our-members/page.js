import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function OurMembers() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">Our Members</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <img 
                src="https://img1.wsimg.com/isteam/stock/uWVPyJJYrgFoopjjn/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" 
                alt="Respected Members" 
                className="w-full aspect-square object-cover mb-6"
              />
              <h4 className="text-xl font-bold mb-2">Respected</h4>
              <h4 className="text-xl font-bold mb-2">Diversified</h4>
              <h4 className="text-xl font-bold mb-2">Globalized</h4>
              <p className="text-gray-700 mt-4">
                Our members are associated with more than $100bn in assets, 30 public companies and 3 unicorn businesses.
              </p>
              <p className="text-gray-700 mt-2">
                All our members are active in philanthropy and social contributions.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <img 
                src="https://img1.wsimg.com/isteam/stock/gAROjJe/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" 
                alt="Global Members" 
                className="w-full aspect-square object-cover mb-6"
              />
              <h4 className="text-xl font-bold mb-2">Globalized</h4>
              <h4 className="text-xl font-bold mb-2">Diversified</h4>
              <h4 className="text-xl font-bold mb-2">Globalized</h4>
              <p className="text-gray-700 mt-4">
                Our members live in 5 different continents and 20 countries,
              </p>
              <p className="text-gray-700 mt-2">
                most of whom are also running businesses across geographies.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <img 
                src="https://img1.wsimg.com/isteam/stock/uGweQ08yQdTydWk21/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" 
                alt="Diverse Members" 
                className="w-full aspect-square object-cover mb-6"
              />
              <h4 className="text-xl font-bold mb-2">Diversified</h4>
              <h4 className="text-xl font-bold mb-2">Diversified</h4>
              <h4 className="text-xl font-bold mb-2">Diversified</h4>
              <p className="text-gray-700 mt-4">
                Our members have significant family offices or are leading founders, scientists, artists or social influencers, across multiple industries.
              </p>
              <p className="text-gray-700 mt-2">
                Members are born between 1936 and 1994, and we are working hard to get gender balanced.
              </p>
            </div>
          </div>
          
          {/* Gallery Section */}
          <div className="mt-16">
            <div className="relative">
              <img 
                src="https://img1.wsimg.com/isteam/stock/84943/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" 
                alt="Members Gallery" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 