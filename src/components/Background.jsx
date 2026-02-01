import React, { useState } from "react";

const items = [
  {
    title: "Education",
    desc: "Doctorate-level clinical training with a strong foundation in evidence-based therapy approaches."
  },
  {
    title: "Licensure",
    desc: "Fully licensed mental health professional in California, providing in-person and telehealth services."
  },
  {
    title: "Certifications",
    desc: "Specialized training in CBT, EMDR, mindfulness, and body-based therapeutic techniques."
  }
];

export default function Background() {
  const [open, setOpen] = useState(null);

  return (
    <section
      style={{ backgroundColor: "hsla(32.73,17.46%,87.65%,1)" }}
      className="py-20 md:py-32 px-4 md:px-6"
    >
      <h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 text-[#1f2d16]">
        My Professional Background
      </h2>

      <div className="max-w-3xl mx-auto border-t border-[#1f2d16]">

        {items.map((item, i) => (
          <div key={i} className="border-b border-[#1f2d16]">

            {/* Header */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="group w-full flex justify-between items-center py-6 md:py-8 text-left transition-all duration-300 hover:opacity-80"
            >
              <span className="text-xl md:text-2xl text-[#1f2d16]">
                {item.title}
              </span>

              <span
                className={`text-2xl md:text-3xl font-light text-[#1f2d16] transition-transform duration-300 ease-out ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-6 md:pb-8 text-base md:text-lg text-[#1f2d16] max-w-xl transform transition-all duration-500 ${
                    open === i ? "translate-y-0" : "-translate-y-2"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
