function largestPrimeBelow(n) {
  for (let i = n - 1; i >= 2; i--) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    }
  }
  return null; // Return null if no prime is found
}

console.log(largestPrimeBelow(4)); // Output: 3
console.log(largestPrimeBelow(6)); // Output: 5
console.log(largestPrimeBelow(10)); // Output: 7
