function findPrimes(start, end) {
  const primes = [];
  const total = end - start;
  let processed = 0;
  let progressStep = 10;
  const startTime = performance.now();

   function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

   function processChunk(current) {
    const chunkSize = 5000;

    const limit = Math.min(current + chunkSize, end);

    for (let i = current; i < limit; i++) {
      if (isPrime(i)) primes.push(i);
      processed++;

      const percent = Math.floor((processed / total) * 100);
      if (percent >= progressStep) {
        console.log(`Progress: ${progressStep}%`);
        progressStep += 10;
      }
    }

    if (limit < end) {
      setTimeout(() => processChunk(limit), 0);
    } else {
      const endTime = performance.now();
      console.log("Total primes:", primes.length);
      console.log("Execution time:", (endTime - startTime).toFixed(2), "ms");
    }
  }
  processChunk(start);
}

findPrimes(1, 200000);