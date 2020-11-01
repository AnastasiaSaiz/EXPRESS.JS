const express = require("express");
const servidor = express();
let cesta = [];

const almacen = [
    {
        seccion: "Capilar",
        productos: [
            {
                nombre: "Acondicionador",
                precio: 12,
                stock: 23,
            },
            {
                nombre: "Champu",
                precio: 10,
                stock: 27,
            },
            {
                nombre: "Laca",
                precio: 10,
                stock: 30,
            },
        ],
    },
    {
        seccion: "Bucodental",
        productos: [
            {
                nombre: "Pasta",
                precio: 10,
                stock: 15,
            },
            {
                nombre: "Estuche",
                precio: 9,
                stock: 16,
            },
            {
                nombre: "Soporte",
                precio: 16,
                stock: 30,
            },
        ],
    },
    {
        seccion: "Hogar",
        productos: [
            {
                nombre: "Detergente",
                precio: 12,
                stock: 12,
            },
            {
                nombre: "Abrillantador",
                precio: 6,
                stock: 16,
            },
            {
                nombre: "Perfume",
                precio: 10,
                stock: 39,
            },
        ],
    },
]

servidor.get("/Capilar", function (request, response) {
    let contenidoTabla = "";
    for (i = 0; i < almacen[0].productos.length; i++) {
        contenidoTabla += `
        <tr>
          <td>${almacen[0].productos[i].nombre}</td>
          <td>${almacen[0].productos[i].precio}</td>
          <td>${almacen[0].productos[i].stock}</td>
        </tr>
        
        `

    }
    let tabla = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
      ${contenidoTabla}
      </tbody>
    </table>

    
    
    `
    response.send(tabla);
}
);

servidor.get("/Bucodental", function (request, response) {
    let contenidoTabla = "";
    for (i = 0; i < almacen[1].productos.length; i++) {
        contenidoTabla += `
        <tr>
          <td>${almacen[1].productos[i].nombre}</td>
          <td>${almacen[1].productos[i].precio}</td>
          <td>${almacen[1].productos[i].stock}</td>
        </tr>
        
        `
    }
    let tabla = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
      ${contenidoTabla}
      </tbody>
    </table>

    
    
    `
    response.send(tabla);
}
);
servidor.get("/Hogar", function (request, response) {
    let contenidoTabla = "";
    for (i = 0; i < almacen[2].productos.length; i++) {
        contenidoTabla += `
        <tr>
          <td>${almacen[2].productos[i].nombre}</td>
          <td>${almacen[2].productos[i].precio}</td>
          <td>${almacen[2].productos[i].stock}</td>
        </tr>
        
        `
    }
    let tabla = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
      ${contenidoTabla}
      </tbody>
    </table>

    
    
    `
    response.send(tabla);
}
);


servidor.get("/Capilar/:producto/:cantidad", function (request, response) {
    let producto = request.params.producto;
    let cantidad = request.params.cantidad;
    for (let i = 0; i < almacen[0].productos.length; i++) {
        if (producto === almacen[0].productos[i].nombre && cantidad <= almacen[0].productos[i].stock) {
            almacen[0].productos[i].stock -= cantidad;
            cesta.push({ producto: producto, cantidad: cantidad, stock: almacen[0].productos[i].stock });
        }

    };
    isProductocesta ? response.send("añadido" + cantidad + producto) : response.send("No hay stock o no existe el rpoducto")




});
servidor.get("/Bucodental/:producto/:cantidad", function (request, response) {
    let producto = request.params.producto;
    let cantidad = request.params.cantidad;
    for (let i = 0; i < almacen[1].productos.length; i++) {
        if (producto === almacen[1].productos[i].nombre && cantidad <= almacen[1].productos[i].stock) {
            almacen[0].productos[i].stock -= cantidad;
            cesta.push({ producto: producto, cantidad: cantidad, stock: almacen[1].productos[i].stock });
            isProductocesta = true
        }

    };
    isProductocesta ? response.send("añadido" + cantidad + producto) : response.send("No hay stock o no existe el rpoducto")




});
servidor.get("/Hogar/:producto/:cantidad", function (request, response) {
    let producto = request.params.producto;
    let cantidad = request.params.cantidad;
    isProductocesta = false;
    for (let i = 0; i < almacen[2].productos.length; i++) {
        if (producto === almacen[2].productos[i].nombre && cantidad <= almacen[2].productos[i].stock) {
            almacen[2].productos[i].stock -= cantidad;
            cesta.push({ producto: producto, cantidad: cantidad, stock: almacen[2].productos[i].stock });
            isProductocesta = true
            break;
        }

    };
    isProductocesta ? response.send("añadido" + cantidad + producto) : response.send("No hay stock o no existe el rpoducto")


});
servidor.get("/cesta", function (request, response) {
    let mensaje = "";
    if (cesta.length) {
        for (let i = 0; i < cesta.length; i++) {
            mensaje += `
                        <h1>${cesta[i].producto}</h1>
                        <p>Cantidad:${cesta[i].cantidad}</p>
                        <p>Stock:${cesta[i].stock}</p>
                       `
        }
        response.send(mensaje);
    } else {
        response.send("Cesta vacía");
    }

});
servidor.listen(3000);