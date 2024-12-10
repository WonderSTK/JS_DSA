function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const start = alphabet.indexOf(str[0]);
  const end = alphabet.indexOf(str[str.length - 1]);
  const alphabetSlice = alphabet.slice(start, end + 1);
  const missingLetters = alphabetSlice.split('').filter(letter => !str.includes(letter));
  return missingLetters.length ? missingLetters.join('') : undefined;
}