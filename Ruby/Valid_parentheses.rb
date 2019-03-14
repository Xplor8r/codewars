def valid_parentheses(string)
  array = string.gsub(/[^\(\)]/, '').split('')
  is_valid = true
  new_array = array.inject(0) do |count, parenthesis|
    if parenthesis == '(' 
      count += 1
    else
      count -= 1
    end
    if count < 0
      is_valid = false
    end
    count
  end
  new_array == 0 && is_valid
end
