const express = require("express");
const servidor = express();

let persona={
    nombre: "Anastasia",
    apellidos: "Saiz",
    edad: 28,
}


servidor.get("/nombre/:parametro", function (request, response) {
    persona.nombre=request.params.parametro;
    response.send(persona);
}
);

servidor.get("/apellidos/:parametro", function (request, response) {
    persona.apellidos=request.params.parametro;
    response.send(persona);
}
);

servidor.get("/edad/:parametro", function (request, response) {
    persona.edad=parseInt(request.params.parametro);
    response.send(persona);
}
);

servidor.listen(3000);