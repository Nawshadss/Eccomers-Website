import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xm sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy Exchange</p>
        <p className="font-semibold text-gray-400">
          We offer hassle free exchange Policy
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7 Daysa retrun Policy</p>
        <p className="font-semibold text-gray-400">
          We provide 7 days return policy
        </p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">CUtomer Support</p>
        <p className="font-semibold text-gray-400">
          We provide 24/7 customer service
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
