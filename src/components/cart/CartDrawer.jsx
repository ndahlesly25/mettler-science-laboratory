import "./CartDrawer.css";

import {
  FaTimes,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

export default function CartDrawer({
  isOpen,
  cartItems,
  closeCart,
  removeFromCart,
  setCartItems,
}) {

  /* INCREASE QUANTITY */

  const increaseQuantity = (index) => {

    const updatedCart = [...cartItems];

    updatedCart[index].quantity += 1;

    setCartItems(updatedCart);
  };

  /* DECREASE QUANTITY */

  const decreaseQuantity = (index) => {

    const updatedCart = [...cartItems];

    if (
      updatedCart[index].quantity > 1
    ) {

      updatedCart[index].quantity -= 1;

      setCartItems(updatedCart);

    } else {

      removeFromCart(index);
    }
  };

  /* TOTAL PRICE */

  const totalPrice = cartItems.reduce(
    (total, item) => {

      return (
        total +
        Number(
          item.price.replace("$", "")
        ) * item.quantity
      );
    },

    0
  );

  return (

    <div
      className={`cart-drawer ${
        isOpen ? "open" : ""
      }`}
    >

      {/* HEADER */}

      <div className="cart-header">

        <h2>
          Shopping Cart
        </h2>

        <button
          className="close-cart"
          onClick={closeCart}
        >

          <FaTimes />

        </button>

      </div>

      {/* ITEMS */}

      <div className="cart-items">

        {cartItems.length === 0 ? (

          <p className="empty-cart">

            Your cart is empty.

          </p>

        ) : (

          cartItems.map((item, index) => (

            <div
              className="cart-item"
              key={index}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              {/* DETAILS */}

              <div className="cart-details">

                <h4>
                  {item.name}
                </h4>

                <p>
                  {item.price}
                </p>

                {/* QUANTITY */}

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQuantity(index)
                    }
                  >

                    <FaMinus />

                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(index)
                    }
                  >

                    <FaPlus />

                  </button>

                </div>

              </div>

              {/* REMOVE */}

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(index)
                }
              >

                <FaTrash />

              </button>

            </div>

          ))

        )}

      </div>

      {/* FOOTER */}

      <div className="cart-footer">

        <h3>

          Total: $
          {totalPrice.toFixed(2)}

        </h3>

        <a
          href="https://wa.me/237670899763"
          target="_blank"
          rel="noopener noreferrer"
        >

          <button className="checkout-btn">

            Proceed to WhatsApp

          </button>

        </a>

      </div>

    </div>
  );
}