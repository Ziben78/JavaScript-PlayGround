// criar array de produtos
var produtos = [
    { nome: "Monitor MSI", categoria: "Ecrãns", preco: 190 },
    { nome: "Portátil Asus", categoria: "Portáteis", preco: 299 },
    { nome: "Teclado Logi", categoria: "Periféricos", preco: 24},
    { nome: "Rato Mitsai", categoria: "Periféricos", preco: 14},
    
];

// para criar e adicionar elementos <li> à lista
function criarItemLista(produto) {
    var li = document.createElement("li");
    li.textContent = produto.nome + " - Categoria: " + produto.categoria + " - Preço: €" +produto.preco;
    return li;

}

// Para ir buscar a lista ao ficheiro html
var listaProdutos = document.getElementById("listaProdutos");

// para criar a lista de produtos
    produtos.forEach(function (produto) {
    var li = criarItemLista(produto);
    listaProdutos.appendChild(li);

});
