// Função para obter a data e hora atual
function mostrarDataHora() {
    var elementoDataHora = document.getElementById("data-hora");
    var dataHoraAtual = new Date();
    var dataHoraFormatada = dataHoraAtual.toLocaleString(); // Formata a data e hora

    elementoDataHora.textContent = "Data e Hora Atuais: " + dataHoraFormatada;
}