import React from "react";

function Footer() {
  return (
    <div className="w-full flex gap-30 justify-center items-center pb-10">
      <div className="flex flex-col   justify-center items-center">
        <h1 className="text-[200px]">refokus</h1>
        <div className="flex gap-5">
           {["privacy Policy" ,"Cookie Policy" , "Impressum" , "Terms"].map((ele, index)=>(
                <a key={index} href="#">{ele}</a>
           ))}
        </div>
      </div>
      <div className="flex flex-col">
           <span className="mb-10 text-zinc-500">Social</span>
           {["Instagram" , "Twitter" , "LinkedIn"].map((ele, index)=>(
                <a className="text-sm text-zinc-500" key={index} href="#">{ele}</a>
           ))}
      </div>
      <div className="flex flex-col">
        <span className="mb-10 text-zinc-500">Site Map</span>
           {["Home" , "Work" , "Career" , "Contacts"].map((ele, index)=>(
                <a className="text-sm text-zinc-500" key={index} href="#">{ele}</a>
           ))}
      </div>
      <div className="flex flex-col justify-end items-end">
           <p className="w-52">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, a?</p>
           <button className="bg-purple-500 px-4 py-2 rounded mt-10 w-40 text-sm">Enterprise Patner</button>
      </div>
    </div>
  );
}

export default Footer;
