def sort_algo(sample_list)
  sample_list[0], sample_list[2] = sample_list[2], sample_list[0]
  sample_list
end

sample_list = [1, 2, 3]
p sort_algo(sample_list)
