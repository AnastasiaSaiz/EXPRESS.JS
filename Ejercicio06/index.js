const express = require("express");
const servidor = express();

let array = ["Elena", "Rafa", "Manu", "Bego", "Maialen", "Luis", "Dani", "Roberto", "Miriam", "Leticia"];


servidor.get("/", function (request, response) {
    response.send(array);
}
);

servidor.get("/:parametro", function (request, response) {
    array.push(request.params.parametro);
    response.send("Profesor añadido");
}
);

servidor.listen(3000);