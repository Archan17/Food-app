//Header Component
import logo from "../image/logo.png";
import { useEffect, useState } from "react";
const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  useEffect(() => {
    console.log("UseEffect Called");
  }, [btnLogin]);
  console.log("Header Rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnLogin === "Login"
                ? setbtnLogin("Logout")
                : setbtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
