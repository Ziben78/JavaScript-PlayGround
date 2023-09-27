// Função Soma

function somar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 + numero2;
    exibirResultado(resultado);
}


// Função Subtração

function subtrair() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 - numero2;
    exibirResultado(resultado);
}


// Função Multiplicação

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 * numero2;
    exibirResultado(resultado);
}


// Função Divisão

function dividir() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero2 !== 0) {
        var resultado = numero1 / numero2;
        exibirResultado(resultado);
    } else {
        exibirResultado("Erro: divisão por zero");
    }
}


// Função resultado

function exibirResultado(resultado) {
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}


// Adicionar listener de eventos aos botões

document.getElementById("soma").addEventListener("click", somar);
document.getElementById("subtracao").addEventListener("click", subtrair);
document.getElementById("multiplicacao").addEventListener("click", multiplicar);
document.getElementById("divisao").addEventListener("click", dividir);
