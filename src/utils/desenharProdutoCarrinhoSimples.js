

export function desenharProdutoCarrinhoSimples(idPorduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idPorduto);

    const containerProdutosCarrinho =
        document.getElementById(idContainerHtml);

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
            <p id='quantidade-${produto.id}' class='ml-2' > ${quantidadeProduto}</p>
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