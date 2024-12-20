const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "your_password",
  database: "signup",
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to the database.");
});

// Registration route
app.post("/register", (req, res) => {
  const { name, email, contact, batch, password } = req.body;

  const query = "INSERT INTO users (name, email, contact, batch, password) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, email, contact, batch, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.status(200).json({ success: true, message: "User registered successfully" });
  });
});

// Start the server
app.listen(5173, () => {
  console.log("Server running on http://localhost:5173");
});
