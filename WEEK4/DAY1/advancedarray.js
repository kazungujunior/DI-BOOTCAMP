//Exercises XP

//Exercise 1 : Analysing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); 
// console.log 'bread' , spreads the vegetables array , 'chicken , spreads the fruits array

// ------2------
const country = "USA";
console.log([...country]); 
//spreads the string 'usa' into an array of its letters , just like split()

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); 
//new array is an array containing undefined values


//Exercise 2 : Employees
//1
const newUsers = users.map((element)=>`Hello ${element.firstName}`)

//2
const fS = users.filter((element) => element.role === 'Full Stack Resident')

//3
let ex3 = users.filter((element) => element.role === 'Full Stack Resident').map((element)=>`Good job ${element.firstName}`)


//Exercise 3 : Star Wars
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epicConcatanated = epic.reduce((fullstring, element)=> { return fullstring + ' ' + element });
console.log(typeof epicConcatanated);
console.log(epicConcatanated);


//Exercise 4 : Employees #2
let passed = students.filter((element)=>element.isPassed === true)

let congratz = students.filter((element) => element.isPassed === true).map((element)=>`Good job ${element.name} , you passed the ${element.course} course`)


//Exercises XP GOLD


//Exercise 1 : Analysing map method
[2,4,6]


//Exercise 2: Analysing reduce method
[ 1, 2, 0, 1, 2, 3 ]


//Exercise 3
//i is the index -> 0,1,2,3,4,5.


//Exercise 3 : Nested arrays
//1
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
const array2 = array.map((val, ind, arr) => [0,1,2].indexOf(ind) == -1? arr[ind] = val[0][0] : arr[ind] = val[0])

// OR using the flat method

//1
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(array.flat(2));

//2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const greeting2 = greeting.map(val => {
  let result = ""
  for (let i of val){
    if (val.indexOf(i) !== 0){
        result += " " + i;
    } else {
        result += i;
    }
  }
return result;
})

// OR using the flat method

// 2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greeting2 = greeting.flat())

//3
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const greeting2 = greeting.map(val => {
  let result = ""
  for (let i of val){
    if (val.indexOf(i) !== 0){
        result += " " + i;
    } else {
        result += i;
    }
  }
return result;
}).reduce((acc, cur) => {
    return acc + " " + cur;
  },
  "",
);

//OR using chaining method
const greeting3 = greeting2.flat().join(" "))


//4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const untrap = (arr) =>{
  while (typeof(arr[0]) == "object"){
    arr = arr[0];
  }
  return arr;
}
untrap(trapped)


//OR using the flat method

const flattened = trapped.flat(Infinity);


//Exercises XP NINJA

//Exercise 1 : Dog competition
    const data = [
        {
            name: 'Butters', age: 3, type: 'dog'
        },
        {
            name: 'Cuty', age: 5, type: 'rabbit'
        },
        {
            name: 'Lizzy', age: 6, type: 'dog'
        },
        {
            name: 'Red', age: 1, type: 'cat'
        },
        {
            name: 'Joey', age: 3, type: 'dog'
        },
        {
            name: 'Rex', age: 10, type: 'dog'
        },
    ];

    function yearsLoop(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += arr[i].age;
        }
        return sum*7;
    }

    function yearsReduce(arr) {
        let sum = arr.reduce((acc, next) => {
            return {age:acc.age + next.age};
        });
        return sum.age*7;
    }

    console.log(yearsLoop(data));
    console.log(yearsReduce(data));


//Exercise 2 : Email
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
console.log(userEmail3.trim());


//Exercise 3 : Employees #3
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let newusers = users.map(item => {
    return {[item.firstName + ' ' + item.lastName]: item.role}
});
console.log(newusers);


//Exercise 4 : Array to Object
Using this array const letters = ['x', 'y', 'z', 'z'];
1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };


//1
function checkOccurence(){
    const letters = ['x', 'y', 'z', 'z'];
    const counts = {};

    for (const num of letters) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    console.log(counts);
}

checkOccurence()

//2
const letters = ['x', 'y', 'z', 'z']
const count = letters.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

console.log(count)


//Daily Challenge : Car inventory


let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// PART I
function getHonda(inventory) {
   const the1stHonda = inventory.find((item, index) => {
    return item.car_make === "Honda"
   })

  console.log(the1stHonda)

  return `The car is a ${the1stHonda.car_make} ${the1stHonda.car_model} of ${the1stHonda.car_year}`
 }

console.log(getHonda(inventory))

// PART II
function sortCarInventory(inventory) {
  let sortedInventory = inventory.sort((item1, item2) => {
    console.log(item1.car_year, item2.car_year, '/n')
    if (item1.car_year > item2.car_year ) {
      return 1;
    } else if (item1.car_year  < item2.car_year ) {
      return -1;
    } else {
      return 0
    }
  })
  return sortedInventory;
}