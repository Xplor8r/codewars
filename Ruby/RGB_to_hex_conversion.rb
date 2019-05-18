# The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

# The following are examples of expected output values:

# rgb(255, 255, 255) // returns FFFFFF
# rgb(255, 255, 300) // returns FFFFFF
# rgb(0,0,0) // returns 000000
# rgb(148, 0, 211) // returns 9400D3

def toHex(a)
  if a < 0 then a = 0 end
  if a > 255 then a = 255 end
  hex = a.to_s(16).upcase
  hex.length == 1 ? "0" + hex : hex
end

def rgb(r, g, b) 
  toHex(r) + toHex(g) + toHex(b)
end
