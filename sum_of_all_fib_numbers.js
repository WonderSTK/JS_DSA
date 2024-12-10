const sumFibsOdd = (num) => {
    let sum = 0;
    let prev = 0;
    let curr = 1;
    while (curr <= num) {
        if (curr % 2 !== 0) {
        sum += curr;
        }
        curr += prev;
        prev = curr - prev;
    }
    return sum;
    }
        