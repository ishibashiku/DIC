loop do
  rps = %w[グー チョキ パー]
  puts '数字を入力してください'
  puts '1:グー'
  puts '2:チョキ'
  puts '3:パー'

  your_num = gets.to_i - 1
  my_num = rand(3)

  puts "あなたの手は#{rps[your_num]}です"
  puts "私の手は#{rps[my_num]}です"

  if (your_num - my_num + 3) % 3 == 2
    puts 'あなたの勝ちです'
    break
  elsif (your_num - my_num + 3) % 3 == 1
    puts 'あなたの負けです'
    break
  else
    puts 'あいこです'
  end
end
