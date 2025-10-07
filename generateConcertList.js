import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/concert");

const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

fs.writeFileSync(
  "./src/concertList.json",
  JSON.stringify(files, null, 2),
  "utf-8"
);

console.log(`✅ Generated ${files.length} concert entries in concertList.json`);
