Exercises - W3D2

//Exercises
//Exercise 1 : Change the article
//Give to all paragraphs inside the <article> tag the class of para_article.

let paragraphs = document.querySelectorAll('article p');
for (let p of paragraphs) {
    p.classList.add('para_article');
}

//Remove the last paragraph in the article.
let article = document.querySelector('article');
let numOfParagraphs = paragraphs.length;
paragraphs[numOfParagraphs - 1].remove();

//Add an event listener so that when you click on the h2, it is removed from the DOM.
let secondHeader = document.querySelector('h2');
secondHeader.addEventListener('click', remove);
function remove(e){
    e.target.remove();
}

//Set the font size of the h1 to be a random pixel size from 0 to 100.
let firstHeader = document.querySelector('h1');
let randomNumber = Math.floor(Math.random() * 100);
firstHeader.style.fontSize = randomNumber + 'px';

//Hide the 1st paragraph, when it’s clicked.
paragraphs[0].addEventListener('click', hide);
function hide(e){
    e.target.style.display = 'none';
}

//Fade out the 2nd paragraph over 2000 milliseconds, when it’s clicked.
function fadeOut(e){
    e.target.style.transition = 'opacity 2s';
    e.target.style.opacity = '0';
}

paragraphs[1].addEventListener('click', fadeOut);

//Get the values from the inputs and append them to the end of the html, inside a table.
let inputs = document.querySelectorAll('input');
let table = document.createElement('table');
document.body.appendChild(table);
function createTableContent(input){
    let row = document.createElement('tr');
    let column = document.createElement('td');
    column.innerHTML = input.value;
    row.appendChild(column);
    table.appendChild(row);
}

inputs[0].onchange = function(){createTableContent(inputs[0])};
inputs[1].onchange = function(){createTableContent(inputs[1])};

//Exercise 2 : Transform the sentence
function getBoldItems(){
    return document.getElementsByTagName('strong');
}

function highlight(items){
    for(let item of items){
        item.style.color = 'blue';
    }
}

function return_normal(items){
    for(let item of items){
        item.style.color = 'black';
    }
}

let boldParagraph = document.body.children[5];
boldParagraph.onmouseover = function(){highlight(getBoldItems())};
boldParagraph.onmouseout = function(){return_normal(getBoldItems())};

//Exercise 3 : Volume of a sphere
function calculateVolume(radius){
    return 4/3 * Math.PI * Math.pow(radius, 3); 
}

let form = document.forms.MyForm;
form.addEventListener('submit', processAndReturnValue);

function getRadius(e){
    e.preventDefault();
    return form.elements.radius.value;
}

function printVolumeOnPage(volume){
    form.elements.volume.value = volume;
}

function processAndReturnValue(e){
    let radius = getRadius(e);
    let volume = calculateVolume(radius);
    printVolumeOnPage(volume);
}

//Exercises XP Gold
//Exercise 4 : Select a kind of Music
let optionValue = document.getElementById("genres");
let selectValue = optionValue.options[optionValue.selectedIndex];
console.log(selectValue.value, selectValue.text);
let div = document.createElement("div");
div.textContent = "Value: " + selectValue.value + " ,Text: " + selectValue.text;
document.body.appendChild(div);
let option = document.createElement("option");
option.textContent = "Classic";
option.setAttribute("value", "classic");
option.selected = "selected";
optionValue.appendChild(option);

//Exercise 5 : Delete colors
function removecolor() {
    let colorSelect = document.getElementById("colorSelect");
    for (i = 0; i < colorSelect.length; i++) {
        if (colorSelect[i].text == colorSelect.value) {
            colorSelect[i].remove();
        }
    }
}

//Exercise 6 : Create a shopping list
let inputField = document.createElement("input");
inputField.setAttribute("placeholder", "Type what you need to buy")
document.body.appendChild(inputField);

let add = document.createElement("button");
add.setAttribute("name", "add");
add.textContent = "add"
document.body.appendChild(add);

let clearAll = document.createElement("button");
clearAll.setAttribute("name", "clear");
clearAll.textContent = "clear all"
document.body.appendChild(clearAll);

let nbItems = document.createElement("button");
nbItems.setAttribute("name", "items");
nbItems.textContent = "Number of items"
document.body.appendChild(nbItems);

let ul = document.createElement("ul");
document.body.appendChild(ul);

add.addEventListener("click", function() {
    if (inputField.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value));
        ul.appendChild(li);
        inputField.value = "";
    }
})

inputField.addEventListener("keypress", function(e) {
    if (inputField.value.length > 0 && e.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value));
        ul.appendChild(li);
        inputField.value = "";
    }
})

clearAll.addEventListener("click", function() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
})

nbItems.addEventListener("click", function() {
    let count = 0;
    for (x of ul.childNodes) {
        count++;
    }
    if (ul.nextElementSibling !== null) {
        ul.nextElementSibling.remove();
    }
    let div = document.createElement("div");
    div.textContent = "nb of items: " + count;
    document.body.appendChild(div);
})

//Exercises XP Ninja
let tipBlock = document.getElementById('totalTip');
function calculateTip(){
    let form = document.forms[0];
    let billamt = form.elements.billamt.value;
    let serviceQual = form.elements.serviceQual.value;
    let numOfPeople = document.getElementById('peopleamt').value;
    if(billamt == ''){
        alert('please enter a bill amount');
        return;
    } else if(serviceQual == '0'){
        alert('please select a service quality option');
        return;
    } else if (numOfPeople == '' || numOfPeople <= 1){
        numOfPeople = 1;
        let each = document.getElementById('each');
        each.style.display = 'none';
    }
    let total = billamt * serviceQual / numOfPeople;
    total = total.toFixed(2);
    tipBlock.style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}
tipBlock.style.display = "none";
let submitButton = document.getElementById('calculate');
submitButton.addEventListener('click', calculateTip);
Exercise 8 : Validate the email
let newForm = document.createElement('form');
let emailInput = document.createElement('input');
emailInput.setAttribute('type', 'text');
let emailSubmitButton = document.createElement('input');
emailSubmitButton.setAttribute('type', 'submit');
emailSubmitButton.setAttribute('value', 'submit');
newForm.appendChild(emailInput);
newForm.appendChild(emailSubmitButton);
document.body.appendChild(newForm);

function validateEmail(){
    let email = emailInput.value;
    let emailArray = email.split('@');
    console.log(emailArray);
    let emailArrayPeriod = email.split('.');
    console.log(emailArrayPeriod);
    console.log(emailArray[0]);
    if(emailArray.length == 1 || emailArray[0] == '' || emailArrayPeriod.length == 1 || emailArrayPeriod[0] == '' || email.indexOf('.') == email.length - 1){ //checks if @ is not present, second condition checks that there were characters before the @. Third condition checks if . is not present, fourth condition checks that there were characters before the . fifth condition checks the the . is not the last char
        alert('please enter a valid email');
    } 

}

emailSubmitButton.addEventListener('click', validateEmail);

//Exercise 9 : Get the user’s geolocation coordinates
let userLocation = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    userLocation.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  userLocation.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
//Daily Challenge : Tell the story
let userInput = [];
let libButton = document.getElementById('lib-button');

let libIt = function() {
    saveUserInput();
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = `Once there was a ${userInput[0]}. It was incredibly ${userInput[1]}. It looked just like ${userInput[2]}`;
};

libButton.addEventListener('click', libIt);

function saveUserInput(){
    userInput[0] = saveNoun();
    userInput[1] = saveAdjective();
    userInput[2] = saveName();
}

function saveNoun(){
    let nounLocation = document.getElementById('noun');
    return nounLocation.value;
}
function saveAdjective(){
    let adjectiveLocation = document.getElementById('adjective');
    return adjectiveLocation.value;
}
function saveName(){
    let personLocation = document.getElementById('person');
    return personLocation.value;
}


//Exercises - W3D3

//Exercises
//Exercise 1 : Move the box
function myMove(){
    let box = document.getElementById('animate');
    let currentPostition = 0;
    let int = setInterval(() => {
        if(currentPostition < 350){
            currentPostition++;
            box.style.left = currentPostition + 'px';
        } else {
            clearInterval(int);
        }
    }, 50);
}

//Exercise 2: Drag & Drop
let box = document.getElementById("square");
box.setAttribute('draggable', 'true');
box.setAttribute('ondragstart', 'drag(event)');

let big_box = document.getElementById("big_square");
big_box.setAttribute('ondragover', 'allowDrop(event)')
big_box.setAttribute('ondrop', 'drop(event)')

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');

    event.target.appendChild(document.getElementById(data));
}

//Exercise XP Gold
//Exercise 3 : Animation with the Alphabet
#letter {
        width: 50px;
        height: 50px;
        margin-top: 10px;
        margin-left: 10px;
        background-color: lightblue;
        line-height: 50px;
        text-align: center;
}

.main {
  display: flex;
  flex-flow: row wrap;
}
let mainDiv = document.createElement("div")
mainDiv.classList.add = "main"
let alphabet = String.fromCharCode(...Array(123).keys()).slice(97)

for (let i = 0; i< alphabet.length; i++){
  element = document.createElement("div")
  element.setAttribute("id", "letter")
  dragDrop(element)
  element.innerHTML = alphabet[i]
  mainDiv.appendChild(element)
}
document.body.appendChild(mainDiv)

function dragDrop (element) {
  element.setAttribute('draggable', 'true');
  element.addEventListener("dragstart", function(event) {event.target.style.backgroundColor = "lightpink"});
  element.addEventListener("dragend", function(event) {
          event.target.style.backgroundColor = "lightgreen";
          let _x = event.clientX;
          let _y = event.clientY;
          event.target.style.left = _x + "px";
          event.target.style.top = _y + "px";
          event.target.style.position = "absolute"; //Necessary
   });
}
//Exercise 4 : Animation with a paragraph
//Create a paragraph and make it draggable. You should be able to drag and drop it.
//Change the font size of the paragraph according to the screen coordinates.
//MISSING SOLUTION

//Exercise XP Ninja
//Exercise 5 : Animation with nested boxes
//Create 2 boxes. They should be nested boxes.
//Move the box around the outer box - left to right, up to down, right to left, down to up
//MISSING SOLUTION

//Mini Project : Colors
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: darkgrey;
}

.leftPart {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
    height: 100vh;
    width: 20%;
    float: left;
    background-color: darkgrey;
    /* border: 2px red solid; */
    padding: 5px;
}

.leftPart>* {
    border: black 1px solid;
}

.clear {
    grid-column: 1/4;
    background-color: whitesmoke;
    /* Green */
    border: none;
    border-radius: 8px;
    color: black;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    margin: 4px 2px;
    cursor: pointer;
}

.rightPart {
    display: grid;
    grid-template-columns: repeat(39, 1fr);
    height: 100vh;
    padding: 5px 5px 5px 0;
}

<!DOCTYPE html>
<html>

<head>
    <title>COLORING GAME</title>
    <link rel="stylesheet" type="text/css" href="style.css">



</head>

<body>
    <div class="leftPart">
        <button class="clear">Clear</button>
        <div style="background-color: red;"></div>
        <div style="background-color: orangered;"></div>
        <div style="background-color: orange;"></div>
        <div style="background-color: yellow;"></div>
        <div style="background-color: yellowgreen;"></div>
        <div style="background-color: lightgreen;"></div>
        <div style="background-color: green;"></div>
        <div style="background-color: turquoise;"></div>
        <div style="background-color: cyan;"></div>
        <div style="background-color: lightskyblue;"></div>
        <div style="background-color: dodgerblue;"></div>
        <div style="background-color: blue;"></div>
        <div style="background-color: darkblue;"></div>
        <div style="background-color: indigo;"></div>
        <div style="background-color: darkmagenta;"></div>
        <div style="background-color: violet;"></div>
        <div style="background-color: lightpink;"></div>
        <div style="background-color: lightgray;"></div>
        <div style="background-color: gray;"></div>
        <div style="background-color: black; border: 1px solid white"></div>
        <div style="background-color: white;"></div>
    </div>
    <div class="rightPart">

    </div>
    <script src="script.js "></script>
</body>

</html>
let color = null;
let mousedown = false;
let body = document.getElementsByTagName("body")[0];
let rightPart = document.getElementsByClassName("rightPart");
for (let i = 0; i < 936; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "miniBlocks")
    div.style.border = "1px lightgray solid";
    div.style.backgroundColor = "white";
    rightPart[0].appendChild(div);
}

let clearButton = document.getElementsByClassName("clear")[0];
let miniBlocks = document.querySelectorAll(".miniBlocks");
clearButton.addEventListener("click", function() {
    let miniBlocks = document.querySelectorAll(".miniBlocks");
    for (miniBlocks of miniBlocks) {
        // console.log(miniBlocks2.style.backgroundColor)
        miniBlocks.style.backgroundColor = "white";
    }
});



body.addEventListener("mousedown", function() {
    mousedown = true;
})

body.addEventListener("mouseup", function() {
    mousedown = false;
})

let colorBlocks = document.querySelectorAll(".leftPart > *")
for (colorBlocks of colorBlocks) {
    colorBlocks.addEventListener("click", function(event) {
        color = event.target.style.backgroundColor;
    });
}


for (miniBlocks of miniBlocks) {
    miniBlocks.addEventListener("mousedown", function(event) {
        if (color != null) {
            event.target.style.backgroundColor = color;
        }
    });
    miniBlocks.addEventListener("mouseover", function(event) {
        if (mousedown && color != null) {
            event.target.style.backgroundColor = color;
        }
    });
}
//Daily challenge : Show only the letters
let input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener('input', check_letter);

function check_letter(e) {
    let check = this.value.split("");
    if (check[check.length-1].toUpperCase() == check[check.length-1].toLowerCase()) {
        check.pop();
    }
    this.value = check.join("");
}
OR

var volume = document.forms[0].children[0];
volume.onkeyup = function (event) {
    var str = volume.value;
    var x = event.keyCode;
    if (x < 65 || x > 122 || (x > 90 && x < 97)) {
        volume.value = str.slice(0, -1);
    }
};
OR

let container = document.getElementById('text-container');
let input = document.getElementById('text-input');
input.addEventListener('keypress', keyLogger);
let letters = /^[A-Za-z]+$/;
function keyLogger(element) {
    if (element.key.match(letters)){
        container.textContent += `${element.key}`;
    } else {
        container.textContent += ``;
    }
}