import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      style={{ backgroundColor: "hsla(56.79,28.57%,38.43%,1)" }}
      className="py-24 px-10 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl mb-4 text-white"
      >
        Get started today.
      </motion.h2>

      <p className="text-white/90">
        Ready to take the first step towards a happier, healthier you?
      </p>

      <p className="text-white/90">Contact me to book your first session.</p>
      <button className="mt-6 px-14 py-2 text-white    border border-white bg-trasparent  ">
        Let's chat
        <i className="fa-solid fa-arrow-right pl-6 text-xl 1 "></i>
      </button>
    </section>
  );
}
