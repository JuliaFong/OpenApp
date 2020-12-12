# Array-Giving Enumerables


# map
# what map does is return a new array


# select
# using select requires a block
# inside the block you need to return something
# that evaluates to true, false, and select that will filter your array

# Using select with the Enumerable method on an array 
# always creates a new array
# if you instead want to change the original array,
# use the select! method





arr = ["a", "b", "c", "d"]
new_arr = arr.map { |ele| ele.upcase + "!" }
print new_arr
puts



# new_arr = []
# arr.each { |ele| new_arr << ele.upcase + "!" }
# print new_arr
# puts

nums = [1, 2, 3, 4, 5, 6]
evens = nums.select { |ele| ele % 2 == 0 }
print evens
puts 


# nums = [1, 2, 3, 4, 5, 6]

# evens = []
# nums.each do |num|
#     if num % 2 == 0
#         evens << num
#     end
# end
# print evens 
# puts


# Array-Giving Enumerables

arr = ["apple", "bootCAMP", "caRrot", "daNce"]

new_arr = arr.map.with_index do |ele, idx|
    first_char = ele[0].upcase
    rest = ele[1..-1].downcase
    new_word = first_char + rest
    new_word * idx
end

print new_arr
puts
