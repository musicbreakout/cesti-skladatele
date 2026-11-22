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

async function getCommonsFileInfo(title) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata|size&format=json`;
  const res = await fetchJson(url);
  const pages = Object.values(res.query?.pages || {});
  if (!pages[0] || !pages[0].imageinfo) return null;
  const info = pages[0].imageinfo[0];
  return {
    title: pages[0].title.replace(/^File:/i, ''),
    url: info.url,
    width: info.width,
    height: info.height,
    artist: info.extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '').trim() || 'Neznámý',
    license: info.extmetadata?.LicenseShortName?.value || 'Public domain / CC',
    description: info.extmetadata?.ImageDescription?.value?.replace(/<[^>]+>/g, '').trim() || ''
  };
}

async function main() {
  const exactFiles = [
    { title: 'File:Leoš Janáček.jpg', dest: 'static/images/composers/janacek.jpg', label: 'Leoš Janáček (portrét)' },
    { title: 'File:Jan Josef Ignác Brentner.jpeg', dest: 'static/images/composers/brentner.jpg', label: 'Jan Josef Ignác Brentner (historický portrét)' },
    { title: 'File:Jiří Ignác Linek (1725-1791), český kantor a hudební skladatel.jpeg', dest: 'static/images/composers/linek.jpg', label: 'Jiří Ignác Linek (portrét kantora)' },
    { title: 'File:Karel Blažej Kopřiva (1756-1785).jpg', dest: 'static/images/composers/kopriva.jpg', label: 'Karel Blažej Kopřiva (portrét varhaníka)' },
    { title: 'File:Kostel sv. Jakuba Polička.JPG', dest: 'static/images/places/policka.jpg', label: 'Polička – kostel sv. Jakuba s rodnou věží' },
    { title: 'File:Zdenek Fibich.jpg', dest: 'static/images/composers/fibich.jpg', label: 'Zdeněk Fibich (portrét)' }
  ];

  let credits = [];
  if (fs.existsSync('src/lib/data/imageCredits.json')) {
    try {
      credits = JSON.parse(fs.readFileSync('src/lib/data/imageCredits.json', 'utf8'));
    } catch (e) {}
  }

  for (const item of exactFiles) {
    try {
      console.log(`Fetching: ${item.title}...`);
      const info = await getCommonsFileInfo(item.title);
      if (!info) {
        console.error(`  Could not find info for ${item.title}`);
        continue;
      }
      console.log(`  Found: ${info.title} (${info.width}x${info.height})`);
      fs.mkdirSync(path.dirname(item.dest), { recursive: true });
      await downloadFile(info.url, item.dest);
      const stat = fs.statSync(item.dest);
      console.log(`  Saved to ${item.dest} (${(stat.size / 1024).toFixed(1)} KB)`);

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
    } catch (err) {
      console.error(`  Error downloading ${item.title}:`, err.message);
    }
  }

  fs.writeFileSync('src/lib/data/imageCredits.json', JSON.stringify(credits, null, 2), 'utf8');
  console.log('All exact images downloaded successfully and credits updated!');
}

main().catch(console.error);
