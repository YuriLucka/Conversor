const hexadecimal = {
    "0":"0000",
    "1":"0001",
    "2":"0010",
    "3":"0011",
    "4":"0100",
    "5":"0101",
    "6":"0110",
    "7":"0111",
    "8":"1000",
    "9":"1001",
    "A":"1010",
    "B":"1011",
    "C":"1100",
    "D":"1101",
    "E":"1110",
    "F":"1111"
}


function converter(){
    // HEXADECIMAL PARA BINARIO
    let valor_hexadecimal = document.querySelector(".hexadecimal");
    let valor_binario = document.querySelector(".binario");
    let valor_decimal = document.querySelector(".decimal");
    let binario = "";
    let valor = valor_hexadecimal.value;
    valor = valor.toUpperCase();

    for(i=0; i < valor.length; i++){
        binario = binario + hexadecimal[valor[i]];
    }
    
    valor_binario.value = binario;

    //------------ BINARIO PARA DECIMAL

    let binario_invertido = binario.split('').reverse().join('');
    let decimal = 0
    let multiplicador = 1
    for(i=0; i < binario_invertido.length; i++){
        if(binario_invertido[i] == "1")
            decimal += binario_invertido[i]*multiplicador;
        multiplicador *= 2;
    }

    valor_decimal.value = decimal


}