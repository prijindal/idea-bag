import nextFrame from 'next-frame';

async function isPrime(number) {
  if (!number) return false;
  let n = number || 1;
  let results = {};
  while (n % 2 === 0) {
    results[2] = results[2] ? results[2] + 1 : 1;
    n /= 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      results[i] = results[i] ? results[i] + 1 : 1;
      n /= i;
    }
  }
  if (n === number) return true;
  return false;
}

async function findNextPrime(number) {
  if (!number) return 1;
  let found = false;
  let i = parseInt(number, 0);
  while (!found) {
    await nextFrame();
    i += 1;
    found = await isPrime(i);
  }
  return i;
}

export default findNextPrime;
