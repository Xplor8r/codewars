# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.

#def high(string)
#  array = string.downcase.split ' '
#  countArray = []
#  array.each do |word|
#    count = word.each_byte.to_a.inject(0){|sum,x| sum + (x - 96) }
#    countArray.push(count)
#  end
#  array[countArray.rindex(countArray.max)]
#end

def high(string)
  string.split.max_by { |word| word.sum - 96 * word.length }
end
