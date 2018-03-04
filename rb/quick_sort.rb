def quick_sort(numbers)
  # 渡された配列の数が1以下のとき、配列を返却する
  return numbers if numbers.size < 2
  # 基準値を設定
  target = numbers.shift # shift:配列の先頭を取得
  # 基準値より大きい要素、小さい要素を格納する配列を用意
  smallers = []
  biggers = []
  numbers.each do |number|
    if number < target
      smallers << number # <<演算子:左辺の配列の末尾に右辺の要素を加える。
    else
      biggers << number
    end
  end
  quick_sort(smallers) + [target] + quick_sort(biggers) # ソートした値を返却
end
