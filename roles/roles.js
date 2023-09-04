let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    {cedula:"2445600234",nombre:"Jonathan",apellido:"Rivadeneira",sueldo:1200.0}
]

let esNuevo=false; // variable global 

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
const ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}



















// Mostrar empleados tablas

const mostrarEmpleados = function () {
    let elementoEmpleados
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table>" +

        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELO</th>" +
        "</tr>";

        for(let i = 0; i < empleados.length; i++) {
            elementoEmpleados = empleados[i];
            contenidoTabla +=
            "<tr>" +
            "<td>" + elementoEmpleados.cedula + "</td>" +
            "<td>" + elementoEmpleados.nombre + "</td>" +
            "<td>" + elementoEmpleados.apellido + "</td>" +
            "<td>" + elementoEmpleados.sueldo + "</td>" +
            "</tr>";
        }
        
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}



