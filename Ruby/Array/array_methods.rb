# Nested Loops
# .to_s stands for "to string"

(1..3).each do |num1|
    puts num1

    (1..5).each do |num2|
        puts num1.to_s + " " + num2.to_s
    end     
end 
puts "---------"


# below we iterate through only unique pairs
arr = ["a", "b", "c", "d"]

arr.each_with_index do |ele1, idx1|
    arr.each_with_index do |ele2, idx2|
        if idx2 > idx1
            puts ele1 + ele2
            puts idx1.to_s + " " + idx2.to_s
            puts "------"
        end
    end
end

# if idx2 is greater than idx1, then idx2 is never 
# referring to previously

# 2-Dimensional Arrays
# Nested Arrays
# a 2D array with two pairs of square brackets
# elements of a 2D array are arranged in rows and columns
# new operator for 2D arrays specifies both the
# number or rows and the number of columns

arr1 = [
    ["a", "b", "c"],
    ["d", "e"],
    ["f", "g", "h"],
]

arr1.each do |subArr|
    print subArr
    puts
    subArr.each do |ele|
        puts ele
    end
end

print arr1[1][0]
print arr1.length
puts "----------------"

# Write a method combinations that takes in an array of unique 
# elements, the method should return a 2D array representing all possible
#  combinations of 2 elements of the array.

def combinations(arr)
    pairs = []

    arr.each_with_index do |ele3, idx3,|
        arr.each_with_index do |ele4, idx4|
            if idx4 > idx3
            end
            pairs << [ele3, ele4]
        end
    end

return pairs
end

print combinations(["a", "b", "c"]); # => [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]
puts "-----------"

print combinations([0, 1, 2, 3]); # => [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
puts "------------"


# Write a method opposite_count that takes in an array
#  of unique numbers. The method should return the
#  number of pairs of elements that sum to 0.

def opposite_count(nums)
    count = 0

    nums.each_with_index do |num3, idx5|
        nums.each_with_index do |num4, idx6|
            if num3 + num4 == 0 && idx6 > idx5
                count += 1
            end
        end
    end

    return count
end

puts opposite_count([ 2, 5, 11, -5, -2, 7 ]) # => 2
puts opposite_count([ 21, -23, 24 -12, 23 ]) # => 1

  def sum_arr(array)
    sum = 0
    array.each do |subArr2|
        subArr2.each do |num|
            sum += num
        end
    end
    return sum
end

arr = [
    [2, 6, 2],
        [6, 1]
]

puts sum_arr(arr)
puts "----------"

# Write a method two_d_translate that takes in a 2 
# dimensional array and translates it into a 1 dimensional array. You can assume that the inner arrays always have 2 elements. See the examples.

def two_d_translate(arr)
    new_arr = []

    arr.each do |subArray|
        ele = subArray[0]
        num = subArray[1]

        num.times { new_arr << ele }
    end

    return new_arr

end

arr_1 = [
    ['boot', 3],
    ['camp', 2],
    ['program', 0]
]
  
print two_d_translate(arr_1) # => [ 'boot', 'boot', 'boot', 'camp', 'camp' ]
puts
  
arr_2 = [
    ['red', 1],
    ['blue', 4]
]
  
print two_d_translate(arr_2) # => [ 'red', 'blue', 'blue', 'blue', 'blue' ]
puts "----------"


# Write a method array_translate that takes in an array 
# whose elements alternate between words and numbers.
#  The method should return a string where each word is 
# repeated the number of times that immediately follows in the array.

def array_translate(array)
    new_str = " "

    i = 0
    while i < array.length
        elem = array[i]
        nums = array[i + 1]
        new_str += elem * nums
        # nums.times { new_str += elem }

        i += 2
    end

    return new_str
end


print array_translate(["Cat", 2, "Dog", 3, "Mouse", 1]); # => "CatCatDogDogDogMouse"
puts

print array_translate(["red", 3, "blue", 1]); # => "redredredblue"
puts
puts "--------"

# Write a method pig_latin_word that takes in a word string 
# and translates the word into pig latin.
# Pig latin translation uses the following rules:
# - for words that start with a vowel, add 'yay' to the end
# - for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'

def pig_latin_word(word)
    vowels = "aeiouy"
    # if the word starts with a vowel, add yay
    if vowels.include?(word[0])
        return word + "yay"
    end

    word.each_char.with_index do |char, idx7|
        if vowels.include?(char)
            before_vowel = word[0...idx7] # tr
            after_vowel = word[idx7..-1] # ash 
            return after_vowel + before_vowel + "ay"
        end
    end

end

puts pig_latin_word("apple")   # => "appleyay"
puts pig_latin_word("eat")     # => "eatyay"
puts pig_latin_word("banana")  # => "ananabay"
puts pig_latin_word("trash")   # => "ashtray"


