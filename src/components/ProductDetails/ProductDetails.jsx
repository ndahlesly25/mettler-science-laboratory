import "./ProductDetails.css";

import {
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import chemistryProducts from "../../data/chemistry";
import biologyProducts from "../../data/biology";
import physicsProducts from "../../data/physics";
import geologyProducts from "../../data/geology";

export default function ProductDetails({
  setCartItems,
}) {

  /* ALL PRODUCTS */

  const allProducts = [

    ...chemistryProducts,

    ...biologyProducts,

    ...physicsProducts,

    ...geologyProducts,

  ];

  /* URL PARAM */

  const { slug } = useParams();

  /* FIND PRODUCT */

  const product = allProducts.find(

    (item) => item.slug === slug
  );

  /* ACTIVE IMAGE */

  const [activeImage, setActiveImage] =
    useState(

      product?.images?.[0] ||
      product?.image
    );

  /* PRODUCT NOT FOUND */

  if (!product) {

    return (

      <div className="product-not-found">

        <h2>
          Product Not Found
        </h2>

        <Link to="/">
          Back To Home
        </Link>

      </div>

    );
  }

  /* RELATED PRODUCTS */

  const relatedProducts =
    allProducts.filter(

      (item) =>

        item.category ===
          product.category &&

        item.slug !== product.slug

    );

  /* ADD TO CART */

  const addToCart = () => {

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

  return (

    <div className="product-details-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/">
          Home
        </Link>

        <span>/</span>

        <span>
          {product.category}
        </span>

        <span>/</span>

        <span>
          {product.name}
        </span>

      </div>

      {/* MAIN */}

      <div className="product-details-container">

        {/* IMAGE SECTION */}

        <div className="product-image-section">

          {/* ACTIVE IMAGE */}

          <img
            src={activeImage}
            alt={product.name}
            className="main-product-image"
          />

          {/* THUMBNAILS */}

          <div className="thumbnail-gallery">

            {(product.images || [
              product.image,
            ]).map((img, index) => (

              <img
                key={index}
                src={img}
                alt={product.name}
                className={`thumbnail-image ${
                  activeImage === img
                    ? "active-thumbnail"
                    : ""
                }`}
                onClick={() =>
                  setActiveImage(img)
                }
              />

            ))}

          </div>

        </div>

        {/* INFO */}

        <div className="product-info-section">

          <h1>
            {product.name}
          </h1>

          <p className="product-category">

            {product.category}

          </p>

          <span className="product-price">

            {product.price}

          </span>

          <p className="product-description">

            {product.fullDescription}

          </p>

          {/* SPECIFICATIONS */}

          <div className="specifications">

            <h3>
              Specifications
            </h3>

            <ul>

              {product.specifications?.map(
                (spec, index) => (

                  <li key={index}>
                    {spec}
                  </li>

                )
              )}

            </ul>

          </div>

          {/* BUTTONS */}

          <div className="details-buttons">

            <button
              className="add-cart-btn"
              onClick={addToCart}
            >

              Add To Cart

            </button>

            <a
  href={`https://wa.me/237670899763?text=Hello,%20I%20want%20to%20order%20${product.name}`}
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-order-link"
>

  <button className="whatsapp-contact-btn">

    Order On WhatsApp

  </button>

</a>

          </div>

        </div>

      </div>

      {/* RELATED */}

      {relatedProducts.length > 0 && (

        <div className="related-products">

          <h2>
            Related Products
          </h2>

          <div className="related-grid">

            {relatedProducts.map(
              (item) => (

                <Link
                  to={`/product/${item.slug}`}
                  key={item.id}
                  className="related-card"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    {item.price}
                  </span>

                </Link>

              )
            )}

          </div>

        </div>

      )}

    </div>
  );
}