

#Exercises XP
#Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Persian(Cat):
    def sing(self, sounds):
        return f'{sounds}'

my_cats = [Bengal('fluffy', 5), Chartreux('princess', 2), Persian('cat', 7)]
my_pets = Pets(my_cats)
my_pets.walk()


#Exercise 2 : Dogs
#Create a class named Dog with the attributes name, age, weight
#Implement the following methods for the class:
#bark: returns a string of “ barks”.
#run_speed: returns the dogs running speed (weight/age *10).
#fight : gets parameter of other_dog, returns string of which dog won the fight between them, whichever has a higher run_speedweight* should win.
#Create 3 dogs and use some of your methods
#exercise1.py

class Dog:

    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight


    def bark(self):
        return("bark, bark, bark")


    def run_speed(self):
        running_speed = self.weight/(self.age*10)
        return running_speed


    def fight(self, other_dog):
        running_speed = self.run_speed()
        if running_speed*self.weight > other_dog.run_speed()*other_dog.weight:
            print(f"{self.name} is winning")
        else:
            print(f"{other_dog.name} is winning")


d1 = Dog("Bla", 10, 50)
d2 = Dog("Blub", 8, 60)
d3 = Dog("Rex", 15, 100)

d1.fight(d2)
d3.fight(d1)
d2.fight(d3)


#Exercise 3 : Dogs Domesticated
#####“dog_name does a barrel roll”
#“dog_name stands on their back legs”
#“dog_name shakes your hand”
#“dog_name plays dead”
from exercise1 import Dog
import random

class Petdog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False


    def train(self):
        self.bark()
        self.trained = True 

    def play(self,*args):
        lst = ""
        for ar in args:
            lst = lst +" " + ar.name
        print(f"{lst} all play together")  

    def do_a_trick(self):
        if self.trained:
            x = random.randint(0,3) 
            if x == 0:
                print(f"{self.name} does a barrel roll")       
            elif x == 1:
                print(f"{self.name} stands on his back legs")
            elif x == 2:
                print(f"{self.name} shakes your hand") 
            elif x == 3:
                print(f"{self.name} plays dead")

dg1 =Petdog("joe",3,50)            
dg2 =Petdog("moe",3,50)            
dg3 =Petdog("seven",3,50)            
dg4 =Petdog("star",3,50)
dg1.train()
dg3.train()
dg4.train()

dg1.do_a_trick()
dg2.do_a_trick()
dg3.do_a_trick()
dg4.do_a_trick()
dg1.play(dg1,dg2,dg3,dg4)


#Exercise 4 : Family
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulation on the new born!")

    def is_18(self, name):
        for member in self.members:
            if name == member["name"] and member["age"] > 17:
                return True
        return False

    def __repr__(self):
        temp = ""
        for member in self.members:
            temp += f'{member["name"]}, {member["age"]}, {member["gender"]}, {member["is_child"]}\n'
        return temp


fam = Family([
    {
        'name': 'Michael',
        'age': 35,
        'gender': 'Male',
        'is_child': False
    },
    {
        'name': 'Sarah',
        'age': 32,
        'gender': 'Female',
        'is_child': False
    }
], "Lest")

print(repr(fam))
fam.born(name='Bobby', age=0, gender='Male', is_child=True)
print(repr(fam))
print(fam.is_18("Bobby"))
print(fam.is_18("Michael"))


#Exercise 5 : TheIncredibles Family
class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        for member in self.members:
            if name == member["name"] and member["age"] > 17:
                print(member["power"])
            elif name == member["name"] and member["age"] < 18:
                print("You have no power here!!")

    def incredible_presentation(self):
        temp = ""
        for member in self.members:
            temp += f'{member["incredible_name"]}: {member["power"]}\n'
        return temp


inc_fam = TheIncredibles([
    {
        'name': 'Bob',
        'age': 40,
        'gender': 'Male',
        'is_child': False,
        'power': 'Super Strength',
        'incredible_name': 'Mr. Incredible'
    },
    {
        'name': 'Helen',
        'age': 36,
        'gender': 'Female',
        'is_child': False,
        'power': 'Elastic Body',
        'incredible_name': 'Elastigirl'
    },
    {
        'name': 'Violet',
        'age': 14,
        'gender': 'Female',
        'is_child': True,
        'power': "Invisibility & Force Shield",
        'incredible_name': "Violet"
    },
    {
        'name': 'Dash',
        'age': 10,
        'gender': 'Male',
        'is_child': True,
        'power': 'Super Speed',
        'incredible_name': 'Dash'
    }
], "Parr")

print(repr(inc_fam))
print(inc_fam.incredible_presentation())
inc_fam.born(name='Jack', age=0, gender='Male', is_child=True, power="Unknown Power", incredible_name="Jack")
print(repr(inc_fam))
print(inc_fam.incredible_presentation())


#Exercises XP GOLD
#Exercise 1: Bank Account
class BankAccount:
    def __init__(self, username, password, balance, authenticated=False):
        self.balance = balance
        self.username = username
        self.password = password
        self.authentification = authenticated

    def authenticated(self, username, password):
        if self.username == username and self.password == password:
            self.authentification = True

    def deposit(self, deposit_amount):
        if self.authentification == True:
            if deposit_amount > 0:
                self.balance += deposit_amount
                print(f'The balance of your account is {self.balance}')
            else:
                raise Exception('The deposit has to be positive')
        else:
            raise Exception("You did not being authenticated")

    def withdraw(self, withdraw_amount):
        if self.authentification == True:
            if 0 < withdraw_amount <= self.balance:
                self.balance -= withdraw_amount
                print(f'The balance of your account is {self.balance}')
            elif withdraw_amount >= self.balance:
                print('You don\'t have enough money')
            else:
                raise Exception('The deposit has to be positive')
        else:
            raise Exception("You did not being authenticated")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance, authenticated=False, minimum_balance=0):
        super().__init__(username, password, balance, authenticated=False)
        self.minimum_balance = minimum_balance

    def withdraw(self, withdraw_amount):
        if self.balance > self.minimum_balance:
            super().withdraw(withdraw_amount)
        else:
            raise Exception('You can\'t withdraw')


class ATM():
    def __init__(self, account_list, try_limit):
        for account in account_list:
            if isinstance(account, BankAccount) == True or isinstance(account, MinimumBalanceAccount) == True:
                self.account_list = account_list
            else:
                print(f'the account {account} is unvailable')

        try:
            assert try_limit > 0
        except:
            print("It is not a positive number")
            self.try_limit = 2
        else:
            self.try_limit = try_limit

        self.current_tries = 0

    def show_main_menu(self):
        ans = True
        while ans:
            print(''' 
            1. Log in
            2. Exit
            ''')
            ans = input('What would you like to do?')
            if ans == '1':
                return self.log_in()
            elif ans == "":
                print("\n Not Valid Choice Try again")
                return self.show_main_menu()
            elif ans == '2':
                print("\n Goodbye")
                return

    def log_in(self):
        username = input('Enter the username')
        password = input('Enter password')
        for account in self.account_list:
            if account.username == username and account.password == password:
                return self.show_account_menu(account)
        else:
            self.current_tries += 1
            while self.current_tries < self.try_limit:
                return self.log_in()
            else:
                print('You reached max tries')
                return

    def show_account_menu(self, account):
        if isinstance(account, BankAccount) == True or isinstance(account, MinimumBalanceAccount) == True:
            self.account = account
        account.authentification = True
        ans = True
        while ans:
            print(''' 
            1. Deposit
            2. Withdraw
            3. Exit
            ''')
            ans = input('What would you like to do?')
            if ans == '3':
                print("\n Goodbye")
                return
            elif ans == '1':
                deposit = int(input("Enter the amount"))
                return account.deposit(deposit)
            elif ans == '2':
                withdraw = int(input('Enter the amount'))
                return account.withdraw(withdraw)


account1 = BankAccount('yona', '1234', 500)
account2 = BankAccount('lea', '134', 800)
accounts = [account1, account2]

atm = ATM(accounts, 2)
atm.show_main_menu()


#Exercises XP NINJA
#Exercise 1 : Conway’s Game Of Life
from random import choice


class Grid:
    def __init__(self, size):
        self.grid = [[choice([Alive(column, row), Dead(column, row)]) for column in range(size)] for row in range(size)]


class P_Grid:
    def __init__(self, g):
        grid = []
        for row in g.grid:
            r = []
            for column in row:
                if type(column) == Alive:
                    r.append(P_Alive(column.x, column.y, Neighbours(TheGrid.grid[column.x][column.y], TheGrid.grid).count()))
                elif type(column) == Dead:
                    r.append(P_Dead(column.x, column.y, Neighbours(TheGrid.grid[column.x][column.y], TheGrid.grid).count()))
            grid.append(r[:])
        self.g = grid

    def update(self):
        for row in self.g:
            for cell in row:
                count = Neighbours(cell, self.g).count()
                if count < 2 or count > 3:
                    cell = P_Dead(cell.x, cell.y, count)
                elif type(cell) == P_Dead and count == 3:
                    cell = P_Alive(cell.x, cell.y, count)
                elif 2 <= count <= 3:
                    cell = self


class Neighbours:
    def __init__(self, cell, grid):
        self.cell = cell
        self.grid = grid

    def count(self):
        c = 0
        for row in range(-1, 2):
            for column in range(-1, 2):
                try:
                    if type(self.grid[self.cell.x + row][self.cell.y + column]) == Alive or type(self.grid[self.cell.x + row][self.cell.y + column]) == P_Alive:
                        c += 1
                except IndexError:
                    pass
        return c


class Cell:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Alive(Cell):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.value = chr(9608)


class P_Alive(Alive):
    def __init__(self, x, y, count):
        super().__init__(x, y)
        self.count = count - 1
        self.value = chr(9608)

    def population(self):
        return P_Dead(self.x, self.y, self.count) if self.count < 2 or self.count > 3 else self


class Dead(Cell):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.value = "0"


class P_Dead(Dead):
    def __init__(self, x, y, count):
        super().__init__(x, y)
        self.count = count
        self.value = "0"

    def population(self):
        return P_Alive(self.x, self.y, self.count) if self.count == 3 else self


TheGrid = Grid(10)
for i in TheGrid.grid:
    for y in i:
        print(y.value, end=" ")
    print()
print()


# print(Neighbours(TheGrid.grid[1][1], TheGrid.grid).count())


TheP_Grid = P_Grid(TheGrid)
for oo in range(2):
    for i in TheP_Grid.g:
        for cell in i:
            cell = cell.population()
            print(cell.value, end=" ")
        print()
    print()
    TheP_Grid.update()
    for i in TheP_Grid.g:
        for y in i:
            print(y.count, end=" ")
        print()
    print()


#Daily Challenge : DNA
import random


class Gene:
    def __init__(self):
        self.value = random.choice([0, 1])

    def mutate(self):
        if self.value == 0:
            self.value = 1
        else:
            self.value = 0
        return self


class Chromosome:
    def __init__(self, rand_mutate):
        self.Chromo = [Gene() for i in range(10)]
        self.rand_mutate = rand_mutate

    def mutate(self):
        self.Chromo = [gene.mutate() if random.random() < self.rand_mutate else gene for gene in self.Chromo]
        return self


class DNA:
    def __init__(self, rand_mutate=.5):
        self.D = [Chromosome(rand_mutate) for i in range(10)]
        self.rand_mutate = rand_mutate

    def mutate(self):
        self.D = [chromosome.mutate() if random.random() < self.rand_mutate else chromosome for chromosome in self.D]


class Organism:
    def __init__(self, DNA, para):
        self.DNA = DNA
        self.DNA.rand_mutate = para


temp = DNA()
for chrom in temp.D:
    for gene in chrom.Chromo:
        print(gene.value, end=" ")
    print()
print()
org = Organism(temp, .25)
total = 0
while True: # this finds only 1 line since finding 10 lines of 10 1's will take forever
    count = 0
    for chrom in org.DNA.D:
        for gene in chrom.Chromo:
            count += gene.value
        if count == 10:
            break
        else:
            total += 1
            count = 0
    if count == 10:
        break
    org.DNA.mutate()
print(total)


#Daily Challenge - Pagination
import math

class Pagination:

    def __init__(self, items: list = None, page_size: int = 10) -> None:
        if items is not None:
            self.items = items
        else:
            self.items = []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start_idx = self.current_idx * self.page_size
        end_idx = start_idx  + self.page_size
        return self.items[start_idx : end_idx]

    def go_to_page(self, page_num: int):

        if page_num > self.total_pages or page_num < 1: 
            raise ValueError(f"Incorrect page number - {page_num}. Available - {self.total_pages}")

        self.current_idx = page_num - 1

    def first_page(self):
        self.go_to_page(1)
        return self

    def last_page(self):
        self.go_to_page(self.total_pages)
        return self

    def next_page(self):
        self.go_to_page(self.current_idx + 2)
        return self

    def previous_page(self):
        self.go_to_page(self.current_idx)
        return self

    # dunder method - double underscore under method
    def __str__(self) -> str:
        out = ""
        visible_items = self.get_visible_items()
        for item in visible_items:
            out += f'{item}\n'
        return out

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination()

print(p.items)

p.items.extend(alphabetList)
p = Pagination()

print(p.items)

# p_str = str(p)

# print(p_str)
