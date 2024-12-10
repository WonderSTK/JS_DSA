function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var firstVowel = str.split('').findIndex(char => vowels.includes(char));
    
    if (firstVowel === 0) {
      return str + 'way';
    } else if (firstVowel > 0) {
      return str.slice(firstVowel) + str.slice(0, firstVowel) + 'ay';
    } else {
      return str + 'ay';
    }
  }
  
  console.log(translatePigLatin("consonant")); // onsonantcay
  console.log(translatePigLatin("algorithm")); // algorithmway