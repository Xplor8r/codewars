def fusc(n)
  if n <= 1
    return n
  end
  while n > 2 && n % 2 == 0
    n /= 2
  end
  return fusc((n - 1) / 2) + fusc((n + 1) / 2)
end
