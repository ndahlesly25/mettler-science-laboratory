import { run } from "react-snap";
import { allRoutes } from "./routes.mjs";

console.log(`Prerendering ${allRoutes.length} routes:`);
console.log(allRoutes.join("\n"));

run({
  source: "dist",
  include: allRoutes,
  minifyHtml: false,
});