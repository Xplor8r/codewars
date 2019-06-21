# Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

def sum_r(x)
  x == [] ? 0 : x.last + sum_r(x.first x.size - 1) 
end
