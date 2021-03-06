/*
 * This is the main file that is used to start the entire application
 */

// Environment Variables
require("dotenv").config();

// File Initialization
let express = require("express");
let path = require("path");
let favicon = require("serve-favicon");
let logger = require("morgan");
let bodyParser = require("body-parser");

// Express initiation
let app = express();

// View Engine initilization
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Logger 
app.use(logger("dev"));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static Content
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon", "favicon.ico")));

// Routing Setup
const routes = require("./routes/index");
app.use("/", routes);

//Port Setup
let port = process.env.PORT || '8000';
app.set('port', port);

//Server Starting
app.listen(port, () => console.log('server started on http://localhost:'+ port))