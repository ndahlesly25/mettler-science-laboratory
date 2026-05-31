export default function CataloguePage() {

  return (

    <div
      style={{
        maxWidth: "1000px",
        margin: "120px auto 60px",
        padding: "0 20px",
        textAlign: "center",
      }}
    >

      <h1>
        Product Catalogue
      </h1>

      <p>

        Download our latest laboratory
        equipment and scientific supplies
        catalogue.

      </p>

      <a
        href="/catalogue/Mettler-Catalogue.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "15px 30px",
          background: "#0077cc",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600",
        }}
      >

        📄 Download Catalogue

      </a>

    </div>

  );

}