def greeting
  puts 'おはようございます'
  puts 'こんにちは'
  puts 'こんばんは'
end

def introduce(name, age)
  puts "私の名前は#{name}です。年齢は#{age}です"
end

def add50(n, y)
  addnum = n + y
  if addnum < 50
    puts '50より小さい'
  else
    puts '50より大きい'
  end
end

introduce('ishibashi', 25)
add50(3, 5)
