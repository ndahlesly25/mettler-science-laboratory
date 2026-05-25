import "./Products.css";

import { useState } from "react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

/* IMPORT PRODUCT DATA */

import chemistryProducts from "../../data/chemistry";
import biologyProducts from "../../data/biology";
import physicsProducts from "../../data/physics";
import geologyProducts from "../../data/geology";

/* ALL PRODUCTS */

const allProducts = [

  ...chemistryProducts,

  ...biologyProducts,

  ...physicsProducts,

  ...geologyProducts,

];

/* PRODUCT CARD */

function ProductCard({
  product,
  openModal,
  addToCart,
}) {

  return (

    <motion.div
      className="product-card"

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.5,
      }}

      whileHover={{
        y: -10,
      }}
    >

      {/* IMAGE */}

      <Link
        to={`/product/${product.slug}`}
      >

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

      </Link>

      {/* TITLE */}

      <Link
        to={`/product/${product.slug}`}
        className="product-link"
      >

        <h3>{product.name}</h3>

      </Link>

      <p>{product.description}</p>

      <span>{product.price}</span>

      {/* BUTTONS */}

      <div className="product-buttons">

        <button
          onClick={() =>
            openModal(product)
          }
        >

          Quick View

        </button>

        <button
          className="cart-btn"
          onClick={() =>
            addToCart(product)
          }
        >

          Add To Cart

        </button>

      </div>

    </motion.div>

  );
}

export default function Products({
  cartItems,
  setCartItems,
  searchTerm,
}) {


  const [selectedProduct, setSelectedProduct] =
    useState(null);

  /* FILTER */

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  /* SORT */

  const [sortOption, setSortOption] =
    useState("default");

  /* ADD TO CART */

  const addToCart = (product) => {

    setCartItems((prevItems) => {

      const existingProduct =
        prevItems.find(

          (item) =>
            item.slug === product.slug
        );

      if (existingProduct) {

        return prevItems.map((item) =>

          item.slug === product.slug

            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }

            : item
        );
      }

      return [

        ...prevItems,

        {
          ...product,
          quantity: 1,
        },

      ];
    });

    alert(
      `${product.name} added to cart`
    );
  };

  /* FILTER PRODUCTS */

  const filteredProducts =
    allProducts.filter((product) => {

      const cleanSearch =
  searchTerm
    .toLowerCase()
    .trim();

const cleanName =
  product.name
    ?.toLowerCase()
    .trim();

const matchesSearch =

  cleanName?.includes(
    cleanSearch
  );

      const matchesCategory =

        selectedCategory === "All"

          ? true

          : product.category ===
            selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  /* SORT PRODUCTS */

  const sortedProducts = [
    ...filteredProducts,
  ];

  if (sortOption === "low-high") {

    sortedProducts.sort(

      (a, b) =>

        Number(
          a.price.replace("$", "")
        ) -

        Number(
          b.price.replace("$", "")
        )
    );
  }

  if (sortOption === "high-low") {

    sortedProducts.sort(

      (a, b) =>

        Number(
          b.price.replace("$", "")
        ) -

        Number(
          a.price.replace("$", "")
        )
    );
  }

  return (

    <div className="products-page"
    id="products">

      {/* TOP CONTROLS */}

      <div className="products-controls">


        {/* FILTER */}

        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }
        >

          <option value="All">
            All Categories
          </option>

          <option value="Chemistry">
            Chemistry
          </option>

          <option value="Biology">
            Biology
          </option>

          <option value="Physics">
            Physics
          </option>

          <option value="Geology">
            Geology
          </option>

        </select>

        {/* SORT */}

        <select
          className="filter-select"
          value={sortOption}
          onChange={(e) =>
            setSortOption(
              e.target.value
            )
          }
        >

          <option value="default">
            Sort Products
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

        </select>

      </div>

      {/* CART STATUS */}

      <div className="cart-status">

        Cart Items:
        <strong>
          {" "}
          {cartItems.length}
        </strong>

      </div>

      {/* CHEMISTRY */}

<section
  className="category-section"
  id="chemistry"
>

  <h2 className="category-title">
    Chemistry Items
  </h2>

  <div className="products-grid">

    {sortedProducts
      .filter(
        (product) =>
          product.category ===
          "Chemistry"
      )
      .map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          openModal={
            setSelectedProduct
          }
          addToCart={addToCart}
        />

      ))}

  </div>

</section>

{/* BIOLOGY */}

<section
  className="category-section"
  id="biology"
>

  <h2 className="category-title">
    Biology Items
  </h2>

  <div className="products-grid">

    {sortedProducts
      .filter(
        (product) =>
          product.category ===
          "Biology"
      )
      .map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          openModal={
            setSelectedProduct
          }
          addToCart={addToCart}
        />

      ))}

  </div>

</section>

{/* PHYSICS */}

<section
  className="category-section"
  id="physics"
>

  <h2 className="category-title">
    Physics Items
  </h2>

  <div className="products-grid">

    {sortedProducts
      .filter(
        (product) =>
          product.category ===
          "Physics"
      )
      .map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          openModal={
            setSelectedProduct
          }
          addToCart={addToCart}
        />

      ))}

  </div>

</section>

{/* GEOLOGY */}

<section
  className="category-section"
  id="geology"
>

  <h2 className="category-title">
    Geology Items
  </h2>

  <div className="products-grid">

    {sortedProducts
      .filter(
        (product) =>
          product.category ===
          "Geology"
      )
      .map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          openModal={
            setSelectedProduct
          }
          addToCart={addToCart}
        />

      ))}

  </div>

</section>

      {/* EMPTY */}

      {sortedProducts.length === 0 && (

        <div className="no-products">

          No products found.

        </div>

      )}

      {/* MODAL */}

      {selectedProduct && (

        <div
          className="product-modal-overlay"
          onClick={() =>
            setSelectedProduct(null)
          }
        >

          <motion.div
            className="product-modal"

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.3,
            }}

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-modal"
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              ×
            </button>

            <img
              src={
                selectedProduct.image
              }
              alt={
                selectedProduct.name
              }
              loading="lazy"
            />

            <h2>
              {selectedProduct.name}
            </h2>

            <p>

              {
                selectedProduct.fullDescription
              }

            </p>

            <span>
              {selectedProduct.price}
            </span>

            {/* SPECIFICATIONS */}

            <ul className="specifications-list">

              {selectedProduct.specifications?.map(
                (spec, index) => (

                  <li key={index}>
                    {spec}
                  </li>

                )
              )}

            </ul>

            {/* BUTTONS */}

            <div className="modal-buttons">

              <button
                className="cart-btn"
                onClick={() =>
                  addToCart(
                    selectedProduct
                  )
                }
              >

                Add To Cart

              </button>

              <a
                href={`https://wa.me/237670899763?text=Hello,%20I%20am%20interested%20in%20${selectedProduct.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >

                <button className="whatsapp-btn">

                  Contact Supplier

                </button>

              </a>

            </div>

          </motion.div>

        </div>

      )}

    </div>
  );
}