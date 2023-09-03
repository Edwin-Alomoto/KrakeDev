const probarAtributos = function () {
    let personas = {
        nombre: "juan",
        apellido: "morales",
        edad: 24,
        vivo: true,
    };

    console.log(personas.nombre);
    console.log(personas.edad);
    if (personas.vivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("si esta vivo");
    }
}

const crearProductos = function () {
    let producto1 = {
        nombre: "L/C Norma", //lapices de colores
        precio: 4.0,
        stock: 123,
    };

    let producto2 = {
        nombre: "L/C Estilo doble punta",
        precio: 1.75,
        stock: 250,
    };

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log(`El producto 1 tiene mayor stock con ${producto1.stock}`);
    } else if (producto2.stock > producto1.stock) {
        console.log(`El producto 2 tiene mayor stock con ${producto2.stock}`);
    } else if (producto1.stock == producto2.stock) {
        console.log(`Ambos productos tiene el mismo stock`);
    }
};
