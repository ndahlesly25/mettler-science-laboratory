import { run } from "react-snap";

const routes = [
  "/",
  "/about",
  "/catalogue",
  "/faq",
  "/privacy",
  "/terms",
  "/shipping",
  "/returns",
  "/cookies"
];

console.log(`Prerendering ${routes.length} routes:`);
console.log(routes.join("\n"));

run({
  source: "dist",
  include: routes,
  minifyHtml: false,
});