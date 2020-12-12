# Arrays

my_arr = ["alvin", true, false, 42]

print my_arr
puts my_arr[5]

letters = ["a", "z", "b"] 
puts letters.length
print letters
puts letters[0]

names = ["jeff", "tommy", "gigi"]
names[1] = "Mike"
print names
names << "Brian"
print names

# << is the shovel operation
# << it will add the name to the end of the array
# use "print names" before and after you "Shovel"
#  "Brian" into the end of the array

# using print shows the brackets[]
# similarity between array and strings

foods = ["pizza", "sushi", "burgers", "fries", "ramen"]

i = 0
while i < foods.length
    puts foods[i]
    i += 1
end


def print_array(arr)
    i = 0
    while i < arr.length
        puts arr[i]
        i += 1
    end
end
foodz = ['dumplings', 'wings', 'eggs']
peeps = ["wayne", "lani", "bert"]
print_array(peeps)


# Write a method doubler(numbers) that takes an array of numbers and returns a new array
# where every element of the original array is multiplied by 2.

def doubler(numbers)
    doubled_nums = []

    i = 0
    while i < numbers.length / 2.0
        doubled_nums << numbers[i] * 2

        i += 1 
    end
        return doubled_nums
end

print doubler([1, 2, 3, 4,])
puts 
print doubler([7, 1, 8])

# Write a method yell(words) that takes in an array of words and returns a
# new array where every word from the original array has an exclamation point after it.

def yell(words)
    yelled = []

    i = 0
    while i < words.length
        word = words[i]
        yelled_word = word + "!"
        yelled << yelled_word

        i += 1
    end
    return yelled
end    

print yell (["hello", "world"])
puts
print yell(["code", "is", "cool"])

# Write a method element_times_index(nums) that takes in
#  an array of numbers and returns a new array containing every number
#  of the original array multiplied with its index.

def element_times_index(nums)
    new_nums = []

    i = 0
    while i < nums.length
        new_nums << nums[i] * i

        i += 1
    end
    return new_nums
end

print element_times_index([4, 7, 6, 5])
puts " "
print element_times_index([1, 1, 1, 1, 1, 1])

# Write a method even_nums(max) that takes in a number max 
# and returns an array containing all even numbers from 0 to max

def even_nums(max)
    array = []
    i = 0
    while i <= max
        # if i is an even number, then put it in the array
        if i % 2 == 0
            array << i
        end

        i += 1
    end
    return array
end

print even_nums(10)
puts
print even_nums(5)

#Write a method range(min, max) that takes in two numbers 
# min and max. The method should return an array 
# containing all numbers from min to max inclusive.

def range(min, max)
    nums = []
    i = min 
    while i <= max
        nums << i
        i += 1
    end
    return nums
end

print range(2,7)
puts
print range(13, 20)


# Write a method odd_range(min, max) that takes in two 
# numbers min and max. The method should return an array 
# containing all odd numbers from min to max (inclusive).

def odd_range(min,max)
    odds = []

    i = min
    while i <= max
        if i % 2 == 1
            odds << i
        end

        i += 1
    end

    return odds
end

print odd_range(11, 18)
puts
print odd_range(3, 7)


# Write a method reverse_range(min, max) that takes in two
#  numbers min and max. The function should return an array
# containing all numbers from min to max in reverse order.
#  The min and max should be excluded from the array

def reverse_range(min_num, max_num)
    nums = []
    
    i = max_num - 1
    while i > min_num
        nums << i
        
        i -= 1
    end
    return nums
end

print reverse_range(10, 17) 
puts
print reverse_range(1, 7)   

# Write a method first_half(array) that takes in an array 
# and returns a new array containing the first half of the 
# elements in the array. If there is an odd number of elements, 
# return the first half including the middle element.

def first_half(array)

    new_array = []

    i = 0
    while i < array.length / 2.0
        new_array << array[i] #shovel element into new_array

        i += 1
    end

    return new_array
end

print first_half(["Wayne", "Tommy", "Marie", "Abby"])
puts 
print first_half(["a", "b", "c", "d", "e"])

# Write a method factors_of(num) that takes in a num and 
# returns an array of all positive numbers less than or 
# equal to num that can divide num.

def factors_of(num)
    factors = []

    i = 1
    while i <= num 
        # if num is div by 1
        if num % i == 0
            factors << 1

        end

        i += 1
    end

    return factors
end

print factors_of(3)
puts
print factors_of(4)
puts
print factors_of(8)
puts 
print factors_of(9)

# Write a method select_odds(numbers) that takes in an 
# array of numbers and returns a new array containing 
# the odd numbers of the original array.

def select_odds(numbers)
    odds = []

    i = 0
    while i < numbers.length
        num = numbers[i]

        if num % 2 == 1
            odds << num
        end

        i += 1
    end

    return odds
end 

print select_odds([13, 3, 4, 6, 7, 9])
puts
print select_odds([2, 4, 6, 8])

# Write a method select_long_words(words) that takes in an 
# array of words and returns a new array containing 
# all of the words of the original array that are longer than 4 characters.

def select_long_words(words)
    long_words = []

    i = 0 
    while i < words.length
        word = words[i]

        if word.length > 4
            long_words << word
        end

        i += 1
    end

    return long_words
end

print select_long_words(["what", "eating", "Dinner", "Boba"])
puts
print select_long_words(["keep", "coding"])


# Write a method sum_elements(arr1, arr2) that takes in two 
# arrays. The method should return a new array containing 
# the results of adding together corresponding elements
#  of the original arrays. You can assume the arrays have the same length.

def sum_elements(arr1, arr2)
    new_arr = []

    i = 0
    while i < arr1.length
        el1 = arr1[i]
        el2 = arr2[i]
        new_el = el1 + el2
        new_arr << new_el

        i += 1
    end

    return new_arr
end

print sum_elements([7, 4, 4], [3, 2, 11])
puts
print sum_elements(["cat", "pizza", "boot"], ["dog", "pie", "camp"])

# Write a method fizz_buzz(max) that takes in a number max 
# and returns an array containing all numbers greater than 0 
# and less than max that are divisible by either 4 or 6, but not both.

def fizz_buzz(max)
    nums = []

    i = 0
    while i < max
        if(i % 4 == 0 || i % 6 == 0) && !(i % 4 == 0 && i % 6 == 0)
            nums << i
        end

        i += 1
    end

    return nums
end

print fizz_buzz(20)
puts
print fizz_buzz(15)

#  << add an element to the end of an array, evaluates to the array

# array.push adds an element(s) to the end of an array, 
# evaluates to the array

# array.pop removes the last element of an array,
#  evaluates to the elemebt that was removed

# array.unshift adds an element to the front
# of an array, evaluates to the array

# array.unshift adds ab element to the front of an array,
# evaluates to the array

# array.shift removes the first element of an array,
# evaluates to tghe element that was removed

arr = ["vanessa", "candace", "dave"]
print arr
puts
arr.push("jia", "jules")
print arr
puts
print arr.unshift("bob")
print arr.shift

# array/string.index(ele)
# evaluates to the index where ele is found

# array/string.include?(ele)
# evaluates to a boolean indicating if ele is found

arrs = ["SF", "NY", "LA"]
puts arrs.index("NJ")

str = "hello"
puts str.include?("elle")

# array/string.reverse,
# evaluates to a new reverse version of the array or string

# array/string.reverse!,
# reverses an array/string in place

arr3 = [1, 2, 3, 4]
print arr3
puts
arr.reverse
print arr
puts

str1 = "hello"
puts str.reverse

def is_palindrome(word)
    return word == word.reverse
end

puts is_palindrome("madam") #true
puts is_palindrome("hello") #false

# array/string slicing

# array[startIdx..endIdx] - grabs elements from startIdx 
# to endIdx (inclusive)

# array[startIdx...endIdx] - grabs elements from startIdx
# to endIdx(exluding the element at endIdx)

str2 = "bootcamp"
print str2[3...-1]
puts

# string.split evaluates to an array
# array.join evaluates to a string

str3 = "follow the yellow brick road"
words = str3.split(" ")
puts str[2]
puts str
puts words[2]
puts 
print str3.split("l").join("Z")
puts

arr4 = ["hello", "world", "how", "are", "you"]
print arr4.join(" ")


# add element(s) to the end using push
people = ["Tommy", "Bex"]
p people.push("Maurice", "Abby")      # prints ["Tommy", "Bex", "Maurice", "Abby"]
p people                              # prints ["Tommy", "Bex", "Maurice", "Abby"]

# remove the last element using pop
people = ["Tommy", "Bex"]
p people.pop()                        # prints "Bex"
p people                              # prints ["Tommy"]

# add elements(s) to the front using unshift
people = ["Tommy", "Bex"]
p people.unshift("Oscar", "Matthias") # prints ["Oscar", "Matthias", "Tommy", "Bex"]
p people                              # prints ["Oscar", "Matthias", "Tommy", "Bex"]

# remove the first element using shift
people = ["Tommy", "Bex"]
p people.shift()                      # prints "Tommy"
p people                              # prints ["Bex"]

# check if an element exists in an array using include?
people = ["Tommy", "Bex", "Abby", "Maurice"]
p people.include?("Abby")   # prints true
p people.include?("Mashu")  # prints false

# find the index of an element in an array using index
people = ["Tommy", "Bex", "Abby", "Maurice"]
p people.index("Abby")      # prints 2
p people.index("Maurice")   # prints 3
p people.index("Oscar")     # prints nil
p people.index("Danny")     # prints nil

# convert a string into an array using split
sentence = "Hey Programmers! What's up."
p sentence.split(" ")      # prints ["Hey", "Programmers!", "What's", "up."]
p sentence.split("a")      # prints ["Hey Progr", "mmers! Wh", "t's up."]
p sentence.split("gram")   # prints ["Hey Pro", "mers! What's up."]
p sentence                 # prints "Hey Programmers! What's up."

# convert an array into a string using join
words = ["Rubies", "are", "red"]
p words.join(" ")          # prints "Rubies are red"
p words.join("-")          # prints "Rubies-are-red"
p words.join("HI")         # prints "RubiesHIareHIred"
p words                    # prints ["Rubies", "are", "red"]

