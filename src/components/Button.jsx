import React, { useState } from "react";
export default ({ text }) => (
  <button className="mt-6 px-16 py-3  border border-black bg-trasparent ">
    {text}

    <i className="fa-solid fa-arrow-right pl-6 text-xl 1 "></i>
  </button>
);
