#Exercises XP
#Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dict1 = zip(keys, values)
print(dict(dict1))
#Exercise 2 : Cinemax #2
family = {
    'rick': 43, 
    'beth': 13, 
    'morty': 5, 
    'summer': 8,
    'baby': 2
}
for name, age in family.items():
    if age < 3:
        price = 0
    if age >= 3 and age <= 12:
        price = 10
    if age > 12:
        price = 15
    print(f"{name} pays ${price}")
#Exercise 3: Zara
store = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': [
        {'France': 'blue'},
        {'Spain': 'red'},
        {'US': ['pink', 'green']}
    ]
}
store['number_stores'] = 2;
for client in store["type_of_clothes"]:
    print(client)
store["country_creation"] = "spain"
store["international_competitors"].append("Desigual")
store.pop("creation_date")
print(store["international_competitors"][-1])
print(f"the major clothes' colors in the US are {store['major_color'][-1]['US']}")
print(len(store))
print(store.keys())
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}
store.update(more_on_zara)
print(store['number_stores'])
#Exercise 4 : Disney characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
print({name: users.index(name) for name in users})
print({users.index(name): name for name in users})
users_sorted = sorted(users)
print({name: users_sorted.index(name) for name in users_sorted})
users_2 = []
for name in users:
    if 'MPmp'.count(name[0]) == 1 and name.count("i") > 0:
        users_2.append(name)
print({name: users_2.index(name) for name in users_2})
OR

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"] 
indices = list(range(len(users)))  # [0,1,2,3,4]

disney_users_A = dict(zip(users, indices))
print(disney_users_A)

disney_users_B = dict(zip(indices, users))
print(disney_users_B)

disney_users_C = dict(zip(sorted(users), indices))
print(disney_users_C)

disney_users_D = {key: value for (key,value) in disney_users_A.items() if "i" in key}
print(disney_users_D)

disney_users_E = {key: value for (key,value) in disney_users_A.items() if key.startswith("M") or key.startswith("P")}
print(disney_users_E)

#Exercises XP GOLD
#Exercise 1: Birthday Look-Up
birthday = {"Denis": "01-01-1899",
            "Kevin": "06-01-1898",
            "Kily": "02-03-1894",
            "Lily": "10-10-1888",
            "Olga": "04-04-1878"}

inputName = input("Enter the person's name: ")
print(f"The birthday is: {birthday[inputName]}")

#Exercise 2: Birthdays Advanced
birthday = {"Denis": "01-01-1899",
            "Kevin": "06-01-1898",
            "Kily": "02-03-1894",
            "Lily": "10-10-1888",
            "Olga": "04-04-1878"}

for name in birthday.keys():
    print(name)

choise = input("Please choose a name: ")
try:
    print(birthday[choise])
except:
    print(f"Sorry, we don’t have birthday information for {choise}")

#Exercise 3: Add Your Own Birthday
birthday = {"Denis": "01-01-1899",
            "Kevin": "06-01-1898",
            "Kily": "02-03-1894",
            "Lily": "10-10-1888",
            "Olga": "04-04-1878"}

userName = input("What is your name")
userBirthday = input("What is your birthday")
birthday[userName] = userBirthday

for name in birthday.keys():
    print(name)
choise = input("Please choose a name: ")
try:
    print(birthday[choise])
except:
    print(f"Sorry, we don’t have birthday information for {choise}")

#Exercise 4: Fruit Shop:
items = {
  "banana": 4,
  "apple": 2,
  "orange": 1.5,
  "pear": 3
}

for fruit, price in items.items():
    print(f"The price of {fruit} is {price}")

for fruit, price in items.items():
    items[fruit] = {"price": price,
                    "quantity": 4}

print(items)
total_cost = sum([priceQuantityPair["price"]*priceQuantityPair["quantity"] for priceQuantityPair in items.values()])
print(total_cost)

#Exercise 4 : Cars
car_manuf = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet, tesla"
car_manuf = car_manuf.split(", ")
print(f"there are {len(car_manuf)} manufacturers on the list")
sorted(car_manuf).reverse()
print(car_manuf)
car_o = [name for name in car_manuf if name.count("o") > 0]
print(car_o)
#Other part

string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet, Kia"

array = string.split(", ")
print(f"There are {array.__len__()} manufacturers")

print(sorted(array, reverse=True))

import re
have_o = [car for car in array if re.match("\w*[Oo]+\w*", car)]
have_no_i = [car for car in array if re.match("\\b[^Ii]+\\b", car)]

print(f"{have_o.__len__()} have 'o' and {have_no_i.__len__()} have no 'i'")


no_duplicates = list(set(["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]))
print(no_duplicates)

no_duplicates_sorted = sorted(no_duplicates)

for company in no_duplicates_sorted:
    reversed = ''
    for char in company[::-1]:
        reversed += char
    print(reversed)

#Exercises XP NINJA
#Exercise 1: List Of Integers - Randoms
#Missing correction

#Exercise 2: Authentication CLI - Login:
#Missing correction

#Exercise 3: Authentication CLI - Signup:
#Missing correction

#Time challenge Perfect Number
num = input("Choose a number: ")
divisors = []

for x in range(1, int(num)):
    if int(num) % x == 0:
        divisors.append(x)

if sum(divisors) == int(num):
    print(num + " is a perfect number.")
else:
    print(num + " is not a perfect number")

#Timed Challenge #2 :Reverse The Sentence
sentence = input("Type a sentence: ")
words = sentence.split()
words.reverse()

message = ""
for x in words:
    message += x + " "

print(message)
OR

sentence = input("Please enter a sentence: ")
mylist = sentence.split(" ")
rev_list = []
for i in range(len(mylist) -1, -1, -1):
    rev_list.append(mylist[i])
print(" ".join(rev_list))
# Or just use list.reverse()


#Daily Challenge: Dictionary
#Challenge 1
dic = {}

for i,letter in enumerate("grapes"):
        if letter not in dic:
            dic[letter] = []
        dic[letter].append(i)

print(dic)
#Challenge 2
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

amount = int(wallet.replace("$",''))
newlist = []

for eachitem in store.keys():
  if int(items_purchase[eachitem].replace("$",'').replace(',','')) <= amount:
    newlist.append(eachitem)

if newlist == []:
  print('Nothing')
else:
  print(sorted(newlist))


#Daily Challenge: Ceasar Cypher
import string
alphabet_lower = list(string.ascii_lowercase)
alphabet_upper = list(string.ascii_uppercase)

def userCypher(message, shift, encrypt_or_decrypt):
    cyphered_message = ''
    extra_chars = [' ', ',', '.', '!', "'"]
    for letter in message:
        if letter in extra_chars:
            cyphered_message += letter
        else :
            upper_or_lower = alphabet_upper if letter.isupper() else alphabet_lower
            index_of_letter = upper_or_lower.index(letter) 
            if encrypt_or_decrypt == 'encrypt' :
                cyphered_message += upper_or_lower[index_of_letter - shift]
            else :
                if index_of_letter >= 26 - shift: 
                    new_index = index_of_letter + shift - 26
                    cyphered_message += upper_or_lower[new_index]
                else :
                    cyphered_message += upper_or_lower[index_of_letter + shift]
    return cyphered_message

def getCypherInfo():
    message = input("What is your message?")
    encrypt_or_decrypt = ""
    shift = 0
    while True:
        encrypt_or_decrypt = input('Would you like to encrypt or decrypt?')
        if encrypt_or_decrypt == 'encrypt' or encrypt_or_decrypt == 'decrypt':
            break
    while shift == 0:
        shift = int(input('Choose amount to shift the letters'))

    cypher_message = userCypher(message, shift, encrypt_or_decrypt)
    print(f"Here's your {encrypt_or_decrypt}ed message: {cypher_message}")

getCypherInfo()
