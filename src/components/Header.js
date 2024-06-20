//Header Component
import logo from "../image/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/" className="custom-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="custom-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="custom-link">
              Contact Us
            </Link>
          </li>
          <li className="custom-link">Cart</li>
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
