const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos() {
    const produtosEscondidos = Array.from(
        catalogoProdutos.getElementsByClassName('hidden')
    );

    for (const produtos of produtosEscondidos) {
        produtos.classList.remove("hidden");
    }
};

function esconderMasculinos() {

    exibirTodos();

    const produtosMasculinos = Array.from(
        catalogoProdutos.getElementsByClassName("masculino")
    );

    for (const produto of produtosMasculinos) {
        produto.classList.add("hidden");
    }
};

function esconderFeminino() {

    exibirTodos();

    const produtosFemininos = Array.from(
        catalogoProdutos.getElementsByClassName("feminino")
    );

    for (const produto of produtosFemininos) {
        produto.classList.add("hidden");
    }
};

export function inicializarFiltor() {

    document.getElementById('exibir-masculino')
        .addEventListener('click', esconderFeminino);

    document.getElementById('exibir-feminino')
        .addEventListener('click', esconderMasculinos);

    document.getElementById('exibir-todos')
        .addEventListener('click', exibirTodos);

};