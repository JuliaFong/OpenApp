# Advanced Problems

# Write a method map_by_name 
# that takes in an array of hashes and returns a new array
# containing the names of each hash.

# Helpers
# a helper is a method to share 
# reusable code

# "A helper method is used to perform a particular
# repetitive task common across multiple classes.
# This keeps us from repeating the same piece of 
# code in different classes again and again"

# Manav Aug, 1, 2016, team treehouse


# A helper is a method that is (mostly) used in your
#  Rails views to share reusable code. Rails comes with 
# a set of built-in helper methods.

# The main benefit?
# You don’t have to repeat this logic in other views when 
# you need it & when you need to change the code… 
# it only has to change in one place.

# ^^ From rubyguides.com




def map_by_name(arr)
    return arr.map { |hash| hash["name"] }
end 

pets = [
    {"type"=>"dog", "name"=>"Rolo"},
    {"type"=>"cat", "name"=>"Sunny"},
    {"type"=>"rat", "name"=>"Saki"},
    {"type"=>"dog", "name"=>"Finn"},
    {"type"=>"cat", "name"=>"Buffy"}
]
print map_by_name(pets) #=> ["Rolo", "Sunny", "Saki", "Finn", "Buffy"]
puts
  
countries = [
   {"name"=>"Japan", "continent"=>"Asia"},
   {"name"=>"Hungary", "continent"=>"Europe"},
   {"name"=>"Kenya", "continent"=>"Africa"},
]
print map_by_name(countries) #=> ["Japan", "Hungary", "Kenya"]
puts

# Write a method map_by_key that takes in an array of 
# hashes and a key string. The method should returns a
#  new array containing the values from each hash for the
#  given key.

def map_by_key(arr, key)
    return arr.map { |hash| hash[key] }
end

locations = [
    {"city"=>"New York City", "state"=>"New York", "coast"=>"East"},
    {"city"=>"San Francisco", "state"=>"California", "coast"=>"West"},
    {"city"=>"Portland", "state"=>"Oregon", "coast"=>"West"},
]
  
print map_by_key(locations, "state") #=> ["New York", "California", "Oregon"]
puts
print map_by_key(locations, "city") #=> ["New York City", "San Francisco", "Portland"]
puts

# Write a method yell_sentence that takes in a sentence
#  string and returns a new sentence where every word is
#  yelled. See the examples. Use map to solve this.

def yell_sentence(sent)
    return sent.split.map { |word| word.upcase + "!"}.join(" ")
end

# def yell_sentence(sent)
#     words = sent.split
#     new_words = words.map { |word| word.upcase + "!" }
#     print new_words.join(" ")
#     puts
# end

puts yell_sentence("I have a bad feeling about this") #=> "I! HAVE! A! BAD! FEELING! ABOUT! THIS!"


# Write a method whisper_words that takes in an array of
#  words and returns a new array containing a whispered 
# version of each word. See the examples. Solve this using map :).

def whisper_words(words)
    return words.map { |word| word.downcase + "..." }
end

print whisper_words(["KEEP", "The", "NOISE", "down"]) # => ["keep...", "the...", "noise...", "down..."]
puts

# Write a method o_words that takes in a sentence string 
# and returns an array of the words that contain an "o". 
# Use select in your solution!

def o_words(sentence)
    select_words = sentence.split.select { |word| word.include?("o") }
    return select_words
end

print o_words("How did you do that?") #=> ["How", "you", "do"]
puts

# Write a method last_index that takes in a string
#  and a character. The method should return the last 
# index where the character can be found in the string.

def last_index(str, char)
    i = str.length - 1
    while i >= 0
        if str[i] == char
            return i
        end 
      i -= 1
    end
end

puts last_index("abca", "a")       #=> 3
puts last_index("mississipi", "i") #=> 9
puts last_index("octagon", "o")    #=> 5
puts last_index("programming", "m")#=> 7

# Write a method most_vowels that takes in a sentence 
# string and returns the word of the sentence that
#  contains the most vowels.

def vowel_count(word)
    count = 0 
    vowels = "aeiou"
    word.each_char do |char|
        if vowels.include?(char)
            count += 1
        end
    end

    return count
end


def most_vowels(sentence)
    counts = {}
    words = sentence.split 
    words.each { |word| counts[word] = vowel_count(word) }
    sorted = counts.sort_by { |k, v| v }
    return sorted[-1][0]
end

print most_vowels("what a wonderful life") #=> "wonderful"
puts

# Write a method prime? that takes in a number and returns
#  a boolean, indicating whether the number is prime. 
# A prime number is only divisible by 1 and itself.

def prime?(num)
    if num < 2
        return false
    end

    (2...num).each do |divisor| 
        if num % divisor == 0
            return false
        end
    end

    return true
end

puts prime?(2)  #=> true
puts prime?(5)  #=> true
puts prime?(11) #=> true
puts prime?(4)  #=> false
puts prime?(9)  #=> false
puts prime?(-5) #=> false

# Write a method pick_primes that takes in an array of
#  numbers and returns a new array containing only the 
# prime numbers.

def pick_primes(numbers)
    numbers.select { |num| prime?(num) }
end

def prime?(num)
    if num < 2
        return false
    end

    (2...num).each do |factor|
        if num % factor == 0
            return false
        end
    end
    
    return true
end

print pick_primes([2, 3, 4, 5, 6]) #=> [2, 3, 5]
puts
print pick_primes([101, 20, 103, 2017]) #=> [101, 103, 2017]
puts
puts "-------"

# Write a method prime_factors that takes in a number
#  and returns an array containing all of the prime factors
#  of the given number.

def prime_factors(num)
    facts = []

    (1..num).each do |i|
        if num % i == 0 && prime?(i)
            facts << i
        end
    end
    
    return facts
end

def prime?(num)
    if num < 2
        return false
    end

    (2...num).each do |i|
        if num % i == 0
            return false
        end 
    end

    return true
end

print prime_factors(24) #=> [2, 3]
puts
print prime_factors(60) #=> [2, 3, 5]
puts 
puts "------"

# Write a method greatest_factor_array that takes in an
#  array of numbers and returns a new array where every
#  even number is replaced with it's greatest factor.
#  A greatest factor is the largest number that divides 
# another with no remainder. For example the greatest
#  factor of 16 is 8. 
# (For the purpose of this problem we won't say the 
# greatest factor of 16 is 16, because that would be too easy, ha)

def greatest_factor_array(arr)
    new_arr = arr.map do |num|
        if num % 2 == 0
            greatest_factor(num)
        else
            num
        end
    end

    return new_arr
end

def greatest_factor(num)
    (1...num).reverse_each do |i|
        if num % i == 0
            return i
            
        end
    end

end

puts "--------"
print greatest_factor_array([16, 7, 9, 14]) # => [8, 7, 9, 7]
puts
print greatest_factor_array([30, 3, 24, 21, 10]) # => [15, 3, 12, 21, 5]
puts


# Write a method perfect_square? that takes in a number
#  and returns a boolean indicating whether it is a
#  perfect square. A perfect square is a number that 
# results from multiplying a number by itself. 
# For example, 9 is a perfect square because
#  3  3 = 9, 25 is a perfect square because 5  5 = 25.

def perfect_square?(num)
    (1..num).each do |factor|
        if factor * factor == num
            return true
        end
    end
    
    return false
end


puts "-----"
puts perfect_square?(5)   #=> false
puts perfect_square?(12)  #=> false
puts perfect_square?(30)  #=> false
puts perfect_square?(9)   #=> true
puts perfect_square?(25)  #=> true

# Write a method triple_sequence that takes in two numbers,
#  start and length. The method should return an array 
# representing a sequence that begins with start and 
# is length elements long. In the sequence, 
# every element should be 3 times the previous element.
#  Assume that the length is at least 1.

def triple_sequence(start, length)
    seq = [start]
    while seq.length < length
      seq <<  seq[-1] * 3
    end

    return seq
end

print triple_sequence(2, 4) # => [2, 6, 18, 54]
puts
print triple_sequence(4, 5) # => [4, 12, 36, 108, 324]
puts
puts "---------"

# A number's summation is the sum of all positive numbers 
# less than or equal to the number. For example: the 
# summation of 3 is 6 because 1 + 2 + 3 = 6, 
# the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. 
# Write a method summation_sequence that takes in a 
# two numbers: start and length. The method should return 
# an array containing length total elements. The first 
# number of the sequence should be the start number.
#  At any point, to generate the next element of the 
# sequence we take the summation of the previous element.
#  You can assume that length is not zero.

def summation(n)
    sum = 0
    (1..n).each { |num| sum += num }
    return sum
end

def summation_sequence(start, length)
    seq = [start]

    while seq.length < length
        last_ele = seq[-1]
        next_ele = summation(last_ele)
        seq << next_ele
    end

    return seq
end

print summation_sequence(3, 4) # => [3, 6, 21, 231]
puts
print summation_sequence(5, 3) # => [5, 15, 120]
puts 

# The fibonacci sequence is a sequence of numbers whose
#  first and second elements are 1. To generate further
#  elements of the sequence we take the sum of the 
# previous two elements. For example the first 6 
# fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a method
#  fibonacci that takes in a number length and returns
#  the fibonacci sequence up to the given length.

def fibonacci(length)
    if length == 0
        return []
    elsif length == 1
        return [1]
    end

    seq = [1, 1]
    while seq.length < length
        last = seq[-1]
        second_to_last = seq[-2]
        print seq
        puts
        next_ele = last + second_to_last
        puts next_ele
        puts "====="
        seq << next_ele
    end

    return seq
end

print fibonacci(0) # => []
puts
print fibonacci(1) # => [1]
puts
print fibonacci(6) # => [1, 1, 2, 3, 5, 8]
puts
print fibonacci(8) # => [1, 1, 2, 3, 5, 8, 13, 21]
puts
puts "---------------------"

# Write a method caesar_cipher that takes in a string 
# and a number. The method should return a new string 
# where every character of the original is shifted num 
# characters in the alphabet.

def caesar_cipher(str, num)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    new_str = ""

    str.each_char do |char|
        old_idx = alphabet.index(char)
        new_idx = old_idx + num
        new_char = alphabet[new_idx % 26]
        new_str += new_char
    end

    return new_str
end

puts caesar_cipher("apple", 1)    #=> "bqqmf"
puts caesar_cipher("bootcamp", 2) #=> "dqqvecor"
puts caesar_cipher("zebra", 4)    #=> "difve"
puts "-----------"

# Write a method vowel_cipher that takes in 
# a string and returns a new string where every 
# vowel becomes the next vowel in the alphabet.

def vowel_cipher(string)
    change = {
        "a"=>"e",
        "e"=>"i",
        "i"=>"o",
        "o"=>"u",
        "u"=>"a"
    }
    vowels = "aeiou"

    new_arr = string.split("").map do |char|
        if vowels.include?(char)
            change[char]
        else
            char
        end
    end

    return new_arr.join("")
end

# def vowel_cipher(string)
#     vowels = "aeiou"
#     new_chars = string.split("").map do |char|
#         if vowels.include?(char)
#             old_index = vowels.index(char)
#             new_index = (old_index + 1) % vowels.length
#             vowels[new_index]
#         else
#             char
#         end
#     end
#     return new_chars.join("")
# end


puts vowel_cipher("bootcamp") #=> buutcemp
puts vowel_cipher("paper cup") #=> pepir cap

# Write a method that takes in a string and returns 
# the number of times that the same letter repeats 
# twice in a row.

def double_letter_count(string)
    count = 0

    string.each_char.with_index do |char, idx|
        if char == string[idx + 1]
            count += 1
        end 
    end

    return count
end 


puts double_letter_count("the jeep rolled down the hill") #=> 3
puts double_letter_count("bootcamp") #=> 1


# Write a method adjacent_sum that takes in an array 
# of numbers and returns a new array containing the 
# sums of adjacent numbers in the original array.
#  See the examples.

def adjacent_sum(arr)
    sums = []

    # arr.each_with_index do |ele, i|
    #     if i != arr.length - 1
    #         new_ele = ele + arr[i + 1]
    #         sums << new ele
    #     end
    # end

    i = 0 
    while i < arr.length - 1
        new_ele = arr[i] + arr[i + 1]
        sums << new_ele

        i += 1
  
    end

    return sums
end

print adjacent_sum([3, 7, 2, 11]) #=> [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
puts
print adjacent_sum([2, 5, 1, 9, 2, 4]) #=> [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
puts


# Write a method pyramid_sum that takes in an array of 
# numbers representing the base of a pyramid. 
# The function should return a 2D array representing a 
# complete pyramid with the given base. To construct a 
# level of the pyramid, we take the sum of adjacent
#  elements of the level below.

# For example, the base [1, 4, 6] gives us the following pyramid
#     15
#   5   10
# 1   4    6


def pyramid_sum(base)
    pyramid = [base]
    while pyramid.length < base.length
        prev_level = pyramid[0]
        next_level = adjacent_sums(prev_level)
        pyramid.unshift(next_level)
    end
    
    return pyramid
end


def adjacent_sums(arr)
    new_arr = []
    arr.each.with_index do |ele, i|
        if i < arr.length - 1
       new_ele = arr[i] + arr[i + 1]
       new_arr << new_ele
       end
    end

    return new_arr
end

print adjacent_sums([1, 4, 6]) # =>[5, 10]
puts
print adjacent_sums([5, 10]) # => [15]
puts

print pyramid_sum([1, 4, 6]) #=> [[15], [5, 10], [1, 4, 6]]
puts

print pyramid_sum([3, 7, 2, 11]) #=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
puts
puts "---------"

# Write a method all_else_equal that takes in an array 
# of numbers. The method should return the element of the 
# array that is equal to half of the sum of all elements
#  of the array. If there is no such element, the method
#  should return nil.

def all_else_equal(arr)
    sum = sum_array(arr)

    arr.each do |ele|
        if ele == sum / 2.0
        return ele
        end
    end

    return nil
end

def sum_array(arr)
    sum = 0
    arr.each { |num| sum += num }
    return sum
end


p all_else_equal([2, 4, 3, 10, 1]) #=> 10, because the sum of all elements is 20
p all_else_equal([6, 3, 5, -9, 1]) #=> 3, because the sum of all elements is 6
p all_else_equal([1, 2, 3, 4])     #=> nil, because the sum of all elements is 10 and there is no 5 in the array
puts
puts "-------"

# Write a method anagrams? that takes in two words and 
# returns a boolean indicating whether or not the words
#  are anagrams. Anagrams are words that contain the same
#  characters but not necessarily in the same order. 
# Solve this without using .sort

def anagrams?(word1, word2)
    return char_count(word1) == char_count(word2)
end

def char_count(word)
    count = Hash.new(0)
    word.each_char { |char| count[char] += 1}
    return count
end

puts char_count("cat") # => {"c"=>1, "a"=>1, "t"=>1}

puts anagrams?("cat", "act")          #=> true
puts anagrams?("restful", "fluster")  #=> true
puts anagrams?("cat", "dog")          #=> false
puts anagrams?("boot", "bootcamp")    #=> false
puts "-------"
# Write a method consonant_cancel that takes in a sentence
#  and returns a new sentence where every word begins with
#  it's first vowel.

def consonant_cancel(sentence)
    words = sentence.split
    new_words = words.map { |word| remove_starting_consonants(word) }
    return new_words.join(" ")
end

def remove_starting_consonants(word)
    vowels ="aeiou"

    word.each_char.with_index do |char, i|
        if vowels.include?(char)
            return word[i..-1]

        end
    end
end

puts "driving"[2..-1]
puts remove_starting_consonants("writing") # =>"iting"
puts"-----"

puts consonant_cancel("down the rabbit hole") #=> "own e abbit ole"
puts consonant_cancel("writing code is challenging") #=> "iting ode is allenging"
puts "---------"

# Write a method same_char_collapse that takes in a string 
# and returns a collapsed version of the string. To 
# collapse the string, we repeatedly delete 2 adjacent 
# characters that are the same until there are no such 
# adjacent characters. If there are multiple pairs that 
# can be collapsed, delete the leftmost pair. For example,
#  we take the following steps to collapse "zzzxaaxy":
#  zzzxaaxy -> zxaaxy -> zxxy -> zy

def same_char_collapse(str)
    collapsible = true

    while collapsible
        collapsible = false

        chars = str.split("")
        chars.each.with_index do |char, i|
            if chars[i] == chars[i + 1]
                chars[i] = ""
                chars[i + 1] = ""
                collapsible = true
                break
            end
        end
        str = chars.join("")
    end
   
    return str
end

puts same_char_collapse("zzzxaaxy")   #=> "zy"
# because zzzxaaxy -> zxaaxy -> zxxy -> zy


puts same_char_collapse("uqrssrqvtt") #=> "uv"
# because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv