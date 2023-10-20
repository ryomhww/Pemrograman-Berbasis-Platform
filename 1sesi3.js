const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function findNextPrime(input) {
  let nextNumber = input + 1;
  while (true) {
    if (isPrime(nextNumber)) {
      return nextNumber;
    }
    nextNumber++;
  }
}

rl.question("Masukkan bilangan: ", (input) => {
  const num = parseInt(input);
  if (!isNaN(num)) {
    const nextPrime = findNextPrime(num);
    console.log(`Input ${num} Maka Outputnya ${nextPrime}`);
  } else {
    console.log("Input tidak valid.");
  }
  rl.close();
});

