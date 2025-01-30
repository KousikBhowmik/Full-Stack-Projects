import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shotContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(shopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0,10));
  },[])
  
  return (
    <div className="my-10 ">
      <div className="py-8 text-3xl text-center">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis
          quae cumque blanditiis commodi velit!
        </p>
      </div>

      {/* Rendering products */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 ">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
