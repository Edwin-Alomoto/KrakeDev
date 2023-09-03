let frutas =["pera","manzana", "banana"];

probarBusqueda = function(){
    let frutaIngresada=recuperarTexto("lblFruta");
    let resultado=buscar(frutaIngresada);
    if(resultado==null){
        alert("No existe la fruta")

    }else{
        alert(frutaIngresada+" existe en el cesto!!")
    }
}


buscar=function(fruta){
    let elementos;
    let frutaEncontrada = null;

    for(let i=0;i<fruta.length;i++){
        elementos = frutas[i];
        if(fruta==elementos){
            frutaEncontrada=elementos;
            break;
        }
    }
    return frutaEncontrada;

}


let array =["Manzana","Pera","Uva","Durazno","Aguacate"];
buscarIndex = function(){
    let index = -1;
    for(let i=0;i<=array.length;i++){
        if(array[i]=="Manzana"){
            index =i;
            break
        }
    }
    console.log(index)

}