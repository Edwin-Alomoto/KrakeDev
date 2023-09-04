const probarAtributos = function () {
    let personas = {
        nombre: "juan",
        apellido: "morales",
        edad: 24,
        vivo: true,
    }

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
    }

    let producto2 = {
        nombre: "L/C Estilo doble punta",
        precio: 1.75,
        stock: 250,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log(`El producto 1 tiene mayor stock con ${producto1.stock}`);
    } else if (producto2.stock > producto1.stock) {
        console.log(`El producto 2 tiene mayor stock con ${producto2.stock}`);
    } else if (producto1.stock == producto2.stock) {
        console.log(`Ambos productos tiene el mismo stock`);
    }
}

const modificarAtributos = function () {
    let cuenta = {
        numero: "3453453455",
        saldo: 0.0,
    };
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

const crearClientes = function () {
    let clientes = {
        cedula: "2345678673",
        nombre: "juan",
    }

    let clientes1 = {};

    clientes1.nombre = "romeo";
    clientes1.edad = 24;
    clientes1.cedula = "435346567";
}

const probarIncrementarSaldo = function () {
    let cuenta = {
        numero: "23456",
        saldo: 34.0,
    }

    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

const probarDeterrminarMayor = function () {
    let persona1 = {
        nombre: "daniel",
        edad: 45,
    }

    let persona2 = {
        nombre: "juan",
        edad: 34,
    }

    let mayor = determinarMayor(persona1, persona2);

    if (mayor != null) {
        console.log(`el mayor es ${mayor.nombre} y tiene ${mayor.edad}`);
    }
}

const incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto; // Es lo mismo del de abajo pero mas simplificado
    //cuenta.saldo=cuenta.saldo+monto;
}

const determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
};
