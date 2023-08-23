let button = document.querySelector('.button-add-task');
let input = document.querySelector('.input-task');
let listaCompleta = document.querySelector('.list-task');

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value);
    mostrarTarefa();
}

function mostrarTarefa() {

    let novaLi = '';
    minhaListaDeItens.forEach((tarefa) => {
        novaLi = novaLi + ` 
        <li class="task">
        <img src="./img/checked.png" alt="">
        <p>${tarefa}</p>
        <img src="./img/trash.png" alt="">
        </li>
    `
    });

    listaCompleta.innerHTML = novaLi;
}
button.addEventListener('click', adicionarNovaTarefa);