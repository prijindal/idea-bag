const ProgressBar = require('progress');
const http = require('http');

let req = http.request('http://ftp.yzu.edu.tw/Linux/kali-images/kali-2016.2/kali-linux-2016.2-amd64.iso');

req.on('response', (res) => {
  // console.log(res)
  let len = parseInt(res.headers['content-length'], 10);

  console.log();
  let bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: len,
  });

  res.on('data', (chunk) => {
    bar.tick(chunk.length);
  });

  res.on('end', () => {
    console.log('\n');
  });
});

req.end();
