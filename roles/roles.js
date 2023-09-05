let empleados = [
    { cedula: "1714616123", nombre: "JONH", apellido: "CENA", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "LUISA", apellido: "GONZALEZ", sueldo: 900.0, },
    { cedula: "2445600234", nombre: "JONATHAN", apellido: "RIVADENEIRA", sueldo: 1200.0, },
]

let esNuevo = false; // variable global

//botones principales
const mostrarOpcionEmpleado = function () {
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
}

const mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

const mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// Boton nuevo
const ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

// Boton agregar - guardar
const buscarEmpleado = function (cedulaIngresada) {
    let empleadosBuscar;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        empleadosBuscar = empleados[i];
        if (empleadosBuscar.cedula == cedulaIngresada) {
            empleadoEncontrado = empleadosBuscar;
            break;
        }
    }
    return empleadoEncontrado;
}

const agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

// Boton guardar - modificar
const guardar = function () {
    let cedulaCaja = recuperarTexto("txtCedula");
    let nombreCaja = recuperarTexto("txtNombre");
    let apellidoCaja = recuperarTexto("txtApellido");
    let sueldoCaja = recuperarFloat("txtSueldo");

    // cedula
    let digitoCedula;
    let nuevaCedula;
    let resultadoDigito = false;
    if (cedulaCaja.length == 10) {
        mostrarTexto("lblErrorCedula", " ");
        for (let i = 0; i < cedulaCaja.length; i++) {
            digitoCedula = cedulaCaja.charCodeAt(i);
            if (!esDigito(digitoCedula)) {
                resultadoDigito = true;
            }
        }

        if (resultadoDigito) {
            mostrarTexto("lblErrorCedula", "No debe tener letras");
        } else {
            //nuevoCliente.cedula = cedulaCaja
            nuevaCedula = true;
        }
    } else {
        mostrarTexto("lblErrorCedula", " Tiene que tener 10 digitos");
    }

    //Nombre
    let mayusculasNombre;
    let nuevoNombre;
    let resultadoMayuscula = false;
    if (nombreCaja.length >= 3) {
        mostrarTexto("lblErrorNombre", " ");
        for (let i = 0; i < nombreCaja.length; i++) {
            mayusculasNombre = nombreCaja.charCodeAt(i);
            if (!esMayuscula(mayusculasNombre)) {
                resultadoMayuscula = true;
            }
        }

        if (resultadoMayuscula) {
            mostrarTexto("lblErrorNombre", "Deben ser mayusculas");
        } else {
            //nuevoCliente.nombre = nombreCaja;
            nuevoNombre = true;
        }
    } else {
        mostrarTexto("lblErrorNombre", " Tiene que tener al menos 3 caracteres");
    }

    //Apellido
    let mayusculasApellido;
    let nuevoApellido;
    let resultadoMayusculaApellido = false;
    if (apellidoCaja.length >= 3) {
        mostrarTexto("lblErrorApellido", " ");
        for (let i = 0; i < apellidoCaja.length; i++) {
            mayusculasApellido = apellidoCaja.charCodeAt(i);
            if (!esMayuscula(mayusculasApellido)) {
                resultadoMayusculaApellido = true;
            }
        }

        if (resultadoMayusculaApellido) {
            mostrarTexto("lblErrorApellido", "Deben ser mayusculas");
        } else {
            //nuevoCliente.apellido = apellidoCaja
            nuevoApellido = true;
        }
    } else {
        mostrarTexto("lblErrorApellido", " Tiene que tener al menos 3 caracteres");
    }

    //Sueldo
    let nuevoSuelo;
    if (sueldoCaja >= parseFloat(400) && sueldoCaja <= parseFloat(5000)) {
        mostrarTexto("lblErrorSueldo", " ");
        //nuevoCliente.sueldo = sueldoCaja
        nuevoSuelo = true;
    } else {
        mostrarTexto("lblErrorSueldo", " Tiene que tener entre $400 y $5000");
    }

    if (nuevaCedula & nuevoNombre & nuevoApellido & nuevoSuelo) {
        if (esNuevo) {
            let nuevoCliente = {};
            nuevoCliente.cedula = cedulaCaja;
            nuevoCliente.nombre = nombreCaja;
            nuevoCliente.apellido = apellidoCaja;
            nuevoCliente.sueldo = sueldoCaja;
            nuevoEmpleado = agregarEmpleado(nuevoCliente);
            if (nuevoEmpleado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedulaCaja);
            }
        }

        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
    }
}

// Mostrar empleados tabla
const mostrarEmpleados = function () {
    let elementoEmpleados;
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla =
        "<table>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELO</th>" +
        "</tr>";

    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleados = empleados[i];
        contenidoTabla +=
            "<tr>" +
            "<td>" + elementoEmpleados.cedula + "</td>" +
            "<td>" + elementoEmpleados.nombre + "</td>" +
            "<td>" + elementoEmpleados.apellido + "</td>" +
            "<td>" + elementoEmpleados.sueldo +
            "</td>" +
            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
