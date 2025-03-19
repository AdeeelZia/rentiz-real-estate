export default function WhyChooseUs() {
    return (
      <div className="bg-[#0d1117] text-white py-16 relative overflow-hidden">
        {/* Decorative lines */}    
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <svg width="120" height="300" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 150L80 80M0 200L120 80" stroke="#1cd6c9" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
  
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Why To Choose Us</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0e2a2a] rounded-full p-6 mb-6 w-32 h-32 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="10" stroke="#1cd6c9" strokeWidth="2" />
                  <path d="M30 30L36 36" stroke="#1cd6c9" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy To Find</h3>
              <p className="text-gray-400 text-sm">
                Urna, massa aliquet dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet
                facilisis.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0e2a2a] rounded-full p-6 mb-6 w-32 h-32 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 12H34L30 28H18L14 12Z" stroke="#1cd6c9" strokeWidth="2" />
                  <path d="M20 28V32" stroke="#1cd6c9" strokeWidth="2" />
                  <path d="M28 28V32" stroke="#1cd6c9" strokeWidth="2" />
                  <path d="M14 16H10" stroke="#1cd6c9" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
              <p className="text-gray-400 text-sm">
                Urna, massa aliquet dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet
                facilisis.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0e2a2a] rounded-full p-6 mb-6 w-32 h-32 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" stroke="#1cd6c9" strokeWidth="2" />
                  <path d="M24 16V24L30 30" stroke="#1cd6c9" strokeWidth="2" strokeLinecap="round" />
                  <path d="M36 18L40 14" stroke="#1cd6c9" strokeWidth="2" strokeLinecap="round" />
                  <path d="M36 30L40 34" stroke="#1cd6c9" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quickly Process</h3>
              <p className="text-gray-400 text-sm">
                Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliquet dui
                pellentesque.
              </p>
            </div>
          </div>
  
          {/* Testimonial Section */}
          <div className="flex flex-col md:flex-row items-start gap-8 relative">
            <div className="text-[#1cd6c9] text-8xl font-serif leading-none">"</div>
            <div className="flex-1">
              <blockquote className="text-lg mb-6">
                Massa Semper Non Rutrum Orci Facilisi Sit. Lectus Porta Quam A Fringilla Eget Viverra Sem. Vulputate Massa
                Hendrerit Turpis Gravida Tempor, Porttitor.
              </blockquote>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Elena Pravo</p>
                  <p className="text-sm text-gray-400">CEO, Uplinke</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center hover:text-white hover:border-[#1cd6c9]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center hover:text-white hover:border-[#1cd6c9]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  