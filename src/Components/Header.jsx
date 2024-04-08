import React from "react";
import logo from "../Utils/logo.png";

const Header = () => {
  return (
    <div className="absolute w-52 px-8 py-2 bg-gradient-to-b from-black z-10">
      {/* <img src={logo} alt="Logo" /> */}
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Header;
