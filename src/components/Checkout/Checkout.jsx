import "./Checkout.css";

import {
  useState,
} from "react";

export default function Checkout({
  cartItems,
}) {

  /* CUSTOMER INFO */

  const [customerName, setCustomerName] =
    useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [location, setLocation] =
    useState("");

  /* TOTAL */

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

  /* WHATSAPP MESSAGE */

  const generateWhatsAppMessage = () => {

    let message =
      `Hello Mettler Science Laboratory,%0A%0A`;

    message +=
      `I would like to place an order:%0A%0A`;

    cartItems.forEach((item) => {

      message +=
        `• ${item.name} `;
      message +=
        `(Qty: ${item.quantity}) `;
      message +=
        `- ${item.price}%0A`;

    });

    message +=
      `%0ATotal: $${totalPrice.toFixed(2)}%0A%0A`;

    message +=
      `Customer Name: ${customerName}%0A`;

    message +=
      `Phone Number: ${phoneNumber}%0A`;

    message +=
      `Location: ${location}%0A`;

    return `https://wa.me/237670899763?text=${message}`;
  };

  return (

    <div className="checkout-page">

      <div className="checkout-container">

        {/* LEFT */}

        <div className="checkout-form">

          <h1>
            Checkout
          </h1>

          <p>
            Complete your order details
            below and proceed to WhatsApp.
          </p>

          {/* INPUTS */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) =>
                setCustomerName(
                  e.target.value
                )
              }
            />

          </div>

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(
                  e.target.value
                )
              }
            />

          </div>

          <div className="form-group">

            <label>
              Delivery Location
            </label>

            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value
                )
              }
            />

          </div>

          {/* BUTTON */}

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
          >

            <button className="place-order-btn">

              Place Order On WhatsApp

            </button>

          </a>

        </div>

        {/* RIGHT */}

        <div className="checkout-summary">

          <h2>
            Order Summary
          </h2>

          {cartItems.length === 0 ? (

            <p className="empty-checkout">

              Your cart is empty.

            </p>

          ) : (

            cartItems.map(
              (item, index) => (

                <div
                  className="summary-item"
                  key={index}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h4>
                      {item.name}
                    </h4>

                    <p>
                      Qty:
                      {" "}
                      {item.quantity}
                    </p>

                    <span>
                      {item.price}
                    </span>

                  </div>

                </div>

              )
            )

          )}

          {/* TOTAL */}

          <div className="summary-total">

            <h3>

              Total:
              {" "}
              $
              {totalPrice.toFixed(2)}

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}