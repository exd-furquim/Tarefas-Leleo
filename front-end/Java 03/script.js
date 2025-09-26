function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    
    document.getElementById("mensagem").textContent = mensagem;
    let inputtarefa = document.getElementById("inputtarefa")
    let tarefa = inputtarefa.value
    document.getElementById("mensagem").textContent = tarefa;

    let listatarefas = document.getElementById("listatarefas")

    let novatarefa = document.createElement("li")

    listatarefas.appendChild(novatarefa)

    novatarefa.textContent = tarefa

    inputtarefa.value = ""
}
