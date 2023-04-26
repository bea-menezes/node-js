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

// " /: " para criar um parametro
App.get("/Ola/:nome/:cargo", function(req, res){
    // a variavel req ela recebe dados de uma requisicao
    res.send("<h1> Ola "+req.params.nome+"</h1>"); // a funcao send so pode ser enviada uma vez dentro de uma funcao de rota
    
});

App.listen(8081, function(){ 
    console.log("Servidor rodando na url http://localhost:8081");
}); 
 
