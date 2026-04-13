class Parquimetro {

    constructor(valor){
        this.valor = valor;
        this.tempo = 0;
        this.troco = 0;
    }

    calcularTempo(){
        if(this.valor >= 1 && this.valor< 1.75) {this.tempo = "30 minutos";}

        else if(this.valor<3) {this.tempo= "60 minutos";}

        else if(this.valor>=3) {this.tempo= "120 minutos";}

        else{this.tempo = "Valor invalido";}
    }

    calcularTroco(){
        if(this.tempo ==="30 minutos"){this.troco = this.valor - 1;}

        else if(this.tempo ==="60 minutos"){this.troco = this.valor -1.75;}

        else if(this.tempo ==="120 minutos"){this.troco = this.valor -3;}
    }

    exibir(){
        if(this.tempo === "Valor invalido"){document.getElementById("saida").innerHTML = "Valor insuficiente";}

        else{document.getElementById("saida").innerHTML = "Tempo total: "+this.tempo+" | Troco: R$ "+this.troco.toFixed(2);}

        console.log(this.tempo)
        console.log(this.troco)
        console.log(this.valor >= 1 && this.valor< 1.75)
    }
}

function calcular(){
    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor) || valor <0){
        document.getElementById("saida").innerHTML = "Valor invalido";
        return
    }

    const testeParquimetro = new Parquimetro(valor);
    testeParquimetro.calcularTempo();
    testeParquimetro.calcularTroco();
    testeParquimetro.exibir();

}
