import { createContext, useEffect, useState } from "react";
import { assets, products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItem, setCartItem] = useState({});
  // const navigate = useNavigate();

  const addToCart = async (id, size) => {
    if (!size) {
      toast.error("please Select a size first");
      return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
            console.log(cartItem[items][item]);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };
  const getCartAmout = () => {
    let totalAmout = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product.id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmout += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmout;
  };

  const updateQuatity = async (id, size, quantity) => {
    let cardata = structuredClone(cartItem);
    cardata[id][size] = quantity;
    setCartItem(cardata);
  };
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const currency = "$";
  const deliveryFee = 10;
  const value = {
    getCartAmout,
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    updateQuatity,
    setShowSearch,
    addToCart,
    cartItem,
    getCartCount,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
