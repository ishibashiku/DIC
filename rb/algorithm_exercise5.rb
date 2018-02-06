(1..40).each do |n|
  if (n % 3).zero?
    p 'Hoge'
  elsif n.to_s.include?('3')
    p 'Hoge'
  else
    p n
  end
end
