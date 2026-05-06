//SOLUTIONS EXERCISES


//Exercise : Creating a Simple HTTP Server
//Here’s a simplified version of the expected code:

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end("<h1>Welcome to My Server</h1>");
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});


//Exercise: Creating Your First Express API
//Here’s a simplified version of the expected code:

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/api/greetings', (req, res) => {
    res.json({ message: 'Hello, this is your first Express API!' });
});


//Exercise: Building a Blog API with Route Parameters and Query Strings
//Solution option version of the expected code:

data.js

const posts = [
  {
    id: 1,
    title: "Introduction to Express",
    content: "Express is a web application framework for Node.js.",
  },
  {
    id: 2,
    title: "Getting Started with APIs",
    content: "Learn the basics of building APIs with Express.",
  },
  {
    id: 3,
    title: "Node.js Best Practices",
    content:
      "Explore best practices for writing clean and efficient Node.js code.",
  },
];

module.exports = posts;
app.js

const express = require("express");
const app = express();
const posts = require("./data.js");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.json(post);
});

app.get("/api/search", (req, res) => {
  const title = req.query.title.toLowerCase();
  const postsResult = posts.filter((post) =>
    post.title.toLowerCase().includes(title)
  );

  if (postsResult.length < 1) {
    return res.status(200).send("No posts matched your search");
  }
  res.json(postsResult);
});


//Exercise: Building a CRUD API with Different Data
//Solution option version of the expected code:

data.js

const posts = [
  {
    id: 1,
    title: "Introduction to Express",
    content: "Express is a web application framework for Node.js.",
  },
  {
    id: 2,
    title: "Creating Routes in Express",
    content: "You can define routes using the express.Router() method.",
  },
  {
    id: 3,
    title: "Handling Requests and Responses",
    content:
      "Express provides methods to handle incoming requests and send responses.",
  },
];

module.exports = posts;
app.js

const express = require("express");
const app = express();
const posts = require("./data.js");

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use(express.json());

app.post("/api/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.json(post);
});

app.put("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).send("Post not found");
  }

  const updatedPost = {
    id: posts[index].id,
    title: req.body.title,
    content: req.body.content,
  };

  posts[index] = updatedPost;
  res.status(200).json("Post updated");
});

app.delete("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).send("Post not found");
  }

  posts.splice(index, 1);
  res.status(200).json("Post deleted");
});
Run your app.js file using Node.js: node app.js.

//Use tools like curl or Postman to test the CRUD operations on the /api/posts endpoints, similar to the previous exercise.



//Exercises XP
//Exercise 1 :Building a RESTful API
server.js

// server.js
const express = require('express');
const app = express();
app.use(express.json());

const data = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find(post => post.id === postId);

    if (!post) {
        res.status(404).json({ message: 'Post not found' });
    } else {
        res.json(post);
    }
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = data.length + 1;
    data.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex(post => post.id === postId);

    if (postIndex === -1) {
        res.status(404).json({ message: 'Post not found' });
    } else {
        data[postIndex] = { ...data[postIndex], ...req.body };
        res.json(data[postIndex]);
    }
});

app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex(post => post.id === postId);

    if (postIndex === -1) {
        res.status(404).json({ message: 'Post not found' });
    } else {
        data.splice(postIndex, 1);
        res.json({ message: 'Post deleted' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//To run the code:
1. Save the provided files with their respective content as outlined above.
2. Open a terminal in the blog-api directory.
3. Run node server.js to start the Express server.
4. Use tools like Postman or curl to test the different endpoints (GET, POST, PUT, DELETE).



//Exercise 2 : Building a Basic CRUD API with Express.js
//Here’s a possible solution to the exercise:

// app.js
const express = require('express');
const app = express();
const PORT = 5000;

const books = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', publishedYear: 1949 }
];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.json(book);
});

app.use(express.json());

app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
Make sure to test each route using tools like curl or Postman to ensure they are working as expected. This exercise provides a foundational understanding of building a CRUD API with Express.js.



//Exercise 3 : Building a Basic CRUD API with Express and Axios using a Data Module
//Here’s a possible solution to the exercise:

// app.js (crud-api)
const express = require('express');
const dataService = require('./data/dataService');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Use the dataService module to retrieve data from JSONPlaceholder API and respond with the data
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
        console.log('Data retrieved and sent as response.');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});
// data/dataService.js
const axios = require('axios');

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    fetchPosts
};
//Run the app.js file in the crud-api directory to start your Express server. Access the data by making a GET request to http://localhost:5000/api/posts. This exercise demonstrates using a separate module to handle data retrieval using Axios and integrating it into your Express API.



//Exercises XP GOLD
//Exercise 1 : Building an Intermediate CRUD API with Express and Axios using External Data
//Here’s a possible solution to the exercise:

// app.js (crud-api-intermediate)
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Read All Posts
app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        res.json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

// Read Single Post
app.get('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = response.data;
        res.json(post);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

// Create Post
app.post('/api/posts', async (req, res) => {
    const newPost = req.body;
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        const createdPost = response.data;
        res.json(createdPost);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

// Update Post
app.put('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost);
        const result = response.data;
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

// Delete Post
app.delete('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const result = response.data;
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});
//Run the app.js file in the crud-api-intermediate directory to start your Express server. This exercise demonstrates building an intermediate-level CRUD API using Express and Axios to interact with external data.



//Exercise 2 : Building a User Login System with Express
//Possible solution:

// app.js (user-Login)
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000;

app.use(express.json());

const users = [];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// User registration
app.post('/api/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { username: req.body.username, password: hashedPassword };
        users.push(user);
        res.status(201).send('User registered successfully');
    } catch {
        res.status(500).send('Registration failed');
    }
});

// User login
app.post('/api/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username);
    if (!user) return res.status(400).send('User not found');

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.json({ user });
        } else {
            res.status(401).send('Login failed');
        }
    } catch {
        res.status(500).send('Login failed');
    }
});


//Remember that this solution demonstrates a basic user Login system with Express for an intermediate exercise. You can build upon this foundation by adding more features and security enhancements.



//Exercise 3 : Todo List API
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let todos = [];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Get a specific todo
app.get('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return res.status(404).send('Todo not found');
    res.json(todo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return res.status(404).send('Todo not found');
    todos[index] = { ...todos[index], ...updatedTodo };
    res.json(todos[index]);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return res.status(404).send('Todo not found');
    todos.splice(index, 1);
    res.status(204).send();
});
//Remember to install the required dependencies (express) using npm. This solution provides a basic structure for the exercise. You can further enhance error handling, validation, and data persistence (using a database) for a production-ready application.



//Exercises XP NINJA
//Exercise 1 : Express Node.js Quiz Game
//Here’s a simplified version of the challenge. You can expand upon this to create a more feature-rich quiz game.

Set up your project with Express and create necessary routes and endpoints.
Build a frontend interface for the quiz game using HTML, CSS, and JavaScript.
Define an array of objects, each representing a question with multiple-choice options and the correct answer.
Implement routes to serve the questions to the frontend.
Use JavaScript to handle user interactions, including displaying questions, tracking answers, and updating the score.
Provide immediate feedback to the user based on their answers.
Display the final score at the end of the quiz.
const express = require('express');
const app = express();

app.use(express.static('public'));

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    // Add more questions here
];

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//Remember to create the frontend interface for the quiz game, implement user interactions, and provide a user-friendly experience for users to play the quiz. This exercise demonstrates your ability to create interactive web applications and engage users through gamified experiences.



//Daily Challenge :
//Example Solution:
H///ere’s a simplified version of the challenge. You can build upon this to create a more interactive and engaging game.

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

let leaderboard = [];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/play', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    const options = generateOptions(randomEmoji.name);

    res.json({
        emoji: randomEmoji.emoji,
        options,
    });
});

app.post('/api/submit', (req, res) => {
    const { emoji, guess } = req.body;
    const correctName = emojis.find(e => e.emoji === emoji)?.name;
    const isCorrect = guess === correctName;

    if (isCorrect) {
        leaderboard.push({ name: 'Player', score: 1 }); // Increment the player's score
    }

    res.json({ correct: isCorrect, correctName });
});

app.get('/api/leaderboard', (req, res) => {
    const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);
    res.json(sortedLeaderboard);
});

function generateOptions(correctName) {
    const options = [correctName];
    while (options.length < 4) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        if (!options.includes(randomEmoji.name)) {
            options.push(randomEmoji.name);
        }
    }
    return shuffleArray(options);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//Remember to install the required dependencies (express) using npm.

//This daily challenge encourages creativity in designing an interactive and enjoyable game while utilizing Express to handle game logic and user interactions. You can extend and enhance the game further with additional features and improvements.