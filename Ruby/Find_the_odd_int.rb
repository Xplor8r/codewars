# Given an array, find the int that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq)
  res = 0
  seq.each { |num| res = res ^ num }
  return res
end
