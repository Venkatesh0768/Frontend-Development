import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Card({ width , start , para , btn ,hover}) {
  return (
    <div className={`hover:${hover} bg-zinc-800 rounded-lg px-7 py-5 flex flex-col gap-2 ${width}`}>
      <div className="w-full flex justify-between">
        <span>Get In Touch</span>
        <FaArrowRight />
      </div>
      <div className="h-80">
        <h1 className="text-4xl py-4">
          Let's get to it, <br /> together
        </h1>
      </div>
      {start && (<span className="text-8xl">Start a Project</span>)}
      {btn && <button className="px-4 py-2 w-52 rounded-full h-14 border mt-3">
        Contact us
      </button>}
      {para && <span className="pt-40">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>}
    </div>
  );
}

export default Card;