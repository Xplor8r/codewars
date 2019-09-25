# Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

# For instance:

# 'hello case'.camelcase => HelloCase
# 'camel case word'.camelcase => CamelCaseWord

class String
  def camelcase
    self.split(' ').map {|w| w[0].upcase()+ w[1..w.length]}.join'';
  end
end
