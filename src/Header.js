import React, { useContext } from "react";
import { UserContext, useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();

  return (
    <header>
      <a href="#">Home</a> Hello,{name}, you are{" "}
      {loggedIn ? "logged In" : "anonymous"}
    </header>
  );
};
export default Header;
