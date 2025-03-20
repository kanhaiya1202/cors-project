// assignment
//1.create a backend server in node.js that return the sum endpoint
//2.write an html file that hit the backend server using the fetch api

const express = require("express");
const { dirname } = require("path");
const cors = require('cors');
const app = express();


app.use(express.json())
app.use(cors());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});


app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(a+b);

    res.json({
        ans:a+b
    });
    

});

app.listen(3000);
