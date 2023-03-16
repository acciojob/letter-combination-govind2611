function letterCombinations(input_digit) {
  if (input_digit.length === 0) {
    return [];
}
const mapping = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  
  const result = [];
  
  function backtrack(currentString, digits) {
    if (digits.length === 0) {
      result.push(currentString);
      return;
    }
    const letters = mapping[digits[0]];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(currentString + letter, digits.slice(1));
    }
  }
  
  backtrack("", digits);
  return result;
}
module.exports = letterCombinations;
