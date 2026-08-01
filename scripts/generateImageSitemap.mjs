import fs from "fs";
import { allProducts } from "./routes.mjs";

const hostname = "https://mettlersciencelaboratory.com";

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

allProducts.forEach(product => {

xml += `
<url>

<loc>${hostname}/product/${product.slug}</loc>

<image:image>

<image:loc>${product.image}</image:loc>

<image:title>${product.name}</image:title>

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