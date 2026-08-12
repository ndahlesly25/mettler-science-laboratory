import "./ProductDetails.css";

import {
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import allProducts from "../../data/allProducts";

export default function ProductDetails({
  setCartItems,
}) {


  /* URL PARAM */

  const { slug } = useParams();

  /* FIND PRODUCT */

const product = allProducts.find(
  (item) => item.slug === slug
);

const productUrl = product
  ? `https://mettlersciencelaboratory.com/product/${product.slug}`
  : "";

const productImages = product
  ? [
      ...(product.images || []),
      ...(product.image ? [product.image] : []),
    ].filter(
      (image, index, array) =>
        image &&
        array.indexOf(image) === index
    )
  : [];

const productPrice = product?.price
  ? product.price.replace(/[^\d.]/g, "")
  : "";

const productSchema = product
  ? {
      "@context": "https://schema.org",
      "@type": "Product",

      "@id": `${productUrl}#product`,

      name: product.name,

      image: productImages,

      description:
        product.fullDescription ||
        product.description ||
        `${product.name} supplied by Mettler Science Laboratory in Cameroon.`,

      sku: String(product.id),

      brand: {
        "@type": "Brand",
        name: "Mettler Science Laboratory",
      },

      category: product.category,

      offers: {
        "@type": "Offer",

        url: productUrl,

        priceCurrency: "XAF",

        price: productPrice,

        availability:
          "https://schema.org/InStock",

        seller: {
          "@type": "Organization",
          name: "Mettler Science Laboratory",

          url:
            "https://mettlersciencelaboratory.com",
        },
      },
    }
  : null;


 const breadcrumbSchema = product
  ? {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mettlersciencelaboratory.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": product.category,
          "item": "https://mettlersciencelaboratory.com/catalogue",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": product.name,
          "item": `https://mettlersciencelaboratory.com/product/${product.slug}`,
        },
      ],
    }
  : null;
/* ACTIVE IMAGE */

const [activeImage, setActiveImage] =
  useState(
    product?.images?.[0] ||
    product?.image
  );

/* ALL IMAGES */

const images =
  product?.images ||
  [product?.image];

/* NEXT IMAGE */

const nextImage = () => {

  const currentIndex =
    images.indexOf(activeImage);

  const nextIndex =
    (currentIndex + 1) %
    images.length;

  setActiveImage(
    images[nextIndex]
  );

};

/* PREVIOUS IMAGE */

const prevImage = () => {

  const currentIndex =
    images.indexOf(activeImage);

  const prevIndex =
    (currentIndex - 1 +
      images.length) %
    images.length;

  setActiveImage(
    images[prevIndex]
  );

};

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

    <>
  <Helmet>

    <title>
      {product.name} | Mettler Science Laboratory
    </title>

    <meta
      name="description"
      content={product.fullDescription}
    />

    <meta
      name="keywords"
      content={`${product.name}, ${product.category}, Laboratory Equipment Cameroon, Medical Equipment Cameroon, Scientific Equipment`}
    />

    <link
      rel="canonical"
      href={`https://mettlersciencelaboratory.com/product/${product.slug}`}
    />

    {/* Open Graph */}

    <meta
  property="og:title"
  content={`${product.name} | Mettler Company Limited`}
/>

    <meta
  property="og:description"
  content={
    product.fullDescription ||
    product.description ||
    `Shop ${product.name} from Mettler Company Limited in Cameroon.`
  }
/>

    <meta
  property="og:image"
  content={
    product.image ||
    product.images?.[0]
  }
/>

    <meta
      property="og:type"
      content="product"
    />

    <meta
      property="og:url"
      content={`https://mettlersciencelaboratory.com/product/${product.slug}`}
    />

    {/* Twitter */}

    <meta
      name="twitter:card"
      content="summary_large_image"
    />

    <meta
      name="twitter:title"
      content={product.name}
    />

    <meta
      name="twitter:description"
      content={product.fullDescription}
    />

    <meta
  name="twitter:image"
  content={
    product.image ||
    product.images?.[0]
  }
/>

     {/* Structured Data */}
    <script type="application/ld+json">
  {JSON.stringify([
    productSchema,
    breadcrumbSchema,
  ].filter(Boolean))}
</script>

  </Helmet>


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

          <div className="image-slider">

  <button
    className="image-arrow left-arrow"
    onClick={prevImage}
  >
    ❮
  </button>

  <img
    src={activeImage}
    alt={product.name}
    className="main-product-image"
  />

  <button
    className="image-arrow right-arrow"
    onClick={nextImage}
  >
    ❯
  </button>

</div>

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
  href={`https://wa.me/237670899763?text=${encodeURIComponent(
  `Hello, I want to order ${product.name}`
)}`}
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
    </>

  );
}