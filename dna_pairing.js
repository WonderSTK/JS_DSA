function pairElement(str) {
    // Define the pairs
    const pairs = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
  
    // Map each character to its pair
    return str.split('').map(char => [char, pairs[char]]);
  }
  
  // Example usage
  console.log(pairElement("GCG")); // [["G", "C"], ["C", "G"], ["G", "C"]]
  console.log(pairElement("ATCGA")); // [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]