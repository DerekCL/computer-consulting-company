// Initilization
const express = require("express");
const router = express.Router();


router.get('/', (req, res) => res.render("index"))
router.get('/services', (req, res) => res.render("services"))
router.get('/contact', (req, res) => res.render("contact"))
router.get('/contact/remote_support', (req, res) => res.render("remote_support"))



module.exports = router;