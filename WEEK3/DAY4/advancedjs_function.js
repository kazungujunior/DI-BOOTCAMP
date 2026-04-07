//W4D1 JS BOOTCAMP
//Exercises XP


//Exercise 1 : Scope

// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //3
}

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}

// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5

//#3
function q3() {
    window.a = "hello";
}

// you must first run q3() in your console to add the a property to the window. then run q32()
function q32() {
    alert(a); //"hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); //"test"
}

//#5 with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5



//Exercise 2 : Ternary operator
const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints)


//Exercise 3: Is a string ?
const is_string = (arg) => {
  typeof(arg) == "string" ? console.log(true) : console.log(false)
};
is_string('hello');
is_string([1, 2, 4, 0]);


//Exercise 4 : Colors
let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
colors.forEach((val, ind) => {console.log(`#${ind+1} choice is ${val}`)});

let result = colors.some((value)=> value === "Violet");
let condition = result ? console.log("yeah"): console.log("no")

//Exercise 4: Colors#2
let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
let ordinal = ["th","st","nd","rd"];
colors.forEach((val, ind) => {
  ind == 0 ? console.log(`#${ind+1}${ordinal[1]} choice is ${val}`) :
  ind == 1 ? console.log(`#${ind+1}${ordinal[2]} choice is ${val}`) :
  ind == 2 ? console.log(`#${ind+1}${ordinal[3]} choice is ${val}`) : console.log(`#${ind+1}${ordinal[0]} choice is ${val}`)});
//Other possibility

color.forEach((el, index) => console.log(`${index+1}${ordinal[index>3 ? 3 : index]} choice is ${el}`))


//Exercise 6 : Bank Details
let sum = prompt("How much do you have in the account?");
const vat = 1.17;
let balance = ["+50", "-100", "+75", "-25", "+200","-50"];

const processBalance = (balance) => {
  balance.forEach((val, ind, arr) => {
  if (val[0] != "+") { arr[ind] = `${parseInt(val,10)*vat}`}  
  });
};

function doAccounting(account, balance) {
  account = parseInt(account, 10)
  processBalance(balance);
  balance.forEach((val) => account = account+parseInt(val,10));
  return account;
}
doAccounting(sum, balance);
//Other possibility

let bankAmount = 0
const vat = 0.17
let details = ["+200", "-100", "+146", "+167", "-2900"]

details.forEach((element, index) => {
    details[index] *= (1+vat); 
    bankAmount += details[index]
})

console.log(bankAmount)


//Exercises XP GOLD


//Exercise 1 : Sum elements
const arraySum = (array) => {
  let a = 0;
  array.forEach((value) => {a = a+value});
  return a;
}
arraySum([1,2,6,-7])


//Exercise 2 : Remove Duplicates
const createSet = (array) =>{
  let arr = [];
  array.forEach((value) => arr.indexOf(value) == -1 ? arr.push(value) : null);
  return arr;
}
createSet([1,1,2,3,4,4])


//Exercise 3 : Remove certain values
const cleanArray = (array) =>{
  let arr = [];
  array.forEach((value) => value == 0 ? null :
  value == undefined ? null :
  value == "" ? null :
  value == false ? null :
  value == null ? null : 
  isNaN(value) == true ? null : arr.push(value));
  return arr;
}
cleanArray([NaN, 0, 15, false, -22, '',undefined, 47, null])


//Exercise 4 : Repeat please
const repeat = (string, num) =>{
  let str = string;
  for (let i = 0; i < num - 1; i++){
    str += string
  }
  return str;
}
repeat("Ha!", 3)


//Exercise 5 : Turtle & Rabbit
const startLine = '     ||<- Start line'
let turtle = '🐢'
let rabbit = '🐇'

turtle = turtle.padStart(9)
rabbit = rabbit.padStart(9)

console.log(startLine)
console.log(turtle)
console.log(rabbit)

'        ||<- Start line'
'          🐢'
'          🐇'

//What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
turtle = turtle.trim().padEnd(9, '=')
// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. 
//The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
// The turtle variable has a length of 2, in order to reach a length of 9, the padEnd method added 7 "=" at the end of the string

console.log(startLine)
console.log(turtle)
console.log(rabbit)


    '        ||<- Start line'
    '🐢======='
    '          🐇'



//Exercises XP NINJA


//Exercise 1 : Menu
let menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "desert",
    name : "Chocolate Cake"
  }
]
//1
menu.some((value) => { return value["type"] == "desert";})
//2
menu.every((value) => { return value["type"] == "starter";})
//3
if (menu.some((value) => { return value["type"] == "main course";}) == false) {
  menu.push({type: "main course", name: "Burger"})
}
console.log(menu)

//4
let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

menu.forEach((value) => { 
    vegetarian.some((val) => {
    return value["name"].toLowerCase().indexOf(val) != -1 ? value.vegetarian = true : value.vegetarian = false
    })
})
console.log(menu)


//Exercise 2 : Chop into chunks
function stringChop(string,num){
  let strChopped = [];
  let maxId = Math.round(string.length/num)
  for (let i = 0; i < maxId; i++){
    strChopped.push(string.substring(i*num,i*num+num))
  };
  return strChopped;
}
stringChop('w3resource',2)


//Exercise 3 : You said string ?
const searchWord = (string, word) => {
  let arr = string.split(" ");
  let count = 0;
  arr.forEach((value) => {
    if (value == word) {
      count += 1
    }
  });
  count > 0 ? console.log(`The word was found ${count} times.`) : console.log("Word not found.")
  }
searchWord('The quick fox brown fox', 'fox')


//Exercise 4 : Reverse Array
function reverseArray(arr){
  arr.forEach((val, ind, arr) =>{
    if (ind < arr.length/2){
    let temp = arr[ind]
    arr[ind] = arr[arr.length-1-ind]
    arr[arr.length-1-ind] = temp
  }
  })
  return arr;
}
reverseArray([1,2,3,4,5])
//[ 5, 4, 3, 2, 1 ]


//Daily Challenge: Go Wildcats
const array = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
//1
let array1 = [];
array.forEach((value) => { array1.push(`!${value["username"]}`)});
console.log(array1)
//2
let array2 = [];
array.forEach((value) => { value["score"] > 5 ? array2.push(value["username"]) : null });
console.log(array2)
// 3
let score = 0;
array.forEach((value) => {score = score + value["score"]});
console.log(score);


W4D2

//Exercises XP
//Exercise 1 : Find The Sum
//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum = (a, b) => a + b;
console.log(`sum`, sum(3, 5));


//Exercise 2 : Kg And Grams
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//First, use function declaration and invoke it.
//Then, use function expression and invoke it.
//Write in a one line comment, the difference between function declaration and function expression.
//Finally, use a one line arrow function and invoke it.
function kToG(n) {
    console.log(`function declaration ${n * 1000}`);
    return n * 1000;
};

ktoG(3);

const kgTGr = function (n) {
    console.log(`function expression ${n * 1000}`);
    return n * 1000;
}
kgTGr(3);

const kgToGr = (a) => a * 1000;
console.log(`arrow function kgToGr 3kg is: ${kgToGr(3)} grams`);


//Exercise 3 : Fortune Teller
Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like “You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids.”
(function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    let elH2 = document.createElement('h2');
    let elBody = document.querySelector('body');
    elH2.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids`;
    elBody.appendChild(elH2);
})(3, 'Sara', 'Paris', 'Developer');


//Exercise 4 : Welcome
//John has just signed in to your website and you want to welcome him.

//</number>Create a Bootstrap Navbar in your HTML file.
//</geographic>In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xp-Excercise</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

    <script src="xp.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
(function (username) {
    let elNav = document.querySelector('nav');
    let strHTML = ` `;
    let elDiv = document.createElement('div');
    elNav.appendChild(elDiv);
    strHTML += `hello: ${username} <img style="height: 40px;" src="https://image.similarpng.com/very-thumbnail/2020/07/Emoji-is-amazed-on-transparent-background-PNG.png" alt="smily">`
    elDiv.innerHTML = strHTML;
})('Emoji')


//Exercise 5 : Juice Bar
You will use nested functions, to open a new juice bar.

Part I:
1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>”.
3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

Part II:
1. In the makeJuice function, create an empty array named ingredients.
2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>”. Use the forEach method.
4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size){

    let ingrediants = [];

    function addIngredients(first_ingredient, second_ingrediant, third_ingrediant){
        ingrediants.push(first_ingredient);
        ingrediants.push(second_ingrediant);
        ingrediants.push(third_ingrediant);
    }

    function displayJuice(){
        document.write(`The client wants a ${size} juice, containing `);
        ingrediants.forEach( (ingredient)=>{
            document.write(ingredient + ', ');
        })
    }

    addIngredients('Banana', 'Tamar', 'Milk');
    addIngredients('Chocolate', 'Vanilla-Protein', 'Almunds');

    displayJuice();
}

makeJuice('small');


//Exercises XP GOLD


//Exercise 1 : Landscape
What is the outcome and explain how you came to this conclusion.
//Output:____/''''\____
//the function carries two nested functions that are both called to alter a variable carrying an empty string. 
//When called, the first flat() will add four _ signs, as 4 is the argument passed to it and used in the loop
//Then, mountain() will add the / sign and four ' signs, as, again, 4 is the argument passed to it. It will add a closing \ sing after the ticks
//finally, the thirds flat will just repeat the output of the first one after the mountain, as we are still changing the same local -- but global within the scale of the landscape function -- variable we declared outside the scope of the nested functions


//Exercise 2 : Closure
What does the last line return?
const addTo = x => y => x + y;
let addToTen = addTo(10);
addToTen(3);
//13 -- we are effectively calling addTo with 10 and 3


//Exercise 3 : Currying
What does the last line return?
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31
// curriedSum receives a as an arguments and returns a function 
// that receives b as an argument and sum it with a from the original function
//The last line is gonna return the sum of the 2  arguments


//Exercise 4 : Currying
//What does the last line return?
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17
// curriedSum receives an arguments and returna function that receives another arguments and sum the 2 of them
// add5 is curried sum receiving 5 as an argument and returns a function that will sum 5 to the next argument
// add5(12) will add 5 and 12


//Exercise 6 : Composing
What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//16


//Exercises XP NINJA


const mergeWords = string => string2 =>{
  if(string2 === undefined) {
   return string;
  } else {
    return mergeWords(string + " " + string2)
  }
}
mergeWords('There')('is')("no")("spoon")()


//Daily challenge: Groceries
//Using this object :

let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//</third>Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference
//</second>Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

//</first>Create another arrow function named cloneGroceries.
//</size>In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//</third>Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//</second>In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
//</first>Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//</size>Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

//</img>Invoke the cloneGroceries function.
let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = ()=>{
    groceries['fruits'].forEach( (fruit)=>{
        console.log(fruit);
    })
}

let cloneGroceries = ()=>{

    let user = client; // user points to where client points = 'John'
    client = "Betty"; // user points to 'John' client points to a new memory location with 'Betty'

    let shopping = groceries; // shopping points to where groceries points = an object 
    groceries['totalPrice'] = '35$'; // shoping and groceries points to the same memory place so change will appear in both
    groceries['other']['payed'] = false; // shoping and groceries points to the same memory place so change will appear in both
}

cloneGroceries();
