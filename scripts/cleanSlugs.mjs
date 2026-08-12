import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productFiles = [
  "../src/data/chemistry.js",
  "../src/data/biology.js",
  "../src/data/physics.js",
  "../src/data/geology.js",
  "../src/data/medicalScience.js",
];

function createCleanSlug(name) {
  return name
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const usedSlugs = new Map();
const results = [];

for (const relativeFile of productFiles) {
  const filePath = path.resolve(
    __dirname,
    relativeFile
  );

  const fileText = fs.readFileSync(
    filePath,
    "utf8"
  );

  const productRegex =
    /slug\s*:\s*"([^"]*)"\s*,[\s\S]*?name\s*:\s*"([^"]+)"/g;

  let match;
  const replacements = [];

  while ((match = productRegex.exec(fileText)) !== null) {
    const oldSlug = match[1];
    const name = match[2];

    const baseSlug = createCleanSlug(name);

    let finalSlug = baseSlug;

    if (usedSlugs.has(finalSlug)) {
      const count =
        usedSlugs.get(finalSlug) + 1;

      usedSlugs.set(
        finalSlug,
        count
      );

      finalSlug =
        `${baseSlug}-${count}`;
    } else {
      usedSlugs.set(
        finalSlug,
        1
      );
    }

    replacements.push({
      oldSlug,
      newSlug: finalSlug,
      name,
      start: match.index,
      length: match[0].length,
      matchText: match[0],
    });

    results.push({
      file: relativeFile,
      name,
      oldSlug,
      newSlug: finalSlug,
      changed:
        oldSlug !== finalSlug,
    });
  }

  let updatedText = fileText;

  /*
   * Replace from the bottom upward so
   * character positions remain correct.
   */
  for (
    let i = replacements.length - 1;
    i >= 0;
    i--
  ) {
    const item = replacements[i];

    const updatedMatch =
      item.matchText.replace(
        `slug: "${item.oldSlug}"`,
        `slug: "${item.newSlug}"`
      );

    updatedText =
      updatedText.slice(
        0,
        item.start
      ) +
      updatedMatch +
      updatedText.slice(
        item.start + item.length
      );
  }

  /*
   * Create a backup before modifying
   * the original product file.
   */
  const backupPath =
    `${filePath}.bak`;

  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(
      backupPath,
      fileText,
      "utf8"
    );

    console.log(
      `💾 Backup created: ${path.basename(backupPath)}`
    );
  }

  /*
   * Write corrected product file.
   */
  fs.writeFileSync(
    filePath,
    updatedText,
    "utf8"
  );

  console.log(
    `✅ Updated: ${relativeFile}`
  );
}

/* REPORT */

const changedProducts =
  results.filter(
    (product) =>
      product.changed
  );

const duplicateMap = new Map();

results.forEach((product) => {
  if (!duplicateMap.has(product.newSlug)) {
    duplicateMap.set(
      product.newSlug,
      []
    );
  }

  duplicateMap
    .get(product.newSlug)
    .push(product);
});

const duplicates = [
  ...duplicateMap.entries()
].filter(
  ([, products]) =>
    products.length > 1
);

let output =
  "SLUG CLEANING REPORT\n";
output +=
  "====================\n\n";

output +=
  `Total products: ${results.length}\n`;

output +=
  `Products changed: ${changedProducts.length}\n`;

output +=
  `Duplicate cleaned slugs: ${duplicates.length}\n\n`;

output +=
  "CHANGES\n";
output +=
  "=======\n\n";

changedProducts.forEach(
  (product) => {
    output +=
      `File: ${product.file}\n`;

    output +=
      `Name: ${product.name}\n`;

    output +=
      `Old slug: ${product.oldSlug}\n`;

    output +=
      `New slug: ${product.newSlug}\n`;

    output +=
      "----------------------------------------\n";
  }
);

if (duplicates.length > 0) {
  output +=
    "\nDUPLICATE CLEANED SLUGS\n";
  output +=
    "=======================\n\n";

  duplicates.forEach(
    ([slug, products]) => {
      output +=
        `Slug: ${slug}\n`;

      products.forEach(
        (product) => {
          output +=
            `  Name: ${product.name}\n`;

          output +=
            `  File: ${product.file}\n`;
        }
      );

      output +=
        "----------------------------------------\n";
    }
  );
}

fs.writeFileSync(
  path.resolve(
    __dirname,
    "../slug-report.txt"
  ),
  output,
  "utf8"
);

console.log(
  `\n✅ Slug cleaning completed.`
);

console.log(
  `📦 Products checked: ${results.length}`
);

console.log(
  `🔧 Products changed: ${changedProducts.length}`
);

console.log(
  `🔎 Duplicate cleaned slugs: ${duplicates.length}`
);

console.log(
  `📄 Report: slug-report.txt`
);

console.log(
  `💾 Backup files saved as .bak\n`
);