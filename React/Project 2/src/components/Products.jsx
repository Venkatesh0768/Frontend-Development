import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import myVideo from "../assets/v1.mp4";
import myVideo1 from "../assets/v2.mp4";
import myVideo2 from "../assets/v3.webm";
import myVideo3 from "../assets/v4.mp4";

function Products() {
  const data = [
    {
      name: "Arqitel",
      descripation:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      name: "Cula",
      descripation:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      name: "Layout Land",
      descripation:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      name: "Maniv",
      descripation:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (index) => {
    setPos(index * 368); // 23rem = 368px
  };

  return (
    <div className="max-w-screen-4xl h-[80rem] bg-zinc-950 m-auto  relative">
      {data.map((ele, index) => (
        <Product key={index} val={ele} mover={mover} index={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem]  bg-sky-400 left-[30%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-200"
          >
            <video
              className="w-full h-full object-cover"
              src={myVideo}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              className="w-full h-full object-cover"
              src={myVideo1}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-400"
          >
            <video
              className="w-full h-full object-cover"
              src={myVideo2}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="w-full h-full object-cover"
              src={myVideo3}
              autoPlay
              loop
              muted
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
