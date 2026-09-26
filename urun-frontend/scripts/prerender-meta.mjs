// Derlemeden sonra her sayfa için kendi başlık/açıklama/paylaşım etiketlerini taşıyan
// ayrı bir HTML üretir (ör. dist/hizmetler/qr-menu.html). Böylece WhatsApp, Instagram
// ve Google, JavaScript çalıştırmadan her sayfanın doğru önizlemesini görür.
// nginx.conf içindeki `try_files $uri $uri.html ...` bu dosyaları sunar.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

// Veri dosyaları .webp import ettiği için Vite üzerinden yüklenir
const vite = await createServer({ root, logLevel: 'error', server: { middlewareMode: true }, appType: 'custom' });
const { allPageMeta, fullTitle, SITE_URL } = await vite.ssrLoadModule('/src/data/pageMeta.js');
const pages = allPageMeta();
await vite.close();

const template = await readFile(join(dist, 'index.html'), 'utf8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`index.html içinde bulunamadı: ${label}`);
  return html.replace(pattern, replacement);
}

for (const [path, meta] of Object.entries(pages)) {
  const title = escape(fullTitle(meta.title));
  const description = escape(meta.description);
  const url = `${SITE_URL}${path}`;

  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, 'title');
  html = replaceOnce(html, /(<meta name="description" content=")[^"]*(")/, `$1${description}$2`, 'description');
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical');
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url');
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`, 'og:title');
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`, 'og:description');

  const file = join(dist, `${path.slice(1)}.html`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

console.log(`✓ ${Object.keys(pages).length} sayfa için önizleme etiketleri üretildi`);
