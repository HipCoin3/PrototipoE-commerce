import { catalogoProdutos } from "./src/components/cartaoProduto";
import { inicializarFiltor } from "./src/components/filtrosCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/components/menuCarrinho";


inicializarFiltor();
catalogoProdutos();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();