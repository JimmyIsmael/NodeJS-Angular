const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const routingController = require('../controllers/generalRouting');

app.use(bodyParser.json());

router.get('/', routingController.helloWorld);


//Will catch all not defined routes
router.get('*',routingController.getNotFound);

module.exports = router;