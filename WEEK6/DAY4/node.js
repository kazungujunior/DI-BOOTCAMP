//Exercise 1:
//Create a file named math.js.
Inside math.js, define a function called add that takes two parameters and returns their sum.
Export the add function using the CommonJS syntax.
Create another file named app.js.
In app.js, import the add function from the math.js module.
Use the add function to calculate and print the sum of two numbers.
Run app.js and see if the sum is calculated correctly.


//Solution for Exercise 1:
math.js

// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
app.js

// app.js
const add = require("./math.js");

const num1 = 5;
const num2 = 7;

const sum = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
//To run the code, follow these steps:

Save the math.js and app.js files in the same directory.
Open a terminal in that directory.
Run node app.js.
You should see the following output:

The sum of 5 and 7 is 12


//Exercise 2: Basic Module Export and Import
Do the same as exircise 1 - Basic Module Export and Import - Exercise 1 using ES6 module syntax

//Solution for Exercise 2:
math.js

// math.js
export function add(a, b) {
  return a + b;
}
app.js

// app.js
import { add } from "./math.js";

const num1 = 5;
const num2 = 7;

const sum = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
To run the code, follow these steps:

Save the math.js and app.js files in the same directory.
Open a terminal in that directory.
Run node app.js.
You should see the following output:

The sum of 5 and 7 is 12


//Exercise: Creating a package.json File**
//Create a directory named npm-init-example.
Inside the npm-init-example directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
Provide information such as the project name, version, description, entry point, and author when prompted.
After completing the npm init process, open the generated package.json file and review the information you provided.
Update the scripts section of package.json to include a script named "start" that runs your Node.js application. For example: "start": "node app.js".
Create a simple JavaScript file named app.js in the npm-init-example directory. Inside app.js, write a simple script, such as printing a welcome message.
Open a terminal in the npm-init-example directory and run your application using the command npm start.
Verify that your application runs and the welcome message is displayed in the terminal.


//Solution:
app.js

// app.js
console.log("Welcome to My Node.js Application!");
package.json

{
  "name": "npm-init-example",
  "version": "1.0.0",
  "description": "An example Node.js application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "author": "Your Name",
  "license": "ISC"
}
//To run the code:

Save the app.js file and package.json file in the npm-init-example directory.
Open a terminal in the npm-init-example directory.
Run your application using npm start.
You should see the welcome message displayed in the terminal. This exercise demonstrates how to create a package.json file, set up an entry point, and run your application using npm.



//Exercise: Simple NPM Package Usage**
//Create a directory named npm-example.
Inside the npm-example directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
Install the moment package, a popular date and time manipulation library, by running npm install moment in the terminal.
Create a file named app.js inside the npm-example directory.
In app.js, require the moment package using CommonJS syntax.
Use the moment package to display the current date and time.
Run app.js using Node.js and verify that the current date and time are displayed correctly.


//Solution:
app.js

// app.js
const moment = require("moment");

const currentDate = moment().format("YYYY-MM-DD");
const currentTime = moment().format("HH:mm:ss");

console.log(`Current Date: ${currentDate}`);
console.log(`Current Time: ${currentTime}`);
//To run the code:

Save the app.js file in the npm-example directory.
Open a terminal in the npm-example directory.
Run node app.js.
You should see the current date and time displayed in the terminal based on the moment package. This exercise demonstrates how to use NPM to install and utilize external packages in a Node.js project using CommonJS syntax.



//Exercise: File System Operations
//Create a directory named file-operations.
Inside the file-operations directory, create a file named write-file.js.
In write-file.js, use the fs module to write a simple text content to a file named output.txt.
Create another file named read-file.js.
In read-file.js, use the fs module to read the content from the output.txt file and display it in the terminal.
Open a terminal in the file-operations directory.
Run node write-file.js to write content to the file.
Run node read-file.js to read and display the content from the file.


//Solution:
//write-file.js

// write-file.js
const fs = require("fs");

const content = "This is a simple text content.\n";

fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully.");
  }
});
read-file.js

// read-file.js
const fs = require("fs");

fs.readFile("output.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:");
    console.log(data);
  }
});
//To run the code:

//Save the write-file.js and read-file.js files in the file-operations directory.
Open a terminal in the file-operations directory.
Run node write-file.js.
Run node read-file.js.
You should see the success message after writing to the file and the content of the file displayed in the terminal. This exercise demonstrates how to use the fs module for basic file system operations in Node.js.



//Exercises XP
//Exercise 1 : Multiple Exports and Import using CommonJS syntax
products.js

// products.js
const products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'Book', price: 15, category: 'Books' },
    { name: 'Headphones', price: 149, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
];

module.exports = products;
shop.js

// shop.js
const products = require('./products.js');

function findProductByName(productName) {
    return products.find(product => product.name === productName);
}

const productName1 = 'Laptop';
const productName2 = 'Shirt';

const product1 = findProductByName(productName1);
const product2 = findProductByName(productName2);

if (product1) {
    console.log(`Product Name: ${product1.name}`);
    console.log(`Price: $${product1.price}`);
    console.log(`Category: ${product1.category}`);
} else {
    console.log(`Product '${productName1}' not found.`);
}

if (product2) {
    console.log(`Product Name: ${product2.name}`);
    console.log(`Price: $${product2.price}`);
    console.log(`Category: ${product2.category}`);
} else {
    console.log(`Product '${productName2}' not found.`);
}
To run the code:
1. Save the products.js and shop.js files in the same directory.
2. Open a terminal in that directory.
3. Run node shop.js.

You should see the following output:

Product Name: Laptop
Price: $999
Category: Electronics
Product Name: Shirt
Price: $25
Category: Clothing


//Exercise 2: Advanced Module Usage using ES6 module syntax
data.js

// data.js
const persons = [
    { name: 'Alice', age: 30, location: 'New York' },
    { name: 'Bob', age: 25, location: 'Los Angeles' },
    { name: 'Charlie', age: 28, location: 'Chicago' },
    { name: 'David', age: 35, location: 'Houston' },
];

export default persons;
app.js

// app.js
import persons from './data.js';

function calculateAverageAge(personsArray) {
    const totalAges = personsArray.reduce((sum, person) => sum + person.age, 0);
    return totalAges / personsArray.length;
}

const averageAge = calculateAverageAge(persons);
console.log(`The average age of all persons is ${averageAge.toFixed(2)}`);
To run the code, follow these steps:
1. Save the data.js and app.js files in the same directory.
2. Open a terminal in that directory.
3. Run node app.js.

You should see the following output:

The average age of all persons is 29.50


//Exercise 3: File Management using CommonJS syntax
fileManager.js

// fileManager.js
const fs = require('fs');

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
}

module.exports = {
    readFile,
    writeFile
};
app.js

// app.js
const fileManager = require('./fileManager.js');

const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

const content = fileManager.readFile(inputFilePath);
fileManager.writeFile(outputFilePath, content);

console.log('File content copied successfully.');
To run the code:
1. Save the fileManager.js and app.js files in the same directory.
2. Create an input.txt file in the same directory with some text content.
3. Open a terminal in that directory.
4. Run node app.js.

You should see the message “File content copied successfully.” if the file operations are successful.



//Exercise 4: Todo List using ES6 module syntax
todo.js

// todo.js
class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, complete: false });
    }

    markTaskComplete(task) {
        const foundTask = this.tasks.find(item => item.task === task);
        if (foundTask) {
            foundTask.complete = true;
        }
    }

    listTasks() {
        this.tasks.forEach(item => {
            const status = item.complete ? 'Complete' : 'Incomplete';
            console.log(`${item.task} - ${status}`);
        });
    }
}

export default TodoList;
app.js

// app.js
import TodoList from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Go for a run');
todoList.addTask('Read a book');

todoList.markTaskComplete('Go for a run');

console.log('All tasks:');
todoList.listTasks();
To run the code:
1. Create a directory named todoApp.
2. Save the todo.js and app.js files in the todoApp directory.
3. Open a terminal in the todoApp directory.
4. Run node --experimental-modules app.js.

You should see the list of tasks with their statuses displayed in the terminal. This exercise demonstrates how to create and use ES6 modules in a Node.js application.



//Exercise 5: Creating and Using a Custom Module
math.js

// math.js
exports.add = function(a, b) {
    return a + b;
};

exports.multiply = function(a, b) {
    return a * b;
};
app.js

// app.js
const math = require('./math.js');
const _ = require('lodash');

const num1 = 5;
const num2 = 3;

const sum = math.add(num1, num2);
const product = math.multiply(num1, num2);
const randomNum = _.random(1, 100);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Random Number: ${randomNum}`);
To run the code:
1. Save the math.js and app.js files in the math-app directory.
2. Open a terminal in the math-app directory.
3. Run node app.js.

You should see the sum, product, and a random number displayed in the terminal. This exercise demonstrates how to create and use a custom module along with an external NPM package in a Node.js application.



//Exercise 6: Simple NPM Package Usage
app.js

// app.js
const chalk = require('chalk');

const message = chalk.bold.green('Hello, NPM Beginner!');
console.log(message);
To run the code:
1. Save the app.js file in the npm-beginner directory.
2. Open a terminal in the npm-beginner directory.
3. Run node app.js.

You should see the message “Hello, NPM Beginner!” displayed in bold green text. This exercise demonstrates how to install and use an external NPM package to enhance your Node.js application.



//Exercise 7: Reading and Copying Files
copy-file.js

// copy-file.js
const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        fs.writeFile('destination.txt', data, err => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('File copied successfully.');
            }
        });
    }
});
read-directory.js

// read-directory.js
const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Files in the directory:');
        files.forEach(file => {
            console.log(file);
        });
    }
});
To run the code:
1. Save the copy-file.js and read-directory.js files in the file-explorer directory.
2. Create a file named source.txt in the same directory with some text content.
3. Open a terminal in the file-explorer directory.
4. Run node copy-file.js.
5. Run node read-directory.js.

You should see the success message after copying the content and the list of files in the directory displayed in the terminal. This exercise further explores the capabilities of the fs module for file and directory operations in Node.js.



/Exercises XP Gold
Exercise 1: File Management and Path Manipulation
file-info.js

// file-info.js
const path = require('path');
const fs = require('fs');

function fileInfo() {
    const filePath = path.join(__dirname, 'data', 'example.txt');

    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log('File exists:', true);
        console.log('File size:', stats.size, 'bytes');
        console.log('File created on:', stats.birthtime);
    } else {
        console.log('File exists:', false);
    }
}

module.exports = fileInfo;
app.js

// app.js
const fileInfo = require('./file-info.js');

fileInfo();
To run the code:
1. Save the file-info.js and app.js files in the file-management directory.
2. Create the data directory inside the file-management directory and save the example.txt file with some content.
3. Open a terminal in the file-management directory.
4. Run node app.js.

You should see the file’s existence, size, and creation time displayed in the terminal. This exercise demonstrates how to work with file paths, use the fs module for file system operations, and structure your code using the Node.js module system.



//Exercise 2: Fetching and Displaying Data with Axios
fetch-data.js

// fetch-data.js
const axios = require('axios');

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        posts.forEach(post => {
            console.log(`Post Title: ${post.title}`);
        });
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
}

module.exports = fetchPosts;
app.js

// app.js
const fetchPosts = require('./fetch-data.js');

fetchPosts();
To run the code:
1. Save the fetch-data.js and app.js files in the axios-example directory.
2. Open a terminal in the axios-example directory.
3. Run node app.js.

You should see the titles of the fetched posts displayed in the terminal. This exercise demonstrates how to use the Axios library to make HTTP requests and how to structure your code using the Node.js module system.



//Exercise 3: Working with Dates Using the date-fns Module
date-operations.js

// date-operations.js
const { addDays, format } = require('date-fns');

function dateOperations() {
    const currentDate = new Date();
    const futureDate = addDays(currentDate, 5);
    const formattedDate = format(futureDate, 'MMMM d, yyyy');

    console.log('Current Date:', currentDate);
    console.log('Future Date:', formattedDate);
}

module.exports = dateOperations;
app.js

// app.js
const dateOperations = require('./date-operations.js');

dateOperations();
To run the code:
1. Save the date-operations.js and app.js files in the date-fns-usage directory.
2. Open a terminal in the date-fns-usage directory.
3. Run node app.js.

You should see the current date and the future date with 5 days added, displayed in the terminal. This exercise demonstrates how to utilize the date-fns package for date manipulation and formatting within your Node.js application.



//Exercise 4 : Faker Module
script.js

const  {fakeUsers} =  require("./fake");
const prompt = require('prompt');
prompt.start();
prompt.get(['name', 'address', 'language'], function (err, result) {
    console.log(fakeUsers(result.name, result.address, result.language));
    prompt.stop();
});
fake.js

class User {
  constructor(name, address, language_spoken) {
    this.name = name;
    this.address = address;
    this.language_spoken = language_spoken;
  }
}

exports.fakeUsers = (name, address, language) => {
  var faker = require('faker');
  var users = [];
  users.push(new User(name, address, language));
  for (let i = 0; i < 10; i++) {
    users.push(new User(faker.name.findName(), faker.address.streetAddress(), faker.address.country()));
  }
  return users;
}
package.json

{
  "name": "myproject",
  "version": "1.0.0",
  "description": "some description",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon script.js"
  },
  "author": "me",
  "license": "ISC",
  "dependencies": {
    "faker": "^5.4.0",
    "myproject": "^0.1.0",
    "prompt": "^1.1.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

node script.js


//Exercise 5 : Regular Expression #1
//Missing Solution



//Exercise 6 : Regular Expression #2
//Missing Solution



//Exercises XP Ninja
//Exercise 1: Node.js Application with Advanced Features
commands/greet.js

// commands/greet.js
const chalk = require('chalk');

function greet(name) {
    const message = chalk.bold.green(`Hello, ${name}! Welcome to the Ninja Utility.`);
    console.log(message);
}

module.exports = greet;
commands/fetch.js

// commands/fetch.js
const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const data = response.data;
        console.log('Fetched Data:');
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

module.exports = fetchData;
commands/read.js

// commands/read.js
const fs = require('fs');

function readAndDisplayFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File Content:');
            console.log(data);
        }
    });
}

module.exports = readAndDisplayFile;
index.js

// index.js
const { program } = require('commander');
const greet = require('./commands/greet.js');
const fetchData = require('./commands/fetch.js');
const readAndDisplayFile = require('./commands/read.js');

program
    .command('greet <name>')
    .description('Greet the user')
    .action(name => {
        greet(name);
    });

program
    .command('fetch')
    .description('Fetch data from a public API')
    .action(() => {
        fetchData();
    });

program
    .command('read <file>')
    .description('Read and display the content of a file')
    .action(file => {
        readAndDisplayFile(file);
    });

program.parse(process.argv);
To run the code:
1. Save the provided files with their respective content as outlined above.
2. Open a terminal in the ninja-utility directory.
3. Run node index.js greet John to greet the user.
4. Run node index.js fetch to fetch and display data from the API.
5. Run node index.js read files/file-data.txt to read and display the content of a file.

This ninja-level exercise combines the module system, npm packages, and the commander package to create a command-line utility with advanced features.



//Exercise 2 : Building a Weather Dashboard
weather.js

// weather.js
const axios = require('axios');
const chalk = require('chalk');

async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        const weatherData = response.data;

        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        console.log(chalk.bold(`Weather in ${city}:`));
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Description: ${description}`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}

module.exports = getWeather;
dashboard.js

// dashboard.js
const readline = require('readline');
const getWeather = require('./weather.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startDashboard() {
    rl.question('Enter a city name: ', city => {
        getWeather(city);
        rl.close();
    });
}

module.exports = startDashboard;
index.js

// index.js
const startDashboard = require('./dashboard.js');

startDashboard();
To run the code:
1. Save the provided files with their respective content as outlined above.
2. Replace 'YOUR_API_KEY' in weather.js with your actual OpenWeatherMap API key.
3. Open a terminal in the weather-dashboard directory.
4. Run node index.js to start the weather dashboard.
5. Enter different city names to fetch and display weather information.

This ninja-level exercise demonstrates how to build a more advanced Node.js application that interacts with external APIs, uses npm modules, and incorporates user input using the readline module.



//More Node.js Challenges
//Exercise 1: Date #1
script.js

const  {untilNY} =  require("./date");

console.log(untilNY());
date.js

exports.untilNY = ()=>{
    let now = new Date();
    let nyear = new Date('2022-01-01T00:00');
    let left = new Date(nyear - now);
    let days = parseInt(left/(1000*60*60*24));
    let hours = parseInt((left/(1000*60*60*24) - days)*24);
    let min = parseInt(((left/(1000*60*60*24) - days)*24 - hours)*60);
    let sec = parseInt((((left/(1000*60*60*24) - days)*24 - hours)*60 - min)*60);
    return ('the 1st January is in ' + days + ' days ' + hours + ' hours ' + min + ' min ' + sec + ' sec.');
}
node script.js


//Exercise 2 : Date #2
script.js

const  {minLived} =  require("./date");

const prompt = require('prompt');
prompt.start();

prompt.get(['userdate'], function (err, result) {
    console.log(minLived(result.userdate));
});
date.js

exports.minLived = (bdate) => {
    let now = new Date();
    let birthdate = new Date(bdate);
    let delta = now - birthdate;
    let minutes = parseInt(delta / (1000 * 60));
    return minutes + ' minutes';
}
package.json

{
  "name": "myproject",
  "version": "1.0.0",
  "description": "some description",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon script.js"
  },
  "author": "me",
  "license": "ISC",
  "dependencies": {
    "myproject": "^0.1.0",
    "prompt": "^1.1.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
node script.js


//Exercise 3: Date #3
script.js

const  {holiday} =  require("./date");

console.log(holiday());
date.js

exports.holiday = () => {

    let Holidays = require('date-holidays');
    let hd = new Holidays('RU');
    hd.setLanguages('en');
    let now = new Date();
    let nexth = new Date();
    while (!hd.isHoliday(nexth)){
        nexth = new Date(nexth-(-1000*60*60*24));
    }
    nexth.setHours(00);
    nexth.setMinutes(01);
    let left = new Date(nexth - now);
    let days = parseInt(left/(1000*60*60*24));
    let hours = parseInt((left/(1000*60*60*24) - days)*24);
    let min = parseInt(((left/(1000*60*60*24) - days)*24 - hours)*60);
    let sec = parseInt((((left/(1000*60*60*24) - days)*24 - hours)*60 - min)*60);
    let holl = hd.isHoliday(nexth);
    return ('The next holiday "'+ holl[0].name +'" is in '+days+' days '+hours+' hours '+min+' min '+sec+' sec.');
}
package.json

{
  "name": "myproject",
  "version": "1.0.0",
  "description": "some description",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon script.js"
  },
  "author": "me",
  "license": "ISC",
  "dependencies": {
    "date-holidays": "^3.3.0",
    "myproject": "^0.1.0",
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
node script.js


//Daily Challenge : Node.js App & NPM
//greeting.js

// greeting.js
function greet(name) {
    return `Hello, ${name}! Welcome to the Node.js challenge.`;
}

module.exports = greet;
colorful-message.js

// colorful-message.js
const chalk = require('chalk');

function displayColorfulMessage() {
    const message = chalk.bold.green('This is a colorful message!');
    console.log(message);
}

module.exports = displayColorfulMessage;
read-file.js

// read-file.js
const fs = require('fs');

function readAndDisplayFile() {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File Content:');
            console.log(data);
        }
    });
}

module.exports = readAndDisplayFile;
challenge.js

// challenge.js
const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');
const readAndDisplayFile = require('./read-file.js');

const userName = 'Alice';

console.log(greet(userName));
displayColorfulMessage();
readAndDisplayFile();
file-data.txt

This is some sample text content in the file.
app.js

// app.js
const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');
const readAndDisplayFile = require('./read-file.js');

const userName = 'Bob';

console.log(greet(userName));
displayColorfulMessage();
readAndDisplayFile();
To run the code:
1. Save the provided files with their respective content as outlined above.
2. Open a terminal in the directory containing these files.
3. Run node challenge.js to see the challenge solution in action.

You’ll see a personalized greeting, a colorful message, and the content of the file being displayed in the terminal. This solution demonstrates how to create and use custom modules, integrate NPM packages, and perform file operations within a Node.js application.

Node.js Introduction
Solution Node.js Day1
