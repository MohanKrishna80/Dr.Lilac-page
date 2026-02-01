import React from "react";

export default function Intro() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6 animate-fadeUp"
      style={{ backgroundColor: "#ecd7f3" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">

          <h2 className="text-4xl md:text-6xl mb-6">
            Hi, I’m Lilac.
          </h2>

          <p className="text-gray-700 mb-4">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors.
          </p>

          <p className="text-gray-600 mb-6">
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="group mt-4 px-10 py-3 border border-black bg-transparent flex items-center gap-4 transition-all duration-300 hover:scale-105 active:scale-95">
              Let's chat
              <span className="transition-transform duration-300 group-hover:translate-x-2 text-xl">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="relative flex justify-center flex-1">

          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
            className="w-full max-w-xs md:max-w-sm h-[420px] md:h-[520px] rounded-t-full object-cover transition-transform duration-500 hover:scale-105"
            alt=""
          />

          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
            className="absolute -bottom-8 -right-4 w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-500 hover:scale-110"
            alt=""
          />

        </div>
      </div>
    </section>
  );
}
