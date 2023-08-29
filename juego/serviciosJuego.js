let valorUsuario=0;
let valorMaquina=0;
const obtenerAleatorio = function(){
    let aleatorio = parseInt(Math.random()*3);
    valorEntero = aleatorio +1;
    return valorEntero;
}

const generarElemento = function(){
    let generador
    let cadenas=obtenerAleatorio();
    if(cadenas==1){
        generador = "Piedra";
    }else if (cadenas==2){
        generador = "Papel";
    }else if (cadenas==3){
        generador = "tijera";
    }
    return generador;
}

const generarRuta = function(nombre){
    let valorMaquina;
    if(nombre=="tijera"){
        cambiarImagen("imgMaquina","./imagenes/tijera.png");
        valorMaquina =3;
    }else if(nombre=="Piedra"){
        cambiarImagen("imgMaquina","./imagenes/piedra.png");
        valorMaquina =1;
    }else if(nombre=="Papel"){
        cambiarImagen("imgMaquina","./imagenes/papel.png");
        valorMaquina =2;
    }
    
    return valorMaquina;
}
                                    //usuario            //maquina
const determinarGanador = function(eleccionJugador1,eleccionJugador2){
    //eleccionJugador1=2;
    //eleccionJugador2=1;
    //piedra =1;
    //papel =2;
    //tijera =3;
    if(eleccionJugador1==3 && eleccionJugador2==1){
        valorMaquina=valorMaquina+1;
        cambiarTexto("lblResultado","perdiste");
        cambiarTexto("lblResultadoMaquina",valorMaquina);
    }else if(eleccionJugador1==1 && eleccionJugador2==3){
        valorUsuario=valorUsuario+1;
        cambiarTexto("lblResultado","ganaste");
        cambiarTexto("lblResultadoUsuario",valorUsuario);
    }else if(eleccionJugador1==2 && eleccionJugador2==1){
        //gana el jugador usuario
        valorUsuario=valorUsuario+1;
        cambiarTexto("lblResultado","ganaste");
        cambiarTexto("lblResultadoUsuario",valorUsuario);
    }else if(eleccionJugador1==1 && eleccionJugador2==2){
        //gana el jugador la maquina
        valorMaquina=valorMaquina+1;
        cambiarTexto("lblResultado","perdiste");
        cambiarTexto("lblResultadoMaquina",valorMaquina);
    }else if(eleccionJugador1==3 && eleccionJugador2==2){
        //gana el jugador usuario
        valorUsuario=valorUsuario+1;
        cambiarTexto("lblResultado","ganaste");
        cambiarTexto("lblResultadoUsuario",valorUsuario);
    }else if(eleccionJugador1==2 && eleccionJugador2==3){
        valorMaquina=valorMaquina+1;
        cambiarTexto("lblResultado","perdiste");
        cambiarTexto("lblResultadoMaquina",valorMaquina);
    }else if(eleccionJugador1==1 && eleccionJugador2==1){
        cambiarTexto("lblResultado","empate");
    }else if(eleccionJugador1==2 && eleccionJugador2==2){
        cambiarTexto("lblResultado","empate");
    }else if(eleccionJugador1==3 && eleccionJugador2==3){
        cambiarTexto("lblResultado","empate");
    }
}