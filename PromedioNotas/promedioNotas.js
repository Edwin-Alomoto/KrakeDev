const calcularPromedioNotas = function(){
    let valorUno = recuperarFloat("txtNota1");
    let valorDos = recuperarFloat("txtNota2");
    let valorTres = recuperarFloat("txtNota3");
    let promedioNota = (calcularPromedio(valorUno,valorDos,valorTres)).toFixed(2);
    let mensaje = ("El promedio es: "+promedioNota);
    mostrarTexto("lblPromedio",mensaje);
    
    if(promedioNota>=0 && promedioNota<5){
        mostrarTexto("txtMensaje","REPROBADO");
        mostrarImagen("mostrarGif","reprobado.gif");
    }else if(promedioNota>=5 && promedioNota<=8){
        mostrarTexto("txtMensaje","BUEN TRABAJO");
        mostrarImagen("mostrarGif","buentrabajo.gif");
    }else if(promedioNota>8 && promedioNota<=10){
        mostrarTexto("txtMensaje","EXCELENTE");
        mostrarImagen("mostrarGif","Celebracion.gif");
    }else{

        mostrarTexto("txtMensaje","DATOS INCORRECTOS");
        mostrarImagen("mostrarGif","Fracaso.gif");
    }
}