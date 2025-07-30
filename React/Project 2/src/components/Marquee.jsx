import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesUrl, direction = "left" }) {
  const isLeft = direction === "left";
  const animation = {
    x: isLeft ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
    },
  };

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div animate={animation} className="flex gap-10 min-w-full">
        {[...imagesUrl, ...imagesUrl].map((url, index) => (
          <img
            className="w-32 flex-shrink-0"
            key={index}
            src={url}
            alt={`img-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
