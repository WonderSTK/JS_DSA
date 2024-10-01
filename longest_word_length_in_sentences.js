function findLongestWordLength(str) {
    const word = str.split(" ")
    const longestWordLength = Math.max(...word.map(word => word.length));
    
    return longestWordLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");