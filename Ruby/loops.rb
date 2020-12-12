# Loops in ruby
# allows us to repeat code in an efficient and elegant way

# def repeatHello()
#     puts "hello"
#     puts "hello"
#     puts "hello"
# end
# repeatHello()

def repeatHello()
    counter = 1
    while counter <= 5
        puts "hello"
        counter += 1
    end
end
repeatHello()

def countDracula()
    counter = 10
    while counter <= 16
        puts counter
        counter += 1
    end
end
countDracula()

#  while loops in ruby
# while the condition of a loop is true,
#  keep running the loop
# once the condition is false, stop the loop
def printNums
    i = 10
    while i >= 0
        puts i
        i -= 1
    end
end
printNums

def nums(min, max, step)
    i = min
    while i <= max
        puts i
        i += step
    end
end

nums(0, 10, 1)
puts '------'
nums(11, 20, 2)

# Iterating through strings with Loop

str = "hello"
i = 2
puts str[i]
puts "----"

str = "hiiiiyaaa"
i = 0
while i < 5
    puts str[0]
    i += 1

end
puts "-------"

str = "hello world"
i = 0
while i < str.length
    puts str[i]

    i += 1
end

def printChars(str)
    i = 0
    while i < str.length
        puts str[i]

        i += 2
    end
end

printChars("Salutations")

# break - immediately exit the loop
#  next - skips to the next iteration

# i = 1
# while i <= 10
#     puts i
#     if i == 5
#        break
#     end
#     puts i 
#     i += 1
# end

# puts "loop end"

i = 7
while i <= 17
    puts i 
    if i == 11
        i += 1
        next
    end
    puts i
    i += 1
end
puts "Loopy loop ends"    
puts '----'


# next skips over lines after the keyword which
# may give us an infinite loop


def count_e(word)
    count = 0 #use count to track number of e's

    i = 0 #use i to iterate thru the word
    while i < word.length
        char = word[i]
        
        if char == "e"
            count += 1
        end

        i += 1
    end    

    return count
end

puts count_e("movie")
puts count_e("excellent")
puts "---"

# Write a method count_a(word) that takes in a string word 
# and returns the number of a's in the word.
#  The method should count both lowercase (a) and uppercase (A)

def count_a(word)
    count = 0
    i = 0
    while i < word.length
        char = word[i]
        if char == "a" || char == "A"
            count += 1
        end
        i += 1
    end
    return count
end

puts count_a("application")
puts count_a("bike")
puts count_a("Arthur")
puts count_a("Aardvark")
puts "-------"

def count_vowels(word)
    count = 0
    i = 0
    while i < word.length
        char = word[i]
        if char == "a" || char == "e" || char == "i" || char == "o" || char == "u" 
            count += 1
        end  
        i += 1
    end
    return count  
end

puts count_vowels("bootcamp")
puts count_vowels("apple")
puts count_vowels("pizza")

def sum_nums(max)
    sum = 0
    i = 1
    while i <= max
        sum += i
        i += 1
    end
    return sum 
end

puts sum_nums(4) # 10
puts sum_nums(5) # 15

# Write a method factorial(num) that takes in a number num 
# and returns the product of all numbers from 1 up to 
# and including num.

def factorial(num)
    product = 1
    i = 1
    while i <= num
        product *= i #shorthand for product = product * i
        i += 1
    end
    return product
end    


puts factorial(3) # 6 because 1 * 2 * 3 = 6
puts factorial(5) #120 because 1 * 2 * 3 * 4 * 5
puts "-----"

# Write a method reverse(word) that takes in a string word 
# and returns the word with its letters in reverse order.

def reverse(word)
    reversed_str = ""

    i = 0
    while i < word.length
        char = word[i]
        reversed_str += char

        i += 1
    end
    return reversed_str
end

puts reverse("cats")
puts reverse("programming")
puts reverse("bootcamp")

# Write a method is_palindrome(word) 
# that takes in a string word and returns the true
#  if the word is a palindrome, false otherwise. 
# A palindrome is a word that is spelled the same forwards 
# and backwards.

def is_palindrome(word)
    reversed = ""
    i = 0
    while i < word.length
        reversed = word[i] + reversed
        i += 1
    end
    if word == reversed
        return true
    else
        return false
    end    
end

puts is_palindrome("racecar")
puts is_palindrome("kayak")
puts is_palindrome("bootcamp")