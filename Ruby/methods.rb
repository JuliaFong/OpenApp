# Methods
# def is the keyword used to define a Method in Ruby
# Methods ending with an exclamation mark
# will change the object instead of returning a 
# new one

puts "Hello friends"
puts "taco bell for dinner"

# defining a method... 
def say_message
# write the code that belongs to the method
    puts "Hello Friends!!!"
    puts "Lets grab tbell"
end
# step 2 is calling the method
puts "before the method call"
say_message
puts "after the method call"
#  you can call the method as many times as you want
# order of evaluation
# order of puts 
# ruby executes top down

def say_hello(person1, person2)
    puts  "Hello there " + person1 + " and " + person2 + "."
end

say_hello("Oscar", "Ernest")
say_hello("Thomas", "Mike")

def calc_average(num1, num2)
    sum = num1 + num2
    avg = sum / 2.0
    return avg
end


# the return keyword lets a method call evaluate to a value
result = calc_average(5, 10) 
# answer is 7.5
puts result + 1
# ^ 8.5




def average_of_three(num1, num2, num3)
    sum = num1 + num2 + num3
    avg = sum / 3
    return avg
end

puts average_of_three(3, 7, 8)
puts average_of_three(9, 9, 11)
puts average_of_three(8, 9, 77)




def greet 
    puts "Hello word"
end
greet # this is prefferred since greet does not expect parameters
greet()

def hello(name)
    puts "hey " + name
end
hello "programmers"
hello("programmerrs") # this is preffered since greet DOES expect parameters

# Arguments are the data values that we pass into a method when we call the method.
#  We place arguments in the parentheses of a method call. 
# Those argument values will be assigned to the parameters when we evaluate the method.

# In other words, Arguments are the concrete data values
#  we pass into method calls. Parameters are the 
# "placeholders" that we use to write a general method.

def goodbye(name)
   return "Bye " + name + "."
end

puts goodbye("Daniel")
puts goodbye("Audrey")
puts goodbye("Beyonce")