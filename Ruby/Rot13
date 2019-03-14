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
