import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
