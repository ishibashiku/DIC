def swapcase(str)
  #文字列を配列に展開する
  ary = str.split('')
  # mapメソッドで新しい配列を作成して代入する
  swapped_ary = ary.map do |n|
    if n.upcase == n
      n.downcase
    elsif n.downcase == n
      n.upcase
    else
      n
    end
  end
  #配列をjoinメソッドで結合する
  swapped_ary.join
end

p swapcase('Hfu4hdIfu')
