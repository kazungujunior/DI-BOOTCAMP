Exercises XP


Exercise 1: Building a RESTful API with database connection
To build a RESTful API with Express and Knex.js for a blog platform, follow these steps:

Step 1: Set Up the Project

Create a directory named blog-api.
Navigate to the blog-api directory in your terminal.
Initialize a new Node.js project by running npm init and follow the prompts to set up your project.
Install the required packages, including express, knex, and pg (PostgreSQL driver) using the following command:
npm install express knex pg
Step 2: Create the Project Structure

Inside the blog-api directory, create the following directory structure:

blog-api
    |_ config
    |_ controllers
    |_ models
    |_ routes
    |_ server.js
Step 3: Set Up PostgreSQL Database

Create a PostgreSQL database named blog and a posts table with columns id, title, and content. You can use a PostgreSQL client like psql or a GUI tool like PostgreSQL’s pgAdmin to create the database and table. Make sure to have PostgreSQL installed on your system.

Step 4: Create Database Configuration

In the config directory, create a file named knexfile.js to configure Knex.js to connect to your PostgreSQL database:

// config/knexfile.js

const knex = require("knex");

module.exports = {
  db: knex({
    client: "pg",
    connection: {
      host: "localhost",
      user: "your_username",
      password: "your_password",
      database: "blog",
    },
  }),
};
Replace environment with your PostgreSQL credentials.

Step 5: Create Model Functions

In your models directory, create a file named Post.js to define the model functions for database interactions:

// models/Post.js
const knex = require("knex")(require("../config/knexfile"));

module.exports = {
  getAllPosts: async () => {
    try {
      const posts = await knex("posts");
      return posts;
    } catch (error) {
      throw error;
    }
  },

  getPostById: async (id) => {
    try {
      const post = await knex("posts").where("id", id).first();
      return post;
    } catch (error) {
      throw error;
    }
  },

  createPost: async (title, content) => {
    try {
      const [postId] = await knex("posts").insert({ title, content }, "id");
      const newPost = await knex("posts").where("id", postId).first();
      return newPost;
    } catch (error) {
      throw error;
    }
  },

  updatePost: async (id, title, content) => {
    try {
      await knex("posts").where("id", id).update({ title, content });
      const updatedPost = await knex("posts").where("id", id).first();
      return updatedPost;
    } catch (error) {
      throw error;
    }
  },

  deletePost: async (id) => {
    try {
      const deletedPost = await knex("posts").where("id", id).first();

      if (!deletedPost) {
        throw new Error("Post not found");
      }

      await knex("posts").where("id", id).del();
      return deletedPost;
    } catch (error) {
      throw error;
    }
  },
};
Step 6: Implement Controllers

In your controllers directory, update the PostController.js file to use the model functions for database interactions:

// controllers/PostController.js
const Post = require("../models/Post.js"); // Import the Post model functions

module.exports = {
  async getAllPosts(req, res) {
    try {
      const posts = await Post.getAllPosts(); // Use the model function
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getPostById(req, res) {
    const postId = req.params.id;

    try {
      const post = await Post.getPostById(postId); // Use the model function

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async createPost(req, res) {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    try {
      const newPost = await Post.createPost(title, content); // Use the model function
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async updatePost(req, res) {
    const postId = req.params.id;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    try {
      const updatedPost = await Post.updatePost(postId, title, content); // Use the model function

      if (!updatedPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async deletePost(req, res) {
    const postId = req.params.id;

    try {
      const deletedPost = await Post.deletePost(postId); // Use the model function

      if (!deletedPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
Step 7: Implement Routes

In the routes directory, create a file named posts.js. Define the Express routes for handling CRUD operations on blog posts in this file.

// routes/posts.js
const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController.js");

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

module.exports = router;
With this modification, the controllers now use the model functions for database interactions, making your code more organized and maintainable.



Exercise 2: Building a Basic CRUD API with database connection
Organized into config, models, controllers, and routes folders:

Step 1: Project Structure

Create the following project structure:

book-api
    |_ config
    |    |_ db.js
    |_ controllers
    |    |_ booksController.js
    |_ models
    |    |_ booksModel.js
    |_ routes
    |    |_ booksRoutes.js
    |_ app.js
Step 2: Database Configuration (config/db.js)

In the config directory, create a file named db.js for database configuration:

// config/db.js
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "your_host",
    user: "your_username",
    password: "your_password",
    database: "bookstore",
  },
});

module.exports = db;
Replace 'your_host', 'your_username', and 'your_password' with your PostgreSQL credentials.

Step 3: Model Functions (models/booksModel.js)

In the models directory, create a file named booksModel.js for the model functions:

// models/booksModel.js
const db = require("../config/db");

module.exports = {
  getAllBooks: async () => {
    try {
      const books = await db("books");
      return books;
    } catch (error) {
      throw error;
    }
  },

  getBookById: async (id) => {
    try {
      const book = await db("books").where("id", id).first();
      return book;
    } catch (error) {
      throw error;
    }
  },

  createBook: async (title, author, publishedYear) => {
    try {
      const [bookId] = await db("books").insert(
        { title, author, publishedYear },
        "id"
      );
      const newBook = await db("books").where("id", bookId).first();
      return newBook;
    } catch (error) {
      throw error;
    }
  },
};
Step 4: Controllers (controllers/booksController.js)

In the controllers directory, create a file named booksController.js for controller functions:

// controllers/booksController.js
const booksModel = require("../models/booksModel");

module.exports = {
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await booksModel.getAllBooks();
      res.json(allBooks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getBookById: async (req, res) => {
    const bookId = parseInt(req.params.bookId);

    try {
      const book = await booksModel.getBookById(bookId);

      if (!book) {
        res.status(404).json({ error: "Book not found" });
      } else {
        res.json(book);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createBook: async (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
      res
        .status(400)
        .json({ error: "Title, author, and publishedYear are required" });
    } else {
      try {
        const newBook = await booksModel.createBook(
          title,
          author,
          publishedYear
        );
        res.status(201).json(newBook);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  },
};
Step 5: Routes (routes/booksRoutes.js)

In the routes directory, create a file named booksRoutes.js for defining routes:

// routes/booksRoutes.js
const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Read all books
router.get("/", booksController.getAllBooks);

// Read a single book by ID
router.get("/:bookId", booksController.getBookById);

// Create a new book
router.post("/", booksController.createBook);

module.exports = router;
Step 6: Express App (app.js)

In the app.js file, set up the Express app with routes:

// app.js
const express = require("express");
const app = express();
const booksRoutes = require("./routes/booksRoutes");

// Middleware to parse JSON requests
app.use(express.json());

// Use books routes
app.use("/api/books", booksRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Step 7: Run the Application

Run the Express application using the following command:

node app.js


//Exercise XP Gold
//Exercise 1: Todo List API with database connection
To create a Todo List API with database connection using Express, PostgreSQL, and organize the project into config, models, controllers, and routes folders, follow these steps:

Step 1: Project Setup

Create a directory for your project, e.g., todo-list-api.

Initialize a new Node.js project and install the required packages:

npm init -y
npm install express knex pg
Step 2: Database Configuration (config/db.js)

In the config directory, create a file named db.js for configuring the Knex.js connection to your PostgreSQL database:

// config/db.js
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "your_host",
    user: "your_username",
    password: "your_password",
    database: "userdb", // Replace with your database name
  },
});

module.exports = db;
Step 3: Model Functions (models/taskModel.js)

Create a file named taskModel.js in the models directory to define model functions for task database interactions:

// models/taskModel.js
const db = require("../config/db");

module.exports = {
  createTask: async (task) => {
    try {
      const [taskId] = await db("tasks").insert(task, "id");
      return taskId;
    } catch (error) {
      throw error;
    }
  },

  getAllTasks: async () => {
    try {
      const tasks = await db("tasks");
      return tasks;
    } catch (error) {
      throw error;
    }
  },

  getTaskById: async (id) => {
    try {
      const task = await db("tasks").where("id", id).first();
      return task;
    } catch (error) {
      throw error;
    }
  },

  updateTaskById: async (id, updatedTask) => {
    try {
      await db("tasks").where("id", id).update(updatedTask);
    } catch (error) {
      throw error;
    }
  },

  deleteTaskById: async (id) => {
    try {
      const deletedTask = await db("tasks").where("id", id).first();

      if (!deletedTask) {
        throw new Error("Task not found");
      }

      await db("tasks").where("id", id).del();
      return deletedTask;
    } catch (error) {
      throw error;
    }
  },
};
Step 4: Controllers (controllers/taskController.js)

Create a file named taskController.js in the controllers directory for controller functions:

// controllers/taskController.js
const taskModel = require("../models/taskModel");

module.exports = {
  createTask: async (req, res) => {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = {
      title,
      completed: false,
    };

    try {
      const taskId = await taskModel.createTask(task);
      res.status(201).json({ message: "Task created successfully", taskId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllTasks: async (req, res) => {
    try {
      const tasks = await taskModel.getAllTasks();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getTaskById: async (req, res) => {
    const taskId = parseInt(req.params.id);

    try {
      const task = await taskModel.getTaskById(taskId);

      if (!task) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.json(task);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateTaskById: async (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;

    try {
      await taskModel.updateTaskById(taskId, updatedTask);
      res.json({ message: "Task updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteTaskById: async (req, res) => {
    const taskId = parseInt(req.params.id);

    try {
      const deletedTask = await taskModel.deleteTaskById(taskId);

      if (!deletedTask) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
Step 5: Routes (routes/taskRoutes.js)

Create a file named taskRoutes.js in the routes directory to define routes:

// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Create a new task
router.post("/todos", taskController.createTask);

// Get all tasks
router.get("/todos", taskController.getAllTasks);

// Get a task by ID
router.get("/todos/:id", taskController.getTaskById);

// Update a task by ID
router.put("/todos/:id", taskController.updateTaskById);

// Delete a task by ID
router.delete("/todos/:id", taskController.deleteTaskById);

module.exports = router;
Step 6: Express App (app.js)

In the app.js file, set up the Express app with routes:

// app.js
const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");

// Middleware to parse JSON data from requests
app.use(express.json());

// Use task routes
app.use("/api", taskRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Step 7: Run the Application

Run the Express application using the following command:

node app.js
Your Todo List API with a database connection, organized into config, models, controllers, and routes folders, is now ready to use. Test your API using tools like Postman or curl.



Exercise XP Ninja


Exercise 1: Quiz Game with database connection
To create a Quiz Game with database connection using Express, PostgreSQL, and organize the project into config, models, controllers, and routes folders, follow these steps:

Step 1: Project Setup

Create a directory for your project, e.g., quiz-game.

Initialize a new Node.js project and install the required packages:

npm init -y
npm install express knex pg
Step 2: Database Configuration (config/db.js)

In the config directory, create a file named db.js for configuring the Knex.js connection to your PostgreSQL database:

// config/db.js
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "your_host",
    user: "your_username",
    password: "your_password",
    database: "userdb", // Replace with your database name
  },
});

module.exports = db;
Step 3: Model Functions (models/quizModel.js)

Create a file named quizModel.js in the models directory to define model functions for quiz database interactions:

// models/quizModel.js
const db = require("../config/db");

module.exports = {
  getAllQuestions: async () => {
    try {
      const questions = await db("questions");
      return questions;
    } catch (error) {
      throw error;
    }
  },

  getOptionsForQuestion: async (questionId) => {
    try {
      const options = await db("questions2options")
        .where("question_id", questionId)
        .join("options", "questions2options.option_id", "=", "options.id")
        .select("options.option");
      return options;
    } catch (error) {
      throw error;
    }
  },

  getCorrectAnswerForQuestion: async (questionId) => {
    try {
      const correctAnswer = await db("questions")
        .where("id", questionId)
        .select("correctAnswer")
        .first();
      return correctAnswer.correctAnswer;
    } catch (error) {
      throw error;
    }
  },
};
Step 4: Controllers (controllers/quizController.js)

Create a file named quizController.js in the controllers directory for controller functions:

// controllers/quizController.js
const quizModel = require("../models/quizModel");

module.exports = {
  getAllQuestions: async (req, res) => {
    try {
      const questions = await quizModel.getAllQuestions();
      res.json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getOptionsForQuestion: async (req, res) => {
    const questionId = parseInt(req.params.id);

    try {
      const options = await quizModel.getOptionsForQuestion(questionId);
      res.json(options);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getCorrectAnswerForQuestion: async (req, res) => {
    const questionId = parseInt(req.params.id);

    try {
      const correctAnswer = await quizModel.getCorrectAnswerForQuestion(
        questionId
      );
      res.json({ correctAnswer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
Step 5: Routes (routes/quizRoutes.js)

Create a file named quizRoutes.js in the routes directory to define routes:

// routes/quizRoutes.js
const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

// Get all questions
router.get("/questions", quizController.getAllQuestions);

// Get options for a question by ID
router.get("/questions/:id/options", quizController.getOptionsForQuestion);

// Get correct answer for a question by ID
router.get(
  "/questions/:id/correct-answer",
  quizController.getCorrectAnswerForQuestion
);

module.exports = router;
Step 6: Express App (app.js)

In the app.js file, set up the Express app with routes:

// app.js
const express = require("express");
const app = express();
const quizRoutes = require("./routes/quizRoutes");

// Middleware to parse JSON data from requests
app.use(express.json());

// Use quiz routes
app.use("/api", quizRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Step 7: Run the Application

Run the Express application using the following command:

node app.js
Your Quiz Game API with a database connection, organized into config, models, controllers, and routes folders, is now ready to use. You can create a frontend using HTML, CSS, and JavaScript to interact with the API and build the quiz interface.



//Daily Challenge : Create a User Management API with Registration and Login using Express.js, Bcrypt, and Database


To create a User Management API with registration and login using Express.js, Bcrypt, and a database (PostgreSQL in this example), and organize the project into config, models, controllers, and routes folders, follow these steps:

Step 1: Project Setup

Create a directory for your project, e.g., user-management-api.

Initialize a new Node.js project and install the required packages:

npm init -y
npm install express knex pg bcrypt
Step 2: Database Configuration (config/db.js)

In the config directory, create a file named db.js for configuring the Knex.js connection to your PostgreSQL database:

// config/db.js
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "your_host",
    user: "your_username",
    password: "your_password",
    database: "userdb", // Replace with your database name
  },
});

module.exports = db;
Step 3: Model Functions (models/userModel.js)

In the models directory, create a file named userModel.js to define the model functions for user database interactions:

// models/userModel.js
const db = require("../config/db");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (user) => {
    const { username, password, email, first_name, last_name } = user;
    const trx = await db.transaction();

    try {
      // Insert user data into the 'users' table
      const [userId] = await trx("users").insert(
        { email, username, first_name, last_name },
        "id"
      );

      // Hash the password and insert it into the 'hashpwd' table
      const hashedPassword = await bcrypt.hash(password, 10);
      await trx("hashpwd").insert({ username, password: hashedPassword });

      await trx.commit();

      return userId;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  },

  getUserByUsername: async (username) => {
    try {
      const user = await db("users").where("username", username).first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const users = await db("users");
      return users;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const user = await db("users").where("id", id).first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  updateUserById: async (id, updatedUser) => {
    try {
      await db("users").where("id", id).update(updatedUser);
    } catch (error) {
      throw error;
    }
  },
};
Step 4: Controllers (controllers/userController.js)

In the controllers directory, create a file named userController.js for controller functions:

// controllers/userController.js
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      username,
      password: hashedPassword,
      email,
      first_name,
      last_name,
    };

    try {
      const userId = await userModel.createUser(user);
      res.status(201).json({ message: "User registered successfully", userId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  loginUser: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await userModel.getUserByUsername(username);

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Authentication failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserById: async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
      const user = await userModel.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateUserById: async (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    try {
      await userModel.updateUserById(userId, updatedUser);
      res.json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
Step 5: Routes (routes/userRoutes.js)

In the routes directory, create a file named userRoutes.js for defining routes:

// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Register a new user
router.post("/register", userController.registerUser);

// Login as a user
router.post("/login", userController.loginUser);

// Get all users
router.get("/users", userController.getAllUsers);

// Get a user by ID
router.get("/users/:id", userController.getUserById);

// Update a user by ID
router.put("/users/:id", userController.updateUserById);

module.exports = router;
Step 6: Express App (app.js)

In the app.js file, set up the Express app with routes:

// app.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

// Middleware to parse JSON requests
app.use(express.json());

// Use user routes
app.use("/api", userRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Step 7: Run the Application

Run the Express application using the following command:

node app.js
Your User Management API with registration and login, organized into config, models, controllers, and routes folders, is now ready to use. Test your API using tools like Postman or curl.