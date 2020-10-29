const express = require("express");
const saludar = require("./saludar");
const servidor = express();

servidor.get("/", function (request, response) {
    response.send(saludar());
}
);


servidor.listen(3000);
