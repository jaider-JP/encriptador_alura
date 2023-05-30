



var txEncriptar = document.getElementById("textoEncriptar");
var txDecriptar = document.getElementById("textoDesencriptar");
var botonEncriptar = document.getElementById("bEncriptar");
var botonDesencriptar = document.getElementById("bDesencriptar");
var botonCopiar = document.getElementById("bCopiar");

var cambio = true;

const llaveEncriptar = ["ai","enter","imes","ober","ufat"]; // en cambio es de bocales y es en orden ordinario 
const vocales = ["a","e","i","o","u"];
const vocalesDes = ["-a-","-e-","-i-","-o-","-u-"];

function tomar_textoEncrip (){
    let texto = txEncriptar.value;
    console.log(texto);   
}
function tomar_textoDesencrip (){
    let texto = txDecriptar.value;
    console.log(texto);   
}
function encriptar (texto){
    let newtx=[""];
    for (let cont = 0 ; cont < texto.length ; cont++){

        for (let cont2 = 0; cont2 < vocales.length ; cont2++) {

            if (texto[cont] == vocales[cont2] ) {
                console.log(texto[cont]);
                newtx.push(llaveEncriptar[cont2]);
                cambio= false;
                
            } 
            
        }
        if (cambio) {
            newtx.push(texto[cont])    
        }
        cambio= true;
        }

        return newtx.join("");
}
function desencriptar (texto){
    
}

