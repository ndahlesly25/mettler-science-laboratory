import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bannerDirectory = path.resolve(
  __dirname,
  "../src/assets/banner"
);

const banners = [
  "banner1.png",
  "banner2.png",
  "banner3.png",
  "banner4.png",
  "banner5.png",
  "banner6.png",
  "banner7.png",
];

for (const banner of banners) {
  const inputPath = path.join(
    bannerDirectory,
    banner
  );

  const outputPath = path.join(
    bannerDirectory,
    banner.replace(".png", ".webp")
  );

  if (!fs.existsSync(inputPath)) {
    console.log(
      `⚠️ Not found: ${banner}`
    );
    continue;
  }

  await sharp(inputPath)
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(outputPath);

  const originalSize =
    fs.statSync(inputPath).size;

  const optimizedSize =
    fs.statSync(outputPath).size;

  const reduction =
    (
      (1 - optimizedSize / originalSize) *
      100
    ).toFixed(1);

  console.log(
    `✅ ${banner} → ${banner.replace(
      ".png",
      ".webp"
    )}`
  );

  console.log(
    `   ${(
      originalSize / 1024
    ).toFixed(0)} KB → ${(
      optimizedSize / 1024
    ).toFixed(0)} KB (${reduction}% smaller)`
  );
}

console.log(
  "\n✅ Banner optimization complete."
);