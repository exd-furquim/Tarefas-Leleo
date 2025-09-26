function adicionarTarefa() {
  let mensagem = "Tarefa adicionada com sucesso!";
  document.getElementById("mensagem").textContent = mensagem;

  let inputtarefa = document.getElementById("inputtarefa")
  let tarefa = inputtarefa.value
  document.getElementById("mensagem").textContent = tarefa;

  let listatarefas = document.getElementById("listatarefas")
  let novatarefa = document.createElement("li")

  novaTarefa.textContent = tarefa

  listatarefas.appendChild(novaTarefa)
  
  inputtarefa.value = ""
}
