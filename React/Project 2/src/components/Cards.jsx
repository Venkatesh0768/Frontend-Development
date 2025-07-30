import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full h-[800px] bg-zinc-950 flex justify-center items-center ">
      <div className="w-[80rem] h-[30rem] flex gap-2">
        <Card width={"w-1/3"} start={false} para={true}  btn={false} hover={"bg-purple-800"}/>
        <Card width={"w-2/3"} start={true} para={false}  btn={true} hover={"bg-purple-900"}/>
      </div>
    </div>
  );
}

export default Cards;
