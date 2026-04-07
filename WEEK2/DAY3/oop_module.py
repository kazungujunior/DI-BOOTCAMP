#Exercise XP
#Exercise 1: Currencies
class Currency:
    def __init__(self, value, label):
        self.value = float(value)
        self.label = label

    def __str__(self):
        return f"{self.value}{self.label}"

    def __repr__(self):
        return f"currency: {self.label}\namount: {self.value}"

    def __int__(self):
        return int(self.value)

    def __add__(self, other):
        return self.value + other.value if self.label == other.labelelse else ValueError

    def __iadd__(self, other):
        return self.value + other.value if self.label == other.labelelse else ValueError

    def __sub__(self, other):
        return self.value - other.value if self.label == other.labelelse else ValueError

    def __isub__(self, other):
        return self.value - other.value if self.label == other.labelelse else ValueError

    def __mul__(self, other):
        return self.value * other.value if self.label == other.labelelse else ValueError

    def __imul__(self, other):
        return self.value * other.value if self.label == other.labelelse else ValueError

    def __divmod__(self, other):
        return self.value / other.value if self.label == other.labelelse else ValueError

    def __idiv__(self, other):
        return self.value / other.value if self.label == other.labelelse else ValueError


dollar = Currency(5, "$")
print(dir(dollar))
print(type(dollar))


#Exercise 2: Import
#Instructions
#In a file named func.py create a function that adds 2 number, and prints the result
#In a file namedexercise_one.py import and the function
#Hint: You can use the the following syntaxes:

import module_name 

#OR 

from module_name import function_name 

#OR 

from module_name import function_name as fn 

#OR

import module_name as mn
function.py

def display_message():
    print("i am learning about functions in python")

display_message()

#exercise.py

from function import display_message as fn

fn()


#Exercise 3: String module
#Instructions
#Generate random String of length 5
#Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
#Hint: use the string module
import string
import random
letters = string.ascii_letters
random_string = " "
for i in range(10):
    random_string += random.choice(letters)

print(random_string)


# Exercise 5: Amount of time left until January 1st
#1.Create a function that displays the amount of time left from now until January 1st.
#(Example: the 1st January is in 10 days and 10:34:01hours)

import datetime

def january():
    print(f"The 1. of january is in {datetime.datetime(2022, 1, 1)-datetime.datetime.today().replace(microsecond=0)}")

january()


# Exercise 6: Birthday and minutes
def how_long_did_u_live(bd='07.11.80 20:59:59'):
    """
    Info: return result in min
    """

    bd_obj = datetime.strptime(bd, '%d.%m.%y %H:%M:%S')
    today = datetime.now()

    delta = today - bd_obj

    result = delta.days * 24 * 60 + delta.seconds // 60 + (delta.seconds // 60) % 60  # days in min + h --> min + min

    return result


print(f"you totally have ({how_long_did_u_live()}) min by now")


 #Exercise 7 : Faker Module
#Install the faker module, and read the documentation.
#Create an empty list called users. Tip: It’s a list of dictionaries
#Create a function that adds dictionaries to the users list. Each user has the properties: name, adress, langage_spoken. Use faker to populate them with fake data.
from faker import Faker

faker = Faker()

input_value = int(input("How many fake users? "))

new_dict = {}
users = []

def faker_add(amount):
    for _ in range(amount):
        new_dict['name'] = faker.name()
        new_dict['email'] = faker.email()
        new_dict['adress'] = faker.address()
        users.append(new_dict)
    print(users)

faker_add(input_value)


#Mini-project


#Mini-project: Characters Game
class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, other):
        self.life -= 1


class Druid(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life=20, attack=10)
        self.attack = attack
        print('I am a Druid')

    def meditate(self):
        self.life += 10
        self.attack -= 2
        return f'Number of life of {self.name}: {self.life} \nand number of attack  of {self.name}: {self.attack}'

    def animal_help(self):
        self.attack -= 5
        return f'Number of attack of {self.name}: {self.attack} '

    def fight(self, other):
        other.life -= (0.75 * self.life + 0.75 * self.attack)
        return f'Number of life of {other.name}: {other.life} '


class Warior(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life=20, attack=10)
        self.attack = attack
        print('I am a Warior')
        if self.life < 1 or self.attack < 1:
            return f'{self.name} you lose '

    def brawl(self, other):
        self.life += 0.5 * self.attack
        other.life -= 2 * self.attack
        if other.life < 1:
            return f'{other.name} you lose '
        else:
            return f'Number of life of {self.name} : {self.life}\nNumber of life of {other.name} : {other.life}'

    def train(self):
        self.life *= 2
        self.attack *= 2
        return f'Number of life of {self.name}: {self.life} \nand number of attack  of {self.name}: {self.attack}'

    def roar(self, other):
        other.attack -= 3
        if other.attack < 1:
            return f'{other.name} you lose'
        else:
            return f'Number of attack of {other.name}: {other.attack}'


class Mage(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life=20, attack=10)
        self.attack = attack
        print('I am a Mage')

    def curse(self, other):
        other.attack -= 2
        if other.attack < 1:
            return f'{other.name} you lose'
        else:
            return f'Number of attack of {other.name}: {other.attack}'

    def summon(self):
        self.attack += 3
        return f'Number of attack of {self.name}: {self.attack}'

    def cast_spell(self, other):
        if self.life < 1:
            return f'{self.name} you lose'
        else:
            num = int(self.attack / self.life)
            other.life -= num
            if other.attack < 1:
                return f'{other.name} you lose'
            else:
                return f'Number of life of {other.name} : {other.life}'


druide1 = Druid('Panoramix')
warior1 = Warior('Asterix')
mage1 = Mage('Merlin')

print(druide1.meditate())
print(druide1.animal_help())
print(druide1.fight(warior1))

print(warior1.brawl(mage1))
print(warior1.train())
print(warior1.roar(druide1))

print(mage1.curse(druide1))
print(mage1.summon())
print(mage1.cast_spell(warior1)
      )


#Exercise XP GOLD


#Exercise 1 : Regular Expression #1
#Instructions
#Hint: Use the RegEx (module)

#Use the regular expression module to extract numbers from a string.

#Example

return_numbers('k5k3q2g5z6x9bn') 
#// Excepted output : 532569
import re

def return_numbers(string):
    number = re.findall('[0-9]',string)
    for i in number:
        print(i,end='')
    print('')

return_numbers('k5k3q2g5z6x9bn') 


#Exercise 2 : Regular Expression #1
#Hint: Use RegEx (module)

#Ask the user for his full name (example: “John Doe”), and check the validity of his answer:
#The name should contain only letters.
#The name should contain only one space.
#The first letter of each name should be upper cased.
import re

def validity_name():
    full_name = input('Enter your full name ')

    if len(re.findall('[0-9]',full_name ))>0:
        print('The name should contain only letters.')
        return validity_name()
    elif len(re.findall('[ ]',full_name))>1:
        print('The name should contain only one space.')
        return validity_name()
    elif (full_name.title()) != full_name:
        print('The first letter of each name should be upper cased')
        return validity_name()
    else:
      print("great")

validity_name()


#Exercise 3: Python Password Generator
#Part of the solution - without Question3

import re

class Password:
    def __init__(self):
        pass

    def check_validity(self):
        password = input('Enter your password ')
        if re.search('[0-9]', password) is None:
            print('Password has to contain at least 1 digit')
            return self.check_validity()
        elif len(password)<6 or len(password)>30:
            print('Length of the password has to be between 6 and 30 characters')
            return self.check_validity()
        elif re.search('[a-z]', password) is None:
            print('Password has to contain at least 1 lower-case character')
            return self.check_validity()
        elif re.search('[A-Z]', password) is None:
            print('Password has to contain at least 1 upper-case character')
            return self.check_validity()
        elif re.search("[$&+,:;=?@#|'<>.^*()%!-]", password) is None:
            print('Password has to contain at least 1 special character')
            return self.check_validity()
        else:
            print(f'Your password is {password}, keep it in a safe place!')


new = Password()
new.check_validity()


#Exercise XP NINJA


#Exercise 1 : Temperature

class Kelvin:
    def __init__(self, temp):
        self.temp = temp

    def k_to_c(self):
        return Celsius(self.temp + 273)

    def k_to_f(self):
        return Fahrenheit(9 / 5 * (self.temp - 273) + 32)


class Celsius:
    def __init__(self, temp):
        self.temp = temp

    def c_to_k(self):
        return Kelvin(self.temp - 273)

    def c_to_f(self):
        return Fahrenheit(9 / 5 * self.temp + 32)


class Fahrenheit:
    def __init__(self, temp):
        self.temp = temp

    def f_to_k(self):
        return Kelvin(5 / 9 * (self.temp - 32) + 273.15)

    def f_to_c(self):
        return Celsius((self.temp - 32) / 1.8)


#Exercise 2: In The Quantum Realm
class QuantumParticle:
    def __init__(self, name, position, momentum, spin):
        self.name = name
        self.x = position
        self.p = momentum
        self.spin = spin
        self.partner = None

    def __repr__(self):
        if not self.partner:
            return f"Quantum particle {self.name} located at position: {self.x} with momentum: {self.p:.3f} and spin {self.spin}"
        else:
            return f"{self.name} located at position: {self.x} with momentum: {self.p:.3f} and spin {self.spin} is entangled with {self.partner.name}"    

    def position_measurement(self):
        self.x = random.randint(1,10)
        self.p  = random.random() * 10
        print("Quantum Interferences!")

    def momentum_measurement(self):
        self.x = random.randint(1,10)
        self.p  = random.random() * 10
        print("Quantum Interferences!")

    def spin_measurement(self):
        self.spin = random.choice([0.5, -0.5])
        if self.partner:
            self.partner.spin = self.spin * -1
            print("Spooky stuff is happening!")

    def entangle(self, other):
        if not (isinstance(other, QuantumParticle)):
            print("Only two quantum particles can entangle with each other")
            return
        self.partner = other
        other.partner = self
        print(f"{self.name} is now entangled with {other.name}!")

p1 = QuantumParticle('P1', 1, 5, 0)
p2 = QuantumParticle('P2', 2, 4, -0.5)
p3 = QuantumParticle('P3', 4, 7.44, 0.5)

print(p1)
print(p2)
print(p3)
p1.momentum_measurement()
print(p1)
p2.entangle(p3)
print(p2)
print(p3)
p3.spin_measurement()
print(p2)
p2.spin_measurement()
print(p2)
print(p3)


#Daily Challenge : Circle
import math


class Circle:
    def __init__(self,radius,str):
        self.str=str
        self.radius = radius if str=="Radius" else radius/2

    def circle_area(self):
        return math.pi*self.radius**2

    def __add__(self, other):
        return self.radius+other.radius

    def __gt__(self, other):
        return self.radius > other.radius

    def sort(self,other):
        d=[]
        d.append(int(self.radius))
        d.append(int(other.radius))
        d=sorted(d)
        return d


circle1 = Circle(5,"Radius")
circle2= Circle(8,"Diameter")

print(circle1.circle_area(),circle2.circle_area())
d=circle1+circle2
print(d)
print(circle1>circle2)

print(circle1.sort(circle2))


#Daily Challenge : Circle - other solution
import turtle
import pprint as pp
class Circle():
    '''A class initialized with radius or diameter of a circle'''
    def __init__(self, radius=0, diameter=0) -> None:
        self.radius = float(radius)
        self.diameter = float(diameter)

    @classmethod
    def from_radius(cls, radius):
        return cls(radius=radius, diameter=radius*2)

    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius=diameter/2, diameter=diameter)

    def circle_area(self) -> float:
        '''calculates the area of the circle'''
        return  print(3.14 * self.radius**2)

    def print_circle(self): #what is the output?
        '''prints the circle with given area using module turtle'''
        output = turtle.circle(self.circle_area())
        return output

    def __add__(self,other)->object:
        '''adds two circles'''
        return self.diameter + other.diameter
        # return Circle(self.radius + other.radius) # returns a new circle object

    def __lt__(self, other)->str:
        '''compare two circles based on their radius'''
        return self.radius < other.radius

    def __eq__(self, other):
        '''compare if two circles are equal'''
        return self.circle_area() == other.circle_area()

    def __repr__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"

    def sort_circles(self, lst):
        '''sorts a list of circles'''
        to_sort = [self]
        to_sort.extend(lst)
        sorted_circles = sorted(to_sort)
        return sorted_circles

circleA = Circle.from_radius(2)
circleB = Circle.from_diameter(4)
circleC = Circle(3,6)
obj_repr = repr(circleC) #Using __repr__ to get a string representation of the object
print('obj_repr =', obj_repr)
new_circleD = eval(obj_repr) #creates a copy of circleC using eval
print(f"String representation using __repr__: {obj_repr}")

pp.pprint(circleA)

print(f'circleA radius:{circleA.radius} | diameter: {circleA.diameter}')
print(f'circleB radius:{circleB.radius} | diameter: {circleB.diameter}')
print(f'circleC radius:{circleC.radius} | diameter: {circleC.diameter}')
print(f'circleD radius:{new_circleD.radius} | diameter: {new_circleD.diameter}')

# circleA.print_circle()
circleA.circle_area()
print(circleA + circleB)
circles_to_sort = [circleB, circleC]
sorted_circles = circleA.sort_circles(circles_to_sort)

for circle in sorted_circles:
    print(f'Circle radius: {circle.radius} | diameter: {circle.diameter}')
print(circleA == circleB)


#Daily Challenge : Translator
#Consider this list

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
Look at this result :
{"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
#You have to recreate the result using a translator module.

from translate import Translator
translator = Translator(from_lang="french",to_lang="english")

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

dict = {}

for el in french_words:
    dict[translator.translate(el)] = el

print(dict)


#Daily challenge : Information from the users
list_of_everyone = []
while True:
    personal_info = input('Please enter your name, age and score, seperated by commas. If there are no more, enter "quit"')
    if personal_info == 'quit':
        break
    else :
        personal_info_tuple = tuple(personal_info.split(', '))
        list_of_everyone.append(personal_info_tuple)
sorted_list = sorted(list_of_everyone, key=lambda tup: (tup[0], tup[1], tup[2]))
print(sorted_list)


#Mini-project: Bank Account Management System
class BankAccount:
    # Class attributes to track total accounts, all accounts, and a default interest rate
    total_accounts = 0
    all_accounts = []
    interest_rate = 0.03  # 3% interest rate for savings accounts
    def _init_(self, account_type: str, initial_balance: float = 0.0):
        self._balance = initial_balance
        self.account_type = account_type
        self.transaction_history = []
        self.account_number = BankAccount.total_accounts + 1
        BankAccount.total_accounts += 1
        BankAccount.all_accounts.append(self)
    @property
    def balance(self):
        """Provides read-only access to the account balance."""
        return self._balance
    @property
    def account_type(self):
        """Getter for account_type. Ensures the account type is valid."""
        return self._account_type
    @account_type.setter
    def account_type(self, value):
        """Setter for account_type. Validates the account type before setting it."""
        if not BankAccount.validate_account_type(value):
            raise ValueError("Invalid account type. Must be 'savings' or 'checking'.")
        self._account_type = value
    @classmethod
    def get_total_accounts(cls):
        """Returns the total number of accounts created."""
        return cls.total_accounts
    @classmethod
    def find_account_by_number(cls, account_number):
        """Finds and returns an account by its account number."""
        for account in cls.all_accounts:
            if account.account_number == account_number:
                return account
        return None
    @classmethod
    def total_balances(cls):
        """Returns the sum of balances across all accounts."""
        return sum(account.balance for account in cls.all_accounts)
    @staticmethod
    def validate_account_type(account_type):
        """Validates the account type to ensure it's either 'savings' or 'checking'."""
        return account_type in ["savings", "checking"]
    def deposit(self, amount):
        """Adds money to the account and logs the transaction."""
        if amount > 0:
            self._balance += amount
            self.transaction_history.append(f"Deposited: ${amount}")
        else:
            raise ValueError("Deposit amount must be positive.")
    def withdraw(self, amount):
        """Withdraws money from the account if the balance allows, and logs the transaction."""
        if amount > self._balance:
            raise ValueError("Insufficient balance.")
        self._balance -= amount
        self.transaction_history.append(f"Withdrew: ${amount}")
    def apply_interest(self):
        """Applies interest to savings accounts and logs the interest application."""
        if self._account_type == "savings":
            self._balance += self._balance * BankAccount.interest_rate
            self.transaction_history.append(f"Interest applied at rate: {BankAccount.interest_rate * 100}%")
# Example Usage
if _name_ == "_main_":
    # Create bank accounts
    account1 = BankAccount("savings", 1000)
    account2 = BankAccount("checking", 500)
    account3 = BankAccount("savings", 2000)
    # Deposit and withdraw money
    account1.deposit(300)
    account2.withdraw(200)
    # Apply interest to the savings accounts
    account1.apply_interest()
    account3.apply_interest()
    # Find account by account number
    found_account = BankAccount.find_account_by_number(2)
    if found_account:
        print(f"Found account #{found_account.account_number} with balance: ${found_account.balance}")
    # Display total balances across all accounts
    print(f"Total balances across all accounts: ${BankAccount.total_balances()}")
    # Display total accounts created
    print(f"Total accounts created: {BankAccount.get_total_accounts()}")