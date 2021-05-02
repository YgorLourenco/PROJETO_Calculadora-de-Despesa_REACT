// helper.js costuma ser um "componente externo" feito pra ser usado de forma global tendo várias funções
export const revisarDespesa = (despesa, restante) => {
    let tipo

    if ((despesa / 4) > restante) { // Se a despesa ter um valor de 1/4 maior que o restante
        tipo = 'alert alert-danger'
    } else if((despesa / 2) > restante) { // Se a despesa ter um valor de 1/2 maior que o restante
        tipo = 'alert alert-warning'
    } else {
        tipo = 'alert alert-success'
    }

    return tipo;
}