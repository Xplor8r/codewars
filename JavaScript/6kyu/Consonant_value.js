// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

// -- We shall assign the following values: a = 1, b = 2 ... z = 26.

// For example, for the word "zodiacs", solve("zodiacs") = 26
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// Vowels are are a,e,i,o,u.

function solve(s) {
  let arr = s.split(/[\aeiou,]/);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let sum = 0;
    if (el !== '') {
      let result2 = [];
      let arr2 = el.toUpperCase().split('');
      for (let j = 0; j < arr2.length; j++) {
        result2.push(arr2[j].charCodeAt(0) - 64);
      }
      result.push(result2.reduce((t, n) => t + n));
    }
  }
  return result.sort((a, b) => a - b).pop();
};
