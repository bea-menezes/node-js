const express = require('express');
const App = express();

App.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
});

App.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
});

App.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})

// sempre esssa funcao precisa ser a ultma do seu codigo
App.listen(8081, function(){ // funcao de 'callback'
    console.log("Servidor rodando na url http://localhost:8081");
}); 

// "localhost:8081"
