#Exercises XP
#Exercise 1 : What Are You Learning ?
def display_message():
    print("I am learning about functions in python")


display_message()

#Exercise 2: What’s Your Favorite Book ?
def favorite_book(title):
    print(f"One of my favorite books is {title}")


favorite_book("Harry Potter")

#Exercise 3 : Some Geography
def describe_city(name, country="Israel"):
    print(f"{name} is in {country}")


describe_city("Zichron Ya'acob")
describe_city("Paris", "France")
describe_city("London", "England")

#Exercise 4 : Let’s Create Some Personalized Shirts !
def make_shirt(size="L", text="I love Python"):
    print(f"the size of the shirt is {size} and the text is: '{text}'")


make_shirt("S", "Hello World")
make_shirt(size="M", text="Artemis Fowl")
make_shirt()

#Exercise 5 : Magicians …
magician_names = ['houdini', 'david blane', 'criss angel']

def show_magicians(magicians):
    for name in magicians:
        print(name)

def make_great(magicians):
    ''' creates new array with all the names preceded by "the great" and returns it '''
    magicians_made_great = ["The Great " + name for name in magicians]
    return magicians_made_great

magician_names = make_great(magician_names)
show_magicians(magician_names)

#Exercise 6: When Will I Retire ?
def get_age(year, month, day):
    age = 2020 - year
    if month < 7 or month == 7 and day < 8:
        age += 1
    return age


def can_retire(gender, date_of_birth):
    year, month, day = date_of_birth
    age = get_age(int(year), int(month), int(day))
    if age > 66 or age > 61 and gender == "f":
        return True
    return False


birth = tuple(input("Enter birth-date YYYY/MM/DD: ").split("/"))
gen = input("Enter if f or m: ")
if can_retire(gen, birth):
    print("Welcome to retirement!")
else:
    print("Go back to work")
#Exercise 7:
print(sum([int(str(number) * i) for i in range(1,5)]))
#
# Exercise XP GOLD

#Exercise 1: Temperature Advice
import random


def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 15)
    elif season == "autumn" or season == "spring":
        return random.randint(16, 22)
    elif season == "summer":
        return random.randint(23, 39)


def main():
    season = input("Enter a season: ")
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brr, that's freezing!")
    elif 0 <= temp < 16:
        print("Quite chilly! Don't forget your coat")
    elif 16 <= temp < 23:
        print("Ahh that's nice weather!")
    elif 23 <= temp < 32:
        print("Getting a bit warm here")
    elif 32 <= temp < 40:
        print("AHHHH im burning!")


main()

#Exercise 2: Double Dice
from random import randint

def throw_dice ():
    dice1 = (randint(1, 6))
    dice2 = (randint(1, 6))
    return dice1, dice2

def throw_until_double(roll_count=0):
    rolls = throw_dice()
    while rolls[0] != rolls[1]:
        roll_count += 1
        rolls = throw_dice()
    roll_count += 1
    return(roll_count)

def main ():
    total_rolls = 0
    track_record = []
    for x in range(100):
        total_rolls += throw_until_double()
        track_record.append(throw_until_double())

    average = (total_rolls/len(track_record))

    print(f"Total throws to reach 100 doubles: {total_rolls}")
    print(f"Average number of throws for each double roll: {average}")
    print(f"List of attempts required for each double roll: {track_record}")

main ()

#Exercise XP NINJA
#Exercise 1 : What’s Your Name ?
def get_full_name(first_name, middle_name, last_name=None):
    if last_name is None:
        return f"{first_name} {middle_name}"
    return f"{first_name} {middle_name} {last_name}"


print(get_full_name("Alan", "David", "Shuster"))


#Exercise 2 : Box Of Stars
def framed(word_list):
    longest = ""
    for word in word_list:
        if len(word) > len(longest):
            longest = word
    print("*"*(len(longest)+4))
    for w in word_list:
        space_w = (len(longest)-len(w))*" "
        print(f"* {w}{space_w} *")
    print("*"*(len(longest)+4))


words = ['Hello', 'World', 'in', 'reallylongword', 'a', 'frame']
framed(words)

#Exercise 4 : What is the purpose of this code?
def insertion_sort(alist):
    for index in range(1, len(alist)):

        currentvalue = alist[index] # saves the current value of the index
        position = index            # saves the current index of the list

        while position > 0 and alist[position - 1] > currentvalue: # while the last value is bigger then the current value and it in bounds continue
            alist[position] = alist[position - 1] # swaps the values
            position = position - 1               # around

        alist[position] = currentvalue


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertion_sort(alist)
print(alist) # this returns a sorted list from smallest to biggest

#Exercise 4 : From English To Morse
import string

translate_table = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
}


def english_to_morse(text):
    new_text = ""
    text = text.lower()
    for letter in text:
        if string.ascii_lowercase.count(letter) > 0:
            new_text += translate_table[letter]
            new_text += " "
        elif letter == " ":
            new_text += "/"
            new_text += " "
    return new_text


def morse_to_english(text):
    new_text = ""
    text = text.split(" ")
    for letter in text:
        if letter == "/":
            new_text += " "
        else:
            for item in translate_table.items():
                if item[1] == letter:
                    new_text += item[0]
    return new_text


test = english_to_morse("Hi how are ya")
print(test)
print(morse_to_english(test))
#Daily Challenge : Solve The Matrix
import string
alphabet_lower = string.ascii_lowercase
alphabet_upper = string.ascii_uppercase

matrix_list = [
    [7, ' ', 3],
    ['T','s','i'],
    ['h','%','x'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['i', 'r', '!']
]    

def decodeMatrix(matrix, items_per_list):
    ''' This function loops the amount of times passed in to the items per list parameter. Within that loop it goes through each 
    list within the matrix passed in and gets the character in index 0. If the character is a letter, it adds it to the decoded
    word string, if it is a different kind of character it adds a space if there wasn't already a space and if it's a number it
    skips it. It then increases the index and continues until it's gone through the whole thing. Function returns the decoded matrix '''
    decoded_words = ''
    i = 0
    while i < items_per_list :
        for char in matrix:
            try :
                if char[i] in alphabet_lower or char[i] in alphabet_upper:
                    decoded_words += char[i]
                else :
                    if decoded_words[-1] == ' ' or char[i] == ' ':
                        pass
                    else :
                        decoded_words += ' '
            except :
                if char[i] is int :
                    pass
        i += 1

    return decoded_words

print(decodeMatrix(matrix_list, 3))
