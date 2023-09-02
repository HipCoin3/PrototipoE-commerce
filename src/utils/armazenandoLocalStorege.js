export function salvarLocalStorege(chave, informacao) {

    // converte o objeto(dicionário) em uma string.
    localStorage.setItem(chave, JSON.stringify(informacao));
};

export function lerLocalStorege(chave) {
    // Busca as informações no localStorage pela chave convertendo de volta para objeto.
    return JSON.parse(localStorage.getItem(chave));

};