// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna){
  let code = {"A":"T","T":"A","G":"C","C":"G"}
  let arr = dna.split('');
  let result = [];
  for (let val of arr) {
    result.push(code[val]);
  }
  return result.join('');
}
