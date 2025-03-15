import React from "react";
import { NavLink } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";
const Header = () => {
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex flex-row justify-between items-center">
      <NavLink to="/" className="tracking-widest">Fast React Pizza Co.</NavLink>
      <SearchOrder />
      <Username/>
    </header>
  );
};

export default Header;
