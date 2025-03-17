import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const className = `text-sm text-blue-500 hover:text-bule-600`;

  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }

  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default LinkButton;
