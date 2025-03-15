import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "text-sm bg-yellow-400 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: `${base} py-3 px-4 sm:px-6 sm:py-3`,
    secondary: `text-sm bg-transperent uppercase font-semibold border-2  border-stone-200 text-stone-800  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 sm:px-6 sm:py-3.5`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
  };

  if (to)
    return (
      <NavLink to={to} className={styles[type]}>
        {children}
      </NavLink>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
