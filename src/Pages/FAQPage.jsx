import { useState } from "react";

export default function FAQPage() {

  const faqs = [

    {
      question:
        "Do you deliver laboratory equipment nationwide?",

      answer:
        "Yes. We provide delivery services across Cameroon depending on product availability and location.",
    },

    {
      question:
        "Do you provide maintenance services?",

      answer:
        "Yes. Mettler Company Limited provides maintenance consultation and technical support for laboratory equipment.",
    },

    {
      question:
        "Can schools and universities request quotations?",

      answer:
        "Absolutely. Schools, universities, hospitals and institutions can request official quotations for procurement purposes.",
    },

    {
      question:
        "Do you sell laboratory chemicals?",

      answer:
        "Yes. We supply a wide range of laboratory chemicals for educational and research purposes.",
    },

    {
      question:
        "Do you install laboratory equipment?",

      answer:
        "Installation support and technical guidance are available for selected equipment.",
    },

    {
      question:
        "How long does delivery take?",

      answer:
        "Delivery times depend on product availability and destination. Our team provides estimated delivery times upon order confirmation.",
    },

    {
      question:
        "Can individuals purchase products?",

      answer:
        "Yes. We serve both individual customers and institutions.",
    },

    {
      question:
        "How can I request a quotation?",

      answer:
        "You can request a quotation through WhatsApp, phone, email or the Request Quote feature available on product pages.",
    },

  ];

  const [openIndex, setOpenIndex] =
    useState(null);

  return (

    <div
      style={{
        maxWidth: "1000px",
        margin: "120px auto 60px",
        padding: "0 20px",
      }}
    >

      <h1>
        Frequently Asked Questions
      </h1>

      {faqs.map(
        (faq, index) => (

          <div
            key={index}
            style={{
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >

            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index
                    ? null
                    : index
                )
              }
              style={{
                width: "100%",
                padding: "18px",
                textAlign: "left",
                border: "none",
                background: "#f8fbff",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >

              {faq.question}

            </button>

            {openIndex === index && (

              <div
                style={{
                  padding: "18px",
                  background: "#fff",
                  lineHeight: "1.7",
                }}
              >

                {faq.answer}

              </div>

            )}

          </div>

        )
      )}

    </div>

  );

}