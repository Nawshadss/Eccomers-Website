import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethos] = useState("cod");
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side------------------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERIES"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          type="text"
          placeholder="Street"
        />
        <div className=" flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className=" flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          type="number"
          placeholder="Number"
        />
      </div>
      {/* right side====================================================== */}
      <div className="mt-8 ">
        <div className=" mt-8 min-w-80">
          <CartTotal />
        </div>
        <div>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap3 flex-col lg:flex-row">
            <div
              onClick={() => setMethos("stripe")}
              className=" flex items-center gap3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className=" h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethos("raserpay")}
              className=" flex items-center gap3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "raserpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className=" h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethos("cod")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className=" text-gray-300 border text-sm mx-4 ">
                CSH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
        <Link className="w-full text-end mt-8" to="/orders">
          <button className="bg-black text-white border px16 py-3">
            PLACE ORDER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrder;
