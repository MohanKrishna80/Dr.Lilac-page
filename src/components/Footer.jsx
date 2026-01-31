import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 px-12 pt-24">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto flex justify-between items-start text-lg text-gray-700 pb-24">

        {/* Brand + Address */}
        <div className="space-y-4">
          <h3 className="text-4xl font-medium text-[#1f2d16] mb-10">
            Lilac Template
          </h3>

          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>

          <p className="mt-10 underline">email@example.com</p>
          <p className="underline">(555) 555-5555</p>
        </div>

        {/* Hours */}
        <div className="space-y-4 text-right">
          <h4 className="text-3xl font-medium text-[#1f2d16]">Hours</h4>
          <p>Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        {/* Find */}
        <div className="space-y-4 text-right">
          <h4 className="text-3xl font-medium text-[#1f2d16]">Find</h4>

          <ul className="space-y-2">
            <li>
              <a href="#" className="underline">Home</a>
            </li>
            <li>
              <a href="#" className="underline">Contact</a>
            </li>
            <li>
              <a href="#" className="underline">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-200 border-t border-black py-10">

        <div className=" mx-full text-center space-y-6 text-base text-[#1f2d16]">

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 underline">
            <a href="#">Privacy & Cookies Policy</a>
            <a href="#">Good Faith Estimate</a>
            <a href="#">Website Terms & Conditions</a>
            <a href="#">Disclaimer</a>
          </div>

          <p>
            Website Template Credits: <span className="underline">Go Bloom Creative</span>
          </p>

          <p>
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>

        </div>
      </div>

    </footer>
  );
}
