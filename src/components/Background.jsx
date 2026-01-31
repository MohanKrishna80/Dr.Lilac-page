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
      className="py-32 px-6"
    >
      <h2 className="text-5xl text-center mb-16 text-[#1f2d16]">
        My Professional Background
      </h2>

      <div className="max-w-3xl mx-auto border-t border-[#1f2d16]">

        {items.map((item, i) => (
          <div key={i} className="border-b font-bold border-[#1f2d16]">

            
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-8 text-left"
            >
              <span className="text-2xl text-[#1f2d16]">
                {item.title}
              </span>

              <span
                className={`text-3xl font-light font-bold text-[#1f2d16] transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            
            <div
              className={`grid transition-all duration-300 ${
                open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-8 text-lg text-[#1f2d16] max-w-xl">
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
