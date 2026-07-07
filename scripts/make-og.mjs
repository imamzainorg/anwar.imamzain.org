/**
 * Generate static social/share assets with sharp (run once, committed to
 * /public — NOT part of the Vercel build, so no font/runtime fragility there):
 *   - public/og/{ar,en,fa}.jpg  — 1200x630 Open Graph cover
 *   - public/apple-touch-icon.png — 180x180 iOS home-screen icon
 *
 *   node scripts/make-og.mjs
 */
import sharp from 'sharp';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const P = (p) => resolve(root, p);

const TEAL = '#006654';
const TEAL_900 = '#00241d';
const GOLD_A = '#d8b878';
const GOLD_B = '#a97f45';

const markSvg = (cx, cy, s) => `
  <g transform="translate(${cx - s / 2}, ${cy - s / 2}) scale(${s / 48})">
    <g stroke="url(#gold)" stroke-width="1.6" stroke-linecap="round" opacity="0.9">
      <path d="M24 3v3M24 42v3M3 24h3M42 24h3M9 9l2.2 2.2M36.8 36.8 39 39M39 9l-2.2 2.2M11.2 36.8 9 39"/>
    </g>
    <g fill="url(#gold)">
      <polygon points="24,7 41,24 24,41 7,24"/>
      <polygon points="12,12 36,12 36,36 12,36"/>
    </g>
    <polygon points="24,13 35,24 24,35 13,24" fill="${TEAL_900}"/>
    <polygon points="24,16.5 31.5,24 24,31.5 16.5,24" fill="url(#gold)"/>
    <circle cx="24" cy="24" r="2.4" fill="${TEAL_900}"/>
  </g>`;

function ogBackground() {
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#01705c"/>
        <stop offset="0.55" stop-color="${TEAL}"/>
        <stop offset="1" stop-color="${TEAL_900}"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${GOLD_A}"/>
        <stop offset="1" stop-color="${GOLD_B}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.75" cy="0.2" r="0.6">
        <stop offset="0" stop-color="${GOLD_A}" stop-opacity="0.38"/>
        <stop offset="1" stop-color="${GOLD_A}" stop-opacity="0"/>
      </radialGradient>
      <pattern id="rub" width="70" height="70" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="${GOLD_A}" stroke-width="1" opacity="0.14">
          <rect x="21" y="21" width="28" height="28"/>
          <rect x="21" y="21" width="28" height="28" transform="rotate(45 35 35)"/>
        </g>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#rub)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect x="0" y="0" width="1200" height="8" fill="url(#gold)"/>

    ${markSvg(150, 150, 108)}

    <text x="90" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="86" font-weight="800" fill="#ffffff" letter-spacing="-1">Anwar Sajjadiya</text>
    <text x="92" y="392" font-family="Segoe UI, Arial, sans-serif" font-size="31" font-weight="500" fill="#e9dcc2">The Complete Encyclopedia of Imam Zayn al-Abidin</text>

    <g transform="translate(92, 448)">
      <rect x="0" y="0" width="470" height="60" rx="30" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.22)"/>
      <circle cx="34" cy="30" r="9" fill="url(#gold)"/>
      <text x="60" y="39" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff">Free on App Store &amp; Google Play</text>
    </g>
  </svg>`);
}

async function buildOg() {
  await mkdir(P('public/og'), { recursive: true });
  const bg = await sharp(ogBackground()).png().toBuffer();

  const phone = await sharp(P('src/assets/screens/03.png'))
    .resize({ height: 560 })
    .png()
    .toBuffer();
  const pmeta = await sharp(phone).metadata();

  const cover = await sharp(bg)
    .composite([{ input: phone, top: Math.round((630 - pmeta.height) / 2), left: 1200 - pmeta.width - 70 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  for (const locale of ['ar', 'en', 'fa']) {
    await writeFile(P(`public/og/${locale}.jpg`), cover);
  }
  console.log(`OG cover written (${(cover.length / 1024).toFixed(0)} kB) → public/og/{ar,en,fa}.jpg`);
}

async function buildAppleIcon() {
  const svg = await readFile(P('public/favicon.svg'));
  const png = await sharp(svg).resize(180, 180).png().toBuffer();
  await writeFile(P('public/apple-touch-icon.png'), png);
  console.log('apple-touch-icon.png written (180x180)');
}

await buildOg();
await buildAppleIcon();
