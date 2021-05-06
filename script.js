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

// adiciona evento para itens da lista
function eventoParaItensDaLista(olTarefas) {
  olTarefas.addEventListener('click', (event) => {
    // se o alvo clicado for uma tarefa
    if (event.target.classList.contains('tarefa')) {
      // remove classe 'selecteed' do item anterior
      for (let tarefa of olTarefas.querySelectorAll('.tarefa')) {
        tarefa.classList.remove('selected');

      }
      // adiciona classe 'selected'
      event.target.classList.add('selected');
      for (let tarefa of olTarefas.querySelectorAll('.tarefa')) {
        // adiciona background personalizado na classe 'selected'
        if (tarefa.className === 'tarefa selected') {
          tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
        } else {
          tarefa.style.backgroundColor = 'rgb(255, 255, 255)';
        }
      }
    }
  });
}

// garante que o html estará carregado
window.onload = () => {
  // acessa elemento <ol id='lista-tarefas'></ol>
  let olTarefas = document.querySelector('#lista-tarefas');
  addTarefa(olTarefas);
  eventoParaItensDaLista(olTarefas);

}
