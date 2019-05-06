# You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

# Example:
# longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

# n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

# Note:
# consecutive strings : follow one after another without an interruption

def longest_consec(strarr, k)
  if strarr.length < k || k < 0 
    return ""
  end
  combos = []
  left = 0
  right = k
  while right < strarr.length + 1
    combo = strarr.slice(left, right - left).join '' 
    combos.push(combo)
    left += 1
    right = left + k
  end
  combos.max_by(&:length)
end
