# Data Structure - Hashes
# `key => value` pairs
#  Hash is like a dictionary collection of unique keys
# and their values 
# Hash allows you to use any object type
# Similar to an Array but indexing is done
# via arbitrary keys of any object type, NOT an integer index
# Ruby has keys ARE ordered


# Hash Methods
# .length
# .has_key?(k)
# .has_value(v)
# .keys
# .values

# Hash enumerables
# .each
# .each_key
# .each_value

# Hashes
# default value nil
# Hash.new(default)
# counter hash strategy
# counter hash
# sort_by

# Nil
# represents "nothing" or "empty"
# common appears as a default value


my_hash = {
    "name" => "App Academy", 
    "color" => "red", 
    "age" => 5, 
    "isAwesome" => true
}
my_hash["color"] = "pink"
my_hash["age"] += 1
puts my_hash



dog = {
    "name" => "Fido",
    "color" => "black",
    "age" => 3,
    "isHungry" => true,
    "enemies" => ["squirrel"]
}

print dog["enemies"] << "mailman"
dog["name"] = "Spot"
dog["age"] += 10
puts dog
puts
puts "-------"

puts
print dog.has_key?("location")
print dog.has_key?("Color")
print dog.has_key?("color")



# good array data
animels = ["dog", "cats", "fish", "bird"]

# not so good array data
person = ["Alvin", 100, "New York", "burgers", true]

# better as a hash

better_person = {
    "name" => "Alvin",
    "age" => 100,
    "location" => "New York",
    "favoriteFood" =>"burgers",
    "isHungry"=> true
}


puts
puts better_person['location']
puts "------"

# Hash enumerables
# .each
# .each_key
# .each_value

pizza = {
    "style" => "New York",
    "slices" => 8,
    "diameter" => "15 inches",
    "toppings" => ["mushrooms", "green peppers"],
    "is_tasty" => true
}

pizza.each_key do |thing|
    puts thing
end

pizza.each_value do |val|
    puts val
end

# pizza.each do |k, v| # key and value
#     puts k
#     puts v
#     puts "----"
# end 


# Hashes
# default value nil
# Hash.new(default)
# counter hash strategy

# counter = Hash.new(0)

# str = "bootcamp prep"
# str.each_char do |char|
#     puts char
#     counter[char] += 1
#     puts counter
# end

# # practice

# my_hashes = {
#     "a" => 28
# }

# puts my_hashes["b"] == nil

# myy_hash = Hash.new("hello world")
# myy_hash["a"] = "goodbye"
# puts myy_hash

# counteers = Hash.new(0)

# str.each_char { |char| counteers[char] += 1 }
# puts counter

mine_hash = {"a" => 42, "b" => 10}

char = "b"
puts mine_hash[char]

# Hashes
# counter hash
# sort_by

str = "mississippi river"
count = Hash.new(0)

str.each_char { |char| count[char] += 1 }

sorted = count.sort_by { |k, v| v } #key and value
print sorted[-1][0]
puts

# Nil
# represents "nothing" or "empty"
# common appears as a defualt value



your_array = ["a", "b", "c"]
p your_array[0]
your_hash = { "name" => "Bob", "age" =>0 }


there_hash = {"name" => "Rob", "age" => 44}
p there_hash["location"]


