def repeat_string(str)
  sliced_str = str.size > 4 ? str.slice(0...4) : str
  msg = ''
  3.times { msg += sliced_str }
  p msg
end

repeat_string('Python')
repeat_string('Go')
repeat_string('C++')
