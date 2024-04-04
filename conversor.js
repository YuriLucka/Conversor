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
const binario = {
    "0000":"0",
    "0001":"1",
    "0010":"2",
    "0011":"3",
    "0100":"4",
    "0101":"5",
    "0110":"6",
    "0111":"7",
    "1000":"8",
    "1001":"9",
    "1010":"A",
    "1011":"B",
    "1100":"C",
    "1101":"D",
    "1110":"E",
    "1111":"F"
}


function maiusculo(input) {
    input.value = input.value.toUpperCase();
}

function converterH(){
    //------------ HEXADECIMAL PARA BINARIO
    let valor_hexadecimal = document.querySelector(".hexadecimal");
    let valor_binario = document.querySelector(".binario");
    let valor_decimal = document.querySelector(".decimal");
    let binario = "";
    let valor = valor_hexadecimal.value;
    valor = valor.toUpperCase();

    //------------VALIDAÇÃO DE HEXADECIMAL
    if(!valor){
        return alert("Digite um valor Hexadecimal.")
    }
    let regex = /^[0-9A-F]+$/i;
    if (!regex.test(valor)){
        alert("O texto não é um número hexadecimal válido.");
        valor_hexadecimal.value = "";
        valor_binario.value = "";
        valor_decimal.value = "";
        return;
    }

    for(i=0; i < valor.length; i++){
        binario = binario + hexadecimal[valor[i]];
    }
    valor_binario.value = binario;

    //------------ BINARIO PARA DECIMAL
    let binario_invertido = binario.split('').reverse().join('');
    let decimal = 0;
    let multiplicador = 1;
    for(i=0; i < binario_invertido.length; i++){
        if(binario_invertido[i] == "1");
            decimal += binario_invertido[i]*multiplicador;
        multiplicador *= 2;
    }
    valor_decimal.value = decimal;
}

function converterB(){
    //------------ BINARIO PARA HEXADECIMAL
    let valor_hexadecimal = document.querySelector(".hexadecimal");
    let valor_binario = document.querySelector(".binario");
    let valor_decimal = document.querySelector(".decimal");
    let hexadecimal = "";
    let valor = valor_binario.value;

    //------------VALIDAÇÃO DE BINARIO
    if(!valor){
        return alert("Digite um valor Binário.")
    }
    let regex = /^[0-1]+$/i;
    if (!regex.test(valor)) {
        alert("O valor não é um número binário válido.");
        valor_hexadecimal.value = "";
        valor_binario.value = "";
        valor_decimal.value = "";
        return;
    }

    // AQUI EU FUI FODA DEMAIS 😎, O LOOP CHECA SE A QUANTIDADE DE CARACTERES DO BINÁRIO É DIVISIVEL POR 4, POIS É O NECESSÁRIO PARA PODEMOS CONVERTE-LO EM HEXA, DEVIDO O HEXA EXIGIR 4 BITS PRA CADA CARACTER.
    while(valor.length%4 != 0){
        valor = "0" + valor;
    }

    for(i=0; i < valor.length; i+=4){
        hexadecimal = hexadecimal + binario[valor.slice(i, i+4)];
    }

    valor_hexadecimal.value = hexadecimal;

    //------------ BINARIO PARA DECIMAL
    let valor_invertido = valor.split('').reverse().join('');
    let decimal = 0;
    let multiplicador = 1;
    for(i=0; i < valor_invertido.length; i++){
        if(valor_invertido[i] == "1");
            decimal += valor_invertido[i]*multiplicador;
        multiplicador *= 2;
    }
    valor_decimal.value = decimal;
}

function converterD(){
    //------------ DECIMAL PARA BINARIO
    let valor_hexadecimal = document.querySelector(".hexadecimal");
    let valor_binario = document.querySelector(".binario");
    let valor_decimal = document.querySelector(".decimal");
    let binariov = "";
    let valor = valor_decimal.value;

    //------------VALIDAÇÃO DE DECIMAL
    if(!valor){
        return alert("Digite um valor Decimal.")
    }
    let regex = /^\d+$/;
    if (!regex.test(valor)) {
        alert("O valor não é um número inteiro válido.");
        valor_hexadecimal.value = "";
        valor_binario.value = "";
        valor_decimal.value = "";
        return;
    }

    if(valor == 0) {
        valor_binario.value = "0000";
        valor_hexadecimal.value = "0";
        return;
    }
    
    while(valor > 0){
        binariov = (valor % 2) + binariov; // Adiciona o bit mais significativo no início
        valor = Math.floor(valor / 2); // Divide o valor decimal por 2
    }

    valor_binario.value = binariov;
    //------------ BINARIO PARA HEXADECIMAL
    let hexadecimal = "";

    while(binariov.length % 4 != 0){ // Garantindo que o comprimento seja divisível por 4
        binariov = "0" + binariov;
    }

    for(let i = 0; i < binariov.length; i += 4){
        hexadecimal += binario[binariov.slice(i, i+4)];
    }

    valor_hexadecimal.value = hexadecimal;
}