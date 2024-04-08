let quilo = document.querySelector("#quilo")
let mega = document.querySelector("#mega")
let giga = document.querySelector("#giga")
let tera = document.querySelector("#tera")
let peta = document.querySelector("#peta")
let exa = document.querySelector("#exa")
let zeta = document.querySelector("#zeta")
let yota = document.querySelector("#yota")


function calcularq(){
    if (!quilo.value){
        return
    }
    let regex = /^\d+$/;
    if (!regex.test(quilo.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${quilo.value}x kilobytes é igual á: ${quilo.value * (2**10)} bytes`)
}
function calcularm(){
    if (!mega.value){
        return
    }
    if (!regex.test(mega.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${mega.value}x megabytes é igual á: ${mega.value * (2**10)} kilobytes\n
    ${mega.value}x megabytes é igual á: ${mega.value * (2**20)} bytes`)
}
function calcularg(){
    if (!giga.value){
        return
    }
    if (!regex.test(giga.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${giga.value}x gigabytes é igual á: ${giga.value * (2**10)} megabytes\n
    ${giga.value}x gigabytes é igual á: ${giga.value * (2**20)} quilosbytes\n
    ${giga.value}x gigabytes é igual á: ${giga.value * (2**30)} bytes`)
}
function calculart(){
    if (!tera.value){
        return
    }
    if (!regex.test(tera.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${tera.value}x terabytes é igual á: ${tera.value * (2**10)} gigabytes\n
    ${tera.value}x terabytes é igual á: ${tera.value * (2**20)} megabytes\n
    ${tera.value}x terabytes é igual á: ${tera.value * (2**30)} kilobytes\n
    ${tera.value}x terabytes é igual á: ${tera.value * (2**40)} bytes`)
}
function calcularp(){
    if (!peta.value){
        return
    }
    if (!regex.test(peta.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${peta.value}x petabytes é igual á: ${peta.value * (2**10)} terabytes\n
    ${peta.value}x petabytes é igual á: ${peta.value * (2**20)} gigabytes\n
    ${peta.value}x petabytes é igual á: ${peta.value * (2**30)} megabytes\n
    ${peta.value}x petabytes é igual á: ${peta.value * (2**40)} kilobytes\n
    ${peta.value}x petabytes é igual á: ${peta.value * (2**50)} bytes`)
}
function calculare(){
    if (!exa.value){
        return
    }
    if (!regex.test(exa.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${exa.value}x exabytes é igual á: ${exa.value * (2**10)} petabytes\n
    ${exa.value}x exabytes é igual á: ${exa.value * (2**20)} terabytes\n
    ${exa.value}x exabytes é igual á: ${exa.value * (2**30)} gigabytes\n
    ${exa.value}x exabytes é igual á: ${exa.value * (2**40)} megabytes\n
    ${exa.value}x exabytes é igual á: ${exa.value * (2**50)} kilobytes\n
    ${exa.value}x exabytes é igual á: ${exa.value * (2**60)} bytes`)
}
function calcularz(){
    if (!zeta.value){
        return
    }
    if (!regex.test(zeta.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**10)} exabytes\n
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**20)} petabytes\n
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**30)} terabytes\n
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**40)} gigabytes\n
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**50)} megabytes\n
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**60)} kilobytes\n
    ${zeta.value}x zetabytes é igual á: ${zeta.value * (2**70)} bytes`)
}
function calculary(){
    if (!yota.value){
        return
    }
    if (!regex.test(yota.value)) {
        alert("O valor não é um número inteiro válido.");
        return;
    }
    alert(`
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**10)} zetabytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**20)} exabytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**30)} petabytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**40)} terabytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**50)} gigabytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**60)} megabytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**70)} kilobytes\n
    ${yota.value}x yotabytes é igual á: ${yota.value * (2**80)} bytes`)
}