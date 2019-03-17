#def getCount(inputStr)
#  count = 0;
#  vowels = ['a','e','i','o','u'];
#  array = inputStr.split('');
#  array.each do |letter|
#    if vowels.include?(letter)
#       count += 1
#    end
#  end
#  count
#end

def getCount(inputStr)
  inputStr.count 'aeiou'
end
