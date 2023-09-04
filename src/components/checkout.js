import { lerLocalStorege } from "../utils/armazenandoLocalStorege";
import { desenharProdutoCarrinhoSimples } from '../utils/desenharProdutoCarrinhoSimples';


function desenharProdutosCheckout() {

    const idsProdutosCarrinhoComQuantidade = lerLocalStorege('carrinho');

    for (const idProduto in idsProdutosCarrinhoComQuantidade) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            "container-produtos-checkout",
            idsProdutosCarrinhoComQuantidade[idProduto]
        );
    }
};

desenharProdutosCheckout();


