const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/UserDB", {
    useNewUrlParser: true
    });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", require("./api"));

app.use(function(err, req, res, next){
    res.send({error: err.message});
});


app.get("/", function(req, res){
    console.log("GET request");
    res.status(422).send({name: "Harri"});
});


app.listen(8080, function(){
    console.log("listening for requests on port 8080");
});



