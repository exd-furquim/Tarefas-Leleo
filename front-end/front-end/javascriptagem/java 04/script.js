function adicionarTarefa() {
    // recebe valor do input do usuário
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
   
    // se o valor do input for vazio então mostre uma mensagem
    if (tarefa == "") {
        // mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
 
    } else {
        // mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        //cria novo item (li) e insere na (lista ul)
        let listatarefas = document.getElementById("listaTarefas")
        let novatarefa = document.createElement("li")
        novatarefa.textContent = tarefa
        listatarefas.appendChild(novatarefa)
    }
    // limpa o imput do usuário
    inputTarefa.value = ""
}
 
 