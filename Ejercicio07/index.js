const express = require("express");
const aleatorio = require("./aleatorio");
const array = require("./modulo");

const servidor = express();

servidor.get("/", function (request, response) {
    array[aleatorio()] +=1;
    response.send(array);
});


//EJERCICIO 8 //
servidor.get("/borrar/:numero", function (request, response) {
    let numero = parseInt(request.params.numero);
    for (let i = 0; i < array.length; i++) {
        if (numero === array[i]) {
            array[i] = 0;
        }
    }
    response.send(array);
});

servidor.listen(3000);