//Exercises
//Exercise 1 : Simple if/else statement
let x = 5;
let y = 55;
if (x > y) {
    console.log(x + ' is the bigger number');
} else if (x < y) {
    console.log(y + ' is the bigger number');
}

//Exercise 2 : Chihuahua
let newDog = "Chihuahua";

console.log(newDog.length);

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == 'Chihuahua') {
    console.log('I LOVE Chihuahua, it’s my favorite dog')
} else {
    console.log('I dont care, I prefer CATS')
};

//Exercise 3 : Even or not Even
let numb = parseFloat(prompt('Give me a number'));
if (numb % 2 == 0) {
    console.log(numb + ' is an even number');
} else {
    console.log(numb + ' is not an even number')
}


//Exercise 4 : Switch Case

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined


//Exercise 5 : Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let userCount = users.length;
switch(userCount) {
    case 0:
        console.log('no one online');
        break;
    case 1:
        console.log(`${users[0]} online`);
        break;
    case 2:
        console.log(`${users[0]} and ${users[1]} online`);
        break;
    default:
        let remaining = userCount - 2;
        console.log(`${users[0]} and ${users[1]} and ${remaining} more online`);
        break;

}
//Exercises XP Gold
///Exercise 5 : The World Translator
let lang = prompt("which language do you speak?");

switch(lang) {
    case "French":
        alert("Bonjour");
        break;
    case "English":
        alert("Hello");
        break;
    case "Hebrew":
        alert("Shalom");
        break;
    default:
        alert('01110011 01101111 01110010 01110010 01111001');
}

//Exercise 6 : The Grade Assigner
let grade = parseFloat(prompt('What is your grade?'));

if (grade > 90) {
    console.log('A');
} else if (grade > 80 && grade <= 90) {
    console.log('B');
} else if (grade >= 70 && grade <= 80) {
    console.log('C');
} else {
    console.log('D');
}

//Exercise 7 : Verbing
let string = prompt("Type in a word");

if (string.endsWith("ing")) {
    alert (string + "ly")
} else if ((string.length) >= 3) {
    alert (string + "ing")
} else alert(string)

//Exercises XP Ninja
//Exercise 8: Age Difference
function computeYear() {
    let birth1 = 1996
    let birth2 = 1997
    let ageDiff = Math.abs(birth1 - birth2);
    let doubleYear;

    if (birth1 > birth2) {
        doubleYear = Number(birth1) + Number(ageDiff);
    } else {
        doubleYear = Number(birth2) + Number(ageDiff);
    }
    console.log(doubleYear)
}

computeYear()
//Exercise 8 : Zip codes
// Without Regex:

let zip = prompt("what is your zipcode ?");

if (zip.length !== 5 || isNaN(zip)) {
    console.log("ERROR")
} else {
    console.log("Very Good")
}

//With Regex:

let zipPrompt = prompt("Write your code here");
pattern = /^\d{5}$/;
console.log(pattern.test(zipPrompt))


//SOME EXPLANATIONS

Use ^ to fix the matching at the begining of the string, and right after newline. 
^ means that it has to start like this 

Use $ to fix matching at the end of the text.
$ means that it has to end like this

The regex matching 5 consecutive digits is:  \d{5}
The regex only numbers: \d 
Must not contain any spaces: \S
Must not be greater than 5 digits: \b\d{5}\b

//SOME HELP

https://regex101.com/
https://stackoverflow.com/questions/50813606/how-to-disallow-consecutive-five-digits-and-more-using-regex
https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
https://stackoverflow.com/questions/22082054/regex-to-match-if-no-space-is-found
https://www.regextester.com/110149
Exercise 9 : Secret Word
// Solution to delete all vowels : js
// https://stackoverflow.com/questions/53144030/how-do-i-remove-all-vowels-from-a-string-and-return-the-result-using-a-for-loop/53144045

let word = prompt("Enter a word");
let word2 = word;
word = word.replace(/[aeiouAEIOU]/gi, "");
console.log(word);

// BONUS  : replace vowels by "X" (to help the students but not the real solution)
word2 = word2.replace(/[aeiouAEIOU]/gi, "X");
console.log(word2);
//You need the g flag, and with the i flag you can save the repetition of vowels
//https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex

// BONUS Correction
let word = prompt("Enter a word");
let word3 = word;
console.log(word3);
word3 = word3.toLocaleLowerCase();
word3 = word3.split("");
console.log(word3)

for (i of word3){
    if( i == 'a') {
        word3.splice(word3.indexOf('a'), 1, 1)
    } else if( i == 'e') {
        word3.splice(word3.indexOf('e'), 1, 2)
    } else if( i == 'i') {
        word3.splice(word3.indexOf('i'), 1, 3)
    } else if( i == 'o') {
        word3.splice(word3.indexOf('o'), 1, 4)
    } else if( i == 'u') {
        word3.splice(word3.indexOf('u'), 1, 5)
    }
}

word3 = word3.join("");
console.log(word3);
Daily Challenge : Not Bad
let str = "This dinner is not very bad! I love it";
let array = str.split("");
let not = str.indexOf("not");
let bad = str.indexOf("bad");
if (not < bad && not != -1 && bad != -1) {
    array.splice(not, bad-not+3, "good");
    str = array.join("");
}
console.log(str);
#other way

const sentence = "The movie is not that bad, I like it"
const wordNot = sentence.indexOf("not")
const wordBad = sentence.indexOf("bad")

if (wordBad > wordNot && wordNot > 0) {
    sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad+3)
}
console.log(sentence);


//Exercises - W2D3

//Exercises
//Exercise 1 : Your favorite colors
let colors = ["blue", "orange", "green", "red", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i+1} color is ${colors[i]}.`)
}

//Bonus: 

let ordinals = ["st", "nd", "rd", "th"]

for (let i = 0; i < colors.length; i++) {
  if (i >= 3) {
    console.log(`My ${i+1}${ordinals[3]} color is ${colors[i]}.`)
  } else {
    console.log(`My ${i+1}${ordinals[i]} color is ${colors[i]}.`)
  }
}


//Exercise 2 : Secret Group
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let societyName = "";
for(name of names){
    societyName = societyName + name.charAt(0);
}
console.log(societyName);

//Exercise 3 : Repeat the question
let num;
do {
    num = prompt('Give me a number');
}
while(num < 10);

//Exercise 4 : List of people
let people = ["Greg", "Mary", "Devon", "James"];

for(let name of people){
    console.log(name);
}
people.shift();
people[2] = "Jason";
people.push('Nava');

for(let name of people){
    if(name == "Mary"){
        console.log(name)
        break;
    }
    console.log(name);
}

let copy = people.slice(1, 3);

let marysLocation = people.indexOf('Mary');
let foosLocation = people.indexOf('Foo');

let last = people[people.length - 1];

//Exercise 5 : Divisible by three
let num = prompt("Enter a number");
let array = num.split("");
let total = 0;
for (let i of array) {
    total += parseInt(i);
}
if (total % 3 == 0) {
    console.log("This number does divide by 3");
} else {
    console.log("This number does not divide by 3");
}

//Exercise 6 : Playing with numbers
let age = [20,5,12,43,98,55];
let sum = 0;
for (let i of age) {
    sum += i;
}
console.log(sum);
for (let i of age) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let big = 0;
for (let i of age) {
    if (i > big) {
        big = i;
    }
}
console.log(big);

//Exercises XP Objects
//Exercise 7 : Attendance
const guestList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

let name = prompt('What is your name');
if (guestList[name]) {
    console.log(`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}`);
} else {
    console.log("Hi! I'm a guest");
}

//Exercise 8 : Family
let family = {
    lastName: 'Beginsky',
    numberOfMembers: 3,
    city: 'Netanya'
}
for (let property in family) {
    console.log(property);
}

for (let property in family) {
    console.log(family[property]);
}

//Exercise 9 : Building management
console.log(building.number_levels);

console.log(`There are ${building.number_of_apt_by_level[1]} apartments on level one and ${building.number_of_apt_by_level[3]} on level three.`);

console.log(`${building.name_of_tenants[1]} has ${building.number_of_rooms_and_rent.Dan[0]} rooms in his apartment`);

if(building.number_of_rooms_and_rent.David[1] + building.number_of_rooms_and_rent.Sarah[1] > building.number_of_rooms_and_rent.Dan[1]){
    let newAmount = prompt("It's time to raise Dan's rent. What is his new rent price?");
    building.number_of_rooms_and_rent.Dan[1] = newAmount;
}

//Exercise 10 : Checking the BMI
let person1 = {
    fullName: "Guy Ganot",
    mass: 123123,
    height: 123,
    BMI: function() {
        return this.mass / this.height^2
    }
}
let person2 = {
    fullName: "Hadar Ganot",
    mass : 321321,
    height: 321,
    BMI: function() {
        return this.mass / this.height^2
    }
}
if (person1.BMI() > person2.BMI()) {
    console.log(person1.fullName);
} else {
    console.log(person2.fullName);
}
E//xercises XP Ninja
//Exercise 11 : Grade Average
let average = {}

let name = prompt("Enter name");
let choice = "";

do {
    another();
    choice = prompt("Type Yes if you want to add another course and No if you want the final calculation");
    if (choice == "No") {
        console.log(calc(average))
        break;
    }
} while (true)


function calc(average) {
    let score = [];
    let coe = [];
    for (let i in average) {
        score.push(parseInt(average[i]["score"]));
        coe.push(parseInt(average[i]["coefficient"]));      

    }
  let total = 0
    let totalscore = 0;
  let totalcoe = 0;
    for (let i = 0; i < score.length; i++) {
        totalscore += score[i]*coe[i];
    totalcoe += coe[i]
    }
    total = totalscore / totalcoe;
    return total;
}

function another() {
    let courseName = "";
    let grade = "";
    let coe = "";
    while (courseName == "" || !isNaN(courseName)) {
        courseName = prompt("Enter name of the course");
    }
    while (grade == "" || isNaN(grade)) {
        grade = prompt("Enter the grade");
    }
    while (coe == "" || isNaN(coe)) {
        coe = prompt("Enter the coefficient");
    }
    let course = {
        name: courseName,
        score: grade,
        coefficient: coe
    }
    average[courseName] = course;
  console.log(average)
}
//Daily Challenge : Stars
//With one loop

for (let i = 1; i <= 6; i++){
  let stars = "*".repeat(i)
  console.log(stars)
}

//With nested loops
for (let i = 1; i <= 6; i++){
    let char = ""
    for (let b = 0; b < i; b++){
      char += '*';
    }
    console.log(char);
}

// OR

let x,y,z;
for(x=0; x <= 6; x++){
  for (y=0; y < x; y++){ 
      z=z+"*";
  } 
  console.log(z);
  z="";
} 
//Daily Challenge : Bubble Sort

const lst = [5,0,9,1,7,4,2,6,3,8];

console.log("Before sort:")
console.log(lst.toString());
// result 5,0,9,1,7,4,2,6,3,8

let temp;

for (let i = 0; i < lst.length; i ++) {    
    for (let j = 0; j<lst.length-1; j++) {
        if (lst[j] < lst[j+1]) {
            temp = lst[j+1];
            lst[j+1] = lst[j];
            lst[j] = temp;
        }
    }
}
console.log("After sort:")
console.log(lst.toString());
// result- 9,8,7,6,5,4,3,2,1,0