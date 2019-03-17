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
