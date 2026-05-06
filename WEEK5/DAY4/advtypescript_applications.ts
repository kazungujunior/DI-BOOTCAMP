//Solutions Exercises XP


// Exercise 1: Intersection Types
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Wonderland"
};

console.log(personWithAddress);


// Exercise 2: Type Guards with Union Types
function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else if (typeof value === "string") {
    return "This is a string";
  }
  return "Unknown type";
}

console.log(describeValue(42));     // Output: "This is a number"
console.log(describeValue("hello")); // Output: "This is a string"


// Exercise 3: Type Casting
let someValue: any = "TypeScript";
let stringValue: string = <string>someValue; // Type casting

console.log(stringValue.toUpperCase()); // Output: "TYPESCRIPT"


// Exercise 4: Type Assertions with Union Types
function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42])); // Output: "hello"


// Exercise 5: Generic Constraints
function logLength<T extends { length: number }>(item: T): void {
  console.log(`Length: ${item.length}`);
}

logLength("Hello"); // Output: Length: 5
logLength([1, 2, 3]); // Output: Length: 3


//Exercise 6: Intersection Types and Type Guards
type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  } else if (employee.position === "Developer") {
    return `${employee.name} is a Developer in the ${employee.department} department.`;
  }
  return `${employee.name} holds an unknown position in the ${employee.department} department.`;
}

const emp: Employee = {
  name: "John",
  age: 35,
  position: "Developer",
  department: "Engineering"
};

console.log(describeEmployee(emp));


// Exercise 7: Type Assertions and Generic Constraints
function formatInput<T extends { toString(): string }>(input: T): string {
  return (input as unknown as string).toUpperCase();
}

console.log(formatInput(123)); // Output: "123"
console.log(formatInput(new Date())); // Output: [formatted date string]


//Solutions Exercises XP Gold


//Exercise 1: Combining Intersection Types with Type Guards
interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

function getProperty<T>(obj: T, propName: string): string | undefined {
  if (propName in obj) {
    return obj[propName as keyof T] as unknown as string;
  }
  return undefined;
}

const adminUser: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  adminLevel: 2
};

console.log(getProperty(adminUser, "name")); // Output: Alice
console.log(getProperty(adminUser, "adminLevel")); // Output: 2
console.log(getProperty(adminUser, "nonExistent")); // Output: undefined


//Exercise 2: Type Casting with Generics
function castToType<T>(value: any, type: new () => T): T {
  return value as T;
}

const num = castToType<number>("123", Number);
console.log(num); // Output: 123

const bool = castToType<boolean>("true", Boolean);
console.log(bool); // Output: true


//Exercise 3: Type Assertions with Generic Constraints
function getArrayLength<T extends number | string>(arr: T[]): number {
  return arr.length;
}

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["a", "b", "c"];

console.log(getArrayLength(numArray)); // Output: 3
console.log(getArrayLength(strArray)); // Output: 3


//Exercise 4: Generic Interfaces with Class Implementation
interface Storage<T> {
  add(item: T): void;
  get(index: number): T | undefined;
}

class Box<T> implements Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }
}

const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);

console.log(numberBox.get(0)); // Output: 1
console.log(numberBox.get(1)); // Output: 2


//Exercise 5: Combining Generic Classes with Constraints
interface Item<T> {
  value: T;
}

class Queue<T> {
  private items: Item<T>[] = [];

  add(item: Item<T>): void {
    this.items.push(item);
  }

  remove(): Item<T> | undefined {
    return this.items.shift();
  }
}

const queue = new Queue<number>();
queue.add({ value: 10 });
queue.add({ value: 20 });

console.log(queue.remove()); // Output: { value: 10 }
console.log(queue.remove()); // Output: { value: 20 }


//Exercises XP Ninja


//Exercise 1: TypeScript Generics and Intersection Types
type Identifiable = { id: number };
type Describable = { description: string };

type Item = Identifiable & Describable;

class Container<T extends Item> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  list(): T[] {
    return this.items;
  }
}

const container = new Container<Item>();
container.add({ id: 1, description: "Item 1" });
container.add({ id: 2, description: "Item 2" });

console.log(container.list());
container.remove(1);
console.log(container.list());


//Exercise 2: Generic Interfaces and Type Casting
interface Response<T> {
  status: string;
  data: T;
}

function parseResponse<T>(response: Response<any>, type: new () => T): T {
  return response.data as T;
}

class User {
  name: string = "";
}

const response: Response<User> = {
  status: "success",
  data: { name: "Alice" }
};

const user = parseResponse(response, User);
console.log(user.name); // Output: "Alice"


//Exercise 3: Generic Classes and Type Assertions
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index] as T;
  }

  list(): T[] {
    return this.items;
  }
}

const stringRepo = new Repository<string>();
stringRepo.add("Item 1");
stringRepo.add("Item 2");

console.log(stringRepo.list()); // Output: ["Item 1", "Item 2"]
console.log(stringRepo.get(0)); // Output: "Item 1"


//Daily Challenge: Type Guard with Union Types
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

function handleData(data: (User | Product | Order)[]): string[] {
  return data.map(item => {
    if (item.type === 'user') {
      // Handle User type
      return `Hello, ${item.name}! You are ${item.age} years old.`;
    } else if (item.type === 'product') {
      // Handle Product type
      return `Product ID: ${item.id}, Price: $${item.price.toFixed(2)}`;
    } else if (item.type === 'order') {
      // Handle Order type
      return `Order ID: ${item.orderId}, Amount: $${item.amount.toFixed(2)}`;
    } else {
      // Handle unexpected type
      return 'Unknown type';
    }
  });
}

// Test the function with mixed types
const mixedData: (User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 19.99 },
  { type: 'order', orderId: 'ORD123', amount: 299.99 }
];

console.log(handleData(mixedData));