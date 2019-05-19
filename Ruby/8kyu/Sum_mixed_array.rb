# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.

def sum_mix(x)
    x.reduce { |a, b|  a.to_i + b.to_i }
end