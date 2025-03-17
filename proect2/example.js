const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()) //Allows all URL's to connect to your app

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Default MySQL password for WampServer
    database: "todo_app"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL database");
});

// Test API Route
app.get("/", (req, res) => {
    res.send("TODO App API is running...");
});

// Start Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
