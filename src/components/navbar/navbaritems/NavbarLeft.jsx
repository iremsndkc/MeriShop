import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="text-5xl">
      {/* Link ile MeriShop'u sarmaladık */}
      <Link to="/">MeriShop</Link>
    </div>
  );
};

export default NavbarLeft;
