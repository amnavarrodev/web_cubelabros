// Local preview of dist/ that mimics GitHub Pages: served under the same base path,
// folder URLs resolve to index.html and missing files get 404.html. Run: npm run serve
const http = require('http');
const fs = require('fs');
const path = require('path');
const site = require('../src/content/site');

const DIST = path.join(__dirname, '..', 'dist');
const PORT = Number(process.env.PORT) || 8080;
const BASE = new URL(`${site.siteUrl}/`).pathname;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    if (!url.startsWith(BASE)) {
      res.writeHead(302, { Location: BASE });
      return res.end();
    }
    let file = path.join(DIST, url.slice(BASE.length));
    if (!file.startsWith(DIST)) {
      res.writeHead(403);
      return res.end();
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      if (!url.endsWith('/')) {
        res.writeHead(301, { Location: `${url}/` });
        return res.end();
      }
      file = path.join(file, 'index.html');
    }
    const found = fs.existsSync(file);
    const target = found ? file : path.join(DIST, '404.html');
    res.writeHead(found ? 200 : 404, { 'Content-Type': TYPES[path.extname(target)] || 'application/octet-stream' });
    fs.createReadStream(target).pipe(res);
  })
  .listen(PORT, () => console.log(`Preview: http://localhost:${PORT}${BASE}`));
