import React from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle" onClick={toggleTheme}>
      {theme === "dark" ? <BsSunFill /> : <FaMoon />}
    </div>
  );
};

export default Toggle;
