const https = require('https');
const userAgent = 'CestiSkladateleMAP/1.0 (contact: edita.kolatorova@stud.ssst.cz)';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&srlimit=6&format=json`;
  const res = await fetchJson(url);
  console.log(`=== Query: "${q}" ===`);
  for (const item of (res.query?.search || [])) {
    console.log(`  File: ${item.title}`);
  }
}

async function run() {
  await search('Leos Janacek portrait');
  await search('Policka kostel svateho Jakuba');
  await search('Zdenek Fibich');
  await search('Jan Josef Ignac Brentner');
  await search('Jiri Ignac Linek');
  await search('Karel Blazej Kopriva');
}

run();
