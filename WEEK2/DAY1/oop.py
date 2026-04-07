#Exercises XP
#Exercise 1: Cats
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age


cat1 = Cat("one", 1)
cat2 = Cat("two", 2)
cat3 = Cat("three", 3)


def oldest(*cats):
    old = cats[0]
    for cat in cats:
        if old.age < cat.age:
            old = cat
    return old


print(f"The oldest cat is {oldest(cat1, cat2, cat3).age} years old.")


#Exercise 2 : Dogs
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def __repr__(self):
        return f"{self.name} is a dog that is {self.height} cm tall."

    def talk(self):
        print("Woof!")

    def jump(self):
        jump_height = self.height *2
        print(self.name, "jumped", jump_height)

davids_dog = Dog("Rex", 50)
print(davids_dog)
davids_dog.talk()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog)
sarahs_dog.talk()
sarahs_dog.jump()

def find_winner():
    if sarahs_dog.height > davids_dog.height:
        sarahs_dog.winner = True
        davids_dog.winner = False
    else:
        davids_dog.winner = True
        sarahs_dog.winner = False

    print("David's dog is the winner:", davids_dog.winner)
    print("Sarah's dog is the winner:",sarahs_dog.winner)


#Exercise 3 : Who’s The Song Producer ?
class Songs:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


happy_bday = Songs(["Have a sunshine on you,",
                   "Happy Birthday to you !"])
happy_bday.sing_me_a_song()


#Exercise 4 : Afternoon At The Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.pens = {}

    def add_animal(self, new_animal):
        if self.animals.count(new_animal) == 0:
            self.animals.append(new_animal)

    def get_animals(self):
        print(", ".join(self.animals))

    def sell_animal(self, animal_sold):
        if self.animals.count(animal_sold) != 0:
            print(f"Goodbye {animal_sold}")
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} isnt in the zoo")

    def sort_animal(self):
        copy = self.animals[:]
        copy.sort()
        list_of_lists = []
        temp = list(copy.pop(0))
        while len(copy) > 0:
            if temp[0][0] == copy[0][0]:
                temp.append(copy.pop(0))
            else:
                list_of_lists.append(temp)
                temp = list(copy.pop(0))
        list_of_lists.append(temp)
        num_list = []
        for i in range(len(list_of_lists)):
            num_list.append(i+1)
        result_dict = dict((key, value) for key, value in zip(num_list, list_of_lists))
        self.pens = result_dict

    def get_pen(self):
        for pen in self.pens.items():
            print(f"in pen {pen[0]} there are: {pen[1]}")



new_york_zoo = Zoo("New_York")


#Exercises XP Gold
#Exercise 1 : Geometry
import math
class Circle:
    def __init__(self, radius=1):
        self.radius = radius

    def perimeter(self):
        return 2*math.pi*self.radius

    def area(self):
        return math.pi*self.radius**2

    def geo_info(self):
        print("A circle is all points in the same plane that lie at an equal distance from a center point.\nThe "
              "circle is only composed of the points on the border.\nYou could think of a circle as a hula "
              "hoop.\nIt's only the points on the border that are the circle.")


cir = Circle(10)
print(cir.perimeter())
print(cir.area())
print(cir.geo_info(


#Exercise 2 : Custom List Class
import random 
class My_List ():

    def __init__(self, input):
        if isinstance(input, list):
            self.standard_list = input
        else:
            print("That's not a list!")

    def reverse_list(self):
        reversed_list = self.standard_list[::-1]
        return reversed_list

    def sort_list(self):
        self.standard_list.sort()
        return self.standard_list

    def random_list(self):
        randomlist = []
        for i in range (len(self.standard_list)):
            n = random.randint(1,100)
            randomlist.append(n)
        return randomlist

test = My_List([1, 2, 3, 4])

print(test.reverse_list())
print(test.sort_list())
print(test.random_list())


#Exercise 3 : Restaurant Menu Manager
spice_code = {
    'A' : 'not spicy',
    'B' : 'a little spicy',
    'C' : 'very spicy'
}

class MenuManager:
    def __init__(self):
        self.menu = {}

    def show_items(self):
        for item in self.menu:
            print(item, self.menu[item])

    def add_item(self, name, price, spice, gluten):
        self.menu[name] = {
            'price' : price,
            'spice' : spice_code[spice],
            'GF'    : gluten
            }

    def update_item(self, name, price, spice, gluten):
        try:
            self.menu[name]['price'] = price
            self.menu[name]['spice'] = spice_code[spice]
            self.menu[name]['GF']    = gluten   
        except KeyError:
            print("Can't update if it's not there!")
            doit = input(f"Do you want to add '{name}' as a new item? (y for yes): ")
            if doit == 'y':
                self.add_item(name, price, spice, gluten)

    def remove_item(self, name):
        try:
            del self.menu[name]
        except KeyError:
            print("That ain't there, boss")


arbys = MenuManager()

#Exercises XP NINJA
#Exercise 1 : Call History
class Phone:
    def __init__(self, number):
        self.number = number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        self.call_history.append(f'Call to {other_phone.number}')
        other_phone.call_history.append(f'Call from {self.number}')

    def send_message(self, other_phone, content):
        message = {'from':self.number, 'to':other_phone.number, 'content':content}
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        output = [message for message in self.messages if message['from'] == self.number ]
        if output:
            for message in output: 
                print(f'Message to: {message["to"]}\n{message["content"]}') 
            else: print('______________________')
        else:
            print('No outgoing messages')

    def show_incoming_messages(self):
        output = [message for message in self.messages if message['to'] == self.number ]
        if output:
            print('Incoming messages:')
            for message in output: 
                print(f'Message from: {message["from"]}\n{message["content"]}') 
            else: print('______________________')
        else:
            print('No incoming messages')

    def show_messages_from(self, number):
        output = [message for message in self.messages if message['from'] == number]
        if output:
            print('Messages from {number} to you:')
            for message in output: 
                print(f"Message: {message['content']}\n") 
            else: 
                print('______________________')
        else:
            print('No messages from that number')


    def show_call_history(self):
        if self.call_history:
            for call in self.call_history:
                print(call)
            else:
                print('______________________')
        else:
            print('No calls')


#Daily challenge : Old MacDonald’s Farm
class Farm:
    def __init__(self):
        self.name = "McDonalds"
        self.animals = {}

    def get_info(self):
        print(f"{self.name}'s Farm".center(22))
        for animal in self.animals:
            print(f" {animal:<14} : {self.animals[animal]}")
        print('-'.join(list("EIEIO")).center(22))

    def add_animal(self, animal, number = 1):
        if animal in self.animals:
            self.animals[animal] += number
        else:
            self.animals[animal] = number

    def get_animal_types(self):
        return sorted(list(self.animals))

    def get_short_info(self):
        print(f"{self.name}'s farm has {', '.join(self.get_animal_types())}.")

macD = Farm()
macD.add_animal("cows", 5)
macD.add_animal("sheep")
macD.add_animal("sheep")
macD.add_animal("goats", 12)
macD.add_animal("hornswaggles", 2)
macD.get_info()
macD.get_short_info()