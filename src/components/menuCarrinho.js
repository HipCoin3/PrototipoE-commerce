import { salvarLocalStorege, lerLocalStorege } from "../utils/armazenandoLocalStorege";
import { catalogo } from "../utils/catalogoProdutos";

// Um dicionário que "busca"/manipula os produtos pelo ID.
const idsProdutosCarrinhoComQuantidade = lerLocalStorege('carrinho') ?? {};

// para salvar no localStorage deve chamar a função onde a gente manipula os dados do dicionário.

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

function removerDoCarrinho(idPorduto) {
  delete idsProdutosCarrinhoComQuantidade[idPorduto];
  salvarLocalStorege("carrinho", idsProdutosCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
};


function incrementarQuantidadeProduto(idPorduto) {
  idsProdutosCarrinhoComQuantidade[idPorduto]++;
  salvarLocalStorege("carrinho", idsProdutosCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInfoQuantidade(idPorduto);
};

function decrementarQuantidadeProduto(idPorduto) {

  if (idsProdutosCarrinhoComQuantidade[idPorduto] === 1) {
    removerDoCarrinho(idPorduto);
    return;
  }

  idsProdutosCarrinhoComQuantidade[idPorduto]--;
  salvarLocalStorege("carrinho", idsProdutosCarrinhoComQuantidade);
  atualizarInfoQuantidade(idPorduto);
  atualizarPrecoCarrinho();

};

function atualizarInfoQuantidade(idPorduto) {
  document.getElementById(`quantidade-${idPorduto}`).innerText =
    idsProdutosCarrinhoComQuantidade[idPorduto];
};

function desenharProdutoNoCarrinho(idPorduto) {
  const produto = catalogo.find((p) => p.id === idPorduto);

  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');

  // Aqui estou criando um elemento article para substituir o article do texto abaixo.
  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "text-xs",
    "relative",
    "bg-cyan-900",
    "shadow-inner",
    "shadow-cyan-950",
    "rounded-lg"
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  // return => <article class="flex text-xs relative bg-cyan-900 shadow-inner shadow-cyan-950 rounded-lg "></article>

  const produtoSelecionado = `
      
      <button 
      id="remover-produto-${produto.id}"
      class=" ml-12 absolute top-0 right-0 m-3 hover:text-black hover:duration-100 text-[#a1c5f7c2]"
      >
        <i class="fa-solid fa-circle-xmark"></i>
      </button>

      <img src="./assets/img/${produto.imagem}" alt="carrinho: ${produto.nome}"
      class="h-20 rounded-lg "
      >
      <div class="p-2 flex flex-col justify-between">
        
      <p class="text-slate-50 text-sm">
        ${produto.nome}
        </p>
        
        <p class="text-slate-400 text-xs">
        Tamanho: ${produto.tamanho}
        </p>

        <p class="text-black text-[1.5em]">
        R$${produto.preco}
        </p>

      </div>

      <div class="flex flex-row text-slate-100 items-end absolute bottom-1 right-2 text-lg">
      
        <button id="decrementar-produto-${produto.id}">-</button>
        <p id="quantidade-${produto.id}" class="ml-2">${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
        <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>
      
      </div>
  
    `;

  // Aqui eu estou jogando os elementos de testo da variável produtoSelecionado dentro do elemento article criado no JS.
  elementoArticle.innerHTML = produtoSelecionado;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

  document.getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

  document.getElementById(`remover-produto-${produto.id}`)
    .addEventListener('click', () => removerDoCarrinho(produto.id));

};

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = "";

  for (const idPorduto in idsProdutosCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idPorduto);
  };

};


export function addAoCarrinho(idPorduto) {

  // mapeia os ids dentro do carrinho e se já existir, não add outro card.
  if (idPorduto in idsProdutosCarrinhoComQuantidade) {

    incrementarQuantidadeProduto(idPorduto);
    return;
  }
  //adiciona um produto ao carrinho pelo ID.
  idsProdutosCarrinhoComQuantidade[idPorduto] = 1;

  salvarLocalStorege("carrinho", idsProdutosCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idPorduto);
  atualizarPrecoCarrinho();
};


export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById('preco-compra');
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find(p => p.id === idProdutoNoCarrinho).preco *
      idsProdutosCarrinhoComQuantidade[idProdutoNoCarrinho];
  }

  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;

}