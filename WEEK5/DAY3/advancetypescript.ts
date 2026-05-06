//Daily Challenge: Building a Library System with TypeScript Classes and Interfaces
// Define the Book interface
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

// Library class with methods to add and get books
class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find(b => b.isbn === isbn);
    if (book) {
      return `${book.title} by ${book.author}, published in ${book.publishedYear}. Genre: ${book.genre || 'Not specified'}`;
    } else {
      return 'Book not found';
    }
  }
}

// DigitalLibrary class extending Library with additional functionality
class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.books.map(book => book.title);
  }
}

// Create an instance of DigitalLibrary
const myLibrary = new DigitalLibrary("https://mylibrary.com");

// Add books to the library
myLibrary.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", publishedYear: 1925 });
myLibrary.addBook({ title: "1984", author: "George Orwell", isbn: "9780451524935", publishedYear: 1949, genre: "Dystopian" });

// Print out book details
console.log(myLibrary.getBookDetails("9780743273565")); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925. Genre: Not specified
console.log(myLibrary.getBookDetails("9780451524935")); // Output: 1984 by George Orwell, published in 1949. Genre: Dystopian

// Print out list of all book titles
console.log(myLibrary.listBooks()); // Output: [ 'The Great Gatsby', '1984' ]


//Exercises XP


// Exercise 1: Class with Access Modifiers
class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `${this.name}, ${this.position}`;
  }
}

const employee = new Employee("Alice", 50000, "Developer", "IT");

// Access public property
console.log(employee.position); // Output: Developer

// Call method to get employee information
console.log(employee.getEmployeeInfo()); // Output: Alice, Developer


// Exercise 2: Readonly Properties in a Class
class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `${this.name} costs $${this.price}.`;
  }
}

const product = new Product(101, "Laptop", 1500);

// Trying to change the readonly property will cause an error
// product.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(product.getProductInfo()); // Output: Laptop costs $1500.


// Exercise 3: Class Inheritance
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic sound.";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): string {
    return "Bark!";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name); // Output: Buddy
console.log(myDog.makeSound()); // Output: Bark!


// Exercise 4: Static Properties and Methods
class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(Calculator.add(5, 3)); // Output: 8
console.log(Calculator.subtract(10, 4)); // Output: 6


// Exercise 5: Extending Interfaces with Optional and Readonly Properties
interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  }
}

const premiumUser: PremiumUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold"
};

printUserDetails(premiumUser);
// Output:
// ID: 1, Name: Alice, Email: alice@example.com
// Membership Level: Gold


//Exercise XP Gold


//Exercise 1: Class Inheritance with Protected Access Modifiers
class Employee {
  protected name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getDetails(): string {
    return `Name: ${this.name}, Salary: $${this.salary}`;
  }
}

class Manager extends Employee {
  public department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

const manager = new Manager("Alice", 80000, "HR");
console.log(manager.getDetails()); // Output: Name: Alice, Salary: $80000, Department: HR


//Exercise 2: Using Readonly with Access Modifiers
class Car {
  public readonly make: string;
  private readonly model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarDetails(): string {
    return `${this.make} ${this.model} (${this.year})`;
  }
}

const car = new Car("Toyota", "Corolla", 2021);
console.log(car.getCarDetails()); // Output: Toyota Corolla (2021)

// Attempt to modify readonly properties
// car.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
// car.model = "Civic"; // Error: Property 'model' is private and only accessible within class 'Car'.


//Exercise 3: Static Properties and Methods in Classes
class MathUtils {
  static PI: number = 3.14159;

  static circumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.circumference(5)); // Output: 31.4159


//Exercise 4: Interface with Function Types
interface Operation {
  perform(a: number, b: number): number;
}

class Addition implements Operation {
  perform(a: number, b: number): number {
    return a + b;
  }
}

class Multiplication implements Operation {
  perform(a: number, b: number): number {
    return a * b;
  }
}

const add = new Addition();
const multiply = new Multiplication();

console.log(add.perform(5, 3)); // Output: 8
console.log(multiply.perform(5, 3)); // Output: 15


//Exercise 5: Extending Interfaces with Optional and Readonly Properties
interface Shape {
  color: string;
  getArea(): number;
}

interface Rectangle extends Shape {
  readonly width: number;
  readonly height: number;
  getPerimeter(): number;
}

class MyRectangle implements Rectangle {
  color: string;
  readonly width: number;
  readonly height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new MyRectangle("blue", 5, 10);
console.log(rect.getArea()); // Output: 50
console.log(rect.getPerimeter()); // Output: 30


//Exercises XP Ninja


//Exercise 1: Advanced Access Modifiers and Inheritance
class Employee {
  public name: string;
  private age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  protected calculateBonus(): number {
    return this.salary * 0.1;
  }
}

class Manager extends Employee {
  getSalaryDetails(): string {
    const bonus = this.calculateBonus();
    return `${this.name}'s salary is ${this.salary} with a bonus of ${bonus}`;
  }
}

class ExecutiveManager extends Manager {
  approveBudget(budget: number): string {
    return `Executive ${this.name} has approved a budget of ${budget}`;
  }
}

const execManager = new ExecutiveManager("John", 40, 120000);
console.log(execManager.getSalaryDetails());  // John’s salary is 120000 with a bonus of 12000
console.log(execManager.approveBudget(500000));  // Executive John has approved a budget of 500000


//Exercise 2: Advanced Static Methods and Properties
class Shape {
  static totalShapes: number = 0;

  constructor() {
    Shape.totalShapes++;
  }

  static getType(): string {
    return "Generic Shape";
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  static getType(): string {
    return "Circle";
  }
}

class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  getArea(): number {
    return this.side ** 2;
  }

  static getType(): string {
    return "Square";
  }
}

const c1 = new Circle(5);
const s1 = new Square(4);

console.log(Circle.getType()); // Circle
console.log(Square.getType()); // Square
console.log(Shape.totalShapes); // 2


//Exercise 3: Complex Interfaces with Function Types
interface Calculator {
  a: number;
  b: number;
  operate(operation: (x: number, y: number) => number): number;
}

class AdvancedCalculator implements Calculator {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  operate(operation: (x: number, y: number) => number): number {
    return operation(this.a, this.b);
  }
}

const calc = new AdvancedCalculator(10, 5);

console.log(calc.operate((x, y) => x + y)); // Output: 15 (Addition)
console.log(calc.operate((x, y) => x * y)); // Output: 50 (Multiplication)


///Exercise 4: Readonly Properties in Complex Inheritance
class Device {
  readonly serialNumber: string;

  constructor(serialNumber: string) {
    this.serialNumber = serialNumber;
  }

  getInfo(): string {
    return `Device with serial number: ${this.serialNumber}`;
  }
}

class Laptop extends Device {
  public model: string;
  public price: number;

  constructor(serialNumber: string, model: string, price: number) {
    super(serialNumber);
    this.model = model;
    this.price = price;
  }

  getInfo(): string {
    return `Laptop Model: ${this.model}, Price: ${this.price}, Serial Number: ${this.serialNumber}`;
  }
}

const laptop = new Laptop("ABC123", "Dell XPS", 1200);

console.log(laptop.getInfo());  // Laptop Model: Dell XPS, Price: 1200, Serial Number: ABC123
// laptop.serialNumber = "XYZ456";  // Error: Cannot assign to 'serialNumber' because it is a read-only property.


//Exercise 5: Extending Multiple Interfaces with Optional and Readonly Properties
interface Product {
  readonly name: string;
  price: number;
  discount?: number;
}

interface Electronics extends Product {
  warrantyPeriod: number;
}

class Smartphone implements Electronics {
  readonly name: string;
  price: number;
  discount?: number;
  warrantyPeriod: number;

  constructor(name: string, price: number, warrantyPeriod: number, discount?: number) {
    this.name = name;
    this.price = price;
    this.warrantyPeriod = warrantyPeriod;
    this.discount = discount;
  }

  getFinalPrice(): number {
    return this.discount ? this.price * (1 - this.discount / 100) : this.price;
  }
}

const phone = new Smartphone("iPhone", 999, 2, 10);
console.log(phone.getFinalPrice());  // Output: 899.1 (Price after 10% discount)
// phone.name = "Galaxy";  // Error: Cannot assign to 'name' because it is a read-only property.