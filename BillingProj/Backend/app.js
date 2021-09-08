
var express = require('express');
var cors = require('cors')

var app = express();

app.use(cors());

    app.get('/getBills', function (req, res) {
   
        var sql = require("mssql");
    
        // config for your database
        var config = {
            user: 'shanthan',
            password: 'Covid@19',
            server: 'localhost\\SQLEXPRESS', 
            database: 'billing' ,
            options: {
                trustedConnection: true,
                encrypt: false,
                enableArithAbort: true,
                trustServerCertificate: true,
            
              }
        };
    
        // connect to your database
        sql.connect(config, function (err) {
        console.log("code called");
            if (err) console.log(err);
    
            // create Request object
            var request = new sql.Request();
               
            // query to the database and get the records
            request.query('select * from Bills_details', function (err, data) {
                
                if (err) console.log(err)
    
                // send records as a response
                res.send(data);
                
            });
        });
    });
    
    var server = app.listen(3000, function () {
        console.log('Server is running..ss');
    });

console.log(server);
