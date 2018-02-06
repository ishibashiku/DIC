def count_string(str)
  #畳み込み演算
  str.split('').inject(0) { |count, n| count += 1 }
end

p count_string('shadfhaoh')
