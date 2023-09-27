// Vou selecionaro elemento <div> onde vou mostrar a data e hora//

const elementoDataHora = document.getElementById('data-hora-actual');

// vou criar uma função para actualizar a data e hora a cada segundo //
function actualizarDataHora() {
    const dataActual = new Date();
    const formatoDataHora = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

// para formatar a data e hora actual //
const dataHoraFormatada = dataActual.toLocaleDateString('pt-BR', formatoDataHora);

// para definir conteúdo do html com a data e hora //
elementoDataHora.textContent = `Data e Hora Actual: ${dataHoraFormatada}`; // aqui tive de mudar aspas simples paraacentos graves(backticks)//

}

// para chamar a função para exibir a data e hora, a cada segundo //
actualizarDataHora();
setInterval(actualizarDataHora,1000); 
