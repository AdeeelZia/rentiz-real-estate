import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role }) => {
  return (
    <div className="text-white p-6 md:p-10 rounded-lg max-w-3xl mx-auto">
      <div className="flex flex-col gap-6 relative">
        <img src="../favicon/quote.svg" alt="icon" className="max-w-[3rem]" />
        <blockquote className="text-sm md:text-2xl leading-relaxed">
          {quote}
        </blockquote>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center hover:text-white hover:border-[#1cd6c9]">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
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
              className="w-8 h-8 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center hover:text-white hover:border-[#1cd6c9]"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
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
