import React from "react";

const specialties = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilled life. Let’s work together to bolster your self-esteem.",
    img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w",
  },
  {
    title: "Relationships",
    desc: "Navigating relationships can be complex. I’m here to guide you through these challenges and help create healthier connections.",
    img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w",
  },
  {
    title: "Burnout",
    desc: "Feeling overwhelmed by your career is more common than you think. Together, we’ll find ways to manage and prevent burnout.",
    img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w",
  },
];

const challenges = [
  "Persistent feelings of sadness or hopelessness",
  "Trouble focusing or making decisions",
  "Difficulty maintaining relationships",
  "Feeling constantly exhausted or unmotivated",
  "A pervasive sense of being overwhelmed",
];

export default function Specialties() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-neutral-50 animate-fadeUp">

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl text-center mb-12">
        My Specialties
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mb-20">

        {specialties.map((s, i) => (
          <div
            key={i}
            style={{ backgroundColor: "hsla(32.73,17.46%,87.65%,1)" }}
            className="flex-1 border border-black overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-6 md:p-8 text-center flex-1">
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>

            <div className="px-6 pb-6 flex justify-center">
              <img
                src={s.img}
                alt={s.title}
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}

      </div>

      {/* Bottom Split Section */}
      <div className="flex flex-col md:flex-row md:h-screen">

        {/* Image Side */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
          alt="Calm therapy"
          className="w-full md:w-1/2 h-[400px] md:h-full object-cover"
        />

        {/* Text Side */}
        <div
          style={{ backgroundColor: "hsl(30deg 6.14% 80.12%)" }}
          className="flex flex-col justify-between md:w-1/2 h-full px-6 md:px-20 py-12 md:py-24"
        >

          <div className="space-y-6 md:space-y-8">

            <h3 className="text-3xl md:text-5xl font-medium">
              You don’t have to do this <span className="italic">all alone.</span>
            </h3>

            <p className="text-base md:text-lg">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="space-y-2 md:space-y-3 text-base md:text-lg">
              {challenges.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>

            <p className="text-base md:text-lg max-w-xl">
              With empathy and guidance, we’ll work together to navigate the
              challenges life throws your way.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center border-t border-black transition-all duration-500 hover:bg-green-950 hover:text-white">
            <button className="py-1.5 uppercase tracking-widest text-sm md:text-md transition-all duration-300">
              Work with me <span>→</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
