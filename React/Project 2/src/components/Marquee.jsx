import React from "react";

function Marquee({ images }) {
  return (
    <div className="flex justify-center items-center gap-10 ">
      {images.map((url, index) => (
        <img className="w-32 " key={index} src={url} alt="" />
      ))}
    </div>
  );
}

export default Marquee;
