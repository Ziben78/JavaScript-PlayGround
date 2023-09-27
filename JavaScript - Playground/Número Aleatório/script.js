// Função para gerar um número aleatório de 1 a 10
function gerarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número entre 1 e 10
    return numeroAleatorio;
}

// Função para exibir a mensagem com o número aleatório
function exibirMensagem() {
    var numeroGerado = gerarNumeroAleatorio();
    var mensagem = "Número Aleatório: " + numeroGerado;
    document.getElementById("mensagem").textContent = mensagem;
}

// Adiciona um listener/mostrador de eventos ao botão
var botao = document.getElementById("gerarNumero");
botao.addEventListener("click", exibirMensagem);
