# Input

# a string strng of n positive numbers (n = 0 or n >= 2)
# Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.

# Two numbers are "close" if the difference of their weights is small.

# Task:
# For each number in strng calculate its "weight" and then find two numbers of strng that have:

# the smallest difference of weights ie that are the closest
# with the smallest weights
# and with the smallest indices (or ranks, numbered from 0) in strng
# Output:

# an array of two arrays, each subarray in the following format:
# [number-weight, index in strng of the corresponding number, original corresponding number instrng]

# or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)

# or a (char*) in C mimicking an array of two subarrays or a string

# or a matrix in R (2 rows, 3 columns, no columns names)

# The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.

# Examples:
# Let us call that function closest

# strng = "103 123 4444 99 2000"
# the weights are 4, 6, 16, 18, 2 (ie 2, 4, 6, 16, 18)

# closest should return [[2, 4, 2000], [4, 0, 103]] (or ([2, 4, 2000], [4, 0, 103])
# or [{2, 4, 2000}, {4, 0, 103}] or ... depending on the language)
# because 2000 and 103 have for weight 2 and 4, ther indexes in strng are 4 and 0.
# The smallest difference is 2.
# 4 (for 103) and 6 (for 123) have a difference of 2 too but they are not 
# the smallest ones with a difference of 2 between their weights.
# ....................

# strng = "80 71 62 53"
# All the weights are 8.
# closest should return [[8, 0, 80], [8, 1, 71]]
# 71 and 62 have also:
# - the smallest weights (which is 8 for all)
# - the smallest difference of weights (which is 0 for all pairs)
# - but not the smallest indices in strng.

# Notes :
# If n == 0 closest("") should return []

def closest(strng)
    return [] if strng == ""
    weights = strng.split(' ').each_with_index.map do |num, i|
      num=[
        num.split('').inject(0){|sum,x|sum+x.to_i},
        i,
        num.to_i
      ]
    end
    weights.sort! do |a, b|
      a[0] <=> b[0]
    end
    weights.combination(2).min_by do |a,b|
      (a[0] - b[0]).abs
    end
end
