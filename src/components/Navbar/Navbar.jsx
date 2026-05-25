import { useState } from "react";

import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

import {
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

export default function Navbar({
  cartCount,
  openCart,
  
}) {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [dropdownOpen, setDropdownOpen] =
    useState(false);

  /* CURRENT PAGE */

  const location = useLocation();

  /* HOME PAGE CHECK */

  const isHomePage =
    location.pathname === "/";

  /* CLOSE ALL MENUS */

  const closeMenus = () => {

    setMenuOpen(false);

    setDropdownOpen(false);

  };

  return (

    <nav className="navbar">

      {/* LOGO */}

      <Link
  to="/"
  className="logo"
  onClick={closeMenus}
>

  <img
    src={logo}
    alt="Mettler Logo"
    className="logo-image"
  />

  <span className="logo-text">

    Mettler Company Limited

  </span>

</Link>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        {/* SEARCH ICON */}

<div
  className="search-icon"
  onClick={() => {

    document
      .getElementById("home")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }}
>

  <FaSearch />

</div>


        {/* CART */}

        <div
          className="cart-icon"
          onClick={openCart}
        >

          <FaShoppingCart />

          <span className="cart-count">

            {cartCount}

          </span>

        </div>

        {/* HAMBURGER */}

        <div
          className="hamburger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </div>

      </div>

      {/* NAVIGATION */}

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >


        {/* HOME */}

        <li>

  {isHomePage ? (

    <a
      href="#home"
      onClick={closeMenus}
    >

      Home

    </a>

  ) : (

    <Link
      to="/"
      onClick={closeMenus}
    >

      Home

    </Link>

  )}

</li>

        {/* ONLY SHOW SCROLL LINKS ON HOME */}

        {isHomePage && (

          <>

            {/* ABOUT */}

            <li>

              <a
                href="#about"
                onClick={closeMenus}
              >

                About

              </a>

            </li>

            {/* PRODUCTS */}

            <li className="dropdown">

              <div
                className="dropdown-title"
                onClick={() =>
                  setDropdownOpen(
                    !dropdownOpen
                  )
                }
              >

                Products ▾

              </div>

              <ul
                className={`dropdown-menu ${
                  dropdownOpen
                    ? "show"
                    : ""
                }`}
              >

                <li>

                  <a
                    href="#chemistry"
                    onClick={closeMenus}
                  >

                    Chemistry

                  </a>

                </li>

                <li>

                  <a
                    href="#biology"
                    onClick={closeMenus}
                  >

                    Biology

                  </a>

                </li>

                <li>

                  <a
                    href="#physics"
                    onClick={closeMenus}
                  >

                    Physics

                  </a>

                </li>

                <li>

                  <a
                    href="#geology"
                    onClick={closeMenus}
                  >

                    Geology

                  </a>

                </li>

              </ul>

            </li>

            {/* CONTACT */}

            <li>

              <a
                href="#contact"
                onClick={closeMenus}
              >

                Contact

              </a>

            </li>

          </>

        )}

        {/* CHECKOUT */}

        <li>

          <Link
            to="/checkout"
            onClick={closeMenus}
          >

            Checkout

          </Link>

        </li>

      </ul>

    </nav>

  );
}