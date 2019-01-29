const database = require('../models/index');

exports.getNotFound = function (req, res,next){
    res.status(404).send();
}

exports.helloWorld = function (req, res,next){
    res.status(200).send("Hello World");
}

exports.testDatabaseConnection = function (req, res,next){
    database.sequa
    res.status(200).send("Hello World");
}