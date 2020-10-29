const express = require("express");
const servidor = express();



servidor.get("/", function(request, response) {
    response.send(`
    <h1>Hola Mundo</h1>
    <h4>desde Express</h4>`
    );
}
);


servidor.listen(3000);