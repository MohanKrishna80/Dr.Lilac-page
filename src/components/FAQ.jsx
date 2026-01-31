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
    <section className="py-32 px-6 bg-[#fbf7f2]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* Left Arch Image */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
          alt="Flower pot"
          className="mx-auto w-[420px] h-[680px] object-cover rounded-t-full"
        />

        {/* Right FAQ */}
        <div>

          <h2 className="text-6xl mb-16 text-[#1f2d16]">FAQs</h2>

          <div className="border-t border-[#1f2d16]">

            {faqs.map((item, i) => (
              <div key={i} className="border-b font-bold   border-[#1f2d16]">

                {/* Row */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center gap-8 py-8 text-left"
                >
                  {/* Plus */}
                  <span
                    className={`text-3xl font-light font-bold transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                  {/* Question */}
                  <span className="text-3xl text-[#1f2d16]">
                    {item.q}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pl-12 text-lg text-[#1f2d16] max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
