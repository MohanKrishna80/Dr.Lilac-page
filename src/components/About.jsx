import React from "react";

export default function About() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">

      {/* Left Content */}
      <div
        className="flex flex-col justify-between px-6 py-16 md:px-16 md:py-28 transition-all duration-700 ease-out"
        style={{ backgroundColor: "#efe9e2" }}
      >
        <div className="space-y-6 md:space-y-8 mt-10 md:mt-20 animate-fadeUp">

          <h1 className="text-3xl md:text-5xl font-medium text-[#1f2d16] transition-all duration-700 ease-out">
            Live a fulfilling life.
          </h1>

          <p className="text-[#1f2d16] text-base md:text-lg max-w-xl transition-all duration-700 delay-100">
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>

          <p className="text-[#1f2d16] text-base md:text-lg max-w-xl transition-all duration-700 delay-200">
            It's easy to feel like you're alone in facing these challenges, but I
            want you to know that I'm here to help.
          </p>

        </div>

        {/* Button */}
        <div className="pt-10 flex items-end justify-center">
          <button className="group  flex items-center border-t border-black w-full justify-center gap-3 text-[#1f2d16] text-xs md:text-sm uppercase tracking-widest py-4 transition-all duration-300 ease-in-out hover:bg-[#1f2d16] hover:text-white hover:-translate-y-1">

            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </button>
        </div>
      </div>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
          alt="Calm therapy"
          className="w-full h-[50vh] md:h-screen object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

    </section>
  );
}
