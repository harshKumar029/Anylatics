// index.js

const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoDb = require('./db'); // Ensure the correct path to db.js
const displayDataRouter = require('./Routers/DisplayData'); // Ensure the correct path to DisplayData router

// Connect to MongoDB
mongoDb();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use('/api', displayDataRouter); // Mount DisplayData router under /api

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send a simple text response
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
