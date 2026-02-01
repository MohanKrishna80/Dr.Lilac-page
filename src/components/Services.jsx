import React from "react";

const services = ["Anxiety Support", "Trauma Healing", "Burnout Recovery"];

export default function Help() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-10 animate-fadeUp">

      <h2 className="text-3xl md:text-4xl text-center mb-10">
        How I Can Help
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">

        {services.map((item, i) => (
          <div
            key={i}
            className="flex-1 p-6 bg-neutral-50 rounded-xl shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
          >
            <p className="text-lg md:text-xl">{item}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
