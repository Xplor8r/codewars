# Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

# For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

# As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

# If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

def  first_non_repeating_letter(s) 
  counter = Hash.new(0)
  arr = s.downcase.split''
  s if arr.length === 1
  '' if s == '' || arr.sort().all?(arr.each {|val|val==arr[0]})
  arr.map {|val| counter[val] = (counter[val] || 0) + 1}
  counter.each {|key, val| counter.delete key if counter[key] > 1}
  counter != {} ? s.split('').find {|a| counter.has_key? a.downcase} : ''
end
