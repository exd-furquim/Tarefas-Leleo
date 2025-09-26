function calcularIdade() {
      let idade = document.getElementById("idadeCachorro").value;
      let resultado = document.getElementById("resultado");
      let idadeHumana = idade * 4.5;
      resultado.innerText = `A idade equivalente em anos humanos é: ${idadeHumana} anos.`;
    }
 //let listaCores é onde colocamos as cores
    let listaCores = ['yellow', 'blue', 'red', 'green', 'pink', 'brown', 'black'];
    
    //ordenamos como as cores se comportaram
    document.body.style.backgroundColor = listaCores[trocarCores];
    
    //aqui criamos a função que vai ordenar as cores
    function trocarCores() {
        document.body.style.backgroundColor =

    //aqui fazemos a matemática para deixar aleatório e so colocar números inteiros   
        listaCores[Math.floor(7*Math.random())]
    }

    //intervalo que as cores serão trocadas 
    setInterval(trocarCores, 0.1)