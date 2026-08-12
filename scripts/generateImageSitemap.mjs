import fs from "fs";
import { allProducts } from "./routes.mjs";

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const hostname = "https://mettlersciencelaboratory.com";

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

allProducts.forEach(product => {

  const productUrl =
    `${hostname}/product/${product.slug}`;

  const imageUrl =
    product.image || "";

  if (!imageUrl) {
    return;
  }

  xml += `
  <url>

    <loc>${escapeXml(productUrl)}</loc>

    <image:image>

      <image:loc>${escapeXml(imageUrl)}</image:loc>

      <image:title>${escapeXml(product.name)}</image:title>

    </image:image>

  </url>
  `;

});

xml += "</urlset>";

fs.writeFileSync(
"./public/image-sitemap.xml",
xml
);

console.log("✅ Image sitemap generated.");