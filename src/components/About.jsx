import React from "react";

export default function About() {
  return (
    <section className="min-h-screen grid md:grid-cols-2">

      {/* Left Content */}
      <div
        className="flex flex-col justify-between px-16 py-28"
        style={{ backgroundColor: "#efe9e2" }}
      >
        {/* Text */}
        <div className="space-y-8 mt-20">
          <h1 className="text-5xl font-medium text-[#1f2d16]">
            Live a fulfilling life.
          </h1>

          <p className="text-[#1f2d16] text-lg max-w-xl">
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>

          <p className="text-[#1f2d16] text-lg max-w-xl">
            It's easy to feel like you're alone in facing these challenges, but I
            want you to know that I'm here to help.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 flex items-end justify-center">
          <button className="flex items-center border-t border-black w-full justify-center gap-3 text-[#1f2d16] text-sm uppercase tracking-widest py-4 transition-all duration-300 hover:bg-[#1f2d16] hover:text-white">
            Get in touch <span>→</span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <img
        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
        alt="Calm therapy"
        className="w-full h-screen object-cover"
      />

    </section>
  );
}
