import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItem, navigate, updateQuatity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const temData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          temData.push({
            id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(temData);
  }, [cartItem]);

  return (
    <div className=" border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === item.id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_0.2fr_0.5fr] items-center gap-4 "
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency} {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 "
                type="number"
                min={1}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuatity(item.id, item.size, Number(e.target.value))
                }
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuatity(item.id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 mr-4 cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex   flex-col my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <Link to={"/place-order"} className="w-full text-end my-3">
            <button className="bg-black text-white text-sm my-8 py-3 ">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
