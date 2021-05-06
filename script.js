// adiciona nova tarefa à lista
function addTarefa(olTarefas) {
  // acessa elemento <button id='criar-tarefa'>Criar</button>
  const btnCriarTarefa = document.querySelector('#criar-tarefa');
  // adiciona evento de click ao botão
  btnCriarTarefa.addEventListener('click', () => {
    // acessa valor do elemento <input type='text' id='texto-tarefa'>
    let inputTextoTarefa = document.querySelector('#texto-tarefa').value;
    // cria elemento <li>
    let liTarefa = document.createElement('li');
    // adiciona classe ao <li>
    liTarefa.className = 'tarefa';
    // adiciona texto do input ao <li>
    liTarefa.innerHTML = inputTextoTarefa;
    // adiciono liTarefa como filho da lista ordenada
    olTarefas.appendChild(liTarefa);
    // remove texto do input
    document.querySelector('#texto-tarefa').value = '';
  });
}


function eventoDeSelecaoDeItemDaLista(olTarefas) {
  olTarefas.addEventListener('click', (event) => {
    // se o alvo clicado for uma tarefa
    if (event.target.classList.contains('tarefa')) {
      // remove classe 'selected' do item anterior
      let tarefaSelecionadaAnterior = olTarefas.querySelector('.selected');
      // se for a primeira seleção
      if(tarefaSelecionadaAnterior != null){
        tarefaSelecionadaAnterior.classList.remove('selected');
      }
      // seleciona o alvo
      event.target.classList.add('selected');
      // adiciona fundo branco em todos itens
      for (let tarefa of olTarefas.querySelectorAll('.tarefa')) {
        tarefa.style.backgroundColor = 'rgb(255, 255, 255)';
      }
      // destaca item selecionado
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
function eventoDeMarcacaoDeItemDaLista(olTarefas) {
  olTarefas.addEventListener('dblclick', (event) => {
    // se o alvo for uma tarefa
    if(event.target.classList.contains('tarefa')){
      // verificar se tarefa está completa
      if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
}
// garante que o html estará carregado
window.onload = () => {
  // acessa elemento <ol id='lista-tarefas'></ol>
  let olTarefas = document.querySelector('#lista-tarefas');
  addTarefa(olTarefas);
  eventoDeSelecaoDeItemDaLista(olTarefas);
  eventoDeMarcacaoDeItemDaLista(olTarefas)
}
