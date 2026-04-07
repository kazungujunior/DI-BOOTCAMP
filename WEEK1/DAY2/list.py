#Exercises XP
#Exercise 1 : Favorite numbers
#With Set

my_fav_numbers = {2, 7, 27, 22, 227}

my_fav_numbers.add(3)
my_fav_numbers.add(8)
my_fav_numbers.remove(227)
print(f"my fav numbers are: \n {my_fav_numbers}")

friend_fav_numbers = {3, 45, 65, 3, 2, 1, 32, 7}
print(f"my friend fav numbers are: {friend_fav_numbers}")

our_fav_numbers = my_fav_numbers
our_fav_numbers.update(friend_fav_numbers)
print(f"our favorites numbers are: {our_fav_numbers} ")
#With Lists

my_fav_numbers = [1, 3, 2, 5, 7, 44]
my_fav_numbers += [55, 43]
my_fav_numbers.pop(-1)
friend_fav_numbers = [9, 8, 5, 22, 90]
our_fav_numbers = my_fav_numbers + friend_fav_numbers


#Exercise 2: Tuple
print("No, it is not possible to add numbers (or anything) to a tuple. Tuples are immutable.")


#Exercise 3 : Shopping List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)

basket2 = ["Banana", "Apples", "Oranges", "Blueberries"]
while len(basket2) > 0:
    print(basket2.pop(-1))


#Exercise 4: Floats
#Recap – What is a float? What is the difference between an integer and a float?
#Can you think of another way of generating a sequence of floats? Missing correction
#Create a list containing the sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 without hard-coding the sequence.
#A float is a number with a decimal point or a floating point number. An integer (more commonly called an int) is a number without a decimal point.
#Floats are used when more precision is needed.
num = 1.5
num_list = [num]
for i in range(7):
    num += 0.5
    num_list.append(num)
print(num_list)
list of floats

sequence = []
for i in range (1,6):
    decimal =  i + 0.5
    sequence.append(i)
    sequence.append(decimal)
print(sequence[1:-1])


#Exercise 5: For Loop
#Use a for loop to print all numbers from 1 to 20, inclusive.
#Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
for i in range(1, 21):
    print(i)

for i in my_list2:
    if my_list2.index(i)%2==0:
        print(i)


#Exercise 6 : While Loop
#Write a while loop that will keep asking the user for input until the input is the same as your name.
while True:
    name = input("whats your name?")
    if name == "Guillaume":
        break


#Exercise 7 : Favorite Fruits
basket = input("Enter your fav fruits: ").split(" ")
fruit = input("Enter a fruit: ")
if fruit in basket:
  print("You chose one of your favorite fruits! Enjoy!")
else:
  print("You chose a new fruit. I hope you enjoy it too!")


#Exercise 8 : Who ordered a pizza ?
#Write a loop that prompts the user to enter a series of pizza toppings until they enter a ‘quit’ value.
#As they enter each topping, print a message saying you’ll add that topping to their pizza.
#Upon exit print all the toppings on the pizza and what the total is (10 + 2.5 for each topping)
toppings = []

while True:
    pizza = input("input pizza topping, when finshed write quit")
    if pizza.lower() != "quit":
        print(f"i'll add {pizza} to you're pizza")
        toppings.append(pizza)
    else:
        total = 10 + (2.5*len(toppings))
        print(f"You're toppings are {toppings}, and you're total is {total}")
        break


#Exercise 9: Cinemax
total = 0
while True:
    age = input("Please enter your age: ")
    if len(age) == 0:
        break
    elif int(age) < 3:
        pass
    elif 3 <= int(age) <= 12:
        total += 10
    else:
        total += 15
print(f"Your total is {total}")

group = []
while True:
    age = input("Enter age: ")
    if len(age) == 0:
        break
    if 16 <= int(age) <= 21:
        group.append(int(age))
print(group)




#Exercise 11: Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

#After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []

for sandwich in sandwich_orders:
    user_response = input(f"Is the {sandwich} is ready? (yes/no):")

    if user_response == 'yes':
        finished_sandwiches.append(sandwich)
print(finished_sandwiches)
#other solution
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
                   "Avocado sandwich", "Pastrami sandwich",
                   "Egg sandwich", "Chicken sandwich",
                   "Pastrami sandwich"]

finished_sand = []
while 'Pastrami sandwich' in sandwich_orders:
    sandwich = sandwich_orders.remove('Pastrami sandwich')

for sandwich in sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)

print(f'I made your {", ".join(finished_sand)}')


#Exercise 12 : Sandwich Orders#2
##Using the list sandwich_orders from the previous exercise, make sure the sandwich ‘pastrami’ appears in the list at least three times.
#Add code near the beginning of your program to print a message saying the deli has run out of pastrami, and then use a while loop to remove all occurrences of ‘pastrami’ from sandwich_orders.
#Make sure no pastrami sandwiches end up in finished_sandwiches.
sandwich_orders = ["tuna sandwich", "avocado sandwich", "egg sandwich", "sabih sandwich", "pastrami sandwich",
                   "pastrami sandwich", "pastrami sandwich", "cheese sandwich"]
sandwichOutOfStock = "pastrami sandwich"
finished_sandwiches = []
outOfStockMessage = f"deli has run out of {sandwichOutOfStock}"
print(outOfStockMessage)
for sandwich in sandwich_orders:
    if sandwich == sandwichOutOfStock:
        continue
    finished_sandwiches.append(sandwich)
print(finished_sandwiches)


#Exercises XP GOLD
#Exercise 1 : Concatenate lists
#Write a script that concatenate two lists together without using the + sign.
list_1 = [3, 6, 9] 
list_2 = [4, 5, 7]
list_1.extend(list_2)
print(list_1)

OR

list1 = [1, 2, 3]
list2 = [4, 5, 6]
while len(list2) > 0:
    list1.append(list2.pop(0))


#Exercise 2 : Range Of Numbers
#Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

list = [x for x in range(1500, 2700) if x%5 == 0 and x%7 == 0]
print(list)


#Exercise 3 : Check the index
#Using this variable

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

#Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
#Example: if input is 'Cortana' we should be printing the index 1
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
print(names)
name_asked = input("Pick your name:\t")


if name_asked in names:
    print(f"It's there on Index {names.index(name_asked)}")
else:
    print("Not in the list")


#Exercise 4 : Greatest Number
#Ask the user for 3 numbers and print the greatest number.
numbers = []
for i in range(3):
    numbers.append(input('Give me a number'))
print(f"The greatest number is:", max(numbers))


#Exercise 5 : The Alphabet
#Create a string of all the letters in the alphabet
#Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.
import string
alpha = list(string.ascii_lowercase)
vowels = list("iouae")
for letter in alpha:
    if vowels.count(letter) > 0:
        print(letter + ": vowel")
    else:
        print(letter + ": consonant")

item = input("Enter an item: ")
print(f"{item} occurs at {alpha.index(item)}")


#Exercise 6 : Words and letters
#Ask a user for 7 words, store them in a list named words.
#Ask the user for a single character, store it in a variable called letter.
#Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
#If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.
words = []
words_string = input("Give me 7 words seperated by comma:\t")
words = words_string.split(' ')
while len(words) != 7:
    words_string = input("Give me 7 words seperated by comma:\t")
    words = words_string.split(' ')
print(words)
letter = input("Give me a single character:\t")

for i in range(0, len(words)):
    if letter in words[i]:
        print(f"the letter {letter} is in Index {words[i].find(letter)}")
    else:
        print("Sorry, no match")


#Exercise 7: Min, Max, Sum
#Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.
#list_of_numbers = list(range(1, 1000001))
for number in list_of_numbers:
    print(number)

print(min(list_of_numbers))
print(max(list_of_numbers))
print(sum(list_of_numbers))


#Exercise 8 : List and Tuple
#Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
#Suppose the following input is supplied to the program: 34,67,55,33,12,98

#Then, the output should be:

['34', '67', '55', '33', '12', '98']
('34', '67', '55', '33', '12', '98')

#```python
user_list = input("Enter numbers seperated by commas: ")
user_list = user_list.split(",")
user_tuple = tuple(user_list)
print(user_list)
print(user_tuple)


#Exercise 9 : Random number
#Ask the user to input a number from 1 to 9 (including).
#Get a random number between 1 and 9. Hint: random module.
#If the user guesses the correct number print a message that says Winner.
#If the user guesses the wrong number print a message that says better luck next time.
#Bonus: use a loop that allows the user to keep guessing until they want to quit.
#Bonus 2: on exiting the loop tally up and display total games won and lost.
#Missing part of the correction

import random

games = 0
wins = 0
losses = 0

input_number = 1

while input_number > 0 or input_number < 11:

    random_number = random.randint(0, 9)

    input_number = int(input("Give me a random number between 0 and 9\nType in '10' if you want to quit:\t"))

    if input_number == 10:
        print("Goodbye")
        break
    else:
        games += 1
        if input_number == random_number:
            print("Congratulations. You guessed right\n")
            wins += 1
        else:
            print("Sorry. You were wrong. Try again?\n")
            losses += 1

print(f"You played {games} games and had {wins} wins and {losses} losses!")




#Exercises XP NINJA
#Exercise 1 : Formula
#Write a program that calculates and prints a value according to this given formula:
#Q = Square root of [(2 * C * D)/H]
#Following are the fixed values of C and H:
#C is 50.
#H is 30.
#Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
#For example, if the user inputs: 100,150,180
#The output should be:

18,22,24
from math import sqrt
C = 50
H = 30
answers = []
numbers = input("Enter some csv numbers: ").split(",")
for number in numbers:
    answers.append(str(round(sqrt((2*C*int(number))/H))))
print(",".join(answers))


#Exercise 2 : List of Integers
#Given a list of 10 integers to analyze. For example:

    [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
    [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
    [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
    [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
#Store the list of numbers in a variable.
#Print the following information:
#a. The list of numbers – printed in a single line
#b. The list of numbers – sorted in descending order (largest to smallest)
#c. The sum of all the numbers
#A list containing the first and the last numbers.
#A list of all the numbers greater than 50.
#A list of all the numbers smaller than 10.
#A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
#The numbers without any duplicates – also print how many numbers are in the new list.
#The average of all the numbers.
#The largest number.
#10.The smallest number.
##12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
#13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
#14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
#15.Bonus: Will the code work when the number of random numbers is not equal to 10?
list_1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
list_2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
list_3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
list_4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

def list_of_numbers(list_of):
    return str(list_of.copy())


def sorted_reverser(list_of_numbers):
    list_sorted = sorted(list_of_numbers)
    list_sorted = list_sorted[::-1]
    return list_sorted

def sum_list_numbers(list_of_numbers):
    return sum(list_of_numbers)    

def only_firs_and_last(list_of_numbers):
    return f"{list_of_numbers[0]} is the first, and {list_of_numbers[-1]} is the last number on the list"

def only_greater_than_50(list_of_numbers):
    list_with_the_condition = [number for number in list_of_numbers if number > 50]
    return list_with_the_condition

def only_smaller_than_10(list_of_numbers):
    list_with_the_condition = [number for number in list_of_numbers if number < 10]
    return list_with_the_condition

def squares_of_all_numbers(list_of_numbers):
    list_with_the_condition = [number**2 for number in list_of_numbers]
    return list_with_the_condition

def no_duplicates(list_of_numbers):
    list_with_the_condition = [number for number in list_of_numbers if list_of_numbers.count(number) < 2]
    return list_with_the_condition, f"They are {len(list_with_the_condition)} items in the list"


def average(list_of_numbers):
    total = sum(list_of_numbers)
    average = total/len(list_of_numbers)
    return average

def max_and_min(list_of_numbers):
    return f"The max number is {max(list_of_numbers)}, and the minimum number on the list is {min(list_of_numbers)}"



print(list_of_numbers(list_1))

print(sorted_reverser(list_1))

print(sum_list_numbers(list_1))

print(only_firs_and_last(list_1))

print(only_greater_than_50(list_1))

print(only_smaller_than_10(list_1))

print(squares_of_all_numbers(list_1))

print(no_duplicates(list_1))

print(average(list_1))

print(max_and_min(list_1))
#Missing Solution for Bonuses





#Exercise 3: Working on a paragraph
#Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
#Paste it to your code, and store it in a variable.
#Let’s analyze the paragraph. Print out a nicely formatted message saying:
#How many characters it contains (this one is easy…).
#How many sentences it contains.
#How many words it contains.
#How many unique words it contains.
#Bonus: How many non-whitespace characters it contains.
#Bonus: The average amount of words per sentence in the paragraph.
#Bonus: the amount of non-unique words in the paragraph.
 #  para = "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust " \
          #and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon " \
          #"wars. You just have to use your head to think a little bit about what to do with them."

   print(len(para))
   print(len(para.split("."))-1)
   print(len(para.split(" ")))
   count = 0;
   para_words = para.replace(".", "").split(" ")
   for i in para_words:
       if para_words.count(i) == 1:
           count += 1
   print(count)
#Other solution with Bonus

frase = '''
less TV, more reading.
less shopping, more outdoors.
less clutter, more space.
less rush, more slowness.
less consuming, more creating.
less junk, more real food.
less busywork, more impact.
less driving, more walking.
less noise, more solitude.
less focus on the future, more on the present.
less work, more play.
less worry, more smiles.
breathe'''
print(frase)
print(f"The phrase contain {len(frase)} characters")
sentences = frase.split(".")
print(f"The amount of sentences is {len(sentences)}")
words = frase.split(" ")
print(f"The amount of words is {len(words)}")
words_unique = list(set(words.copy()))
print(f"The amount of unique words is {len(words_unique)}")

# Bonus
non_whitespaces = [char for char in frase if char != " "]
print(f"The amount of non-whitespaces characters is {len(non_whitespaces)}")
average_word_per_sentence = len(words)/len(sentences)
print(f"The average of words per sentence is {round(average_word_per_sentence,2)}")
non_unique_words = list(set([word for word in words if words.count(word) > 1 ]))
print(f"The amount of non unique words is {len(non_unique_words)}")


#Exercise 4 : Frequency of the words
#Write a program that prints the frequency of the words from the input.

#Suppose the following input is supplied to the program:
#New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.

#Then, the output should be:

    2:2
    3.:1
    3?:1
    New:1
    Python:5
    Read:1
    and:1
    between:1
    choosing:1
    or:2
    to:1
text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
text = text.split(" ")
for i in text:
    if text.count(i) > 1:
        print(f"{i}: {text.count(i)}")
        text = " ".join(text)
        text = text.replace(i, "")
        text = text.split(" ")
    elif text.count(i) == 1:
        print(f"{i}: {text.count(i)}")


#Daily Challenge: Loops
#Instructions
#Challenge 1
#Ask the user for a number and a length.
#Create a program that prints a list of multiples of the number until the list length reaches length.
#Examples

number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
numbers = [i*7 for i in range(1,5+1)]
print(numbers)


#Challenge 2
#Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
#Examples

user's word : "ppoeemm" ➞ "poem"

user's word : "wiiiinnnnd" ➞ "wind"

user's word : "ttiiitllleeee" ➞ "title"

user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
#Notes
#Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

function unstretch (word) {
  let arr = word.split("");
  for (let j = 0; j<arr.length; j++){
    for (let i = 0; i<arr.length; i++){
      if (arr[i+1] === arr[i]) {
        arr.splice(i,1)
      }
    }
  }
  console.log(arr.join(''))
}

unstretch("poooeemmm")


#Daily Challenge: Happy Birthday
from datetime import datetime, timedelta
birthday = input('what is your birthday ex. DD/MM/YYYY')
birthday_convert_to_date = datetime.strptime(birthday, "%d/%m/%Y")
current_date = datetime.now()
age = int((current_date - birthday_convert_to_date) / 365 / timedelta (days=1))
age_to_string = str(age)
last_digit_of_age = int(age_to_string[-1])
candles = 'i' * int(last_digit_of_age)
cake = (f'''\t ___{candles}___ 
       | :H:a:p:p:y:  |
     __|______________|__
    |^^^^^^^^^^^^^^^^^^^^|
    | :B:i:r:t:h:d:a:y:  |
    |                    |
    ~~~~~~~~~~~~~~~~~~~~~~
    ''')

#check if leap year, print two cakes if yes
if birthday_convert_to_date.year % 4 == 0 :
    if birthday_convert_to_date.year % 100 == 0 :
        if birthday_convert_to_date.year % 400 == 0 :
            print(cake * 2)
        else :
            print(cake)
    else :
        print(cake * 2)
else :
    print(cake)
