const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
