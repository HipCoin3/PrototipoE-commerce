function abrirCarrinho() {

    document.getElementById('carrinho').classList.remove('right-[-380px]');
    document.getElementById('carrinho').classList.add('right-0');

};

function fecharCarrinho() {

    document.getElementById('carrinho').classList.remove('right-0');
    document.getElementById('carrinho').classList.add('right-[-380px]');

};

export function inicializarCarrinho() {

    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');

    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);

};

