export default function CataloguePage() {

  const catalogues = [

    {
      title: "Laboratory Science Catalogue",
      image: "/images/catalogue/laboratory-catalogue.png",
      description:
        "Chemistry, Biology, Physics, Geology, laboratory chemicals, glassware, microscopes, balances and scientific equipment.",
      file: "/catalogue/Mettler-Catalogue.pdf",
      icon: "🧪",
      button: "Download Laboratory Catalogue",
    },

    {
      title: "Medical Science Catalogue",
      image: "/images/catalogue/medical-catalogue.png",
      description:
        "Medical laboratory equipment, hospital equipment, diagnostic instruments, patient care equipment and healthcare supplies.",
      file: "/catalogue/Mettler-Medical-Catalogue.pdf",
      icon: "🏥",
      button: "Download Medical Catalogue",
    },

  ];

  return (

    <div
      style={{
        maxWidth: "1200px",
        margin: "120px auto 70px",
        padding: "0 20px",
      }}
    >

      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >

        <h1
          style={{
            color: "#002b5c",
            marginBottom: "15px",
          }}
        >
          Product Catalogues
        </h1>

        <p
          style={{
            color: "#555",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Browse and download our latest catalogues featuring
          scientific laboratory equipment, medical laboratory
          equipment, hospital supplies and research instruments.
        </p>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >

        {catalogues.map((catalogue, index) => (

          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
            }}
          >

            <img
  src={catalogue.image}
  alt={catalogue.title}
  style={{
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,.12)",
  }}
/>

            <h2
              style={{
                color: "#002b5c",
                marginBottom: "15px",
              }}
            >
              {catalogue.title}
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.8",
                marginBottom: "30px",
              }}
            >
              {catalogue.description}
            </p>

            <a
              href={catalogue.file}
              download
              style={{
                display: "inline-block",
                padding: "15px 28px",
                background: "#0077cc",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              📄 {catalogue.button}
            </a>

          </div>

        ))}

      </div>

    </div>

  );

}