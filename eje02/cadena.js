function palindromo(palabra){
    var palindromo;
    palindromo=palabra;
    palindromo=palindromo.replace(/ /g,"");
    for(var i=0;i<palindromo.length;i++){
        if(palindromo[i]!=palindromo[palindromo.length-i-1]){
            return false;
        }
    }
    return true;
}

function ContarCad(palabra){
    palabra=palabra.replace(/\r?\n/g," ");
    palabra=palabra.replace(/[ ]+/g," ");
    palabra=palabra.replace(/^ /,"");
    palabra=palabra.replace(/ $/,"");
    var palCreada=palabra.split(" ");
    var numpal=palCreada.length;
    return numpal;
}

function ContarLetras(cadena){
    cadena=cadena.replace(/\r?\n/g," ");
    cadena=cadena.replace(/[ ]+/g," ");
    cadena=cadena.replace(/^ /,"");
    cadena=cadena.replace(/ $/,"");

    var cuenta=0;
    for(var i=0;i<cadena.length;i++){
        var letra=cadena.charAt(i);
        if(letra=="b" || letra=="c" || letra=="d" || letra=="f" || letra=="g" ||
        letra=="h" || letra=="j" || letra=="k" || letra=="l" || letra=="m" ||
        letra=="n" || letra=="ñ" || letra=="p" || letra=="q" || letra=="r" ||
        letra=="s" || letra=="t" || letra=="v" || letra=="w" || letra=="x" || letra=="y" || letra=="z" 
        || letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
            cuenta++;
        }
    }
    return cuenta;
}

function ContarVocales(cadena){
    var cuenta=0;
    for(var i=0;i<cadena.length;i++){
        var letra=cadena.charAt(i);
        if(letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
            cuenta++;
        }
    }
    return cuenta;
}

function ContarConsonantes(cadena){
    var cuenta=0;
    for(var i=0;i<cadena.length;i++){
        var letra=cadena.charAt(i);
        if(letra=="b" || letra=="c" || letra=="d" || letra=="f" || letra=="g" ||
        letra=="h" || letra=="j" || letra=="k" || letra=="l" || letra=="m" ||
        letra=="n" || letra=="ñ" || letra=="p" || letra=="q" || letra=="r" ||
        letra=="s" || letra=="t" || letra=="v" || letra=="w" || letra=="x" || letra=="y" || letra=="z"){
            cuenta++;
        }
    }
    return cuenta;
}

module.exports.esPalindromo=palindromo;
module.exports.contarPalabras=ContarCad;
module.exports.contarLetra=ContarLetras;
module.exports.contarVocal=ContarVocales;
module.exports.contarConso=ContarConsonantes;