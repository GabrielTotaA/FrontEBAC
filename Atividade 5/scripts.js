let n;
let vidas = 7;

function iniciarJogo() {
    vidas = 7;
    n = Math.floor(Math.random() * 100) + 1;
    alert(n);
    document.getElementById("botaoInicio").innerText = "Recomeçar";
    document.getElementById("tentativas").innerText = "Tentativas restantes "+vidas
    document.getElementById("dica").innerText = ""
}

function chute(){
    let valor = parseInt(document.getElementById("chute").value);
    if (valor > 100 || valor < 0 || isNaN(valor)){
        document.getElementById("dica").innerText = "O numero tem que ser entre 0 e 100!";
        return;
    }
    if (vidas <= 1){
        document.getElementById("dica").innerText = "Suas tentativas acabaram! O numero era "+n;
        document.getElementById("tentativas").innerText = "Tentativas restantes "+(vidas -1);
    }else if(vidas > 0){
        if (valor > n){
                document.getElementById("dica").innerText = "O numero é menor que "+valor;
                vidas = vidas - 1;
                document.getElementById("tentativas").innerText = "Tentativas restantes "+vidas
            } else if (valor < n) {
                document.getElementById("dica").innerText = "O numero é maior que "+valor;
                vidas = vidas - 1;
                document.getElementById("tentativas").innerText = "Tentativas restantes "+vidas
            } else if(valor == n){
                document.getElementById("dica").innerText = "Parabens! O numero era: "+n;
        }
    }
}