import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { staticPages, allProducts } from "./routes.mjs";

const hostname = "https://mettlersciencelaboratory.com";

const sitemap = new SitemapStream({ hostname });

staticPages.forEach((page) => {
  sitemap.write({ url: page, changefreq: "weekly", priority: 0.9 });
});

allProducts.forEach((product) => {
  sitemap.write({ url: `/product/${product.slug}`, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();

const xml = await streamToPromise(sitemap);
fs.writeFileSync("./public/sitemap.xml", xml.toString());

console.log("✅ Sitemap generated successfully.");