import React from "react";

export default function CTA() {
  return (
    <section
      style={{ backgroundColor: "hsla(56.79,28.57%,38.43%,1)" }}
      className="py-16 md:py-24 px-6 md:px-10 text-center animate-fadeUp"
    >
      <h2 className="text-3xl md:text-4xl mb-4 text-white">
        Get started today.
      </h2>

      <p className="text-white/90 text-sm md:text-base">
        Ready to take the first step towards a happier, healthier you?
      </p>

      <p className="text-white/90 text-sm md:text-base">
        Contact me to book your first session.
      </p>

      <button className="group mt-8 px-10 md:px-14 py-3 text-white border border-white bg-transparent flex items-center justify-center mx-auto gap-4 transition-all duration-300 ease-out hover:scale-105 active:scale-95">
        Let's chat
        <span className="transition-transform duration-300 group-hover:translate-x-2 text-xl">
          →
        </span>
      </button>
    </section>
  );
}
