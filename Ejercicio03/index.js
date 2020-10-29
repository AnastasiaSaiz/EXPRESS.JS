const express = require("express");
const servidor = express();

let array = ["Anastasia", "Leyre", "Graciela", "Marga", "Vanesa"];

servidor.get("/:personas", function (request, response) {
    let mensaje = "";
    for (let i = 0; i < array.length; i++) {
        mensaje += `<h1>${array[i]}</h1>`
    };
    response.send(mensaje);

}
);


servidor.get("/personas/:nombre", function (request, response) {
    let nombre = request.params.nombre;
    for (let i = 0; i < array.length; i++) {
        if (nombre === array[i]) {
            response.send(array[i]);

        }
    };

    response.send("error")

});


servidor.listen(3000);