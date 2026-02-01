import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 px-4 md:px-12 pt-14 md:pt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col gap-10 text-sm md:text-base text-gray-700 pb-14 md:pb-20">

        {/* Brand + Hours (always row) */}
        <div className="flex flex-row justify-between items-start gap-6">

          {/* Brand */}
          <div className="space-y-2 text-left">
            <h3 className="text-lg md:text-2xl font-medium text-[#1f2d16] mb-2">
              Lilac Template
            </h3>

            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>

            <p className="mt-3 underline cursor-pointer hover:opacity-70 transition">
              email@example.com
            </p>
            <p className="underline cursor-pointer hover:opacity-70 transition">
              (555) 555-5555
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-2 text-left">
            <h4 className="text-base md:text-xl font-medium text-[#1f2d16]">
              Hours
            </h4>
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>

        </div>

        {/* Find (below on mobile) */}
        <div className="space-y-2 text-left md:text-right">

          <h4 className="text-base md:text-xl font-medium text-[#1f2d16]">
            Find
          </h4>

          <ul className="space-y-1">
            {["Home", "Contact", "Blog"].map((item) => (
              <li key={item}>
                <a href="#" className="underline hover:opacity-70 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

        </div>

      </div>

      {/* Bottom */}
      <div className="bg-neutral-200 border-t border-black py-6 md:py-8">

        <div className="max-w-7xl mx-auto text-center space-y-3 text-xs md:text-sm text-[#1f2d16] px-4">

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 underline">
            {[
              "Privacy & Cookies Policy",
              "Good Faith Estimate",
              "Website Terms & Conditions",
              "Disclaimer",
            ].map((link) => (
              <a key={link} href="#" className="hover:opacity-70 transition">
                {link}
              </a>
            ))}
          </div>

          <p>
            Website Template Credits:{" "}
            <span className="underline hover:opacity-70 transition">
              Go Bloom Creative
            </span>
          </p>

          <p>
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>

        </div>
      </div>

    </footer>
  );
}
