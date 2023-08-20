const calcularPromedioNotas = function(){
    let valorUno = recuperarFloat("txtNota1");
    let valorDos = recuperarFloat("txtNota2");
    let valorTres = recuperarFloat("txtNota3");
    let promedioNota = (calcularPromedio(valorUno,valorDos,valorTres)).toFixed(2);
    let mensaje = ("El promedio es: "+promedioNota);
    mostrarTexto("lblPromedio",mensaje);
    
    if(promedioNota>=7){
        mostrarImagen("mostrarGif","Celebracion.gif");
    }else{
        mostrarImagen("mostrarGif","Fracaso.gif");
    }
}