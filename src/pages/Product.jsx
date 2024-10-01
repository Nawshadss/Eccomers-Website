import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = () => {
    products.map((item) => {
      if (item.id === id) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* products data */}
      <div className=" flex  sm:gap-12 flex-col sm:flex-row">
        {/* productimage */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <ToastContainer />
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              return (
                <>
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    key={index}
                    className="w-[24%] sm:w-full flex-shrink-0 cursor-pointer"
                    alt={item}
                  />
                </>
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-3">{productData.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_dull_icon} className="w-3 5" alt="" />
          </div>
          <p className=" mt-5 text-3xl font-medium">
            {" "}
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 sm:w-4/5 text-gray-500">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Swlect Size</p>
            <div className=" flex gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData.id, size)}
            className="bg-black text-white py-3 px-8 active:bg-gray-700 "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
