import React from "react";
import logo from "../Utils/logo.png";
import man from "../Utils/man.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  // find user from the store and get the information about him
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      {/* <img src={logo} alt="Logo" /> */}
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
        srcset=""
        className="h-20"
      />

      {user && (
        <div className="p-2">
          <img
            src={user.photoURL}
            alt="userIcon"
            className="h-12  align-middle"
          />
          <button
            onClick={handleSignOut}
            className="p-1  font-bold mt-1 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:scale-110"
          >
            LOG OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
