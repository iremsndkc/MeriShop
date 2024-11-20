import React from "react";
import NavbarLeft from "./navbaritems/NavbarLeft";
import NavbarRight from "./navbaritems/NavbarRight";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
