const jugar = function(seleccionado){
    let valorUsuario;
    let seleccionadoMaquina;
    let valorMaquina;

    if(seleccionado==2){
        cambiarImagen("imgUsuario","./Imagenes/papel.png");
        valorUsuario = 2;
        seleccionadoMaquina = generarElemento();
        valorMaquina=generarRuta(seleccionadoMaquina);

    }else if (seleccionado==1){
        cambiarImagen("imgUsuario","./Imagenes/piedra.png");
        valorUsuario = 1;
        seleccionadoMaquina = generarElemento();
        valorMaquina=generarRuta(seleccionadoMaquina);
    }else if (seleccionado==3){
        cambiarImagen("imgUsuario","./Imagenes/tijera.png"); 
        valorUsuario = 3;
        seleccionadoMaquina = generarElemento();
        valorMaquina=generarRuta(seleccionadoMaquina);
    }

    determinarGanador(valorUsuario,valorMaquina);
}