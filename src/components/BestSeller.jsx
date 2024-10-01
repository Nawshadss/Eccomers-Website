import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, SetBestSEller] = useState([]);
  useEffect(() => {
    const bestPoroduct = products?.filter((item) => item.bestseller);
    SetBestSEller(bestPoroduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          voluptate minus aut ullam quam!{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
