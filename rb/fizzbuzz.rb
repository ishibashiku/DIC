n = 0

if (n % 3).zero? && (n % 5).zero? && n != 0
  p 'fizzbuzz'
elsif  (n % 3).zero? && n != 0
  p 'fizz'
elsif  (n % 5).zero? && n != 0
  p 'buzz'
else
  p n
end
