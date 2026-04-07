//Exercises XP


//Exercise 1 : Location
//It will take the values from the person object with lat=person.coordinates[0] and lng = person.coordinates[1]
// Output : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//it will console log everything(all values) except the age value!


//Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    let {first : first_name, last : last_name} = objUser;
    return `your fullname is ${first_name} ${last_name}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


//Exercise 3 : Users & id

//1 Using Object.entries
const users = { user1: 18273, user2: 92833, user3: 90315 }
const keyValArr = Object.entries(users);
console.log(`keyValArr`, keyValArr);

//2 Using forEach
keyValArr.forEach((val, ind, arr) => arr[ind][1] *= 2);
console.log(keyValArr);

// 2 Using Object.keys and map
const users = { user1: 18273, user2: 92833, user3: 90315 }
let res = Object.keys(users).map((key) => [key, (users[key]*2)])
console.log(res)


//Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member);

// "object" - which is the type of the member variable


//Exercise 5 : Dog class
// 1 - WON'T WORK. "NAME" IS NOT DEFINED AND THE SUPER CONSTRUCTOR IS NOT CALLED
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


// 2 - SHOULD WORK
class Labrador extends Dog {
    constructor(name, size) {
    super(name);
    this.size = size;
  }
};


// 3 - WON'T WORK. "NAME" NEEDS TO BE IN CONSTRUCTOR AS WELL
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


// 4 - WON'T WORK. THE SUPER CONSTRUCTOR NEEDS TO BE CALLED
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};


//Exercise 6 : Challenges
//Evaluate these:

// [2] === [2] => False. They point to different addresses
// {} === {} => False. They point to different addresses


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; //=> 5
const object2 = object1; //=> 5 - point to the same address
const object3 = object2; //=> 5 - point to the same address
const object4 = { number: 5};// => 5 - point to the different address

object1.number = 4; //=> 4
console.log(object2.number) //4  point to the same address
console.log(object3.number) //4 - point to the same address
console.log(object4.number) //5 - point to the different address


// 3. Create a class `Animal` with the attributes name, type and color
// 4. Create a class `Mamal` that extends from the `Animal` class. It has a method called `sound()`. This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes. 
// 5. Create a `cow` object that accepts a name, a type and a color and calls the sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }


}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(voice = 'eh oh') {
        return `${voice} is the  voice that i make , hi i'm ${this.name}a type of ${this.type} my color is ${this.color}`
    }
} 

const tinkyWinky = new Mamal('Tinky Winky','teletubbies','green');
console.log(tinkyWinky.sound('mooo'));

//Exercises XP GOLD


//Exercise 1 : print Full Name
function displayStudentInfo({first : first_name, last : last_name}){
    return `your fullname is ${first_name} ${last_name}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


//Exercise 2 : keys and values
function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys.sort(), keys.map( key => obj[key] )];
}
keysAndValues({ z: "Apple", b: "Microsoft", c: "Google" })


//Exercise 2 : Counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count); //3 they both point to the same address


//Exercises XP NINJA


//Exercise 1 : Bird class
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
//I'm pink. 🌸
//I'm a bird. 🦢

//The Flamingo class is a subclass of the Bird class. When we create a new Flagmingo object
//the constructor function is called, which itself call the super constructor of the "Parent" class


//Daily Challenge : Creating Objects


class Video {
  constructor(title, uploader, seconds){
    this.title = title,
    this.uploader = uploader,
    this.seconds = seconds
  }

  watch(duration){
    duration <= this.seconds ? console.log(`You watched ${duration} seconds of ${this.title}!`) : console.log (`The video is shorter than that, please put in another duration!`)
  }
}

let myVid = new Video("My first video!", "cNolan", 57);
myVid.watch(66);
let myVid2 = new Video("Tenet", "cNolan", 2332243532433);

let videoCollection = [];
[
  ["LET'S PLAY MINECRAFT EPISODE 13214 SUPER COOL HOUSE BUILT!!!!", "genericYoutuber1", 423235],
  ["20 more supposed lifehacks with catchy music", "genericYoutuber2", 22435],
  ["geneticYoutuber3 reacts to 20 more supposed lifehacks with catchy music", "genericYoutuber1", 11313423235],
  ["Another 3 bone-breaking Tic Tok Challenges!", "CharlesDarwin", 235],
  ["SHOCK!!! Is Kim Kardashian SECRETLY dating Buggs Bunny??!!", "genericYoutuber4", 353245]
].forEach(val => videoCollection.push(new Video(...val)))
console.log(videoCollection)