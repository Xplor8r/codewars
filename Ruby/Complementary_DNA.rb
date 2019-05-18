# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

# DNAStrand ("ATTGC") // return "TAACG"

# DNAStrand ("GTAT") // return "CATA" 

def DNA_strand(dna)
  code = {"A"=>"T","T"=>"A","G"=>"C","C"=>"G"}
  arr = dna.split ''
  result = []
  arr.each do |val|
    result.push(code[val])
  end
  result.join ''
end
