const express = require("express");
const servidor = express();



servidor.get("/:numero", function(request, response) {
   let numero= parseInt(request.params.numero);
   response.send(`Aleatorio:${Math.floor(Math.random() * (numero-0))+0}`
    );
}
);


servidor.listen(3000);