# Your job is to write a function which increments a string, to create a new string.

# If the string already ends with a number, the number should be incremented by 1.
# If the string does not end with a number. the number 1 should be appended to the new string.
# Examples:

# foo -> foo1

# foobar23 -> foobar24

# foo0042 -> foo0043

# foo9 -> foo10

# foo099 -> foo100

# Attention: If the number has leading zeros the amount of digits should be considered.

def increment_string(input) 
  num = input.split(/(\d+)/).pop
  if !/\A\d+\z/.match(num)
      input + '1'
  else
      nextNum = (num.to_i + 1).to_s
      input.chomp(num) + pad(nextNum, num.length)  
  end
end

def pad(num, size)
    s = num + ""
    while s.length < size
      s = "0" + s
    end
    s
end
