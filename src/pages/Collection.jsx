import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);
  const [shofiler, setFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  // filter funtion
  const applyFilter = () => {
    let productsCopy = products;
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category.toLowerCase())
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
    console.log(productsCopy);
  };
  // sort function
  const sortProduct = () => {
    let fpcopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    setFilterProducts(products);
  }, []);
  useEffect(() => {
    sortProduct(products);
  }, [sortType]);
  useEffect(() => {
    applyFilter();
    console.log(category);
    console.log(subCategory);
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => setFilter(!shofiler)}
          className="capitalize my-2 flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${shofiler ? "rotate-90" : ""} `}
            alt=""
          />
        </p>

        {/* categoty filte */}

        <div
          className={`border border-gray-300 pl-5 mt-6 ${
            shofiler ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">categories</p>
          <div className=" flex flex-col gap2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"men"}
                onChange={toggleCategory}
              />
              MEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"women"}
                onChange={toggleCategory}
              />
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"kids"}
                onChange={toggleCategory}
              />
              KIDS
            </p>
          </div>
        </div>

        {/*  */}

        {/* sub category filet */}
        <div
          className={`border border-gray-300 pl-5 my-6 ${
            shofiler ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">type</p>
          <div className=" flex flex-col gap2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              BottomWear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winter Wear
            </p>
          </div>
        </div>
        {/* ends here */}
      </div>
      {/* filter left side ends */}

      {/* right side of the ui */}
      <div className="flex-1">
        <div className=" flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* product sort */}
          <select onChange={(e) => setSortType(e.target.value)} name="" id="">
            <option value="relavent">Sort by: Relatvent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* maps product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              name={item.name}
              key={index}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
