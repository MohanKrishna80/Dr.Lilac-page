import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 md:px-10 py-4 md:py-6 flex items-center justify-between relative">

      {/* Logo */}
      <h2 className="text-2xl md:text-4xl font-semibold">
        Lilac Template
      </h2>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-xl">
        <a href="#" className="hover:opacity-70 transition">Home</a>
        <a href="#" className="hover:opacity-70 transition">Blog</a>
        <a href="#" className="hover:opacity-70 transition">Contact</a>
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-between w-8 h-6"
      >
        <span
          className={`h-[2px] w-full bg-black transition-transform duration-300 ${
            open ? "rotate-45 translate-y-[10px]" : ""
          }`}
        />
        <span
          className={`h-[2px] w-full bg-black transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-full bg-black transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-[10px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-6 transition-all duration-300 overflow-hidden md:hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a href="#" className="text-xl">Home</a>
        <a href="#" className="text-xl">Blog</a>
        <a href="#" className="text-xl">Contact</a>
      </div>

    </header>
  );
}
