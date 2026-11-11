// One-off image pipeline: reads the original photos from tmp/img and writes web-ready
// WebP + JPEG versions to src/assets/img, plus src/content/images.json (dimensions for the build).
// Run: npm run images   (requires the `sharp` dev dependency)
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const gallery = require('../src/content/gallery');

const ROOT = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'tmp', 'img');
const OUT_DIR = path.join(ROOT, 'src', 'assets', 'img');
const SIZES = { sm: 640, lg: 1280 };

async function processPhoto(item) {
  const input = path.join(SRC_DIR, item.src);
  const meta = await sharp(input).rotate().metadata();
  const entry = { w: meta.width, h: meta.height, variants: {} };

  for (const [key, max] of Object.entries(SIZES)) {
    const width = Math.min(max, meta.width);
    const height = Math.round((meta.height * width) / meta.width);
    // Skip a "large" that would be identical to the small one.
    if (key === 'lg' && width === entry.variants.sm?.w) continue;
    const base = path.join(OUT_DIR, `${item.id}-${key}`);
    const pipeline = sharp(input).rotate().resize({ width, withoutEnlargement: true });
    await pipeline.clone().webp({ quality: 78, effort: 6 }).toFile(`${base}.webp`);
    await pipeline.clone().jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(`${base}.jpg`);
    entry.variants[key] = { w: width, h: height };
  }
  return entry;
}

async function brandAssets() {
  const mark = fs.readFileSync(path.join(ROOT, 'src', 'assets', 'img', 'favicon.svg'));
  await sharp(mark, { density: 600 }).resize(180, 180).png().toFile(path.join(OUT_DIR, 'apple-touch-icon.png'));
  await sharp(mark, { density: 600 }).resize(512, 512).png().toFile(path.join(OUT_DIR, 'icon-512.png'));

  // Social share image (1200x630) cropped from the highest-resolution kitchen photo.
  const og = gallery.find((g) => g.id === 'kitchen-sage-cabinets-backsplash');
  await sharp(path.join(SRC_DIR, og.src))
    .rotate()
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT_DIR, 'og-image.jpg'));
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {};
  for (const item of gallery) {
    manifest[item.id] = await processPhoto(item);
    console.log('✓', item.id, JSON.stringify(manifest[item.id].variants));
  }
  await brandAssets();
  fs.writeFileSync(path.join(ROOT, 'src', 'content', 'images.json'), JSON.stringify(manifest, null, 2));
  console.log('Done →', path.relative(ROOT, OUT_DIR));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
