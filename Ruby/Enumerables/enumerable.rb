#Enumerable Methods

# In Ruby, an object enumerable is when it describes a set of
# items and a method to loop over each of them
# provides collection classes with several traversal and searching methods
# you can mix into your classes
# Enumerable module provides you with methods for
# searching, traversal, and sorting colletions
# you can mix in the enumerable module


# array
# .each
# .each_with_index

# string
# .each_char
# .each_char.with_index

months = ["Jan", "Feb", "Mar", "Apr"]

months.each_with_index do |ele, idx|
    puts ele
    puts idx
    puts "-----"
end


# months.each { |months| puts months}

# i = 0
# while i < months.length
#     month = months[i]
#     puts month

#     i += 1
# end

sentence = "hello world"

sentence.each_char.with_index do |char, idx|
    puts char
    puts idx
    puts "----"
end

# range enumerable
# (start..end).each, iterate from start to end (inclusive)
# (start...end).each, iterate from start to end(excluding end)

arr = ["a", "b", "c"]

arr.each { |ele| puts ele }

arr1 = [1, 2, 3, 4, 5]
arr1.each { |ele| puts ele}

[6, 7, 8, 9, 10].each { |num| puts num }
puts "------"

(0..11).each { |num| puts num }
puts "-----------"

(4...11).each { |num| puts num}
puts "------"

def fizzBuzz(max)
    arr = []

    (1...max).each do |num|
        if num % 3 == 0 && num % 5 != 0
            arr << num
        end
        if num % 3 != 0 && num % 5 == 0
            arr << num
        end
    end

    return arr
end

print fizzBuzz(20)
print fizzBuzz(9)
puts"-------"

(0..4).each { puts "hi"}

3.times { puts "hiiiii"}

# Enumerable Methods

people = ["Candace", "Jon", "Jose"]

# iterate over elements of an array using each
 people.each { |person| puts person } 
# prints 
# Candace
# Jon
# Jose

# iterate over elements of an array with index using each_with_index
people.each_with_index do |person, i|
    puts person
    puts i
    puts "-----"
end

# prints
# Candace 
# 0
# -----
# Jon
# 1
# -----
# Jose
# 2
# -----

# String Enumerable methods

greeting = "hello"

# iterate over characters of a string using each_char
greeting.each_char { |char| puts char } 
#prints
# h
# e
# l
# l
# o

# iterate over characters of a string with index using each_char.with_index
greeting.each_char.with_index do |char, i|
    puts char
    puts i
    puts "-----"
end
# prints
# h
# 0
# ---
# e
# 1
# ---
# l
# 2
# ---
# l
# 3
# ---
# o
# 4
# ---

# OTHER

# repeat a block using times
3.times do
    puts "hiiiii"
end
# hi
# hi
# hi

# specify a range of numbers using (start..end) or (start...end)

# including end
(2..6).each {|n| puts n}
puts "-----"
# prints
# 2
# 3
# 4
# 5
# 6

# excluding end
(2...6).each {|n| puts n}
# prints
# 2
# 3
# 4
# 5

# Write a method to_initials that takes in a person's name 
# string and returns a string representing their initials.

def to_initials(name)
    parts = name.split(" ")
    initials = ""
    parts.each { |part| initials += part[0] }
    return initials
end

puts to_initials("Kelvin Bridges")      # => "KB"
puts to_initials("Michaela Yamamoto")   # => "MY"
puts to_initials("Mary La Grange")      # => "MLG"
puts "-----"

# Write a method first_in_array that takes in an array 
# and two elements, the method should return the element 
# that appears earlier in the array.


def first_in_array(arr, el1, el2)
    if arr.index(el1) < arr.index(el2)
        return el1
    else
        return el2
    end
end

puts first_in_array(["a", "b", "c", "d"], "d", "b"); # => "b"
puts first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse"); # => "dog"
puts "-------"

# Write a method abbreviate_sentence that takes in a 
# sentence string and returns a new sentence where 
# every word longer than 4 characters has all of it's 
# vowels removed.

def abbreviate_sentence(sent)
    words = sent.split(" ")
    new_words = []
   
    words.each do |word|
        if word.length > 4
          new_word =  abbreviate_word(word)
          new_words << new_word
        else
            new_words << word
        end
    end

    new_sent = new_words.join(" ")
end


def abbreviate_word(word)
    vowels = "aeiouy"
    no_vowels = ""

    word.each_char  do |char|
        if !vowels.include?(char)
            no_vowels += char
        end
    end

    return no_vowels
end

puts abbreviate_sentence("follow the yellow brick road")
puts abbreviate_sentence("what a wonderful life")
puts "------"


# Write a method format_name that takes in a name string 
# and returns the name properly capitalized.

def format_name(str)
    parts = str.split(" ")
    new_parts =  []

    parts.each do |part|
        new_parts << part[0].upcase + part[1..-1].downcase
    end

    new_name = new_parts.join(" ")
    return new_name


end

puts format_name("chase WILSON") # => "Chase Wilson"
puts format_name("brian CrAwFoRd scoTT") # => "Brian Crawford Scott"
puts "-----------------"

# Write a method is_valid_name that takes in a string and 
# returns a boolean indicating whether or not it is a valid name.

def is_valid_name(str)
    parts = str.split(" ")

    if parts.length < 2
        return false
    end

    parts.each do |part|
        if !is_capitalized(part)
            return false
        end
    end

    return true
end

def is_capitalized(word)
    if word[0] == word[0].upcase && word[1..-1] == word[1..-1].downcase
        return true
    else
        return false
    end
end

# puts is_capitalized("Bootcamp")# true
# puts is_capitalized("BootCaMp")# false

puts is_valid_name("Kush Patel")       # => true
puts is_valid_name("Daniel")           # => false
puts is_valid_name("Robert Downey Jr") # => true
puts is_valid_name("ROBERT DOWNEY JR") # => false
puts "--------"

# Write a method is_valid_email that takes in a string 
# and returns a boolean indicating whether or not it is 
# a valid email address.

def is_valid_email(str)
    parts = str.split("@")

    if parts.length != 2
        return false
    end

    left = parts[0]
    right = parts[1]
    alpha = "abcdefghijklmnopqrstuvwxyz"

    left.each_char do |char|
        if !alpha.include?(char)
            return false
        end
    end

    if right.split(".").length == 2
        return true
    else
        return false
    end
     
end

puts is_valid_email("abc@xy.z")         # => true
puts is_valid_email("jdoe@gmail.com")   # => true
puts is_valid_email("jdoe@g@mail.com")  # => false
puts is_valid_email("jdoe42@gmail.com") # => false
puts is_valid_email("jdoegmail.com")    # => false
puts is_valid_email("az@email")         # => false
puts "-------"

# Write a method reverse_words that takes in a sentence
#  string and returns the sentence with the order of 
# the characters in each word reversed. 
# Note that we need to reverse the order of characters in 
# the words, do not reverse the order of words in the sentence.

def reverse_words(sent)
    words = sent.split(" ")
    new_words = []

    words.each { |word| new_words << word.reverse }
    new_sent = new_words.join(" ")
    return new_sent
end

puts reverse_words('keep coding') # => 'peek gnidoc'
puts reverse_words('simplicity is prerequisite for reliability') # => 'yticilpmis si etisiuqererp rof ytilibailer'
puts "---------"

# Write a method rotate_array that takes in an array and a
#  number. The method should return the array after 
# rotating the elements the specified number of times. A 
# single rotation takes the last element of the array and moves it to the front.

def rotate_array(arr,num)
    num.times do
        ele = arr.pop
        arr.unshift(ele)
    end

    return arr
end


print rotate_array([ "Matt", "Danny", "Mashu", "Matthias" ], 1) # => [ "Matthias", "Matt", "Danny", "Mashu" ]
puts

print rotate_array([ "a", "b", "c", "d" ], 2) # => [ "c", "d", "a", "b" ]
puts

