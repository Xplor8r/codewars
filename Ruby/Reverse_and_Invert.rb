# Reverse and invert all integer values in a given list.

# reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
# Ignore all other types than integer.

def reverse_invert(array)
  array2 = []
  array.each do |val|
    if val.is_a? Integer
      if val < 0 
        array2.push(val.to_s.reverse.to_i)
      else 
        array2.push(0 - val.to_s.reverse.to_i)
      end
    end
  end
  array2
end
