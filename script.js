let button = document.querySelector('.button-add-task');
let input = document.querySelector('.input-task');

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value);
    console.log(minhaListaDeItens)
}
button.addEventListener('click', adicionarNovaTarefa);