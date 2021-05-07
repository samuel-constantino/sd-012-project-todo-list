// verifica se há itens salvos no localStorage
function verificaTarefasSalvas(olTarefas) {
  // se a lista armazenada não estiver vazia
  if (localStorage.getItem('lista') != null && localStorage.getItem('classes') != null) {
    // acessa lista em formato de string
    const listaEmString = localStorage.getItem('lista');
    // acessa classes em formato de string
    const classesEmString = localStorage.getItem('classes');
    // converte a lista para array
    let lista = listaEmString.split(',');
    // converte classes para array
    let classes = classesEmString.split(',');
    // popular a lista de tarefas
    for(let key in lista){
      // cria elemento <li>
      let tarefa = document.createElement('li');
      //  adiciona classe 'tarefa'
      tarefa.className = classes[key];
      // adiciona conteudo
      tarefa.innerHTML = lista[key];
      // adiciona tarefa na lista
      olTarefas.appendChild(tarefa);
    }
  }

}
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
      if (tarefaSelecionadaAnterior != null) {
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
    if (event.target.classList.contains('tarefa')) {
      // verificar se tarefa está completa
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
}
// apaga todos os itens da lista
function eventoApagaTudo(olTarefas) {
  // acessa elemento <button id='apaga-tudo'></button>
  let btnApagaTudo = document.querySelector('#apaga-tudo');
  btnApagaTudo.addEventListener('click', () => {
    // acessa lista de tarefas
    let tarefas = olTarefas.querySelectorAll('.tarefa');
    for (let tarefa of tarefas) {
      olTarefas.removeChild(tarefa);
    }
  });
}

// apaga itens finalizados da lista
function eventoApagaFinalizados(olTarefas) {
  // acessa elemento <button id='remover-finalizados'>Apagar
  let btnApagaFinalizados = document.querySelector('#remover-finalizados');
  btnApagaFinalizados.addEventListener('click', () => {
    // acessa lista de tarefas finalizadas
    let tarefas = olTarefas.querySelectorAll('.completed');
    for (let tarefa of tarefas) {
      olTarefas.removeChild(tarefa);
    }
  });
}

function eventoSalvarTarefas(olTarefas) {
  // acessa elemento <button id='salvar-tarefas'></button>
  btnSalvarTarefas = document.querySelector('#salvar-tarefas');
  btnSalvarTarefas.addEventListener('click', () => {
    let tarefas = olTarefas.querySelectorAll('.tarefa');
    let lista = [];
    let classes = [];
    for (let tarefa of tarefas) {
      lista.push(tarefa.innerHTML);
      classes.push(tarefa.classList.value)
    }
    localStorage.setItem('lista', lista);
    localStorage.setItem('classes', classes);
    alert('Tarefa salva!');
  });
}
// move o elemento selecionado para baixo
function eventoMoverBaixo(olTarefas) {
  // acessa elemento <button id='mover-baixo'>Mover p/ Baixo</button>
  // btnMoverBaixo = document.querySelector('#mover-baixo');
  // btnMoverBaixo.addEventListener('click', () => {
  //   // acessa lista de tarefas
  //   let tarefas = olTarefas.getElementsByTagName('li');
  //   // identifica qual elemento é o selecionado
  //   let elementSelected;
  //   for(let tarefa of tarefas) {
  //     if(tarefa.classList.contains('selected')){
  //       elementSelected = tarefa;
  //     }
  //   }
  //   console.log(elementSelected.nextElementSibling)
  // });

  // acessa elemento <button id='mover-baixo'>Mover p Baixo</button>
  btnMoverBaixo = document.querySelector('#mover-baixo');
  btnMoverBaixo.addEventListener('click', () => {
    // acessa lista de tarefas
    let tarefas = olTarefas.getElementsByTagName('li');
    // identifica qual elemento é o selecionado
    let elementSelected;
    for(let tarefa of tarefas) {
      if(tarefa.classList.contains('selected')){
        elementSelected = tarefa;
      }
    }
    // se o próximo elemento for diferente de nulo, subistitua
    if(elementSelected.nextElementSibling != null){
      olTarefas.insertBefore(elementSelected.nextElementSibling, elementSelected);
    }
  });
}
// garante que o html estará carregado
window.onload = () => {
  // acessa elemento <ol id='lista-tarefas'></ol>
  let olTarefas = document.querySelector('#lista-tarefas');
  verificaTarefasSalvas(olTarefas);
  addTarefa(olTarefas);
  eventoDeSelecaoDeItemDaLista(olTarefas);
  eventoDeMarcacaoDeItemDaLista(olTarefas);
  eventoApagaTudo(olTarefas);
  eventoApagaFinalizados(olTarefas);
  eventoSalvarTarefas(olTarefas);
  eventoMoverBaixo(olTarefas);
}
