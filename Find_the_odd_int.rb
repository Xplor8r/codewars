def find_it(seq)
  res = 0
  seq.each { |num| res = res ^ num }
  return res
end
