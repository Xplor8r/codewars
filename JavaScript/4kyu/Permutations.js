// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
  if (string.length === 1) return [string];
  let perms = [];
  for (let i=0; i<string.length; i++) {
    let char = string[i];
    let subString = string.slice(0,i) + string.slice(i+1,string.length);
    for (let subPerm of permutations(subString)) {
      perms.push(char + subPerm);       
    }
  }
  return perms.filter((v,idx,self)=>{ return self.indexOf(v) === idx });
}
