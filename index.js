/*
 * This is the main file that is used to start the entire application
 */

// Environment Variables
require("dotenv").config();

// File Initialization
let express = require("express");

// Express initiation
let app = express();
let server = require("http").Server(app);

// Here we are setting up the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ROUTES
app.use("/", routes);
const routes = require("./routes");