const botao = document.getElementsByClassName("delete");
const cadastro = document.getElementById("cadastro");
const lista = document.getElementById("lista");

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://crudcrud.com/api/af55b9e9b9394d3d9e6dde1fcadbe659/clientes")
        .then(res => res.json())
        .then(dados => {
            dados.forEach(cliente => {

                lista.innerHTML += `
    
        <li>

            <span>
                ${cliente.nome} - ${cliente.telefone}
            </span>

            <button class="delete" data-id="${cliente._id}">
                X
            </button>

        </li> `
            })
        })
})

cadastro.addEventListener("click", function (event) {
    event.preventDefault()
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("fone").value;

    fetch("https://crudcrud.com/api/af55b9e9b9394d3d9e6dde1fcadbe659/clientes", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nome: nome,
            telefone: telefone
        })
    })
    .then(() => {

            window.location.reload()

    })
})

lista.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        const id = event.target.dataset.id
        fetch(`https://crudcrud.com/api/af55b9e9b9394d3d9e6dde1fcadbe659/clientes/${id}`, {
        method: "DELETE"
        })
        .then(() => {

            window.location.reload()

        })
    }
})
