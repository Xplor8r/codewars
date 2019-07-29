// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are apart of the word in this kata.

function reverse(str){
  if (str.replace(/\s/g, '') === '') return '';
  return str.split(' ').map((a,i)=>(i%2===0)?a:a.split('').reverse().join('')).join(' ');
}
