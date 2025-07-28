import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1662466767400-27c176fab51b?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basis",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,optio",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527784281695-866fa715d9d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Basis",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,optio",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple Basis",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,optio",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify content-center gap-10 ">
      {data.map((value ,index) => (
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              src={value.image}
              alt="Amazon Basis"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold text-sm">{value.name}</h2>
            <p className="text-xs mt-3 text-zinc-600">{value.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
