import { catalogo } from "../utils/catalogoProdutos";
import { addAoCarrinho } from "./menuCarrinho";


export function catalogoProdutos() {

    for (const produtoCatalogo of catalogo) {

        const cartaoProduto = `
        <div 
        class=
        'border-solid shadow-lg
        shadow-cyan-900
        w-48 my-1.5 mx-1.5 flex 
        flex-col p-2 justify-between 
        group rounded-lg ${produtoCatalogo.feminino ? 'feminino' : 'masculino'} ' 
         
         id="card-produto-${produtoCatalogo.id}"
         >
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do MagazineHash"
        class="group-hover:scale-110 duration-300 my-2 shadow-sm rounded-lg"
        >
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p class="text-sm">R$ ${produtoCatalogo.preco}</p>
        <button 
        id="adicionar-${produtoCatalogo.id}"
        class=
        "bg-cyan-800 text-cyan-50 
        rounded-lg w-25 hover:bg-cyan-950
        duration-300 justify-center"
        >
        <i class="fa-solid fa-cart-plus"></i>
        </button>
        </div>
`
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    };

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => addAoCarrinho(produtoCatalogo.id));

    }
}