//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
const esMayuscula = function (caracter) {
    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
};

const guardarPalabra = function () {
    let letra;
    let contadorMayuscula = 0;
    let palabra = recuperarTexto("txtSecreta");
    if (palabra.length == 5) {
        for (let i = 0; i <= palabra.length - 1; i++) {
            letra = palabra.charAt(i);
            if (esMayuscula(letra)) {
                contadorMayuscula = contadorMayuscula + 1;
            }
        }
        if (contadorMayuscula != 5) {
            alert("todo las palabras debe ser mayuscula");
        } else {
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        }
    }
};

const mostrarLetra = function (letra, posicion) {

    if (posicion==1){
        mostrarTexto("div0",letra)
    }else if (posicion==2){
        mostrarTexto("div1",letra)
    }else if (posicion==3){
        mostrarTexto("div2",letra)
    }else if (posicion==4){
        mostrarTexto("div3",letra)
    }else if (posicion==5){
        mostrarTexto("div4",letra)
    }
};

const validar = function (letra) {
    let caracter;
    letraEcontrada = 0;
    posicion = palabraSecreta.length - 1;
    for (let i = 0; i <= posicion; i++) {
        caracter = palabraSecreta.charAt(i);
        letraEcontrada = letraEcontrada + 1;

        if (caracter == letra && letraEcontrada == 1) {
            mostrarLetra(caracter,letraEcontrada)
        }else if (caracter == letra && letraEcontrada == 2) {
            mostrarLetra(caracter,letraEcontrada)
        }else if (caracter == letra && letraEcontrada == 3) {
            mostrarLetra(caracter,letraEcontrada)
        }else if (caracter == letra && letraEcontrada == 4) {
            mostrarLetra(caracter,letraEcontrada)
        }else if (caracter == letra && letraEcontrada == 5) {
            mostrarLetra(caracter,letraEcontrada)
        }else{

        }
    }
}

const ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        validar(letra);
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULA");
    }
};
