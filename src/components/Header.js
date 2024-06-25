//Header Component
import logo from "../image/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100">
      <div>
        <img className="w-44" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
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
