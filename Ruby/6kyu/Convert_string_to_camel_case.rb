# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

# Examples
# to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"

# to_camel_case("The_Stealth_Warrior") # returns "TheStealthWarrior"

def to_camel_case(str)
  array = str.split(/[^a-zA-Z0-9]/)
  newArray = [array[0]]
  array.each_with_index do |word, index|
    if index != 0
      newArray.push(word.capitalize)
    end
  end
  newArray.join ''
end
