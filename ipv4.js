function calcularCidr(){
    let valor_cidr = document.querySelector(".cidr");
    

    if(!valor_cidr){
        return alert("Digite um valor de CIDR.")
    }
    let regex = /^\d+$/;
    if (!regex.test(valor_cidr.value) || valor_cidr.value <1 || valor_cidr.value >31) {
        alert("Digite um valor de 1 a 31.");
        valor_cidr.value = "";
        return;
    }

    let bits_redes = valor_cidr.value
    let end_redes = 2**bits_redes
    let bits_hosts = 32 - bits_redes
    let ip_disp = 2**bits_hosts
    let end_maquinas = ip_disp - 2
    let classe_rede = ""

    if(bits_redes<=8){
        classe_rede = "A"
    } else if(bits_redes<=16){
        classe_rede = "B"
    } else if(bits_redes<=24) {
        classe_rede = "C"
    } else {
        classe_rede = "D ou E, sendo que não a usamos"
    }


    alert(`REDES:\n${bits_redes} bits para endereçamento de redes.\nPossivel endereçar ${end_redes} redes únicas\n\nHOSTS\n${bits_hosts} bits para endereçamento de hosts.\n${ip_disp} endereços IP disponiveis.\n\n${end_maquinas} para Maquinas.\n1 para a rede.\n1 para o broadcast.\n\nCLASSE:\nEssa classe é do tipo ${classe_rede}.`)

}

