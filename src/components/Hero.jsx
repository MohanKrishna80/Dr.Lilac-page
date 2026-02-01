import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-4 md:px-10 py-10">

      {/* Image */}
      <img
        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
        alt="Bloom"
        className="rounded-t-full w-full max-w-xs md:max-w-md mx-auto transition-transform duration-500 hover:scale-105"
      />

      {/* Content */}
      <div className="flex-1 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
          Live your life
          <br />
          in full bloom
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
          Therapy for Adults · Minneapolis, MN.
        </p>

        <div className="mt-8 flex justify-center">
          <Button text="Connect with me" />
        </div>

      </div>
    </section>
  );
}
