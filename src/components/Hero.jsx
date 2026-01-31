import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-10">
      
      <img
        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
        alt="Bloom"
        className="rounded-t-full w-full max-w-md mx-auto"
      />

      <div>
        <div className="text-center">
          <h1 className="text-8xl">
            Live your life
            <br />
            in full bloom
          </h1>

          <p className="mt-4 text-3xl">
            Therapy for Adults · Minneapolis, MN.
          </p>

          <Button text="Connect with me" />
        </div>
      </div>
    </section>
  );
}
