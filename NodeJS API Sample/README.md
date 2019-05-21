# NodeJS API Sample Project
This project will serve you as a sample for your future NodeJS APIs.

It was generated with Node version 8.11.3 and NPM version 6.2.0.

## Dependencies
```
  "dependencies": {
    "express": "^4.16.4",
    "chai": "^4.2.0",
    "dotenv": "^6.2.0",
    "expect": "^23.6.0",
    "jsonwebtoken": "^8.4.0",
    "nodemon": "^1.18.6",
    "supertest": "^3.3.0",
    "swagger-ui-express": "^4.0.2",
    "tedious": "^3.0.1",
    "tedious-connection-pool": "^1.0.5",
    "tedious-promises": "^0.4.1",
    "uuid": "^3.3.2"
  }
```

## Installing Modules

Run `npm install` to download all the modules needed on this proyect. 

## SQL Server Database Connection 

In the .env file, setup your database connection for the folowing values:
* DB_USER_NAME=
* DB_PASSWORD=
* DB_SERVER_IP=
* DB_NAME=

## Running Test Server

Run `node app.js` for a dev server. Navigate to `http://localhost:3000/`. 
* `http://localhost:3000/helloWorld` will show you a "Hello World" message.
* Any not mapped URL will throw a "404: Not Found Error"
