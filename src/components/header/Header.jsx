import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { useSelector, shallowEqual } from "react-redux";
/* Component for the header*/

// eslint-disable-next-line react/prop-types
const Header = ({ handleLogout }) => {
  const count = useSelector((state) => state.cart.count, shallowEqual);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <div className="header-navBar">
        <Link to="/">
          <h1 className="header-logo" title="home">
            ¥E-com
          </h1>
        </Link>
        <ul className="header-list">
          <li className={`header-item ${activeLink === "/" ? "active" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={`header-item ${
              activeLink === "/products" ? "active" : ""
            }`}
          >
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="header_right">
          <span>
            <FaShoppingCart className="header-link icon cart" title="cart" />
            {count !== 0 && (
              <div className="cart-count" data-testid="cart-count">
                {count}
              </div>
            )}
          </span>
          <span onClick={handleLogout} className="header-link" title="logout">
            <FiLogOut className="header-link icon logout" />
          </span>
        </div>
      </div>
      <div className="header-breadcrumbs">
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default Header;
