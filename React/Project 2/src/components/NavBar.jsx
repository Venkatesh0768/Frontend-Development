import React from "react";
import Button from "./Button";

function NavBar() {
  return (
    <div className=" p-6 max-w-screen-xl mx-auto flex justify-between items-center border-b-1 border-zinc-700" >
      <div className="flex gap-15">
        <div>
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
        </div>
        <div className=" font-regular flex justify-center items-center gap-13">
          {["Home", "Work", "Culture", "", "News"].map((ele , i) => (
            <a href="#" className="flex items-center justify-center gap-1">
              {i ===1 && (<span style={{boxShadow:" 0 0  .45em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-400"></span>)}
              {ele.length === 0 && (<span className="w-[1px] h-6 bg-zinc-500"></span>)}
              {ele}
            </a>
          ))}
        </div>
      </div>
      <Button name={"Start Project"}/>
    </div>
  );
}

export default NavBar;
