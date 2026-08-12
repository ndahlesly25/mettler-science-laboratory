import "./Products.css";

import {
  useState,
  useEffect,
} from "react";


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



/* PRODUCT CARD */

function ProductCard({
  product,
  openModal,
  addToCart,
}) {

  return (

    <motion.div
  className="product-card"

  data-name={product.name}

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

<div className="product-image-wrapper">

  {/* BADGE */}

  <Link
    to={`/product/${product.slug}`}
  >

    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      className="product-image"
    />

  </Link>

</div>

      {/* TITLE */}

      <Link
        to={`/product/${product.slug}`}
        className="product-link"
      >

        <h3>{product.name}</h3>

      </Link>

      <p>{product.description}</p>

{product.badge && (

  <div
    className={`stock-status ${product.badge
      .toLowerCase()
      .replace(/\s+/g, "-")}`}
  >

    ● {product.badge}

  </div>

)}

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

    /* ALL PRODUCTS */

  const [allProducts, setAllProducts] = useState([
    ...chemistryProducts,
    ...biologyProducts,
    ...physicsProducts,
    ...geologyProducts,
  ]);

  useEffect(() => {
  import("../../data/medicalScience")
    .then((module) => {
      setAllProducts((prevProducts) => [
        ...prevProducts,
        ...module.default,
      ]);
    })
    .catch((error) => {
      console.error(
        "Failed to load medical science products:",
        error
      );
    });
}, []);


  const [selectedProduct, setSelectedProduct] =
    useState(null);

    const [activeCategory, setActiveCategory] =
  useState("chemistry");

  /* FILTER */

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  /* SORT */

  const [sortOption, setSortOption] =
    useState("default");

    const PRODUCTS_PER_CATEGORY = 12;

const [showAllCategories, setShowAllCategories] =
  useState({});

  const getCategoryProducts = (category) => {

  const products = sortedProducts.filter(
    (product) =>
      product.category === category
  );

  if (showAllCategories[category]) {
    return products;
  }

  return products.slice(
    0,
    PRODUCTS_PER_CATEGORY
  );
};

    useEffect(() => {

  const sections = [

    "chemistry",

    "biology",

    "physics",

    "geology",

    "medical-science",

  ];

  const handleScroll = () => {

    let current =
      "chemistry";

    sections.forEach((id) => {

      const section =
        document.getElementById(id);

      if (!section) return;

      const top =
        section.offsetTop;

      if (

        window.scrollY >=
        top - 180

      ) {

        current = id;

      }

    });

    setActiveCategory(
      current
    );

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

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

          <option value="Medical Science">
            Medical Science
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

      <div className="sticky-category-nav">

  <a
    href="#chemistry"
    className={
      activeCategory ===
      "chemistry"

        ? "active"

        : ""
    }
  >
    Chemistry
  </a>

  <a
    href="#biology"
    className={
      activeCategory ===
      "biology"

        ? "active"

        : ""
    }
  >
    Biology
  </a>

  <a
    href="#physics"
    className={
      activeCategory ===
      "physics"

        ? "active"

        : ""
    }
  >
    Physics
  </a>

  <a
    href="#geology"
    className={
      activeCategory ===
      "geology"

        ? "active"

        : ""
    }
  >
    Geology
  </a>

  <a
  href="#medical-science"
  className={
    activeCategory ===
    "medical-science"

      ? "active"

      : ""
  }
>
  Medical Science
</a>

</div>

      {/* CHEMISTRY */}

{sortedProducts.some(
  (product) =>
    product.category === "Chemistry"
) && (

  <section
    className="category-section"
    id="chemistry"
  >

    <h2 className="category-title">
  Chemistry Laboratory Items
</h2>

<p className="category-description">
  Explore chemistry laboratory equipment and supplies from Mettler
  Science Laboratory, including glassware, measuring instruments,
  laboratory chemicals and practical equipment for schools,
  universities, research laboratories and educational institutions
  across Cameroon.
</p>

    <div className="products-grid">

      {getCategoryProducts("Chemistry")
        .map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            openModal={setSelectedProduct}
            addToCart={addToCart}
          />

        ))}

    </div>

    {/* VIEW ALL CHEMISTRY */}

    {sortedProducts.filter(
      (product) =>
        product.category === "Chemistry"
    ).length > PRODUCTS_PER_CATEGORY && (

      <button
        className="view-all-products"
        onClick={() =>
          setShowAllCategories((prev) => ({
            ...prev,
            Chemistry:
              !prev.Chemistry,
          }))
        }
      >
        {showAllCategories.Chemistry
          ? "Show Less"
          : "View All Chemistry Products"}
      </button>

    )}

  </section>

)}

{/* BIOLOGY */}

{sortedProducts.some(
  (product) =>
    product.category === "Biology"
) && (

  <section
    className="category-section"
    id="biology"
  >

    <h2 className="category-title">
      Biology Laboratory Items
    </h2>

<p className="category-description">
  Browse biology laboratory equipment and educational materials for
  schools, universities, laboratories and research institutions in
  Cameroon, including microscopes, glassware, specimen equipment and
  other biology practical supplies.
</p>

    <div className="products-grid">

      {getCategoryProducts("Biology")
        .map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            openModal={setSelectedProduct}
            addToCart={addToCart}
          />

        ))}

    </div>

    {/* VIEW ALL BIOLOGY */}

    {sortedProducts.filter(
      (product) =>
        product.category === "Biology"
    ).length > PRODUCTS_PER_CATEGORY && (

      <button
        className="view-all-products"
        onClick={() =>
          setShowAllCategories((prev) => ({
            ...prev,
            Biology:
              !prev.Biology,
          }))
        }
      >
        {showAllCategories.Biology
          ? "Show Less"
          : "View All Biology Products"}
      </button>

    )}

  </section>

)}

{/* PHYSICS */}

{sortedProducts.some(
  (product) =>
    product.category === "Physics"
) && (

  <section
    className="category-section"
    id="physics"
  >

    <h2 className="category-title">
  Physics Laboratory Items
</h2>

<p className="category-description">
  Find physics laboratory apparatus and educational equipment for
  practical science teaching in schools, colleges and universities
  across Cameroon.
</p>

    <div className="products-grid">

      {getCategoryProducts("Physics")
        .map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            openModal={setSelectedProduct}
            addToCart={addToCart}
          />

        ))}

    </div>

    {/* VIEW ALL PHYSICS */}

    {sortedProducts.filter(
      (product) =>
        product.category === "Physics"
    ).length > PRODUCTS_PER_CATEGORY && (

      <button
        className="view-all-products"
        onClick={() =>
          setShowAllCategories((prev) => ({
            ...prev,
            Physics:
              !prev.Physics,
          }))
        }
      >
        {showAllCategories.Physics
          ? "Show Less"
          : "View All Physics Products"}
      </button>

    )}

  </section>

)}

{/* GEOLOGY */}

{sortedProducts.some(
  (product) =>
    product.category === "Geology"
) && (

  <section
    className="category-section"
    id="geology"
  >

    <h2 className="category-title">
  Geology Laboratory Items
</h2>

<p className="category-description">
  Explore geology laboratory equipment and mineral specimens for
  geology, earth science and geological practical work in schools,
  universities and research environments in Cameroon.
</p>

    <div className="products-grid">

      {getCategoryProducts("Geology")
        .map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            openModal={setSelectedProduct}
            addToCart={addToCart}
          />

        ))}

    </div>

    {/* VIEW ALL GEOLOGY */}

    {sortedProducts.filter(
      (product) =>
        product.category === "Geology"
    ).length > PRODUCTS_PER_CATEGORY && (

      <button
        className="view-all-products"
        onClick={() =>
          setShowAllCategories((prev) => ({
            ...prev,
            Geology:
              !prev.Geology,
          }))
        }
      >
        {showAllCategories.Geology
          ? "Show Less"
          : "View All Geology Products"}
      </button>

    )}

  </section>

)}

{/* MEDICAL SCIENCE */}

{sortedProducts.some(
  (product) =>
    product.category === "Medical Science"
) && (

  <section
    className="category-section"
    id="medical-science"
  >

    <h2 className="category-title">
  Medical Science Equipment
</h2>

<p className="category-description">
  Browse medical science and laboratory equipment for hospitals,
  clinics, health centres, diagnostic laboratories, medical schools
  and healthcare institutions across Cameroon.
</p>

    <div className="products-grid">

      {getCategoryProducts("Medical Science")
        .map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            openModal={setSelectedProduct}
            addToCart={addToCart}
          />

        ))}

    </div>

    {/* VIEW ALL MEDICAL SCIENCE */}

    {sortedProducts.filter(
      (product) =>
        product.category === "Medical Science"
    ).length > PRODUCTS_PER_CATEGORY && (

      <button
        className="view-all-products"
        onClick={() =>
          setShowAllCategories((prev) => ({
            ...prev,
            "Medical Science":
              !prev["Medical Science"],
          }))
        }
      >
        {showAllCategories["Medical Science"]
          ? "Show Less"
          : "View All Medical Science Products"}
      </button>

    )}

  </section>

)}

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