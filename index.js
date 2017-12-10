/*
 * This is the main file that is used to start the entire application
 */

// Environment Variables
require("dotenv").config();

// File Initialization
let express = require("express");
let path = require("path");

// Express initiation
let app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('server started on http://localhost:3000'))