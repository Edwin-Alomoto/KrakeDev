recuperarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    
    return valorIngresado;
}

saludar= function(){
    // recuperar el valor de la caja de texto
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
}