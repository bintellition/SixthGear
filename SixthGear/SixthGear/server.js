var http = require('http');
var port = process.env.port || 1337;
var express = require('express');

var app = express();

var server = http.createServer(app);

app.get("/", function (req, res) {
    res.send("<html><h1>Welcome to Sixth Gear</h1></html>")
   
})

app.get("/api/user/wallet", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({
        name: "Sumi", 
        vehicles : [{ vehicleId: 1, registration: "KA04-MF9609", noofWheels:4 }, 
                    { vehicleId: 2, registration: "KA04-EL732", noofWheels: 2 }]
    })

    
});


server.listen(1337)