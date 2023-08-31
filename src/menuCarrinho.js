import { catalogoProdutos } from "./cartaoProduto";
import { catalogo } from "./utils/utilidade";

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

export function addAoCarrinho(idPorduto) {

    const produto = catalogo.find((p) => p.id === idPorduto);

    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');

    const produtoSelecionado = `
    <article class="flex text-xs relative bg-cyan-900 shadow-inner shadow-cyan-950 rounded-lg ">
    
      <img src="./assets/img/${produto.imagem}" alt="carrinho: ${produto.nome}"
      class="h-20 rounded-lg "
      >
      <div class="p-2">
        <p class="text-slate-50 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: ${produto.tamanho}</p>
        <p class="text-black text-[1.5em]">R$${produto.preco}</p>
      </div>

      <button 
      id="remover-produto"
      class=" ml-12 absolute top-0 right-0 m-3 hover:text-black hover:duration-100 text-[#a1c5f7c2]"
      >
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </article>
    `;

    containerProdutosCarrinho.innerHTML += produtoSelecionado;
};


