import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const [products] = useContext(productContext);
  console.log(products);

  return products ? (
    <>
      <NavBar />
      <div className="w-[85%] bg-zinc-100 h-full overflow-x-hidden overflow-auto p-4 ">
        <h1 className="p-4 text-3xl font-medium">Product List</h1>
        <div className="flex gap-4 flex-wrap">
          {products.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`}>
              <div className=" w-72 h-82 rounded-xl p-4 flex flex-col items-center  drop-shadow-xl shadow-white bg-white">
                <div className="w-full , h-72  overflow-hidden ">
                  <img
                    src={p.image}
                    alt={p.title}
                    onError={(e) => {
                      e.target.onerror = null; // prevent infinite loop
                      e.target.src =
                        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691053838595-headphone2.jpg"; // dummy image URL
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="mt-5 text-sm font-semibold">{p.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
