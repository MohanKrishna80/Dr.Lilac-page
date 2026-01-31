import { motion } from "framer-motion";
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
    <section className="py-24 px-6 bg-neutral-50">
    
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl text-center mb-12"
      >
        My Specialties
      </motion.h2>

      
      <div className="grid md:grid-cols-3 gap-10 max-w-8xl mx-auto mb-20">
        {specialties.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{ backgroundColor: "hsla(32.73,17.46%,87.65%,1)" }}
            className="bg-white  border border-black transition overflow-hidden flex flex-col"

          >
            <div className="p-8 text-center flex-1">
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>

            
            <div className="px-6 pb-6 flex justify-center">
              <img
                src={s.img}
                alt={s.title}
                className="w-80 h-80 object-cover rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  className="grid md:grid-cols-2 min-h-screen"
>

  <motion.img
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
    alt="Calm therapy"
    className="w-full h-screen object-cover"
  />


  <div
    style={{ backgroundColor: "hsl(30deg 6.14% 80.12%)" }}
    className="flex flex-col h-screen px-20 py-24 text-left"
  >
    
    <div className="space-y-8">
      <h3 className="text-5xl font-medium">
        You don’t have to do this <span className="italic">all alone.</span>
      </h3>

      <p className="text-lg">
        If you are facing any of these, there’s hope:
      </p>

      <ul className="space-y-3 text-lg">
        {challenges.map((c, i) => (
          <li key={i}>• {c}</li>
        ))}
      </ul>

      <p className="text-lg max-w-xl">
        With empathy and guidance, we’ll work together to navigate the
        challenges life throws your way.
      </p>
    </div>

    
   <div className="mt-4 flex items-center width-full justify-center rounded-sm border-t border-black transition-all duration-700 hover:bg-green-950 hover:text-white">
  <button className="text-center py-3 gap-3 uppercase tracking-widest text-md transition-all duration-300">
    Work with me <span>→</span>
  </button>
</div>

  </div>
</motion.div>

    </section>
  );
}
