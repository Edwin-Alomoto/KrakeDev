const mostrarNumeros = function () {
    console.log("antes del for");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log("despues del for");
}

const mostrarNumeros2 = function () {
    console.log("antes del for");
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice);
    }
    console.log("despues del for");
}

const mostrarNumeros3 = function () {
    console.log("antes del for");
    for (let a = 2; a <= 10; a += 2) {
        console.log(a);
    }
    console.log("despues del for");
}

const mostrarNumeros4 = function () {
    console.log("antes del for");
    for (let a = 10; a >= 2; a -= 2) {
        console.log(a);
    }
    console.log("despues del for");
};

const hackearNasaPelis = function () {
    for (let a = 0; a <= 100; a += 10) {
        console.log(`hackeando la nasa :${a}%`);
    }
    console.log("La nasa a sido hackeada");
};

const mostrarImpares = function () {
    console.log("Antes for");
    for (let a = 1; a <= 21; a+=2) {
        console.log(a);
    }
    console.log("Despues for");
};
