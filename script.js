let button = document.querySelector('.button-add-task');
let input = document.querySelector('.input-task');
let listaCompleta = document.querySelector('.list-task');

let minhaListaDeItens = []

function adicionarNovaTarefa() {

    if (!input.value) {
        alert('Digite algo para inserir em sua lista')
    }

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false


    });

    input.value = '';

    mostrarTarefa();
}

function mostrarTarefa() {

    let novaLi = '';
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + ` 
        <li class="task ${item.concluida && 'done'}">
        <img  src="./img/checked.png" alt="" onclick = 'concluirTarefa(${posicao})'>
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="" onclick ='deletarItem(${posicao})'>
        </li>
    `
    });

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));
}
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;

    mostrarTarefa();
}

function deletarItem(posicao) {

    minhaListaDeItens.splice(posicao, 1);

    mostrarTarefa();
}

function recarregarTarefa() {
    let tarefaDoLocalStorage = localStorage.getItem('lista');

    if (tarefaDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefaDoLocalStorage);
    }
    mostrarTarefa();
}


recarregarTarefa();

button.addEventListener('click', adicionarNovaTarefa);