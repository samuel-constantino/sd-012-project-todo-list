// garante que o html estará carregado
window.onload = () => {
	// acessa elemento <button id='criar-tarefa'>Criar</button>
  const btnCriarTarefa = document.querySelector('#criar-tarefa');
	// adiciona evento de click ao botão
  btnCriarTarefa.addEventListener('click', () => {
		// acessa valor do elemento <input type='text' id='texto-tarefa'>
    let inputTextoTarefa = document.querySelector('#texto-tarefa').value;
		// acessa elemento <ol id='lista-tarefas'></ol>
		let olListaTarefas = document.querySelector('#lista-tarefas');
		// cria elemento <li>
		let liTarefa = document.createElement('li');
		// adiciona texto do input ao <li>
		liTarefa.innerHTML = inputTextoTarefa;
		// adiciono liTarefa como filho da lista ordenada
		olListaTarefas.appendChild(liTarefa);
		// remove texto do input
		document.querySelector('#texto-tarefa').value = '';
  });
}
