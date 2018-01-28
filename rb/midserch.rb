def midserch(x, y, z, a, b)
  numlist = [x, y, z, a, b]
  midnum = numlist.length / 2
  i = 0
  while i < numlist.length - 1
    if numlist[i] > numlist[i + 1]
      before_num = numlist[i + 1]
      numlist[i + 1] = numlist[i]
      numlist[i] = before_num
    end
    i += 1
  end
  numlist[midnum]
end

puts midserch(0, 88, 10, 22, 18)
