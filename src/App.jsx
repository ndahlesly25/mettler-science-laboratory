import {
  useState,
  useEffect,
} from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";

import About from "./components/About/About";

import Products from "./components/Products/Products";

import ProductDetails from "./components/ProductDetails/ProductDetails";

import Checkout from "./components/Checkout/Checkout";

import Contact from "./components/ContactTemp/Contact.jsx";

import Footer from "./components/Footer/Footer";

import CartDrawer from "./components/CartTemp/CartDrawer";

import { FaWhatsapp } from "react-icons/fa";

import { Helmet } from "react-helmet";

/* PAGE TRANSITION */

const pageVariants = {

  initial: {
    opacity: 0,
    y: 30,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: -30,
  },

};

const pageTransition = {

  duration: 0.5,
};

/* HOMEPAGE */

function HomePage({
  cartItems,
  setCartItems,
}) {

  return (

    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >

      {/* HERO */}

      <Hero />

      {/* ABOUT */}

      <About />

      {/* PRODUCTS */}

      <Products
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      {/* CONTACT */}

      <Contact />

    </motion.div>

  );
}

function App() {

  const location = useLocation();

  /* GLOBAL CART STATE */

  const [cartItems, setCartItems] =
    useState([]);

  /* LOAD CART */

  useEffect(() => {

    const savedCart =
      localStorage.getItem(
        "mettler-cart"
      );

    if (savedCart) {

      const parsedCart =
        JSON.parse(savedCart);

      setTimeout(() => {

        setCartItems(parsedCart);

      }, 0);
    }

  }, []);

  /* SAVE CART */

  useEffect(() => {

    localStorage.setItem(

      "mettler-cart",

      JSON.stringify(cartItems)

    );

  }, [cartItems]);

  /* CART DRAWER */

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  /* OPEN CART */

  const openCart = () => {

    setIsCartOpen(true);
  };

  /* CLOSE CART */

  const closeCart = () => {

    setIsCartOpen(false);
  };

  /* REMOVE ITEM */

  const removeFromCart = (index) => {

    setCartItems((prevItems) =>

      prevItems.filter(
        (_, itemIndex) =>
          itemIndex !== index
      )

    );
  };

  return (

    <>

      {/* SEO */}

      <Helmet>

        <title>

          Mettler Science Laboratory |
          Laboratory Equipment Supplier

        </title>

        <meta
          name="description"
          content="
          Professional supplier of chemistry,
          biology, physics and geology
          laboratory equipment in Cameroon.
          High quality laboratory instruments,
          glassware, microscopes, chemicals,
          and educational science materials.
          "
        />

        <meta
          name="keywords"
          content="
          laboratory equipment,
          chemistry equipment,
          biology equipment,
          physics apparatus,
          geology equipment,
          bunsen burner,
          conical flask,
          laboratory supplier Cameroon,
          electronic balance,
          burette,
          pipette,
          science laboratory,
          microscopes,
          beakers,
          test tubes
          "
        />

        <meta
          name="author"
          content="Mettler Company Limited"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

      </Helmet>

      {/* NAVBAR */}

      <Navbar
        cartCount={cartItems.length}
        openCart={openCart}
      />

      {/* ROUTES */}

      <Routes
        location={location}
        key={location.pathname}
      >

        {/* HOME */}

        <Route
          path="/"
          element={
            <HomePage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        {/* PRODUCT DETAILS */}

        <Route
          path="/product/:slug"
          element={

            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >

              <ProductDetails
                setCartItems={setCartItems}
              />

            </motion.div>

          }
        />

        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={

            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >

              <Checkout
                cartItems={cartItems}
              />

            </motion.div>

          }
        />

      </Routes>

      {/* CART DRAWER */}

      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        closeCart={closeCart}
        removeFromCart={removeFromCart}
        setCartItems={setCartItems}
      />

      {/* WHATSAPP FLOAT */}

      <a
        href="https://wa.me/237670899763"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >

        <FaWhatsapp />

      </a>

      {/* FOOTER */}

      <Footer />

    </>

  );
}

export default App;