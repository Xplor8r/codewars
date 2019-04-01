# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

# Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

def rot13(string)
  array = string.split ''
  new_array = []
  array.each do |el|
    if el =~ /[[:alpha:]]/
      new_el = el.ord + 13
      if (new_el > 91 && new_el < 105) || (new_el > 122)
        new_el -= 26
      end
      new_array.push(new_el.chr)
    else
      new_array.push(el)
    end
  end
  new_array.join
end
