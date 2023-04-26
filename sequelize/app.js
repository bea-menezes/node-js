const express = require('express');
const App = express();

App.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

App.listen(8081, function(){
    console.log("Esta rodando");
});