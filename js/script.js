const form = document.querySelector("#formMensagem");
const inputTarefa = document.querySelector("#mensagem");
const listaUl = document.querySelector("#listaTarefas");
const mensagemErro = document.querySelector("#erro");

let tarefas = [];

function renderizarTarefas() {
    listaUl.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        const spanTexto = document.createElement("span");
        spanTexto.textContent = tarefa;
        li.appendChild(spanTexto);

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = () => editarTarefa(index);
        li.appendChild(btnEditar);

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => excluirTarefa(index);
        li.appendChild(btnExcluir);

        listaUl.appendChild(li);    
    });
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

function editarTarefa(index) {
    const novoTexto = prompt("Editar", tarefas[index]);
    if (novoTexto !== null && novoTexto.trim !== "") {
        tarefas[index ] = novoTexto.trim();
        renderizarTarefas();
     }
}   

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        mensagemErro.textContent = "Erro, digite algo para iniciar";
    } else {
        mensagemErro.textContext = "";
        tarefas.push(textoTarefa)
        inputTarefa.value = "";
        renderizarTarefas();
    }
});
