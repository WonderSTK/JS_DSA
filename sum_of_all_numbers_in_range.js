
const sumOfAllNumbersInRange = (start, end) => {
  if (start === end) {
    return start;
  }
  return start + sumOfAllNumbersInRange(start + 1, end);
};

console.log(sumOfAllNumbersInRange(1, 10)); // 55