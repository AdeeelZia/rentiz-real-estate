import { useState } from "react"

export default function PropertyListing() {
  const properties = [
    {
      id: 1,
      name: "Aliva Priva Jalvin",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: "/placeholder.svg?height=300&width=400",
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
    {
      id: 2,
      name: "Hard Line Orchar",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: "/placeholder.svg?height=300&width=400",
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
    {
      id: 3,
      name: "Alpline Lenevote",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: "/placeholder.svg?height=300&width=400",
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleProperties = properties.slice(currentIndex, currentIndex + 3)

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex(Math.min(properties.length - 3, currentIndex + 1))
  }

  return (
    <div className="w-full min-h-screen bg-[#1a2536] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,0 C300,150 500,0 800,300 C1100,600 1300,450 1600,600 L1600,900 L0,900 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M0,300 C300,450 500,300 800,600 C1100,900 1300,750 1600,900 L1600,900 L0,900 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-6xl w-full z-10">
        <h2 className="text-white text-3xl font-semibold mb-8">Popular Residence</h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visibleProperties.map((property) => (
              <div key={property.id} className="bg-transparent">
                <div className="overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-white font-medium text-lg">{property.name}</h3>
                  <p className="text-gray-400 text-sm">{property.address}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-teal-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 17H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 13V9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 13V9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 9H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-teal-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12H20M4 12C2.89543 12 2 11.1046 2 10V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V10C22 11.1046 21.1046 12 20 12M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{property.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-teal-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{property.sqft} sqft.</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-[#1a2536] border border-gray-700 rounded-full p-2 text-white disabled:opacity-50"
            aria-label="Previous property"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= properties.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-[#1a2536] border border-gray-700 rounded-full p-2 text-white disabled:opacity-50"
            aria-label="Next property"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <div className="flex justify-center mt-8">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded">View All Properties</button>
        </div>
      </div>
    </div>
  )
}

