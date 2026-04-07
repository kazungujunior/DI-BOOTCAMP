#Mini projects
#Tic Tac Toe

board = [
    ["1", " | ", "2", " | ", "3"],
    ["-", " + ", "-", " + ", "-"],
    ["4", " | ", "5", " | ", "6"],
    ["-", " + ", "-", " + ", "-"],
    ["7", " | ", "8", " | ", "9"]
]
avaliable_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


def display_board():
    for i in board:
        print(''.join(i))


def player_input(player):
    position = input(f"Enter {player} at position: ")
    while avaliable_numbers.count(position) == 0:
        position = input("Enter a valid position: ")
    avaliable_numbers.remove(position)
    for row in board:
        try:
            row[row.index(position)] = player
        except ValueError:
            pass
    display_board()
    if check_win():
        print(f"{player} has won the game!")
        return True


def check_win():
    count_column = []
    for column in range(0, 5, 2):
        for row in range(0, 5, 2):
            if board[row].count("x") == 3 or board[row].count("o") == 3:
                return True
            count_column.append(board[row][column])
        if count_column.count("x") == 3 or count_column.count("o") == 3:
            return True
        count_column.clear()
    if board[0][0] == board[2][2] == board[4][4]:
        return True
    if board[0][4] == board[2][2] == board[4][0]:
        return True


def play():
    display_board()
    win = False
    turns = 0
    while not win:
        if turns > 8:
            print("It's a tie!")
            break
        if turns % 2 == 0:
            win = player_input("x")
        else:
            win = player_input("o")
        turns += 1


play()


#Hangman
import random

wordlist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share',
            'credit card', 'rush', 'south']
word = random.choice(wordlist)
hidden = ""
mistakes = 0
wrong_letters = ""
for i in word.split(" "):
    hidden += len(i) * "*" + " "


def stickman():
    parts = ["O", "|", "/", "\\", "/", "\\"]
    part_list = [" ", " ", " ", " ", " ", " "]
    for count in range(mistakes):
        part_list[count] = parts[count]
    print(hidden)
    print("""     ___
    |   |
    |   {0}
    |  {2}{1}{3}
    |   {1}
    |  {4} {5}
    |
    Wrong guesses: {wrong}""".format(*part_list, wrong=wrong_letters))


def guess():
    global wrong_letters
    global mistakes
    global hidden
    letter = input("Enter a letter: ")
    while wrong_letters.count(letter) != 0 or not 0 < len(letter) < 2 or not letter.isalpha():
        letter = input("Enter a valid letter: ")
    if word.count(letter) > 0:
        for i in range(len(word)):
            if word[i] == letter:
                hidden = hidden[:i]+letter+hidden[i+1:]
        if hidden.count("*") == 0:
            return True
    else:
        wrong_letters += letter
        mistakes += 1
    stickman()


def play():
    stickman()
    win = False
    while mistakes < 6:
        win = guess()
        if win:
            print("You win")
            break
    if mistakes > 5:
        print("You Lost")


play()
#Challenges
#Exercise 1
#Write a script that inserts an item at a defined index in a list.
#Missing Correction

#Exercise 2
#Write a script that counts the number of spaces in a string.
#Missing Correction

#Exercise 3
#Write a script that calculates the number of upper case letters and lower case letters in a string.
#Missing Correction

#Exercise 5
#Write a function to find the max of a list

def max_list(mylist):
    biggest = mylist[0]
    for number in mylist:
        if number>biggest:
        biggest = number
    return biggest

print(max_list([5,8,2]))

#Exercise 6
#Write a function that return factorial of a number

    >>>Factorial(4)
    >>>24
#Missing Correction

#Exercise 4
#Write a function to find the sum of an array without using the built in function:

def my_sum(mylist):
    result = 0
    for number in mylist:
        result += number
    return result

print(my_sum([1,5,6]))

#Exercise 7
#Write a function that counts an element in a list (without using the count method):

    >>>list_count(['a','a','t','o'],'a')
    >>>2
#Missing Correction

#Exercise 8
#Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

    >>>Norm([1,2,2])
    >>>3
#Missing Correction

#Exercise 9
#Write a function to find if an array is monotonic (sorted either ascending of descending)

def isMono(mylist):
    new_list = sorted(mylist)
    rev_list = sorted(mylist, reverse=True)
    if mylist == new_list or mylist==rev_list:
        return True
    else:
        return False

print(isMono([2,10,8]))

#Exercise 10
#Write a function that prints the longest word in a list.
def longest(mylist):
    longest_word = mylist[0]
    for word in mylist:
        if len(word)>len(longest_word):
            longest_word=word
    return longest_word


print(longest(["hello", "errrrrrrr", "ze"]))

#Exercise 11
#Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
def sortingList(list_toSort):
    for item in list_toSort:
        numbers= [item for item in list_toSort if isinstance(item, int)]
        words= [item for item in list_toSort if isinstance(item, str)]

        return numbers, words 


print(sortingList(["banana", 2, "hello", "Hey"]))

#Exercise 12
#Write a function to check if a string is a palindrome:

    >>>isPalindrome('radar')
    >>>True

    >>>isPalindrome('John)
    >>>False
#Missing Correction

#Exercise 13
#Write a function that returns the amount of words in a sentence with length > k:

def check_words(text, k):
    textCheckWord= text.split()
    total= sum(1 for word in textCheckWord if len(word) > k)
    return total

print(check_words("all right lets beguine a ou i lol let see", 3)) *Missing Correction*
#Exercise 14
#Write a function that returns the average value in a dictionary (assume the values are numeric):

def get_average(checkAvg):
    data =sum(checkAvg.values()) 
    divider= len(checkAvg.values())
    average = data / divider
    return average

print(get_average( {'a': 1,'b':2,'c':8,'d': 1}))
#Exercise 15
#Write a function that returns common divisors of 2 numbers:

    >>>CommonDiv(10,20)
    >>>[2,5,10]
#Missing Correction

#Exercise 16
#Write a function that test if a number is prime:

    >>>isPrime(11)
    >>>True
#Missing Correction

#Write a function that prints elements of a list if the index and the value are even:

    >>>weirdPrint([1,2,2,3,4,5])
    >>>[2,4]
#Missing Correction

#Exercise 18
#Write a function that accepts an undefined numbers of keyworded arguments and return the count of different types:

    >>>TypeCount(a=1,b='string',c=1.0,d=True,e=False)
    >>>int: 1, str:1 , float:1, bool:2
#Missing Correction

#Exercise 19
#Write a function that mimics the builtin .split() method for strings.
#By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
#Missing Correction

#Exercise 20
#Convert a string into password format.
def set_password(string):
    password = "*" * len(string)
    return password

print(set_password("hello"))

#Daily Challenge : Reverse Bits
number = bin(int(input("Enter a number: ")))
b = number[:2]
number = number[2:]
number = number[::-1]
for i in range(32-len(number)):
    number += "0"
print(int(b+number, 2))

#Daily Challenge : Sorting
items=[x for x in raw_input().split(',')]
items.sort()
print ','.join(items)


##Daily Challenge (Algorithm Advanced)
#Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
#\1. Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
import random


def couple_sum(num_list, couples=0):
    if len(num_list) == 0:
        return couples
    first = num_list.pop(0)
    for match in num_list:
        if first+match == 3728:
            couples += 1
    couples = couple_sum(num_list, couples)
    return couples


list_of_numbers = [random.randint(0, 10000) for _ in range(900)]
print(couple_sum(list_of_numbers))