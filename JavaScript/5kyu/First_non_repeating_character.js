// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  counter = {}
  arr = s.toLowerCase().split('');
  if (arr.length === 1) return s;
  if (s == '' || arr.sort().every((val,i,arr)=>val===arr[0])) return '';
  arr.map(val=> counter[val] = (counter[val] || 0) + 1);
  for (let key in counter) {
    if (counter[key] > 1) {
      delete counter[key];
    }
  }
  return Object.keys(counter).length !== 0 ? s.split('').find(a=>counter.hasOwnProperty(a.toLowerCase())) : '';
}
