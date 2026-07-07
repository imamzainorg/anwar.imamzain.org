/**
 * Generate static social/share assets with sharp (run once, committed to
 * /public — NOT part of the Vercel build, so no font/runtime fragility there):
 *   - public/og/{ar,en,fa}.jpg    — 1200x630 Open Graph cover
 *   - public/apple-touch-icon.png — 180x180 iOS home-screen icon
 *   - public/favicon.png          — 64x64 browser tab icon
 *
 *   node scripts/make-og.mjs
 *
 * Uses the real extracted logo (src/assets/logo.png, transparent) and the
 * current home screenshot (src/assets/screens/home.png).
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const P = (p) => resolve(root, p);

const CHARCOAL = '#2b2822';
const CHARCOAL_900 = '#17140f';
const CREAM = '#f2efe8';
const GOLD_A = '#d8b878';
const GOLD_B = '#a97f45';

const LOGO = P('src/assets/logo.png');
const HOME = P('src/assets/screens/home.png');

const roundedRectSvg = (w, h, r, fill) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}"/></svg>`);

/** Screenshot with rounded corners (via a dest-in mask). */
async function roundedImage(src, targetH, radius) {
  const img = await sharp(src).resize({ height: targetH }).png().toBuffer();
  const { width, height } = await sharp(img).metadata();
  return {
    buffer: await sharp(img)
      .composite([{ input: roundedRectSvg(width, height, radius, '#fff'), blend: 'dest-in' }])
      .png()
      .toBuffer(),
    width,
    height,
  };
}

function ogBackground() {
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3a352b"/>
        <stop offset="0.55" stop-color="${CHARCOAL}"/>
        <stop offset="1" stop-color="${CHARCOAL_900}"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${GOLD_A}"/>
        <stop offset="1" stop-color="${GOLD_B}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.78" cy="0.15" r="0.6">
        <stop offset="0" stop-color="${GOLD_A}" stop-opacity="0.36"/>
        <stop offset="1" stop-color="${GOLD_A}" stop-opacity="0"/>
      </radialGradient>
      <pattern id="rub" width="70" height="70" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="${GOLD_A}" stroke-width="1" opacity="0.13">
          <rect x="21" y="21" width="28" height="28"/>
          <rect x="21" y="21" width="28" height="28" transform="rotate(45 35 35)"/>
        </g>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#rub)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect x="0" y="0" width="1200" height="8" fill="url(#gold)"/>

    <text x="92" y="322" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800" fill="#f7f2e8" letter-spacing="-1">Anwar Sajjadiya</text>
    <text x="94" y="382" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="500" fill="#e7d5b1">The Complete Encyclopedia of Imam Zayn al-Abidin</text>

    <g transform="translate(94, 436)">
      <rect x="0" y="0" width="470" height="60" rx="30" fill="rgba(255,255,255,0.08)" stroke="rgba(231,213,177,0.28)"/>
      <circle cx="34" cy="30" r="9" fill="url(#gold)"/>
      <text x="60" y="39" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#f7f2e8">Free on App Store &amp; Google Play</text>
    </g>
  </svg>`);
}

async function buildOg() {
  await mkdir(P('public/og'), { recursive: true });
  const bg = await sharp(ogBackground()).png().toBuffer();

  const logo = await sharp(LOGO).resize({ height: 96 }).png().toBuffer();
  const phone = await roundedImage(HOME, 566, 42);
  const bezel = roundedRectSvg(phone.width + 16, phone.height + 16, 50, CHARCOAL_900);
  const phoneLeft = 1200 - phone.width - 96;
  const phoneTop = Math.round((630 - phone.height) / 2);

  const cover = await sharp(bg)
    .composite([
      { input: bezel, top: phoneTop - 8, left: phoneLeft - 8 },
      { input: phone.buffer, top: phoneTop, left: phoneLeft },
      { input: logo, top: 66, left: 92 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  for (const locale of ['ar', 'en', 'fa']) {
    await writeFile(P(`public/og/${locale}.jpg`), cover);
  }
  console.log(`OG cover written (${(cover.length / 1024).toFixed(0)} kB) → public/og/{ar,en,fa}.jpg`);
}

async function buildIcon(size, out) {
  const logoH = Math.round(size * 0.66);
  const logo = await sharp(LOGO).resize({ height: logoH }).png().toBuffer();
  const tile = sharp({ create: { width: size, height: size, channels: 4, background: CREAM } })
    .composite([{ input: logo, gravity: 'center' }])
    .png();
  await writeFile(P(out), await tile.toBuffer());
  console.log(`${out} written (${size}x${size})`);
}

await buildOg();
await buildIcon(180, 'public/apple-touch-icon.png');
await buildIcon(64, 'public/favicon.png');
