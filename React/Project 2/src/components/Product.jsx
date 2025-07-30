import React from "react";
import Button from "./Button";

function Product({ val, mover, index  }) {
  return (
    <div onMouseEnter={() => mover(index)} className=" w-full h-80 mt-20">
      <div className="w-full flex justify-between">
        <span className="text-5xl font-medium flex justify-center items-center w-[30%]  font-satoshi ">
          {val.name}
        </span>
        <div className="w-[50%]  flex flex-col justify-center items-center">
          <div className="w-[40%] flex flex-col">
            <p>{val.descripation}</p>
            <div className="gap-5 pt-4 flex justify-center items-center">
              <Button name={"Live Project"} />
              <Button name={"Case Project"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
