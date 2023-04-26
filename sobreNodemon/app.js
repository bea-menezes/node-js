const express = require('express');
const App = express();

/*
    COMANDOS:

    Para isntalar o nodemon: npm install nodemon -g
    Agoara ao invés de você usar o node para rodar o server, você irá usar o nodemon

    nodemon nome_do_seu_arquivo.js

*/

App.get("/", function(req, res){
    res.send("Seja bem-vindo! Utilizando o nodemon!");
});

App.listen(8081, function(){ 
    console.log("Servidor rodando na url http://localhost:8081");
}); 
 