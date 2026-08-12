import chemistryProducts from "../src/data/chemistry.js";
import biologyProducts from "../src/data/biology.js";
import physicsProducts from "../src/data/physics.js";
import geologyProducts from "../src/data/geology.js";
import medicalScienceProducts from "../src/data/medicalScience.js";
import knowledgeArticles from "../src/data/knowledgeArticles.js";

/*
==================================================
ALL PRODUCTS
==================================================
*/

export const allProducts = [
  ...chemistryProducts,
  ...biologyProducts,
  ...physicsProducts,
  ...geologyProducts,
  ...medicalScienceProducts,
].filter(
  (product) =>
    product &&
    product.slug &&
    product.slug.trim() !== ""
);

/*
==================================================
CHECK PRODUCT SLUGS
==================================================
*/

console.log("\n🔎 Checking product slugs...\n");

const slugMap = new Map();

allProducts.forEach((product) => {

  const slug = product.slug.trim();

  /*
  Check formatting
  */

  const cleanSlug =
    slug === slug.toLowerCase() &&
    !slug.includes(" ") &&
    !slug.includes("%") &&
    !slug.includes("/") &&
    !slug.includes("\\") &&
    !slug.includes("(") &&
    !slug.includes(")");

  if (!cleanSlug) {

    console.log(
      `⚠️ ${product.name} → "${product.slug}"`
    );

  }

  /*
  Check duplicates
  */

  if (!slugMap.has(slug)) {

    slugMap.set(slug, []);

  }

  slugMap.get(slug).push(product);

});

/*
==================================================
DUPLICATE SLUG REPORT
==================================================
*/

console.log("\n🔎 DUPLICATE SLUGS\n");

let duplicateCount = 0;

slugMap.forEach((products, slug) => {

  if (products.length > 1) {

    duplicateCount++;

    console.log(`❌ "${slug}"`);

    products.forEach((product) => {

      console.log(
        `   ID: ${product.id} | ${product.name} | ${product.category}`
      );

    });

    console.log("");

  }

});

if (duplicateCount === 0) {

  console.log("✅ No duplicate slugs found.\n");

}

/*
==================================================
SUMMARY
==================================================
*/

console.log(
  `✅ Checked ${allProducts.length} products.\n`
);

/*
==================================================
STATIC PAGES
==================================================
*/

export const staticPages = [

  "/",

  "/about",

  "/catalogue",

  "/faq",

  "/knowledge-center",

  "/maintenance",

  "/privacy",

  "/terms",

  "/shipping",

  "/returns",

  "/cookies",

];

/*
==================================================
PRODUCT ROUTES
==================================================
*/

export const productRoutes =
  allProducts.map(
    (product) =>
      `/product/${product.slug}`
  );

/*
==================================================
KNOWLEDGE ARTICLE ROUTES
==================================================
*/

export const knowledgeRoutes =
  knowledgeArticles.map(
    (article) =>
      `/knowledge/${article.slug}`
  );

/*
==================================================
ALL ROUTES
==================================================
*/

export const allRoutes = [

  ...staticPages,

  ...productRoutes,

  ...knowledgeRoutes,

];