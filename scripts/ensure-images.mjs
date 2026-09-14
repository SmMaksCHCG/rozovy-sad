import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const files = ["flower-bed-hero.jpg", "flower-bed-plan.jpg"];

for (const name of files) {
  const jpg = join("public", name);
  const encoded = join("encoded", `${name}.b64`);
  if (existsSync(jpg)) continue;
  if (!existsSync(encoded)) {
    console.warn(`Missing ${jpg} and ${encoded}`);
    continue;
  }
  mkdirSync(dirname(jpg), { recursive: true });
  writeFileSync(jpg, Buffer.from(readFileSync(encoded, "utf8"), "base64"));
  console.log(`Decoded ${name}`);
}
