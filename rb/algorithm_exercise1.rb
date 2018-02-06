def greatest_common_divisor(num1, num2)
  # 値のセット
  bignum, minnum = num1 > num2 ? [num1, num2] : [num2, num1]
  # 商と余りを取得する
  loop do
    quo_rem = bignum.divmod(minnum)
    # 余りが0のとき繰り返し処理を抜ける
    break if quo_rem[1].zero?
    bignum = minnum
    minnum = quo_rem[1]
  end
  # minnumを返却する
  minnum
end

p greatest_common_divisor(10, 58)
