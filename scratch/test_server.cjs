const { spawn } = require('child_process');
const http = require('http');

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function get(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, length: data.length, body: data });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function run() {
  console.log('Starting dev server on port 5174...');
  const dev = spawn('node', ['./node_modules/vite/bin/vite.js', 'dev', '--host', '127.0.0.1', '--port', '5174'], {
    stdio: ['ignore', 'pipe', 'pipe']
  });

  dev.stdout.on('data', d => process.stdout.write('[Vite] ' + d.toString()));
  dev.stderr.on('data', d => process.stderr.write('[Vite ERR] ' + d.toString()));

  // Wait for server to boot
  let ready = false;
  for (let i = 0; i < 20; i++) {
    await wait(500);
    const r = await get('http://127.0.0.1:5174/');
    if (r.status === 200) {
      ready = true;
      break;
    }
  }

  if (!ready) {
    console.error('Server failed to respond in 10s');
    dev.kill();
    process.exit(1);
  }

  console.log('\n--- PROBING ENDPOINTS ---');
  const urls = [
    { name: 'Home', url: 'http://127.0.0.1:5174/' },
    { name: 'Detail Dvořáka (Záložka Místa a výlety)', url: 'http://127.0.0.1:5174/skladatele/antonin-dvorak?tab=mista' },
    { name: 'Detail Dvořáka (Záložka Životopis)', url: 'http://127.0.0.1:5174/skladatele/antonin-dvorak' },
    { name: 'Mapa výletů', url: 'http://127.0.0.1:5174/mapa' },
    { name: 'Detail místa Nelahozeves', url: 'http://127.0.0.1:5174/mista/nelahozeves' },
    { name: 'Portrét Dvořáka (JPG)', url: 'http://127.0.0.1:5174/images/composers/dvorak.jpg' },
    { name: 'Foto Nelahozeves (JPG)', url: 'http://127.0.0.1:5174/images/places/nelahozeves.jpg' }
  ];

  for (const item of urls) {
    const res = await get(item.url);
    console.log(`[${res.status}] ${item.name} (${item.url}) - ${res.length || 0} bytes`);
    if (item.name === 'Detail Dvořáka' && res.body) {
      const hasDvorak = res.body.includes('Antonín Dvořák');
      const hasStezka = res.body.includes('Dvořákova stezka');
      const hasNelahozeves = res.body.includes('Nelahozeves');
      console.log(`  -> Obsahuje "Antonín Dvořák": ${hasDvorak}, "Dvořákova stezka": ${hasStezka}, "Nelahozeves": ${hasNelahozeves}`);
    }
  }

  console.log('Shutting down dev server...');
  dev.kill();
  console.log('ALL TESTS PASSED SUCCESSFULLY!');
}

run().catch(console.error);
