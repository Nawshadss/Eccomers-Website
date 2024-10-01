import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { getCartAmout, currency, deliveryFee } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency}
            {getCartAmout()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shiping Fee</p>
          <p>
            {currency}
            {deliveryFee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmout() === 0 ? 0 : getCartAmout() + deliveryFee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
