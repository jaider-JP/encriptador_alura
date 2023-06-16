



var txEncriptar = document.getElementById("textoEncriptar");
var txDecriptar = document.getElementById("textoDesencriptar");
var botonEncriptar = document.getElementById("bEncriptar");
var botonDesencriptar = document.getElementById("bDesencriptar");
var botonCopiar = document.getElementById("bCopiar");
var areaSinTex = document.getElementById("sin_texto");

var cambioCopy= true;


const llaveEncriptar = ["ai","enter","imes","ober","ufat"]; // en cambio es de bocales y es en orden ordinario 
const vocales = ["a","e","i","o","u"];

function ocultarAparecer(){
    let texto = txDecriptar.value;
        areaSinTex.classList.add("ocultar")
        txDecriptar.classList.add("agrandar")
        if (texto.length<=1) {
            areaSinTex.classList.remove("ocultar")
            txDecriptar.classList.remove("agrandar")
        }    
}
function tomar_textoEncrip (){
    let texto = txEncriptar.value;
    console.log(texto);
    txDecriptar.value = encriptar(texto)

    ocultarAparecer()
    cambioCopy=false;
}
function tomar_textoDesencrip (){
    let texto = txDecriptar.value;
    console.log(texto);
    txEncriptar.value=desencriptar(texto)
    ocultarAparecer();
    cambioCopy=true;
}
function encriptar (texto){
    let cambio=true;
    let newtx=[""];

    for (let cont = 0 ; cont < texto.length ; cont++){

        for (let cont2 = 0; cont2 < vocales.length ; cont2++) {

            if (texto[cont] == vocales[cont2] ) {
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
    for(let i=0; i<llaveEncriptar.length; i++){
    let letra = llaveEncriptar[i];

    if(texto.includes(letra)){

     texto = texto.replaceAll(letra, vocales[i]);

    }
    }

    return texto; 
}


botonEncriptar.addEventListener("click",tomar_textoEncrip);
botonDesencriptar.addEventListener("click",tomar_textoDesencrip);
txEncriptar.addEventListener("focus",ocultarAparecer)
txDecriptar.addEventListener("focus", function () {
    areaSinTex.classList.add("ocultar"); 
} 
)
botonCopiar.addEventListener("click", function() {
    if (cambioCopy) {
        txEncriptar.select();
        document.execCommand("copy");
        alert("Copiado");
        
    }
    else {
        txDecriptar.select();
        document.execCommand("copy");
        alert("Copiado");
    }
        
    
    
    

    
})