//Solutions
//Mini Project : Multiplayer strategy
//Simple version of the solution
Please note that this is a basic example, and you can expand upon it to make the game more engaging and feature-rich.

Backend (Express):

Set up your Express server and install necessary packages (express, body-parser, etc.).

Define routes and game logic:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Game state variables
const gridSize = 10;
let grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));

let player1 = { x: 0, y: 0, base: { x: 0, y: 0 } };
let player2 = { x: gridSize - 1, y: gridSize - 1, base: { x: gridSize - 1, y: gridSize - 1 } };

let currentPlayer = player1;

// Route to start a new game session
app.post('/api/start', (req, res) => {
  grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
  currentPlayer = player1;
  res.json({ message: 'Game started', currentPlayer: currentPlayer });
});

// Route to make a move
app.post('/api/move', (req, res) => {
  const { direction } = req.body;
  const { x, y } = currentPlayer;

  let newX = x;
  let newY = y;

  if (direction === 'up' && y > 0) {
    newY = y - 1;
  } else if (direction === 'down' && y < gridSize - 1) {
    newY = y + 1;
  } else if (direction === 'left' && x > 0) {
    newX = x - 1;
  } else if (direction === 'right' && x < gridSize - 1) {
    newX = x + 1;
  }

  // Update player position
  currentPlayer.x = newX;
  currentPlayer.y = newY;

  // Check for a winner
  if (newX === currentPlayer.base.x && newY === currentPlayer.base.y) {
    res.json({ message: `Player ${currentPlayer === player1 ? 1 : 2} wins!` });
  } else {
    // Switch players
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    res.json({ message: 'Move successful', currentPlayer: currentPlayer });
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
Frontend (HTML, CSS, and JavaScript):

Design the game interface using HTML and CSS.
<!DOCTYPE html>
<html>
<head>
  <title>Strategy Game</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="game-board" id="game-board">
    <!-- Render the grid here -->
  </div>
  <button id="start-button">Start Game</button>
  <button id="move-button">Make Move</button>
  <select id="direction-select">
    <option value="up">Up</option>
    <option value="down">Down</option>
    <option value="left">Left</option>
    <option value="right">Right</option>
  </select>

  <script src="script.js"></script>
</body>
</html>
Implement JavaScript to interact with the backend and update the UI.
// script.js
const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');
const moveButton = document.getElementById('move-button');
const directionSelect = document.getElementById('direction-select');

startButton.addEventListener('click', startGame);
moveButton.addEventListener('click', makeMove);

async function startGame() {
  // Send POST request to start a new game
  const response = await fetch('/api/start', { method: 'POST' });
  const data = await response.json();
  alert(`Game started. Player ${data.currentPlayer === player1 ? 1 : 2} goes first.`);
}

async function makeMove() {
  const direction = directionSelect.value;

  // Send POST request to make a move
  const response = await fetch('/api/move', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ direction })
  });
  const data = await response.json();

  alert(data.message);

  if (data.message.includes('wins')) {
    // Game over, show winner message
    directionSelect.disabled = true;
    moveButton.disabled = true;
  }
}
This solution provides a basic implementation of a turn-based multiplayer strategy game using Express for the backend and HTML/CSS/JavaScript for the frontend.
Players can start a game session, make moves, and capture opponent bases.
Remember, you can enhance this game by adding more features, such as obstacles, different unit types, and more strategic elements.



//Daily Challenge : Login & Register
//SOLUTION daily challenge Login & Register HERE



Mini Project : Create a Task Management API with Express.js and JSON File Storage
Here’s a basic solution to get you started with the challenge:

Step 1: Setup
1. Create a new directory for your project.
2. Navigate to the project directory using your command line.
3. Initialize a new Node.js project by running npm init -y.

Step 2: Install Dependencies
Install Express.js and other necessary packages by running the following commands:

npm install express body-parser fs
Step 3: Create Your Express Application
Create a JavaScript file (e.g., app.js) to set up your Express application:

// app.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Path to the JSON file for task data
const tasksFilePath = './tasks.json';

// Your code for setting up routes will go here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
Step 4: Create a Router Module
Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., tasks.js) where you will define routes for managing tasks using express.Router():

// routes/tasks.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Path to the JSON file for task data
const tasksFilePath = './tasks.json';

// GET all tasks
router.get('/', (req, res) => {
  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const tasks = JSON.parse(data);
    res.json(tasks);
  });
});

// GET a specific task by ID
router.get('/:id', (req, res) => {
  const taskId = req.params.id;

  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const tasks = JSON.parse(data);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  });
});

// POST a new task
router.post('/', (req, res) => {
  const newTask = req.body;

  if (!newTask.title || !newTask.description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const tasks = JSON.parse(data);
    newTask.id = Math.random().toString(36).substr(2, 9); // Generate a random ID
    tasks.push(newTask);

    fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json(newTask);
    });
  });
});

// PUT (update) a task by ID
router.put('/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  if (!updatedTask.title || !updatedTask.description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    let tasks = JSON.parse(data);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks[index] = updatedTask;

    fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
      if (err) {
        return res.status(500).json({ error:

 err.message });
      }
      res.json(updatedTask);
    });
  });
});

// DELETE a task by ID
router.delete('/:id', (req, res) => {
  const taskId = req.params.id;

  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    let tasks = JSON.parse(data);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(index, 1);

    fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.sendStatus(204);
    });
  });
});

module.exports = router;
Step 5: Create the JSON File
Create a JSON file (e.g., tasks.json) in your project directory and initialize it with an empty array [].

Step 6: Mount the Router in Your Application
In your app.js file, import the router module you created and mount it in your Express application:

// app.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Path to the JSON file for task data
const tasksFilePath = './tasks.json';

// Import the router module
const tasksRouter = require('./routes/tasks');

// Mount the router
app.use('/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
Step 7: Start Your Server
Now, you can start your Express server by running:

node app.js
Step 8: Test Your API
You can use tools like Postman or curl to interact with the API:

GET http://localhost:3000/tasks (Get all tasks)
GET http://localhost:3000/tasks/:id (Get a specific task by ID)
POST http://localhost:3000/tasks (Create a new task with a JSON request body)
PUT http://localhost:3000/tasks/:id (Update a task by ID with a JSON request body)
DELETE http://localhost:3000/tasks/:id (Delete a task by ID)
This mini project challenge helps you practice creating a RESTful API for managing tasks with CRUD operations using Express.js and storing data in a JSON file. You can further extend this project by adding more features, such as user authentication, validation, and pagination, as you become more familiar with Express.js and web development.



Mini Project : Create a User Management API with Registration and Login using Express.js, Bcrypt, and JSON File Storage
Here’s a basic solution to get you started with the challenge:

Step 1: Setup

Create a new directory for your project.
Navigate to the project directory using your command line.
Initialize a new Node.js project by running npm init -y.
Step 2: Install Dependencies
Install Express.js, bcrypt, and other necessary packages by running the following commands:

npm install express body-parser bcryptjs fs
Step 3: Create Your Express Application
Create a JavaScript file (e.g., app.js) to set up your Express application:

// app.js
const express = require("express");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Path to the JSON file for user data
const usersFilePath = "./users.json";

// Your code for setting up routes will go here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
Step 4: Create a Router Module
Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., users.js) where you will define routes for user registration, login, and management using express.Router():

// routes/users.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcryptjs');

// Path to the JSON file for user data
const usersFilePath = './users.json';

// POST user registration
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const users = JSON.parse(data);

    // Check if the username already exists
    if (users.some((user) => user.username === username)) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password before storing it
    bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        return res.status(500).json({ error: hashErr.message });
      }

      const newUser = { username, password: hashedPassword };
      users.push(newUser);

      fs.writeFile(usersFilePath, JSON.stringify(users), (writeErr) => {
        if (writeErr) {
          return res.status(500).json({ error: writeErr.message });
        }
        res.status(201).json(newUser);
      });
    });
  });
});

// POST user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    bcrypt.compare(password, user.password, (compareErr, isMatch) => {
      if (compareErr || !isMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
      res.json({ message: 'Authentication successful' });
    });
  });
});

// GET all users (for demonstration purposes; no authentication required)
router.get('/users', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

// GET a specific user by ID (for demonstration purposes; no authentication required)
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  });
});

// PUT (update) a user by ID (for demonstration purposes; no authentication required)
router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    let users = JSON.parse(data);
    const index = users.findIndex((u) => u.id === userId);

    if (index === -1) {
      return res.status(404).json({ error: 'User not found'
Mini Project Day
Solutions Mini Project Node.js
