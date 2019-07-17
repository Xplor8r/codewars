// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

function findMissingLetter(array){
  let codes1 = array.map(l=>l.charCodeAt(0));
  let codes2 = Array.apply(null, {length: codes1[codes1.length - 1] + 1}).map(Number.call, Number);
  let code = codes2.slice(codes2.indexOf(codes1[0])).filter(el=>codes1.indexOf(el) < 0)[0];
  return String.fromCharCode(code);
}
