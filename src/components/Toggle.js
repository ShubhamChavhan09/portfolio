import React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle" onClick={toggleTheme}>
      {theme === "dark" ? <FaRegSun /> : <FaRegMoon />}
    </div>
  );
};

export default Toggle;
