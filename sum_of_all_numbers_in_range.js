
const sumOfAllNumbersInRange = (start, end) => {
  if (start === end) {
    return start;
  }
  return start + sumOfAllNumbersInRange(start + 1, end);
};

console.log(sumOfAllNumbersInRange(1, 10)); // 55


//

function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}