# Hashes Toy Problems

# Write a method get_double_age that takes in a hash 
# and returns twice the "age" value of the hash.

def get_double_age(hash)
    return hash["name"] * 2

end 

puts get_double_age({"name"=>"App Academy", "age"=>5}) # => 10
puts get_double_age({"name"=>"Ruby", "age"=>23})       # => 46


# Write a method get_full_name that takes in a hash 
# containing a first, last, and title. The method should
#  return a string representing the hash's full name

def get_full_name(hash)
    return hash["first"] + " " + hash["last"] + " , the " + hash["title"]
end

hash1 = {"first"=>"Michael", "last"=>"Jordan", "title"=> "GOAT"}
puts get_full_name(hash1) # => "Michael Jordan, the GOAT"

hash2 = {"first"=>"Fido", "last"=>"McDog", "title"=> "Loyal"}
puts get_full_name(hash2) # => "Fido McDog, the Loyal"

# Write a method word_lengths that takes in a sentence 
# string and returns a hash where every key is a word 
# of the sentence, and its' corresponding value is the length of that word.


def word_lengths(sentence)
    words = sentence.split(" ")
    lengths = { }
    words.each { |word| lengths[word] = word.length }
    return lengths

end

puts word_lengths("this is fun") #=> {"this"=>4, "is"=>2, "fun"=>3}
puts word_lengths("When in doubt, leave it out") #=> {"When"=>4, "in"=>2, "doubt,"=>6, "leave"=>5, "it"=>2, "out"=>3}
puts "-----"

# Write a method retrieve_values that takes in two hashes 
# and a key. The method should return an array containing
#  the values from the two hashes that correspond with the given key.

def retrieve_values(hash1, hash2, key)
    val1 = hash1[key]
    val2 = hash2[key]
    return [val1, val2]
end

dog1 = {"name"=>"Fido", "color"=>"brown"}
dog2 = {"name"=>"Spot", "color"=> "white"}
print retrieve_values(dog1, dog2, "name") #=> ["Fido", "Spot"]
puts
print retrieve_values(dog1, dog2, "color") #=> ["brown", "white"]
puts


# Write a method cat_builder that takes in a name,
#  color, and age. The method should return a hash 
# representing a cat with those values.

def cat_builder(name_str, color_str, age_num)
    cat = {"name" =>name_str, "color"=>color_str, "age"=>age_num}
    return cat
end

print cat_builder("Whiskers", "orange", 3) #=> {"name"=>"Whiskers", "color"=>"orange", "age"=>3}
puts

print cat_builder("Salem", "black", 100) #=> {"name"=>"Salem", "color"=>"black", "age"=>100}
puts

# Write a method ae_count that takes in a string and 
# returns a hash containing the number of a's and e's 
# in the string. Assume the string contains only 
# lowercase characters.

def ae_count(str)
    count = {"a"=>0, "e"=>0}

    str.each_char do |char|
        if (char == "a" || char == "e")
        count[char] += 1
        end
    end 

    return count
end

puts ae_count("everyone can program") #=> {"a"=>2, "e"=>3}
puts ae_count("keyboard") #=> {"a"=>1, "e"=>1}
puts"---------"

# Write a method element_count that takes in an array and
#  returns a hash representing the count of each element
#  in the array.


def element_count(arr)
    count = Hash.new(0)
    arr.each { |ele| count[ele] += 1 }
    return count

end

puts element_count(["a", "b", "a", "a", "b"]) #=> {"a"=>3, "b"=>2}
puts element_count(["red", "red", "blue", "green"]) #=> {"red"=>2, "blue"=>1, "green"=>1}
puts "----------"

# Write a method select_upcase_keys that takes in a hash 
# and returns a new hash containing key-value pairs of 
# the original hash that had uppercase keys. You can 
# assume that the keys will always be strings.

def select_upcase_keys(hash)
    new_hash = {}

    hash.each do |k, v|
        if k == k.upcase
            new_hash[k] = v
        end 
    end

    return new_hash
end

print select_upcase_keys({"make"=> "Tesla", "MODEL"=> "S", "Year"=> 2018, "SEATS"=> 4}) # => {"MODEL"=>"S", "SEATS"=>4}
puts

print select_upcase_keys({"DATE"=>"July 4th","holiday"=> "Independence Day", "type"=>"Federal"}) # => {"DATE"=>"July 4th"}
puts

# Write a method hand_score that takes in a string representing 
# a hand of cards and returns it's total score. 
# You can assume the letters in the string are only
#  A, K, Q, J. A is worth 4 points,
#  K is 3 points, Q is 2 points, and J is 1 point. 
# The letters of the input string not necessarily uppercase.

# use the following score values
# A: 4 points
# K: 3 points
# Q: 2 points
# J: 1 point



def hand_score(hand)
    points = {
        "A"=> 4,
        "K"=>3,
        "Q"=>2,
        "J"=>1
    }
    total = 0
    hand.each_char { |card| total += points[card.upcase] }
    return total
end

puts hand_score("AQAJ") #=> 11
puts hand_score("jJka") #=> 9

# Write a method frequent_letters that takes in a string
#  and returns an array containing the characters that 
# appeared more than twice in the string.

def frequent_letters(string)
    count = Hash.new(0)
    string.each_char { |char| count[char] += 1}

    frequents = []
    count.each do |char, num|
        if num > 2
            frequents << char
        end
    end

    return frequents
end

print frequent_letters('mississippi') #=> ["i", "s"]
puts
print frequent_letters('bootcamp') #=> []
puts

# Write a method hash_to_pairs that takes in a hash 
# and returns a 2D array representing each key-value
#  pair of the hash.

def hash_to_pairs(hash)
    arr = []
    hash.each { |k, v| arr << [k, v] }
    return arr
end

print hash_to_pairs({"name"=>"skateboard", "wheels"=>4, "weight"=>"7.5 lbs"}) #=> [["name", "skateboard"], ["wheels", 4], ["weight", "7.5 lbs"]]
puts


print hash_to_pairs({"kingdom"=>"animalia", "genus"=>"canis", "breed"=>"German Shepherd"}) #=> [["kingdom", "animalia"], ["genus", "canis"], ["breed", "German Shepherd"]]
puts

# Write a method unique_elements that takes in an array
#  and returns a new array where all duplicate elements
#  are removed. Solve this using a hash.

def unique_elements(arr)
    hash = {}

    arr.each { |ele| hash[ele] = true }
    return hash.keys
end

print unique_elements(['a', 'b', 'a', 'a', 'b', 'c']) #=> ["a", "b", "c"]
puts

# Write a method element_replace that takes in an array
#  and a hash. The method should return a new array 
# where elements of the original array are replaced
#  with their corresponding values in the hash.

def element_replace(arr, hash)
    new_array = []

    arr.each do |ele|
        if hash.has_key?(ele)
            new_array << hash[ele]
        else 
            new_array << ele
        end
    end

    return new_array
end

arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"]
hash1 = {"Serena Williams"=>"tennis", "LeBron James"=>"basketball"}
print element_replace(arr1, hash1) # => ["basketball", "Lionel Messi", "tennis"]
puts

arr2 = ["dog", "cat", "mouse"]
hash2 = {"dog"=>"bork", "cat"=>"meow", "duck"=>"quack"}
print element_replace(arr2, hash2) # => ["bork", "meow", "mouse"]
puts

