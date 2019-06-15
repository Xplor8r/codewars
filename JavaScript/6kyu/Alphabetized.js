// The alphabetized kata
// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") // "BbeehHilloTy"

function alphabetized(s) {
  let array = s.replace(/[^a-z]/gi,'').split('');
  let alphas = {a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[],i:[],j:[],k:[],l:[],
    m:[],n:[],o:[],p:[],q:[],r:[],s:[],t:[],u:[],v:[],w:[],x:[],y:[],z:[]}
  for (let val of array) {
    let lower = val.toLowerCase();
    alphas[lower].push(val);
  }
  let result = [];
  for (let key in alphas) {
    result.push(alphas[key].join(''))
  }
  return result.join('');
}
