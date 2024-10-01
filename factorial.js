//iterative approach
function factorialize(num) {
    let count = 1;
     for (let i=2; i<=num; i++){
       count = count*i
     }
    return count
  }
  // recursive approach

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case: 0! = 1! = 1
    }
    return n * factorial(n - 1); // Recursive call
  }
  
  console.log(factorial(5)); // Output: 120
  