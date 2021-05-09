// acessa input de tarefas
const inputText = document.querySelector('#texto-tarefa');
// acessa lista de tarefas
const olTarefas = document.querySelector('#lista-tarefas');

// verifica se há lista salva no localStorage
window.onload = () => {
  const tarefasSalvas = localStorage.getItem('tarefas-salvas');
  olTarefas.innerHTML = tarefasSalvas;
};

// adiciona tarefas
const addTarefa = () => {
  // cria nova tarefa
  const newLi = document.createElement('li');
  // adiciona texto do input
  newLi.innerText = inputText.value;
  // adiciona classe 'tarefa' novo elemento
  newLi.className = 'tarefa';
  // adiciona nova tarefa na lista
  olTarefas.appendChild(newLi);
  // limpa texto do input
  inputText.value = '';
};

// seleciona tarefa
const selecionaTarefa = (event) => {
  // acessa lista de tarefas
  const tarefas = document.querySelectorAll('.tarefa');
  for (let tarefa of tarefas) {
    tarefa.classList.remove('selected');
    tarefa.style.backgroundColor = '';
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
};

// risca tarefas completas
const riscaTarefa = (event) => {
  // se o alvo do evento tiver a classe 'completed'
  if (event.target.classList.contains('completed')) {
    // remova a classe 'completed'
    event.target.classList.remove('completed');
  } else {
    // se não adicione a classe 'completed'
    event.target.classList.add('completed');
  }
};

// apaga tudo
const apagaTudo = () => {
  // substitui conteúdo da lista por uma string vazia
  olTarefas.innerHTML = '';
  // limpa armazenamento local (localStorage)
  localStorage.clear();
};

// Apaga tarefas completas
const apagaTarefasCompletas = () => {
  // acessa a tarefa com classe 'completed'
  const tarefasCompletas = document.querySelectorAll('.completed');
  for (let tarefaCompleta of tarefasCompletas) {
    tarefaCompleta.remove();
  }
};

// salva lista atual
const salvaListaAtual = () => {
  localStorage.setItem('tarefas-salvas', olTarefas.innerHTML);
  alert('Lista Salva!')
};

// acessa tarefa selecionada
const tarefaSelecionada = () => {
  const tarefaSelecionada = document.querySelector('.selected');
  return tarefaSelecionada;
};

// Move tarefa selecionada para cima
const moveParaCima = () => {
  // se tarefa selecionada e a anterior dela existirem
  if (tarefaSelecionada() !== null && tarefaSelecionada().previousElementSibling !== null) {
    // troque elas de lugar
    tarefaSelecionada().after(tarefaSelecionada().previousElementSibling);
  }
};

// Move tarefa selecionada para baixo
const moveParaBaixo = () => {
  // se tarefa selecionada e a próxima existirem
  if (tarefaSelecionada() !== null && tarefaSelecionada().nextElementSibling !== null) {
    // troque elas de lugar
    tarefaSelecionada().after(tarefaSelecionada().nextElementSibling, tarefaSelecionada());
  }
};

// remove tarefa selecionada
const removeTarefaSelecionada = () => {
  tarefaSelecionada().remove();
};

// função para evento de click
const listenerClick = (event) => {
  // se o alvo do click for elementos com id 'criar-tarefas'
  if (event.target.id === 'criar-tarefa') {
    // adiciona tarefa
    addTarefa();
  } else if (event.target.id === 'remover-tudo') {
    // se não, se o id for 'remover-tudo', apague tudo!
    apagaTudo();
  } else if (event.target.id === 'remover-finalizados') {
    // se não, se o id for 'remover-finalizados', remova tarefas completas!
    apagaTarefasCompletas();
  } else if (event.target.id === 'salvar-tarefas') {
    // se não, se o id for 'salvar-tarefas', salve tudo!
    salvaListaAtual();
  } else if (event.target.id === 'mover-cima') {
    // se não, se o id for 'mover-cima', mova a tarefa selecionada para cima
    moveParaCima();
  } else if (event.target.id === 'mover-baixo') {
    // se não, se o id for 'mover-baixo', mova a tarefa selecionada para baixo
    moveParaBaixo();
  } else if (event.target.id === 'remover-selecionado') {
    // se não, se o id for 'remover-selecionado, remova a tarefa selecionada
    removeTarefaSelecionada();
  } else if (event.target.id === 'apaga-tudo') {
    // se não, se o id for 'apaga-tudo', apague todas as tarefas
    apagaTudo();
  } else if (event.target.classList.contains('tarefa')) {
    // se não, se a classe for 'tarefa', selecione o alvo
    selecionaTarefa(event);
  } else {
    // se não, descarte este evento
    event.target.removeEventListener('click', listenerClick);
  }
};
// declaração para eventos de click
document.addEventListener('click', listenerClick);

// função para evento de duplo Click
const listenerDoubleClick = (event) => {
  // se o alvo do duplo click for uma tarefa
  if (event.target.classList.contains('tarefa')) {
    // adiciona ou remove classe 'completed'
    riscaTarefa(event);
  } else {
    // se não, descarte este evento
    event.target.removeEventListener('click', listenerDoubleClick);
  }
};
// declaração para eventos de duplo click
document.addEventListener('dblclick', listenerDoubleClick);

// adiciona evento de tecla 
inputText.addEventListener('keypress', (event) => {
  // se a tecla acionada for 'enter'
  if (event.keyCode === 13) {
    // adiciona tarefa
    addTarefa();
  }
});
