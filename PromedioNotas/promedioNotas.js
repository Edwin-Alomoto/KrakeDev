const calcularPromedioNotas = function(){
    let valorUno = recuperarFloat("txtNota1");
    let valorDos = recuperarFloat("txtNota2");
    let valorTres = recuperarFloat("txtNota3") 
    let promedioNota = calcularPromedio(valorUno,valorDos,valorTres);
    let mensaje = ("El promedio es: "+promedioNota.toFixed(2));
    mostrarTexto("lblPromedio",mensaje);
}