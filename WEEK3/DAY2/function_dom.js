 Exercises - W2D4

//Exercises
//Exercise Lesson : Keyless car
function checkDriverAge(age){
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}


//Exercises XP
//Exercise 1 : Information
//Exercise 2 : Tips
function calc_tip(str) {
    let money = str.split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    console.log(money);
    let tip = [];
    for (let i in money) {
        if (money[i] < 50) {
            tip.push(money[i]*0.2);
            money[i] += tip[i];
        }
        else if (money[i] < 200) {
            tip.push(money[i]*0.15);
            money[i] += tip[i];
        }
        else {
            tip.push(money[i]*0.1);
            money[i] += tip[i];
        }
    }
    return {money, tip};
}

console.log(calc_tip(prompt("Enter bills separated by spaces")));

//Exercise 3 : Find The Numbers Divisible By 23
function x23() {
    let array = [];
    for (let i = 0; i < 100; i+=1) {
    if (i%23 === 0){
      array.push(i);
    }
    }
    return array;
}

x23()

//Exercise 4 : Shopping List
let shoppingList = ["banana", "orange", "apple"];

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

function adjustStock(item){
    stock[item] -= 1;
}

function myBill(shoppingList){
    let total = 0;
    for(let item of shoppingList){
        if(stock[item] > 0){
            total += prices[item];
            adjustStock(item);
        }
    }
    return total;
}

console.log(myBill(shoppingList));

//Exercise 5 : What’s in my wallet ?
function changeEnough(money, total) {
    let check = 0;
    let worth = [.25, .10, .05, .01];
    for (let i = 0; i < money.length; i++) {
        check += Number(money[i])*Number(worth[i]);
    }
    if (check > total) {
        return true;
    }
    return false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));

//Exercise 6 : Vacations Costs
function hotel_cost(){
  let numNights;
  do {
        numNights = prompt('How many nights at the hotel?');
    } while (numNights == "" || null || undefined || isNaN(numNights));
  return 140 * numNights;
}

function plane_ride_cost(){
    let destination;
    do {
        destination = prompt('What is your destination?');
    } while (destination == "" || null || undefined || !isNaN(destination));

    switch(destination){
        case "London":
            return 183;
            break;
        case "Paris":
            return 220;
            break;
        default :
            return 300;
            break;
    }
}

function rental_car_cost(){
  let numDays;
  do {
        numDays = prompt('How many days of rental?');
    } while (numDays == "" || null || undefined || isNaN(numDays));
    if(numDays > 10){
        return (40 * numDays) * 0.95;
    } else {
        return 40 * numDays;
    }
}

function total_vacation_cost(){
    return hotel_cost() + plane_ride_cost() + rental_car_cost();
}

let totalCost = total_vacation_cost()
console.log(totalCost)


//Exercises XP Gold
//Exercise 1 : is_Blank
function is_Blank(str) {
    if (str.length == 0) {
        return true;
    }
    return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

//Exercise 2 : Abbrev_name
function abbrev_name(str) {
    let array = str.split(" ");
    return `${array[0]} ${array[1][0]}.`
}

console.log(abbrev_name("Robin Singh"));

//Exercise 3 : SwapCase
function swapCase(str) {
    str = str.split("");
    for (let i in str) {
        if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join("");
}

console.log(swapCase("The Quick Brown Fox"));

//Exercise 4 : Omnipresent value
function isOmnipresent(array, num) {
    for (let i of array) {
        if (i.indexOf(num) == -1) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));


//Exercises XP Ninja

//Exercise 1: Random Number
function randomEven() {
    let rand = Math.floor(Math.random()* 101);
    console.log(`The Random Number: ${rand}`);
    for (let i = 0; i < rand+1; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

randomEven();

//Exercise 2: Capitalized letters
function capitalize(str) {
    let array1 = str.split("");
    let array2 = str.split("");
    for (let i = 0; i < array1.length; i+=2) {
        array1[i] = array1[i].toUpperCase();
        array2[i+1] = array2[i+1].toUpperCase();
    }
    return [array1.join(""), array2.join("")];
}

console.log(capitalize("abcdef"));

//Exercise 3 : Is palindrome?
function is_palindrome(str) {
    let arr = str.split("");
    let arr1 = str.split("")
    arr1.reverse();
    console.log(arr);
    console.log(arr1);
    for (let i in arr) {
        if (arr[i] != arr1[i]) {
            return false;
        }
    }
    return true;
}

console.log(is_palindrome("madam"));

//Exercise 4 : Biggest Number
function biggestNumberInArray(array) {
    if (array.length == 0) {
        return 0;
    }
    let big = Number(array.shift());
    while (isNaN(big)) {
        big = Number(array.shift());
    }
    while (array.length > 0) {
        if (array[0] > big) {
            big = Number(array.shift());
        } else {
            array.shift();
        }
    }
    return big;
}

console.log(biggestNumberInArray([-1,0,3,'a',100, 99, 2, 99]))
console.log(biggestNumberInArray(['a', 3, 4, 2]))
console.log(biggestNumberInArray([]))

//Exercise 5: Unique Elements
function snowflake(array) {
    let array2 = [];
    while (array.length > 0) {
        console.log(array[0])
        if (array[0] != array2[array2.length-1]) {
            console.log("in")
            console.log(array2.indexOf(array[0]))
            array2.push(array.splice(array.indexOf(array[0]), 1));
            console.log("array1: "+array.toString())
            console.log("array2: "+array2.toString())
        } else {
            console.log("out")
            array.splice(array.indexOf(array[0]), 1);
        }
    }
    return array2;
}

console.log(snowflake([1,2,3,3,3,3,4,5]));

//Daily challenge : Words in the stars
function framedString (phrase) {
    let arr = phrase.split(", ")
    let longest = 0;

    for (w of arr) {
        if (w.length > longest) {
            longest = w.length
        }
    }
    let line = ""
    let something = ""
    for (i=0; i<longest+4; i++) {
        line += "*"
    }
    console.log(line)

    for (word of arr) {
        let numMarginR = longest +1 -word.length;
        rightSpaces = ""
        for (i=0; i<numMarginR; i++) {
            rightSpaces += " ";
        }
        console.log("* " + word + rightSpaces + "*")
    }
    console.log(line)
}

framedString("Hello, how, are, beauiful, you")
OR

function turnToArray(str) {
    return str.split(",");
}

function longestWord(array) {

    let big = array[0];
    for (let i in array) {
        if (array[i].length > big.length) {
            big = array[i];
        }
    }
    return Number(big.length);
}

function space(word, length) {
    let total = Number(length) - Number(word);
    return "\xa0".repeat(total);
}

function frame(str) {
    str = turnToArray(str);
    big = longestWord(str);
    console.log("*".repeat(big+4));
    for (let i = 0; i < str.length; i++) {
        console.log(`* ${str[i]}${space(str[i].length, big)} *`)
    }
    console.log("*".repeat(big+4));
}

frame(prompt("Enter words separated by commas"));

Exercises - W3D1
//Exercise
//Exercise 1 : Change the navbar
let nav = document.getElementById('navBar');
nav.setAttribute('id', 'socialNetworkNavigation');

let new_li = document.createElement('li');
let new_text = document.createTextNode('Logout');
new_li.appendChild(new_text);
document.getElementsByTagName('ul')[0].appendChild(new_li);

let first = document.querySelectorAll('li')[0].firstChild.firstChild;
let last = document.getElementsByTagName('ul')[0].lastChild.firstChild;
console.log(first.nodeValue);
console.log(last.nodeValue);

//Exercise 2 : Users
document.body.children[1].lastElementChild.innerHTML = "Richard";

let ul_list = document.getElementsByClassName('list');
for (let i of ul_list) {
    i.firstElementChild.innerHTML = "Alon";
}

let lists = document.getElementsByTagName('ul');
let list;
for(list of lists){
    let newLi = document.createElement('li');
    let newLiContent = document.createTextNode('Hey Students!');
    newLi.appendChild(newLiContent);
    list.appendChild(newLi);
}

ul_list[1].removeChild(ul_list[1].children[1]);

for (let i of ul_list) {
    i.classList.add("student_list");
}

ul_list[0].classList.add("university", "attendance")

//Exercise 3 : Change the logo
//NO NEED FOR THE SOLUTION

//Exercise 4 : Users and style
// Change the background color of the div to lightblue and increase its padding
let myDiv = document.getElementsByTagName('div');
myDiv = myDiv[0];

myDiv.style.backgroundColor = 'lightblue';
myDiv.style.padding = '2em';

//Don’t display the first name (John) and give a border to the second name (Pete)
let names = document.getElementsByTagName('li');
let john = names[0];
let pete = names[1];

john.style.display = 'none';
pete.style.border = '2px solid red';

//Change the font size of the whole HTML
document.body.style.fontSize = '30px';

//Check if the background color of the div is lightblue, if yes alert “Hello x and y” (x and y are the users : John and Pete)
if(myDiv.style.backgroundColor == 'lightblue'){
    alert('Hello ' + john.textContent + ' and ' + pete.textContent);
}

//Exercises XP Gold
//Exercise 5: My Book List
let allBooks = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81gvKPsewML._AC_SL1500_.jpg',
        alreadyRead: true
    }, 
    {
        title: 'Inferno',
        author: 'Dan Brown',
        image: 'https://images-na.ssl-images-amazon.com/images/I/915mr+JhBGL.jpg',
        alreadyRead: false
    }

]

let table = document.createElement('table');
for(let index in allBooks){
    let row = document.createElement('tr');

    for(let i=0; i<3; i++){
        let column = document.createElement('td');
        let text;
        let image;
        if(i == 0){
            text = document.createElement('P');
            text.innerHTML = allBooks[index].title;
            if(allBooks[index].alreadyRead == true){

                text.style.color = 'red';
            }
            column.appendChild(text);

        } else if (i == 1){
            text = document.createElement('P');
            text.innerHTML = 'Written by:' + allBooks[index].author;

            if(allBooks[index].alreadyRead == true){
                text.style.color = 'red';
            }
            column.appendChild(text);
        } else {
            image = document.createElement("img");
            image.setAttribute('src', allBooks[index].image);
            image.setAttribute('width', 100);
            column.appendChild(image);

        }
        row.appendChild(column);
        table.appendChild(row);
    }


}
document.body.appendChild(table);

//Exercise 5: Red table
  <script>
    let table = document.body.firstElementChild;
    // your code
    let rows = document.querySelectorAll('tr');
    let i;
    for(i=1; i <= rows.length; i++){
        let column = document.querySelector(`tr:nth-of-type(${i}) td:nth-of-type(${i})`);
        column.style.backgroundColor = 'red';
    }
  </script>

//Exercises XP Ninja
//Exercise 6: Calculator
function createCalendar(year, month){
    let totalDays = new Date(year, month, 00).getDate();
    month = month - 1;
    let dayOfWeek = new Date(year, month).getDay();
    let table = document.createElement('table');
    let i = 0;
    let dayCount = 1;
    while(i < 7){
        let week = document.createElement('tr');
        let x = 0;
        if(i==0){
            while(x < 7){
                let days = document.createElement('th');
                let weekDays;
                switch (x){
                    case 0:
                        weekDays = document.createTextNode('SU');
                        break;
                    case 1:
                        weekDays = document.createTextNode('MO');
                        break;
                    case 2:
                        weekDays = document.createTextNode('TU');
                        break;
                    case 3:
                        weekDays = document.createTextNode('WE');
                        break;
                    case 4:
                        weekDays = document.createTextNode('TH');
                        break;
                    case 5:
                        weekDays = document.createTextNode('FR');
                        break;
                    case 6:
                        weekDays = document.createTextNode('SA');
                        break;
                    default:
                        break;

                }
                days.appendChild(weekDays);
                week.appendChild(days);
                x++
            }
        } else {
            while(x < 7){
                let days = document.createElement('td');
                if(i==1 && x == dayOfWeek){
                    let dayNum = document.createTextNode(dayCount);
                    days.appendChild(dayNum);
                    dayCount ++
                } else if(dayCount > 1 && dayCount <= totalDays) {
                    let dayNum = document.createTextNode(dayCount);
                    days.appendChild(dayNum);

                    dayCount ++

                }

                week.appendChild(days);
                x++
            }
        }
        table.appendChild(week);
        i++
    }
    let body = document.querySelector('body');
    body.appendChild(table);
}

createCalendar(2020, 09)

//Daily Challenge : Planets
let solarSystem = {
    Mercury : {'moons' : 0, 'color': "orange"}, 
    Venus : {'moons': 0, 'color': "grey"}, 
    Earth : {'moons': 1, 'color': "blue"}, 
    Mars: {'moons' : 2, 'color': "red"}, 
    Jupiter: {'moons' : 67, 'color': "brown"}, 
    Saturn : {'moons': 62, 'color': "yellow"}, 
    Uranus : {'moons' : 27, 'color': "lightblue"}, 
    Neptune : {'moons' : 14, 'color': "darkblue"}
}

for(let planet in solarSystem){
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.toLowerCase());
    let i = 1
    let moonDiv;
    while(i <= solarSystem[planet]['moons']){
        moonDiv = document.createElement('div');
        moonDiv.classList.add('moon', planet.toLowerCase());
        let moveMoon = (90 + (i * 30)) + 'px';
        moonDiv.style.left = moveMoon;
        changeColor(planet, moonDiv);
        planetDiv.appendChild(moonDiv);
        i++
    }
    changeColor(planet, planetDiv);
    document.body.appendChild(planetDiv);
}

function changeColor(planet, planetDiv){
  for (let planet in solarSystem) {
    if (planetDiv.className.split(' ')[1] == planet.toLowerCase()) {
          planetDiv.style.backgroundColor = solarSystem[planet]['color']
    }
  }
}