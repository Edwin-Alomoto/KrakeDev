const numeroAleatorio = function () {
    let valor = parseInt(Math.random() * 100) + 1;
    return valor;
}

const generarAleatorio = function () {
    let aleatorio = [];
    let resultado;
    let numeroUsuario = recuperarInt("txtNumeroUsuario");
    if (numeroUsuario >= 5 && numeroUsuario <= 20) {
        for (let i = 0; i <= numeroUsuario - 1; i++) {
            console.log(i);
            resultado = numeroAleatorio();
            aleatorio.push(resultado);
        }
        mostrarResultado(aleatorio);
    } else {
        alert("Que sea un numero entre 5 y 20");
    }
}

const mostrarResultado = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>valores Aleatorios</th></tr>";
    let aleatorioValor;
    for (let i = 0; i < arregloNumeros.length; i++) {
        aleatorioValor = arregloNumeros[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += aleatorioValor;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
