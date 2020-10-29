const array = require("../Ejercicio07/modulo");


const servidor = express();


servidor.get("/borrar/:numero", function (request, response) {
    let numero = request.params.numero;
    for (let i = 0; i < array.length; i++) {
        if (numero === array[i]) {
            array[i] = 0;
        }
    }
    response.send(array);
});

servidor.listen(3000);