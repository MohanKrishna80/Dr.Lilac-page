import { motion } from "framer-motion";
import React from "react";

export default function Intro() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#ecd7f3" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}

        >
          <h2 className="text-6xl">Hi, I’m Lilac.</h2>

          <p className="text-gray-700">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors.
          </p>

          <p className="text-gray-600">
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>
          <div className="flex items-end justify-center">

          <button className="mt-6 px-10 py-3  border border-black bg-trasparent  ">
            Let's chat  

            <i className="fa-solid fa-arrow-right pl-6 text-xl 1 "></i>
          </button>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
         
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
            className="w-[520px] h-[600px] md:w-[380px] rounded-t-full object-cover"
            alt=""
          />

          
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
            className="absolute -bottom-10 -right-6 w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}
