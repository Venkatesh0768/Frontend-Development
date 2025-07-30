import axios from "../utils/Axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`products/${id}`);
      setProduct(data.product);
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return ( product ? 
    (<div className="w-full h-screen  flex justify-center items-center">
      <div className="w-300 h-200 bg-white flex">
        <div className=" w-150 h-full flex justify-center">
          <img
            className="object-contain w-full h-full"
            src={product.image}
            alt=""
          />
        </div>
        <div className="w-150 flex flex-col gap-2 justify-center p-4">
          <h1 className="text-4xl font-semibold">{product.title}</h1>
          <h1 className="text-xl font-semibold text-red-400">
            Price: {product.price}
          </h1>
          <h1 className="text-sm ">{product.description}</h1>

          <h1 className=" font-semibold"> Brand: {product.brand}</h1>
          <h1 className=" font-semibold">Category: {product.category}</h1>

          <div className="flex gap-2.5 pt-2">
            <button className="bg-blue-500 px-6 py-2 rounded text-white">
              Edit
            </button>
            <button className="bg-blue-500 px-6 py-2 rounded text-white">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>) : (<Loading/>)
  );
}

export default ProductDetails;
