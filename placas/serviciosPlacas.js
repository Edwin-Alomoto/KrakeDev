const validarEstructura = function (placa) {

    let valida = null;
    if (placa.length == 7 || placa.length == 8) {
        mostrarTexto("lblErrores", " ")
        mostrarTexto("lblErrores1", " ")
        mostrarTexto("lblErrores2", " ")
        mostrarTexto("lblErrores3", " ")
        mostrarTexto("lblErrores4", " ")
        mostrarTexto("lblErrores5", " ")
        mostrarTexto("lblErrores6", " ")
        mostrarTexto("lblErrores7", " ")
        mostrarTexto("lblErrores8", " ")

        if (esMayuscula(placa.charAt(0))) {
            mostrarTexto("lblErrores1", " ");
        } else {
            mostrarTexto("lblErrores1", `El primer caracter debe ser mayuscula: ${placa.charAt(0)}`);
            valida = !null;
        }

        if (esMayuscula(placa.charAt(1))) {
            mostrarTexto("lblErrores2", " ");
        } else {
            mostrarTexto("lblErrores2", `El segundo caracter debe ser mayuscula: ${placa.charAt(1)}`);
            valida = !null;
        }

        if (esMayuscula(placa.charAt(2))) {
            mostrarTexto("lblErrores3", " ");
        } else {
            mostrarTexto("lblErrores3", `El tercero caracter debe ser mayuscula: ${placa.charAt(2)}`);
            valida = !null;
        }

        if (esGuion(placa.charAt(3))) {
            mostrarTexto("lblErrores4", " ");
        } else {
            mostrarTexto("lblErrores4", `El cuarto caracter debe ser guion: ${placa.charAt(3)}`);
            valida = !null;
        }

        if (esDigito(placa.charAt(4))) {
            mostrarTexto("lblErrores5", " ");
        } else {
            mostrarTexto("lblErrores5", `El quinto caracter debe ser digito: ${placa.charAt(4)}`);
            valida = !null;
        }

        if (esDigito(placa.charAt(5))) {
            mostrarTexto("lblErrores6", " ");
        } else {
            mostrarTexto("lblErrores6", `El sexto caracter debe ser digito: ${placa.charAt(5)}`);
            valida = !null;
        }

        if (esDigito(placa.charAt(6))) {
            mostrarTexto("lblErrores7", " ");
        } else {
            mostrarTexto("lblErrores7", `El septimo caracter debe ser digito: ${placa.charAt(6)}`);
            mostrarTexto("lblErrores8", " ");
            valida = !null;
        }

        UltimaPosicion = placa.length - 1;
        ultimaCaracter = placa.charAt(UltimaPosicion);
        if (ultimaCaracter == placa.charAt(7)) {
            if (esDigito(placa.charAt(7))) {
                mostrarTexto("lblErrores8", " ")
            } else {
                mostrarTexto("lblErrores8", `El octavo caracter debe ser digito: ${placa.charAt(7)}`);
                valida = !null;
            }
        }

    } else {
        mostrarTexto("lblErrores", "La placa debe tener 7 u 8 caracteres");
        valida = !null;
    }
    return valida;
}

const obtenerProvincia = function(placa){
    let valida = !null;
    if (placa.charAt(0)=="A"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del AZUAY");
    }else if(placa.charAt(0)=="B"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del BOLIVAR");
    }else if(placa.charAt(0)=="U"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del CAÑAR");
    }else if(placa.charAt(0)=="C"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del CARCHI");
    }else if(placa.charAt(0)=="X"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del COTOPAXI");
    }else if(placa.charAt(0)=="H"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del CHIMBORAZO");
    }else if(placa.charAt(0)=="O"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del EL ORO");
    }else if(placa.charAt(0)=="E"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del ESMERALDAS");
    }else if(placa.charAt(0)=="W"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del GALAPAGOS");
    }else if(placa.charAt(0)=="G"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del GUAYAS");
    }else if(placa.charAt(0)=="I"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del IMBABURA");
    }else if(placa.charAt(0)=="L"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del LOJA");
    }else if(placa.charAt(0)=="R"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del LOS RIOS");
    }else if(placa.charAt(0)=="M"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del MANABI");
    }else if(placa.charAt(0)=="V"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del MORONA SANTIAGO");
    }else if(placa.charAt(0)=="N"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del NAPO");
    }else if(placa.charAt(0)=="S"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del PASTAZA");
    }else if(placa.charAt(0)=="P"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del PICHINCHA");
    }else if(placa.charAt(0)=="Q"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del ORELLANA");
    }else if(placa.charAt(0)=="K"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del SUCUMBIOS");
    }else if(placa.charAt(0)=="T"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del TUNGURAHUA");
    }else if(placa.charAt(0)=="Z"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del ZAMORA CHINCHIPE");
    }else if(placa.charAt(0)=="Y"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del SANTA ELENA");
    }else if(placa.charAt(0)=="J"){
        mostrarTexto("lblErrores1", "Pertenece a la provincia del SANTA DOMINGO DE LOS TSÁCHILAS");
    }else{
        valida = null;
    }
    return valida;
}

const obtenerTipo =function(placa) {
    let valida = !null;
    if (placa.charAt(1)=="A" || placa.charAt(1)=="Z"){
        mostrarTexto("lblErrores2", "Es un vehiculo comercial, placa de color naranja");
    }else if(placa.charAt(1)=="E"){
        mostrarTexto("lblErrores2", "Es un vehiculo gubernamental, placa de color oro");
    }else if(placa.charAt(1)=="X"){
        mostrarTexto("lblErrores2", "Es un vehiculo de uso oficial, placa de color oro");
    }else if(placa.charAt(1)=="S"){
        mostrarTexto("lblErrores2", "Es un vehiculo del gobierno provincial, placa de color verde");
    }else if(placa.charAt(1)=="M"){
        mostrarTexto("lblErrores2", "Es un vehiculo municipal, placa de color verde");
    }else{
        valida = null;
    }
    return valida;
    


}