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
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=4&prop=imageinfo&iiprop=url|extmetadata|size&format=json`;
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
    // Smetana
    { query: 'Bedřich Smetana portrait 1880', dest: 'static/images/composers/smetana.jpg', label: 'Bedřich Smetana (portrét)' },
    { query: 'Litomyšl zámecký pivovar', dest: 'static/images/places/litomysl.jpg', label: 'Zámecký pivovar v Litomyšli – rodný byt B. Smetany' },
    { query: 'Myslivna Jabkenice Smetana', dest: 'static/images/places/jabkenice.jpg', label: 'Myslivna v Jabkenicích – Památník B. Smetany' },
    // Ryba
    { query: 'Jakub Jan Ryba portrait', dest: 'static/images/composers/ryba.jpg', label: 'Jakub Jan Ryba (dobová rytina)' },
    { query: 'Starý Rožmitál kostel Povýšení svatého Kříže', dest: 'static/images/places/stary-rozmital.jpg', label: 'Kostel Povýšení sv. Kříže ve Starém Rožmitále' },
    { query: 'Zámek Rožmitál pod Třemšínem', dest: 'static/images/places/rozmital-zamek.jpg', label: 'Zámek Rožmitál pod Třemšínem' },
    // Suk
    { query: 'Josef Suk 1910 portrait', dest: 'static/images/composers/suk.jpg', label: 'Josef Suk (portrét)' },
    { query: 'Křečovice památník Josefa Suka', dest: 'static/images/places/krecovice.jpg', label: 'Památník Josefa Suka v Křečovicích' },
    { query: 'České kvarteto 1895', dest: 'static/images/places/ceske-kvarteto.jpg', label: 'České kvarteto (1895)' },
    // Kopřiva
    { query: 'Zámek Citoliby', dest: 'static/images/places/citoliby.jpg', label: 'Zámek Citoliby' },
    { query: 'Kostel Narození Panny Marie Citoliby', dest: 'static/images/places/citoliby-kostel.jpg', label: 'Kostel Narození Panny Marie v Citolibech' },
    // Brentner
    { query: 'Dobřany kostel svatého Mikuláše', dest: 'static/images/places/dobrany.jpg', label: 'Kostel sv. Mikuláše a sv. Víta v Dobřanech' },
    { query: 'Brentner Horae pomeridianae', dest: 'static/images/composers/brentner.jpg', label: 'Jan Josef Ignác Brentner (titulní list díla)' },
    // Linek
    { query: 'Bakov nad Jizerou kostel svatého Bartoloměje', dest: 'static/images/places/bakov.jpg', label: 'Kostel sv. Bartoloměje v Bakově nad Jizerou' },
    { query: 'Kosmonosy klášter piaristů', dest: 'static/images/places/kosmonosy.jpg', label: 'Piaristický klášter v Kosmonosích' },
    // Janáček
    { query: 'Leoš Janáček 1926 portrait', dest: 'static/images/composers/janacek.jpg', label: 'Leoš Janáček (portrét)' },
    { query: 'Hukvaldy škola památník Janáčka', dest: 'static/images/places/hukvaldy.jpg', label: 'Rodná škola a Památník L. Janáčka v Hukvaldech' },
    { query: 'Hukvaldy Liška Bystrouška pomník', dest: 'static/images/places/hukvaldy-liska.jpg', label: 'Pomník Lišky Bystroušky v oboře Hukvaldy' },
    // Martinů
    { query: 'Bohuslav Martinů portrait', dest: 'static/images/composers/martinu.jpg', label: 'Bohuslav Martinů (portrét)' },
    { query: 'Polička kostel svatého Jakuba věž', dest: 'static/images/places/policka.jpg', label: 'Věž kostela sv. Jakuba v Poličce – rodná světnička B. Martinů' },
    // Fibich
    { query: 'Zdeněk Fibich portrait', dest: 'static/images/composers/fibich.jpg', label: 'Zdeněk Fibich (portrét)' },
    { query: 'Vyšehradský hřbitov Slavín', dest: 'static/images/places/vysehrad.jpg', label: 'Vyšehradský hřbitov a Slavín' }
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
      console.log(`  Artist: ${info.artist} | License: ${info.license}`);

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
  console.log('Finished downloading composer and place images!');
}

main().catch(console.error);
