// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  let chars = text.toLowerCase().split('');
  let result = [];
  for (let val of chars) {
    let code = val.charCodeAt(0)
    if (code > 96 && code <123) {
      result.push(code - 96);
    }
  }
  return result.join(' ');
}
