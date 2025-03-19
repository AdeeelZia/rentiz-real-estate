export default function BeginSection() {
  return (
    <div className="w-full bg-[#0d1117] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Simply Begin With Rentiz.
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore.
          </p>
          <button className="bg-[#00b894] hover:bg-[#00a382] text-white py-2 px-6 rounded">
            Get Started
          </button>
        </div>
      </div>

      {/* Decorative curved lines */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M39.9,-51.2C50.1,-39.7,55.9,-25.8,59.5,-10.8C63.2,4.3,64.7,20.5,58.3,33.8C51.9,47.1,37.5,57.5,21.9,61.7C6.3,65.9,-10.5,64,-25.4,57.7C-40.3,51.5,-53.2,41,-59.8,27.2C-66.4,13.3,-66.7,-3.9,-61.1,-18.8C-55.5,-33.7,-44,-46.3,-31,-55.1C-18,-63.9,-3.5,-68.9,9.5,-66.8C22.5,-64.7,29.7,-62.7,39.9,-51.2Z"
            transform="translate(100 100)"
            fill="#00b894"
          />
        </svg>
      </div>

      {/* Additional decorative elements for the right side */}
      <div className="absolute bottom-0 right-0">
        <div className="w-16 h-16 bg-[#00b894] opacity-20 rounded-sm transform -rotate-45"></div>
        <div className="w-12 h-12 bg-[#00b894] opacity-20 rounded-sm transform -rotate-45 ml-8 -mt-4"></div>
        <div className="w-8 h-8 bg-[#00b894] opacity-20 rounded-sm transform -rotate-45 ml-4 -mt-2"></div>
      </div>
    </div>
  );
}
