const https = require('https');
const fs = require('fs');
const path = require('path');

const userAgent = 'CestiSkladateleMAP/1.0 (contact: edita.kolatorova@stud.ssst.cz)';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    function get(currentUrl) {
      https.get(currentUrl, { headers: { 'User-Agent': userAgent } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed with HTTP ${res.statusCode} for ${currentUrl}`));
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', err => {
        fs.unlink(dest, () => reject(err));
      });
    }
    get(url);
  });
}

async function searchCommonsImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|extmetadata|size&format=json`;
  const res = await fetchJson(url);
  if (!res.query || !res.query.pages) return null;
  const pages = Object.values(res.query.pages);
  const candidate = pages.find(p => p.imageinfo && p.imageinfo[0] && p.title.match(/\.(jpg|jpeg|png)$/i)) || pages[0];
  if (!candidate || !candidate.imageinfo || !candidate.imageinfo[0]) return null;
  const info = candidate.imageinfo[0];
  return {
    title: candidate.title.replace(/^File:/i, ''),
    url: info.url,
    width: info.width,
    height: info.height,
    artist: info.extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '').trim() || 'Neznámý',
    license: info.extmetadata?.LicenseShortName?.value || 'Public domain / CC',
    description: info.extmetadata?.ImageDescription?.value?.replace(/<[^>]+>/g, '').trim() || ''
  };
}

async function main() {
  const targets = [
    { query: 'Leoš Janáček', dest: 'static/images/composers/janacek.jpg', label: 'Leoš Janáček (portrét)' },
    { query: 'Hukvaldy', dest: 'static/images/places/hukvaldy.jpg', label: 'Hukvaldy' },
    { query: 'Polička kostel', dest: 'static/images/places/policka.jpg', label: 'Polička – chrám sv. Jakuba' },
    { query: 'Citoliby', dest: 'static/images/composers/kopriva.jpg', label: 'Citolibská hudební škola' },
    { query: 'Brentner', dest: 'static/images/composers/brentner.jpg', label: 'Jan Josef Ignác Brentner' },
    { query: 'Bakov nad Jizerou', dest: 'static/images/composers/linek.jpg', label: 'Bakov nad Jizerou – působiště Linka' },
    { query: 'Všebořice', dest: 'static/images/places/vseborice.jpg', label: 'Všebořice – rodiště Z. Fibicha' }
  ];

  let credits = [];
  if (fs.existsSync('src/lib/data/imageCredits.json')) {
    try {
      credits = JSON.parse(fs.readFileSync('src/lib/data/imageCredits.json', 'utf8'));
    } catch (e) {}
  }

  for (const item of targets) {
    try {
      console.log(`Searching query: "${item.query}"...`);
      const info = await searchCommonsImage(item.query);
      if (!info) {
        console.error(`  No result for "${item.query}"`);
        continue;
      }
      console.log(`  Found: ${info.title} (${info.width}x${info.height})`);

      fs.mkdirSync(path.dirname(item.dest), { recursive: true });
      await downloadFile(info.url, item.dest);
      const stat = fs.statSync(item.dest);
      console.log(`  Saved ${item.dest} (${(stat.size / 1024).toFixed(1)} KB)\n`);

      const existingIdx = credits.findIndex(c => c.dest === item.dest);
      const record = {
        dest: item.dest,
        label: item.label,
        commonsTitle: info.title,
        artist: info.artist,
        license: info.license,
        url: info.url
      };
      if (existingIdx >= 0) credits[existingIdx] = record;
      else credits.push(record);
    } catch (e) {
      console.error(`  Error for ${item.query}:`, e.message);
    }
  }

  fs.writeFileSync('src/lib/data/imageCredits.json', JSON.stringify(credits, null, 2), 'utf8');
  console.log('Batch 2 completed!');
}

main().catch(console.error);
