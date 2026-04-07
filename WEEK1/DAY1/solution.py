#Exercises XP


#Exercise 1 : Hello World
print("Hello world\n" * 4)


#Exercise 2 : Some Math
print(99**3 *8)


#Exercise 3 : What is the output ?
print(5 < 3)
# false

print(3 == 3) 
# true

print(3 == "3") 
# false

print("3" > 3) 
# typeError: '>' not supported between instances of 'str' and 'int')

print("Hello" == "hello")
# false


#Exercise 4 : Your computer brand
computer_brand = "Dell"
print(f"I have a {computer_brand} computer.")


#Exercise 5: Your information
name = "Timothy"
age = 35
shoe_size = 9.5
info = f"My name is {name} and I am {age} years old. I wear {shoe_size} sized shoes."
print(info)


#Exercise 6: Odd or Even
number = input('Give me a number')
if int(number) % 2 == 0 :
    print('The number is even')
else : 
    print('The number is odd')


#Exercise 7 : What’s your name ?
#Write a script that asks the user for his name and determines whether or not you have the same name, print out a funny message based on the outcome
my_name = "lea"
user_name = input("What is your name?")

if user_name == my_name:
    print("lol we have the same name")
else:
    print("cool name!")


#Exercise 8 : Tall enough to ride a roller coaster
height = int(input("How tall are you in inches?"))
if (height*2.54) >= 145:
    print("you can ride the coaster")
else:
    print("you still need to grow")


#Exercises XP GOLD
#Exercise 1 : Hello World-I love Python
print("Hello world\n" *4, "I love Python\n" * 4, sep = "")


#Exercise 2 : What is the Season ?
month = input("Enter a month: ")
if 3 <= int(month) <= 5:
    print("Spring")
elif 6 <= int(month) <= 8:
    print("Summer")
elif 9 <= int(month) <= 11:
    print("Autumn")
else:
    print("Winter")


#Exercises XP NINJA
#Exercise 1 : Use the terminal
#No need for correction, an informative exercise



#Exercise 2 : Alias
#No need for correction, an informative exercise



#Exercise 3 : Outputs
print(3 <= 3 < 9)   # True
print(3 == 3 == 3)  # True
print(bool(0))  # False
print(bool(5 == "5"))   # False
print(bool(4 == 4) == bool("4" == "4")) # True
print(bool(bool(None))) # False
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10
print("x is", x) # True
print("y is", y) # False
print("a:", a) # 5
print("b:", b) # 10


