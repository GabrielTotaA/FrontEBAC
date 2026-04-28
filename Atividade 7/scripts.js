document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if (!(cepInformado.length === 8)) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.estado;

                const listaCep = {
                    cep: cepInformado,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.estado
                };

                localStorage.setItem("listaCep", JSON.stringify(listaCep));
            }
            else {
                alert("CEP nao encontrado");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP", error));


})

document.addEventListener("DOMContentLoaded", function () {
    const dados = JSON.parse(localStorage.getItem("listaCep"));
    if (dados == null) {
        return;
    }
    else {
        document.getElementById("cep").value = dados.cep;
        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.cidade;
        document.getElementById("estado").value = dados.estado;
    }

});