const express = require('express');
const App = express();

App.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

App.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

App.listen(8081, function(){
    console.log("Servidor rodando! Acesse a url http://localhost:8081");  
});