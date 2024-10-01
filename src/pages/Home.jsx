import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller />
      <OurPolicy></OurPolicy>
      <Newsletter />
    </div>
  );
};

export default Home;
