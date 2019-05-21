var Connection = require('tedious').Connection;
var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var tp = require('tedious-promises');

//This line alows to read environment variables from .env file or Azure App Service
require('dotenv').config();

var poolConfig = {
    min: 0,
    max: 100,
    idleTimeoutMillis: 30000,
    //log: true //uncomment to see connection pool logs on terminal
};

var connectionConfig = {
    userName: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER_IP,
    options: {encrypt: true, database: process.env.DB_NAME}
};

//create the pool
var pool = new ConnectionPool(poolConfig, connectionConfig);
tp.setConnectionPool(pool);
pool.on('error', function(err) {
    console.error(err);
});

// Query Example
exports.getAllCarriers = function() {
    return new Promise( resolve => {
        tp.sql("Select * from yourTable")
        .execute()
        .then(function(results) {
            // console.log(results);
            resolve(results);
        }).fail(function(err) {
            console.log(err);
        });
    });
}

// Use this example for when we need to insert something to DB
exports.insertEnvelope = function(templateName,id,status,statusDate,sentBy) {  
    pool.acquire(function (err, connection) {
        if (err) {
            console.error(err);
            return;
        }
        //use the connection as normal
        var request = new Request("INSERT into dbo.yourTable (TEMPLATE_NAME,ID, STATUS, STATUS_DATE,SENT_BY) VALUES (@TEMPLATE_NAME,@ID, @STATUS, @STATUS_DATE,@SENT_BY);",
        function(err, rowCount) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('rowCount: ' + rowCount);
            //release the connection back to the pool when finished
            connection.release();
        });

        request.addParameter('TEMPLATE_NAME', TYPES.VarChar,templateName);
        request.addParameter('ID', TYPES.VarChar,id);  
        request.addParameter('STATUS', TYPES.VarChar , status);  
        request.addParameter('STATUS_DATE', TYPES.Date, statusDate);
        request.addParameter('SENT_BY', TYPES.VarChar, sentBy);
        connection.execSql(request);
    });
} 