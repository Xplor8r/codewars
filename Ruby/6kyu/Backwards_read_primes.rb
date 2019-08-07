# Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

# Examples:
# 13 17 31 37 71 73 are Backwards Read Primes
# 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

# Task
# Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

# Example
# backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

# Don't use Ruby Prime class, it's disabled.
# backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
# backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

def backwardsPrime(start, stop)
  primes = [*start..stop].select {|n| isPrime(n) }
  backwards = primes.select do |p|
    reverse = p.to_s.split('').reverse.join.to_i 
    reverse != p && isPrime(reverse)
  end
  backwards
end

def isPrime(num)
  return false if num <= 1 
  return true if num <= 3 
  return false if (num % 2 == 0 || num % 3 == 0) 
  i = 5
  while i*i <= num
    return false if (num % i == 0 || num % (i+2) == 0) 
    i += 6
  end
  return true
end
