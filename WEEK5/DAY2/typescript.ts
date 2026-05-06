Exercises XP


Exercise 1: Hello, World! Program
// Define a message variable of type string
const message: string = "Hello, World!";

// Log the message to the console
console.log(message);


Exercise 2: Type Annotations
// Define a variable age of type number
const age: number = 25;

// Define a variable name of type string
const name: string = "Alice";

// Log the variables to the console
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);


Exercise 3: Union Types
// Define a variable id with union type (string | number)
let id: string | number;

// Assign a number value to the id variable
id = 100;

// Log the value of id to the console
console.log(`ID (number): ${id}`);

// Assign a string value to the id variable
id = "abc123";

// Log the value of id to the console
console.log(`ID (string): ${id}`);


Exercise 4: Control Flow with if...else
// Function to check if a number is positive, negative, or zero
function checkNumber(num: number): string {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Test the function
const testNumber = -5;
console.log(`The number ${testNumber} is ${checkNumber(testNumber)}.`);


Exercise 5: Tuple Types
// Define a function that returns a tuple
function getDetails(name: string, age: number): [string, number, string] {
  const greeting = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, greeting];
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']


Exercise 6: Object Type Annotations
// Step 1: Define the structure of the Person object using type annotations
type Person = {
  name: string;
  age: number;
};

// Step 2: Create the function that returns a person object
function createPerson(name: string, age: number): Person {
  return { name, age };
}

// Step 3: Test the function by creating a person and logging the result
const person = createPerson("Bob", 30);
console.log(person); // Output: { name: 'Bob', age: 30 }