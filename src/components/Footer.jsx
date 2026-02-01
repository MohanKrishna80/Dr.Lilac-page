import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 px-4 md:px-12 pt-16 md:pt-24">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-base md:text-lg text-gray-700 pb-16 md:pb-24">

        {/* Address */}
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-medium text-[#1f2d16] mb-6 md:mb-10">
            Lilac Template
          </h3>

          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>

          <p className="mt-6 underline cursor-pointer hover:opacity-70 transition">
            email@example.com
          </p>
          <p className="underline cursor-pointer hover:opacity-70 transition">
            (555) 555-5555
          </p>
        </div>

        {/* Hours */}
        <div className="space-y-3 md:space-y-4 text-center md:text-right">
          <h4 className="text-2xl md:text-3xl font-medium text-[#1f2d16]">
            Hours
          </h4>
          <p>Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        {/* Links */}
        <div className="space-y-3 md:space-y-4 text-center md:text-right">
          <h4 className="text-2xl md:text-3xl font-medium text-[#1f2d16]">
            Find
          </h4>

          <ul className="space-y-2">
            {["Home", "Contact", "Blog"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="underline hover:opacity-70 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-200 border-t border-black py-8 md:py-10">

        <div className="max-w-7xl mx-auto text-center space-y-4 md:space-y-6 text-sm md:text-base text-[#1f2d16] px-4">

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 underline">
            {[
              "Privacy & Cookies Policy",
              "Good Faith Estimate",
              "Website Terms & Conditions",
              "Disclaimer",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:opacity-70 transition"
              >
                {link}
              </a>
            ))}
          </div>

          <p>
            Website Template Credits:{" "}
            <span className="underline cursor-pointer hover:opacity-70 transition">
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
