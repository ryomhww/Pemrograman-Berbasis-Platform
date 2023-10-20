const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimesInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

rl.question("Masukkan input awal: ", (inputAwal) => {
  rl.question("Masukkan input akhir: ", (inputAkhir) => {
    const start = parseInt(inputAwal);
    const end = parseInt(inputAkhir);
    
    if (!isNaN(start) && !isNaN(end) && start <= end) {
      const totalPrimes = sumPrimesInRange(start, end);
      console.log(`Jumlah bilangan prima antara ${start} dan ${end} adalah ${totalPrimes}`);
    } else {
      console.log("Input tidak valid. Pastikan input awal lebih kecil atau sama dengan input akhir.");
    }

    rl.close();
  });
});