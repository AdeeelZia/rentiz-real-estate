

const Testimonial = ({ quote, name, role }: any) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 relative">
      <div className="text-[#1cd6c9] text-8xl font-serif leading-none">"</div>
      <div className="flex-1">
        <blockquote className="text-lg mb-6">{quote}</blockquote>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-400">{role}</p>
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
  );
};

export default Testimonial;
