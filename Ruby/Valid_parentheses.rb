# Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

# Examples
# "()"              =>  true
# ")(()))"          =>  false
# "("               =>  false
# "(())((()())())"  =>  true
# Constraints
# 0 <= input.length <= 100

def valid_parentheses(string)
  array = string.gsub(/[^\(\)]/, '').split('')
  is_valid = true
  new_array = array.inject(0) do |count, parenthesis|
    if parenthesis == '(' 
      count += 1
    else
      count -= 1
    end
    if count < 0
      is_valid = false
    end
    count
  end
  new_array == 0 && is_valid
end
