//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/myPage", {useNewUrlParser: true});

app.get("/", (req, res) => {
	res.render("home");
});



app.listen("3000", (req, res) => {
	console.log("port 3000 is listening ..");
});