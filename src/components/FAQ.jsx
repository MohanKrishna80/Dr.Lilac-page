import React, { useState } from "react";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "At this time, I do not accept insurance directly, but I can provide superbills for out-of-network reimbursement.",
  },
  {
    q: "What are your rates?",
    a: "Individual sessions are offered at a self-pay rate. Please reach out directly for current pricing and availability.",
  },
  {
    q: "Do you have any openings?",
    a: "Availability changes regularly. The best way to find out is to contact me for a quick consultation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#fbf7f2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">

        {/* Image */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
          alt="Flower pot"
          className="mx-auto w-full max-w-sm md:w-[420px] h-[360px] md:h-[680px] object-cover rounded-t-full flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1">

          <h2 className="text-4xl md:text-6xl mb-10 md:mb-16 text-[#1f2d16]">
            FAQs
          </h2>

          <div className="flex flex-col border-t border-[#1f2d16]">

            {faqs.map((item, i) => (
              <div key={i} className="flex flex-col border-b border-[#1f2d16]">

                {/* Question */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start gap-4 md:gap-8 py-6 md:py-8 text-left transition-opacity duration-300 hover:opacity-80"
                >
                  <span
                    className={`text-2xl md:text-3xl text-[#1f2d16] transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                  <span className="text-xl md:text-3xl text-[#1f2d16]">
                    {item.q}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`pb-6 md:pb-8 pl-8 md:pl-12 text-base md:text-lg text-[#1f2d16] max-w-xl transform transition-all duration-500 ${
                      open === i ? "translate-y-0" : "-translate-y-2"
                    }`}
                  >
                    {item.a}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
