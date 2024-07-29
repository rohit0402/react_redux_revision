import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Context/UserContext";

const Navbar = ({ setProducts }) => {
  const [searchval, setSearchval] = useState("");

  const {cart}=useContext(ProductContext);

  const handleChange = (e) => {
    setSearchval(e.target.value);
  };

  const searchpdt = async () => {
    const respone = await fetch(
      `https://dummyjson.com/products/search?q=${searchval}`
    );
    const data = await respone.json();
    setProducts(data.products);
  };
  return (
    <div className=" flex justify-between items-center gap-5 px-1 py-3 shadow-md rounded-lg mb-2">
      <h4 className="font-bold text-lg ml-4 px-2">Project1</h4>
      <div className=" flex gap-1 ">
        <input
          type="search"
          className={`bg-slate-200 rounded-md w-[50vw] h-8 outline-none ${
            searchval ? "outline-violet-500" : "none"
          } `}
          value={searchval}
          onChange={handleChange}
        />
        <button
          className=" bg-slate-500 px-2 py-1 rounded-md cursor-pointer outline-none"
          onClick={searchpdt}
        >
          Search
        </button>
      </div>
      <ul className=" flex space-x-4 font-bold text-lg mr-4 px-2">
        <Link className=" hover:text-slate-300" to={"/"}>
          Home
        </Link>
        <Link className=" hover:text-slate-300" to={"/cart"}>
          Cart{
            cart.length===0?"":`(${cart.length})`
          }
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
