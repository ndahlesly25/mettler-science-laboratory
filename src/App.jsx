import {
  useState,
  useEffect,
  lazy,
  Suspense,
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

const Products = lazy(
  () => import("./components/Products/Products")
);

const ProductDetails = lazy(
  () =>
    import("./components/ProductDetails/ProductDetails")
);

const Checkout = lazy(
  () =>
    import("./components/Checkout/Checkout")
);

import Contact from "./components/ContactTemp/Contact.jsx";

import Footer from "./components/Footer/Footer";

import CartDrawer from "./components/CartTemp/CartDrawer";

import ScrollToTop from "./components/ScrollToTop";

import { FaWhatsapp } from "react-icons/fa";

import { Helmet } from "react-helmet";

import TopBar from "./components/TopBar/TopBar";

const AboutPage = lazy(
  () =>
    import("./Pages/AboutPage")
);

import CategoryShowcase from "./components/CategoryShowcase/CategoryShowcase";

import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";

import Testimonials from "./components/Testimonials/Testimonials";

import BackToTop from "./components/BackToTop/BackToTop";

import CookieBanner from "./components/CookieBanner/CookieBanner";

const CookiesPage = lazy(
  () =>
    import("./Pages/CookiesPage")
);

const TermsPage = lazy(
  () =>
    import("./Pages/TermsPage")
);

const PrivacyPage = lazy(
  () =>
    import("./Pages/PrivacyPage")
);

const ShippingPage = lazy(
  () =>
    import("./Pages/ShippingPage")
);

const ReturnsPage = lazy(
  () =>
    import("./Pages/ReturnsPage")
);

const FAQPage = lazy(
  () =>
    import("./Pages/FAQPage")
);

const MaintenancePage = lazy(
  () =>
    import("./Pages/MaintenancePage")
);

const CataloguePage = lazy(
  () =>
    import("./Pages/CataloguePage")
);

import Stats from "./components/Stats/Stats";

const KnowledgeCenter = lazy(
  () =>
    import("./Pages/KnowledgeCenter")
);

const KnowledgeArticle = lazy(
  () =>
    import("./Pages/KnowledgeArticle")
);

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
  searchTerm,
  setSearchTerm,
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

      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* ABOUT */}

      <Stats />

      <About />


      <CategoryShowcase />

      <FeaturedCategories />

      <Testimonials />


      {/* PRODUCTS */}

        <Suspense
          fallback={
            <div className="products-loading">
              Loading products...
            </div>
            }
      >

      <Products
        cartItems={cartItems}
        setCartItems={setCartItems}
        searchTerm={searchTerm}
      />

      </Suspense>

      {/* CONTACT */}

      <Contact />

    </motion.div>

  );
}

function App() {

  const location = useLocation();

  /* GLOBAL SEARCH */

  const [searchTerm, setSearchTerm] =
    useState("");

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

      {/* SCROLL TO TOP */}

      <ScrollToTop />

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

      {/* TOP BAR */}

        <TopBar />

      {/* NAVBAR */}

      <Navbar
        cartCount={cartItems.length}
        openCart={openCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />


      {/* ROUTES */}

      <Suspense
          fallback={
            <div className="page-loading">
              Loading...
            </div>
            }
     >

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
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />


        <Route
  path="/about"
  element={
    <AboutPage />
  }
/>

<Route
  path="/cookies"
  element={<CookiesPage />}
/>

<Route
  path="/terms"
  element={<TermsPage />}
/>

<Route
  path="/privacy"
  element={<PrivacyPage />}
/>

<Route
  path="/shipping"
  element={<ShippingPage />}
/>

<Route
  path="/returns"
  element={<ReturnsPage />}
/>

<Route
  path="/faq"
  element={<FAQPage />}
/>

<Route
  path="/maintenance"
  element={<MaintenancePage />}
/>

<Route
  path="/catalogue"
  element={<CataloguePage />}
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

        <Route
          path="/knowledge-center"
          element={<KnowledgeCenter />}
        />

        <Route
          path="/knowledge/:slug"
          element={<KnowledgeArticle />}
        />

  </Routes>

  </Suspense>

    

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
  href="https://wa.me/237670899763?text=Hello%20Mettler%20Company%20Limited,%20I%20would%20like%20to%20request%20a%20quotation%20for%20laboratory%20or%20medical%20equipment."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />

  <div className="whatsapp-text">
    <span>Need a Quote?</span>
    <small>Chat on WhatsApp</small>
  </div>

</a>

      <CookieBanner />

      {/* FOOTER */}

      <Footer />

      {/* BACK TO TOP */}

      <BackToTop />

    </>

  );
}

export default App;