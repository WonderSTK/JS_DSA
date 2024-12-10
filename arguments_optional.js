function addTogether(a, b) {
    if (typeof a !== 'number' || (b !== undefined && typeof b !== 'number')) return undefined;
    if (b === undefined) {
      return function(c) {
        if (typeof c !== 'number') return undefined;
        return a + c;
      };
    }
    return a + b;
  }
  
  // Example usage
  console.log(addTogether(2, 3)); // 5
  var sumTwoAnd = addTogether(2);
  console.log(sumTwoAnd(3)); // 5