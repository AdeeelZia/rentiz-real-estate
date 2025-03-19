export default function HeroSection() {
  return (
    <div className="w-full bg-[#0d1117] py-12 px-4 md:px-8 border-b border-[#1e2738]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side - Images */}
        <div className="flex gap-2 md:w-1/2">
          <div className="w-1/2">
            <img
              src="/building-exterior.png"
              width={300}
              height={400}
              alt="Modern building exterior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <img
              src="/interior-living.png"
              width={300}
              height={400}
              alt="Modern interior living space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            We Help People To Find Homes
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur adipisci velit. Nemo enim ipsam voluptatem
            quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur.
          </p>
          <div>
            <button className="bg-[#00b894] hover:bg-[#00a382] text-white py-2 px-6 rounded">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
