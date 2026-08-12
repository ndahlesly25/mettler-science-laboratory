import chemistryProducts from "./chemistry";
import biologyProducts from "./biology";
import physicsProducts from "./physics";
import geologyProducts from "./geology";
import medicalScienceProducts from "./medicalScience";

const allProducts = [
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

export default allProducts;