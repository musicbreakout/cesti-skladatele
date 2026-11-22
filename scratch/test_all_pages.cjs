const http = require('http');

const urls = [
  '/',
  '/skladatele',
  '/skladatele/antonin-dvorak',
  '/skladatele/bedrich-smetana',
  '/skladatele/jakub-jan-ryba',
  '/skladatele/jan-josef-ignac-brentner',
  '/skladatele/jiri-ignac-linek',
  '/skladatele/josef-suk',
  '/skladatele/karel-blazej-kopriva',
  '/vyroci',
  '/mapa',
  '/mista/nelahozeves',
  '/mista/litomysl',
  '/mista/rozmital-zamek',
  '/mista/krecovice',
  '/blog',
  '/blog/proc-si-smetana-zvolil-vltavu',
  '/vzdelavani',
  '/o-projektu',
  '/images/hero-vltava-prague.jpg'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://127.0.0.1:5173${path}`, (res) => {
      let data = '';
      res.on('data', chunk => {
        if (data.length < 50000) data += chunk.toString();
      });
      res.on('end', () => {
        const hasAudio = /<audio|<source[^>]+audio/i.test(data);
        const hasKodifikovane = /kodifikovan/i.test(data);
        resolve({
          path,
          statusCode: res.statusCode,
          hasAudio,
          hasKodifikovane,
          contentLength: res.headers['content-length'] || data.length
        });
      });
    }).on('error', (err) => {
      resolve({ path, statusCode: 500, error: err.message });
    });
  });
}

(async () => {
  console.log('Testing all endpoints on http://127.0.0.1:5173...');
  let failed = 0;
  for (const u of urls) {
    const res = await checkUrl(u);
    if (res.statusCode === 200 && !res.hasAudio && !res.hasKodifikovane) {
      console.log(`[OK 200] ${u} (Audio: none, Kodifikovane: none)`);
    } else {
      console.error(`[FAIL] ${u}`, res);
      failed++;
    }
  }
  if (failed === 0) {
    console.log('\nALL 20 ENDPOINTS PASSED WITH 200 OK, ZERO AUDIO, ZERO KODIFIKOVANE META-CONTENT!');
  } else {
    console.error(`\n${failed} checks failed!`);
    process.exit(1);
  }
})();
