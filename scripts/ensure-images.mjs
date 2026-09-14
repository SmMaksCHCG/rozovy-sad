import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

const files = ["flower-bed-hero.jpg", "flower-bed-plan.jpg"];

function decode(name) {
  const jpg = join("public", name);
  if (existsSync(jpg)) return;
  const partsDir = join("encoded", `${name}.parts`);
  const whole = join("encoded", `${name}.b64`);
  mkdirSync(dirname(jpg), { recursive: true });
  if (existsSync(partsDir)) {
    const parts = readdirSync(partsDir)
      .filter((file) => file.startsWith("part-"))
      .sort();
    const b64 = parts.map((file) => readFileSync(join(partsDir, file), "utf8")).join("");
    writeFileSync(jpg, Buffer.from(b64, "base64"));
    console.log(`Decoded ${name} from ${parts.length} parts`);
    return;
  }
  if (existsSync(whole)) {
    writeFileSync(jpg, Buffer.from(readFileSync(whole, "utf8"), "base64"));
    console.log(`Decoded ${name}`);
  } else {
    console.warn(`Missing ${jpg}`);
  }
}

for (const name of files) decode(name);
