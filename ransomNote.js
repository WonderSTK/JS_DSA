const canConstruct = function(ransomNote, magazine) {
    const magazineMap = {};
    for (let char of magazine) {
        magazineMap[char] = (magazineMap[char] || 0) + 1;
    }
    for (let char of ransomNote) {
        if (!magazineMap[char]) {
            return false;
        }
        magazineMap[char]--;
    }
    return true;
};

console.log(canConstruct("aa", "ab")) //true
