saludar= function(){
    // recuperar el valor de la caja de texto
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido"); 
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenido = ("Bienvenido "+nombre+" "+apellido);
    mostrarTexto("lblResultado",mensajeBienvenido);
    mostrarImagen("ImgSaludos","./imagenes/saludos.gif");
    mostrarTextoEnCaja("txtNombre", " ");
}
