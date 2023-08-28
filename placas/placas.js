const validarPlaca = function(){
    let placa =recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura==null){
        mostrarTexto("lblPlacaValida","ESTRUCTURA VALIDA");
        if (obtenerProvincia(placa)==null){
            mostrarTexto("lblErrores1", "NO PERTENECE A NINGUNA PROVINCIA");
        }

    }else{
        mostrarTexto("lblPlacaValida","ESTRUCTURA INCORRECTO");
    }

}