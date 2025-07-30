import React from "react";
import Product from "./Product";

function Products() {
    const data = [
        {name: "Arqitel" , descripation: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." },
        {name: "Cula" , descripation: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates." },
        {name: "Layout Land" , descripation: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow."},
        {name: "Maniv" , descripation: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods."},
    ]

  return (
    <div className="max-w-screen-3xl h-320 bg-zinc-950 m-auto ">
        {data.map((ele , index)=>(
            <Product key={index} val={ele}/>
        ))}
    </div>
  );
}

export default Products;
