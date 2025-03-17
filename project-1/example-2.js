// ======================================
// example-2.js - API Endpoint Structure
// ======================================
// This file provides the basic structure for all required API endpoints
// You'll need to implement the database logic inside each endpoint

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection - you need to set this up
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Default MySQL password for WampServer
  database: "todo_app",
});

// Establish database connection
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// ======================================
// API ENDPOINTS
// ======================================

// 1. GET /todos - Get all todos
// This endpoint should return all todos from the database
app.get("/todos", (req, res) => {
  // TODO: Implement code to fetch all todos from the database
  // Return the todos as JSON
});

// 2. GET /todos/search - Search todos
// This endpoint should return todos that match the search term
app.get("/todos/search", (req, res) => {
  // TODO: Get the search query from req.query.q
  // Implement code to search todos in the database
  // Return matching todos as JSON
});

// 3. POST /todos - Create a new todo
// This endpoint should add a new todo to the database
app.post("/todos", (req, res) => {
  // TODO: Get the todo title from req.body.title
  // Validate that title is not empty
  // Insert the new todo into the database
  // Return the newly created todo as JSON
});

// 4. PUT /todos/:id - Update a todo
// This endpoint should update an existing todo
app.put("/todos/:id", (req, res) => {
  // TODO: Get the todo ID from req.params.id
  // Get the updated title and/or completed status from req.body
  // Update the todo in the database
  // Return the updated todo as JSON
});

// 5. DELETE /todos/:id - Delete a todo
// This endpoint should remove a todo from the database
app.delete("/todos/:id", (req, res) => {
  // TODO: Get the todo ID from req.params.id
  // Delete the todo from the database
  // Return a success message
});

// Test API Route
app.get("/", (req, res) => {
  res.send("TODO App API is running...");
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
