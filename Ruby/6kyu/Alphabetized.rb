# The alphabetized kata
# Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

# The input is restricted to contain no numerals and only words containing the english alphabet letters.

# Example:

# alphabetized("The Holy Bible") # "BbeehHilloTy"

def alphabetized(s)
  array = s.gsub(/[^a-zA-Z]/,'').split''
  alphas = {'a'=>[],'b'=>[],'c'=>[],'d'=>[],'e'=>[],'f'=>[],'g'=>[],'h'=>[],
    'i'=>[],'j'=>[],'k'=>[],'l'=>[],'m'=>[],'n'=>[],'o'=>[],'p'=>[],'q'=>[],
    'r'=>[],'s'=>[],'t'=>[],'u'=>[],'v'=>[],'w'=>[],'x'=>[],'y'=>[],'z'=>[]}
  array.each {|val| alphas[val.downcase].push val}
  result = []
  alphas.each  {|k, v| result.push alphas[k].join''}
  result.join''
end
