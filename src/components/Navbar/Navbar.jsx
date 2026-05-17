import { useState } from "react";

import "./Navbar.css";

import {
  FaShoppingCart,
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

  return (

    <nav className="navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >

        Mettler Science Laboratory

      </Link>

      {/* RIGHT SIDE */}

      <div className="nav-right">

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

          <Link to="/">

            Home

          </Link>

        </li>

        {/* ONLY SHOW SCROLL LINKS ON HOME */}

        {isHomePage && (

          <>

            {/* ABOUT */}

            <li>

              <a href="#about">

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

                  <a href="#chemistry">

                    Chemistry

                  </a>

                </li>

                <li>

                  <a href="#biology">

                    Biology

                  </a>

                </li>

                <li>

                  <a href="#physics">

                    Physics

                  </a>

                </li>

                <li>

                  <a href="#geology">

                    Geology

                  </a>

                </li>

              </ul>

            </li>

            {/* CONTACT */}

            <li>

              <a href="#contact">

                Contact

              </a>

            </li>

          </>

        )}

        {/* CHECKOUT */}

        <li>

          <Link to="/checkout">

            Checkout

          </Link>

        </li>

      </ul>

    </nav>

  );
}