import chemistryProducts from "../src/data/chemistry.js";
import biologyProducts from "../src/data/biology.js";
import physicsProducts from "../src/data/physics.js";
import geologyProducts from "../src/data/geology.js";
import medicalScienceProducts from "../src/data/medicalScience.js";

export const allProducts = [
  ...chemistryProducts,
  ...biologyProducts,
  ...physicsProducts,
  ...geologyProducts,
  ...medicalScienceProducts,
];

export const staticPages = [
  "/",
  "/about",
  "/catalogue",
  "/faq",
  "/maintenance",
  "/privacy",
  "/terms",
  "/shipping",
  "/returns",
  "/cookies",
];

export const productRoutes = allProducts.map((p) => `/product/${p.slug}`);

export const allRoutes = [...staticPages, ...productRoutes];