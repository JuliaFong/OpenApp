# Conditionals

# A conditional should be an expression
#  that evaluates to a true or a false
# the express should evaluate to a boolean

num = 0

if num > 0
    puts "positive"
elsif num < 0
    puts "negative"
else 
    puts "it is zero!"
end

if num % 2 == 0
    puts "even"
end

#  if - if checks both things 
#  example answer is both: it is zero! and even

# write a method, is_div_by_5(number), that takes in a number
# and returns true if the given number
# is divisible by 5, false otherwise

# method also expects a number parameter with this problem
# must evaluate using a boolean
def is_div_by_5(number)
    if number % 5 == 0
        return true
    else
        return false
    end
end
puts is_div_by_5(15) # => true
puts is_div_by_5(3) # => false

def is_div_by_5(number)
    return number % 5 == 0
end
puts is_div_by_5(20) # => true

#  write a method, either_only(number), that takes in a number
# and returns true if the number is divisible by
# either 3 or 5, but not both. The function should 
# return false otherwise 
def either_only(number)
    if (number % 3 == 0 || number % 5 == 0) && !(number % 3 == 0 && number % 5 == 0)
        return true
    else
        return false
    end
end

#  another way to solve the same problem
# def either_only(number)
#     if (number % 3 == 0 && number % 5 != 0) || (number % 3 != 0 && number % 5 != 0)
#         return true
#     else
#         return false
#     end
# end

puts either_only(9) # => true
puts either_only(20) # => true
puts either_only(7) # => false

def larger_number(num1, num2)
    if num1 > num2
        return num1
    else
        return num2
    end

end

puts larger_number(42, 28)
puts larger_number(99, 100)

# write a method longer_string(str1, str2)
# that takes in two strings and returns the
# longer of the two strings
#  In the case of a tie, the method should return the first string

def longer_string(str1, str2)
    if str1.length >= str2.length
        return str1
    else
        return str2
    end
end

puts longer_string("app", "academy")
puts longer_string("summer", "fall")
puts longer_string("hello", "world")

# Number Check
# write a method number_check(num)
# that takes in a number and returns a string
# The method shoud return the string 'positive
# if the num is positive, and 'negative' if the
# num is negative and 'zero' is the num is zero

def number_check(num)
    if num > 0
        return "positive"
    elsif num < 0
        return "negative"
    else 
        return "zero"
    end
end

puts number_check(5)
puts number_check(-2)
puts number_check(0)

# Word Check
#  write a method word_check(word) that 
# takes a word and returns a string
#  the method should return the string
#  "long" if the word is longer than 6 characters
# "short" if it's less than 6 characters and
# "medium" if it is exactly 6 characters long

def word_check(word)
    if word.length > 6
        return "long"
    elsif word.length < 6
        return "short"
    else
        return "medium"
    end
end 

puts word_check("Contraption")
puts word_check("fruit")
puts word_check("puzzle")
