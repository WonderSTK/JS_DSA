function myReplace(str, before, after) {
    // Check if the first letter of the word to be replaced is uppercase
    if (before[0] === before[0].toUpperCase()) {
      // Change the first letter of the replacement word to uppercase
      after = after[0].toUpperCase() + after.slice(1);
    } else {
      // Change the first letter of the replacement word to lowercase
      after = after[0].toLowerCase() + after.slice(1);
    }
    // Replace the word in the string
    return str.replace(before, after);
  }
  
  // Example usage
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
  console.log(myReplace("I think we should look up there", "up", "Down")); // I think we should look Down there