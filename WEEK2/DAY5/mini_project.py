#Mini-Project #1: Rock, Paper, Scissors
#game.py

from random import choice


class Game:
    def __init__(self):
        self.user = self.get_user_item()
        self.comp = self.get_computer_item()

    @staticmethod
    def get_user_item():
        user = input("Select (r)ock, (p)aper, (s)cissors: ")
        while user not in list("rps"):
            user = input("Please enter a valid input: ")
        return user

    @staticmethod
    def get_computer_item():
        return choice(["p", "r", "s"])

    def get_game_result(self):
        if self.user == "p" and self.comp == "r" or self.user == "r" and self.comp == "s" or self.user == "s" and self.comp == "p":
            return "Win"
        elif self.user == self.comp:
            return "Draw"
        return "Loss"

    def play(self):
        print(f"You chose: {self.user}. The computer chose: {self.comp}. Result: {self.get_game_result()}")
        return self.get_game_result()


#rock-paper-scissors.py

from game import Game


def get_user_menu_choice():
    choice = input("""Menu:
    (1) Play a new game
    (2) Show scores
     #  Press Enter to leave
     :  """)
    while choice not in ["1", "2", ""]:
        choice = input("Enter a valid choice: ")
    return choice


def print_results(results):
    print(f"""Game Results:
    You won {results['Win']} times
    You lost {results['Loss']} times
    You drew {results['Draw']} times""")


def main():
    scoreboard = {
        "Win": 0,
        "Loss": 0,
        "Draw": 0
    }
    choice = get_user_menu_choice()
    while choice != "":
        if choice == "1":
            new_game = Game()
            scoreboard[new_game.play()] += 1
        else:
            print_results(scoreboard)
        choice = get_user_menu_choice()
    print("Hope you had fun!")


main()


#Mini-Project #2 : Anagram Checker
#anagram_checker.py

import enchant
from itertools import permutations


class AnagramChecker:
    def __init__(self, word):
        if self.is_valid_word(word):
            self.word = word
        else:
            raise ValueError("The word is not in the english dictionary")

    @staticmethod
    def is_valid_word(word):
        d = enchant.Dict("en_US")
        return d.check(word)

    def __get_anagrams(self):
        return list(permutations(self.word))

    def valid_anagram_list(self):
        return ["".join(word) for word in self.__get_anagrams() if self.is_valid_word("".join(word))]


#anagrams.py

from anagram_checker import AnagramChecker


def show_menu():
    choice = input("""Menu:
    # Type a word
    # Or press Enter to leave
     :  """).strip().lower()
    while not choice.isalpha() and choice != "":
        choice = input("Enter a valid single word: ")
    return choice


def word_anagrams(word):
    word = AnagramChecker(word)
    print(f"""
YOUR WORD: {word.word}
this is a valid English word
Anagrams for your word: {word.valid_anagram_list()}""")


def main():
    user = show_menu()
    word_anagrams(user)

main()


#Mini-Project #2 : Anagram Checker - other solution
#anagrams.py

from anagram_checker import AnagramChecker

# ui logic

def show_menu():
    # welcoming
    # display a menu: press 'q' to quit, or enter to continue
    pass

def get_user_input():
    # get user input
    # validated it (check if it is a valid word)
    #  return it
    pass

def give_anagrams(word, user_input):
    anagram = AnagramChecker()
    anagram.get_anagrams(word)
    return anagrams
    # create an instance of AnagramChecker
    # get anagrams using the class AnagramChecker
    # display anagrams
    pass

def main():
    # show menu()
    # get user input()
    # print the output (return from give anagrams())
    pass


#anagram_checker.py

class AnagramChecker:
    def __init__(self) -> None:
        '''init method: words.txt opened into a variable (with open...)'''
        pass
    def is_valid_word(word):
        is_valid = False
        '''Checks if word is valid english word'''
        # hint: google how to check if a word is valid in english
        pass
    # return variable_name

    def get_anagrams(word):
        '''Returns a list of anagrams of the given word'''
        pass


#Daily Challenge : Using Modules
#Using the modules requests and time create a function that returns how long a webpage takes to load (how long it takes for a complete response to a request)Test your code with multiple sites such as google, ynet, imdb, etc..

import time
import requests

def time_to_load(url):
    start_time = time.time()
    response = requests.get(url)
    stop_time = time.time()
    print(f'The amount of time it takes a webpage to load is {stop_time - start_time} seconds')


time_to_load('https://developers.google.com/youtube/iframe_api_reference')


#Daily Challenge : OOP
#PART 1 :

1. What is a class?
A class is a blueprint for creating objects, or instances of the class. Classes contain information on how to instantiate objects, and define methods that instances (or the class itself) have access to.

2. What is an instance?
An instance is an object created from a class.

3. What is encapsulation?
Encapsulation is the idea that data and processes on that data are owned by a class. Other functions or classes outside of that class should not be able to directly change the data.

4. What is abstraction?
Abstraction is the process of exposing only relevant, higher level functionality in your class, and hiding unnecessary implementation details from the user. For example, you can sort a list using list.sort without having to know what specific sorting algorithm is being used.

5. What is inheritance?
Inheritance is when one class inherits properties and methods from another (called a parent or base) class.

6. What is multiple inheritance?
Multiple inheritance is when a class inherits from many other classes, not just one.

7. What is polymorphism?
Polymorphism is what allows us to use the same interface (or method) for instances of different classes.

8. What is method resolution order or MRO?
The method resolution order specifies the order in which Python searches classes when looking for a particular method.



#PART 2 :

from random import shuffle

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return "{} of {}".format(self.value, self.suit)

class Deck:
    def __init__(self):
        suits = ['Hearts','Diamonds','Clubs','Spades'] 
        values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def __repr__(self):
        return "Cards remaining in deck: {}".format(len(self.cards))

    def shuffle(self):
        if len(self.cards) < 52:
            raise ValueError("Only full decks can be shuffled")
        shuffle(self.cards)
        return self

    def deal(self):
        if len(self.cards) == 0:
            raise ValueError("All cards have been dealt")
        return self.cards.pop()