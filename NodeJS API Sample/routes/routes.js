const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const controller = require('../controllers/core');

app.use(bodyParser.json());

//Add GET endpoints here
router.get('/helloWorld',controller.getHelloWorld);

//Add POST endpoint here


//Will catch all not defined routes
router.get('*',controller.getNotFound);

module.exports = router;