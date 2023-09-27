// Função para alternar entre as imagens de lâmpada apagada e acesa
function alternarLampada() {
    var imagemLampada = document.getElementById("lampada");
    var imagemAtual = imagemLampada.getAttribute("src");

    if (imagemAtual === "offlampada.jpg") {
        imagemLampada.setAttribute("src", "onlampada.jpg"); // Muda para a imagem acesa
    } else {
        imagemLampada.setAttribute("src", "offlampada.jpg"); // Muda para a imagem apagada
    }
}

// Adicione um listener de eventos para o clique na imagem
var imagemLampada = document.getElementById("lampada");
imagemLampada.addEventListener("click", alternarLampada);
