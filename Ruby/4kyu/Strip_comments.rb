# Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

# Example:

# Given an input string of:

# apples, pears # and bananas
# grapes
# bananas !apples
# The output expected would be:

# apples, pears
# grapes
# bananas
# The code would be called like so:

# result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
# result should == "apples, pears\ngrapes\nbananas"

def solution(input, markers)
  lines = input.split("\n")
  result = []
  lines.map do |str|
    arr = str.split('')
    markers.each do |m|
      if arr.include?(m)
        arr = arr[0..arr.index(m)-1]
      end
    end
    result.push(arr.join.chomp(' '))
  end
  result.join("\n")
end
