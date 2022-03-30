# Boas vindas ao repositório do projeto Lista de Tarefas!

# Sumário

  

- [Habilidades](#habilidades)

- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)

- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)

- [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)

- [Durante o desenvolvimento](#durante-o-desenvolvimento)

- [Como desenvolver](#como-desenvolver)

- [Linter](#linter)

- [Requisitos do projeto](#requisitos-do-projeto)

  

`Requisitos obrigatórios:`

- [1 - Adicone à sua lista o título "Minha Lista de Tarefas" em uma tag <header>](#1---adicone-à-sua-lista-o-título-minha-lista-de-tarefas-em-uma-tag-)

- [2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"](#2---adicione-abaixo-do-título-um-pequeno-e-discreto-parágrafo-com-idfuncionamento-e-com-o-texto-clique-duas-vezes-em-um-item-para-marcá-lo-como-completo)

- [3 - Adicione um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista](#3---adicione-um-input-com-o-idtexto-tarefa-onde-o-usuário-poderá-digitar-o-nome-do-item-que-deseja-adicionar-à-lista)

- [4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"](#4---adicione-uma-lista-ordenada-de-tarefas-com-o-idlista-tarefas)

- [5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo](#5---adicione-um-botão-com-idcriar-tarefa-e-ao-clicar-nesse-botão-um-novo-item-deverá-ser-criado-ao-final-da-lista-e-o-texto-do-input-deve-ser-limpo)

- [6 - Ordene os itens da lista de tarefas por ordem de criação](#6---ordene-os-itens-da-lista-de-tarefas-por-ordem-de-criação)

- [7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)](#7---clicar-em-um-item-da-lista-deve-alterar-a-cor-de-fundo-do-item-para-cinza-rgb128128128)

- [8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo](#8---não-deve-ser-possível-selecionar-mais-de-um-elemento-da-lista-ao-mesmo-tempo)

- [9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item](#9---clicar-duas-vezes-em-um-item-ele-deverá-ser-riscado-indicando-que-foi-completo-deve-ser-possível-desfazer-essa-ação-clicando-novamente-duas-vezes-no-item)

- [10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista](#10---adicione-um-botão-com-idapaga-tudo-que-quando-clicado-deve-apagar-todos-os-itens-da-lista)

- [11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista](#11---adicione-um-botão-com-idremover-finalizados-que-quando-clicado-remove-somente-os-elementos-finalizados-da-sua-lista)

  

`Requisitos bônus:`

- [12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava](#12---adicione-um-botão-com-idsalvar-tarefas-que-salve-o-conteúdo-da-lista-se-você-fechar-e-reabrir-a-página-a-lista-deve-continuar-no-estado-em-que-estava)

- [13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas](#13---adicione-dois-botões-um-com-idmover-cima-e-outro-com-idmover-baixo-que-permitam-mover-o-item-selecionado-para-cima-ou-para-baixo-na-lista-de-tarefas)

- [14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado](#14---adicione-um-botão-com-idremover-selecionado-que-quando-clicado-remove-o-item-selecionado)

- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)

- [Revisando um pull request](#revisando-um-pull-request)

- [Avisos Finais](#avisos-finais)

  

# Habilidades

  

- Manipular CSS

  

- Manipular Javascript

  

---

  

## O que deverá ser desenvolvido

  

- Será desenvolvido uma lista de tarefas usando `HTML`, `CSS` e `JavaScript`.

  

---

  

## Instruções para entregar seu projeto:

  

### 🗒ANTES DE COMEÇAR A DESENVOLVER:

  

1. Clone o repositório

* `git clone git@github.com:tryber/sd-012-project-todo-list.git`

* Entre na pasta do repositório que você acabou de clonar:

* `cd sd-012-project-todo-list`

  

2. Instale as dependências e inicialize o projeto

* Instale as dependências:

* `npm install`

  

3. Crie uma branch a partir da branch `master`

* Verifique que você está na branch `master`

* Exemplo: `git branch`

* Se não estiver, mude para a branch `master`

* Exemplo: `git checkout master`

* Agora, crie uma branch onde você vai guardar os `commits` do seu projeto

* Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`

* Exemplo: `git checkout -b joaozinho-silva-todo-list`

  

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:

* Verifique que você está na raiz do projeto

* Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-012-project-todo-list**_

* Crie os arquivos index.html, style.css e script.js

* Exemplo: `touch index.html style.css script.js`

  

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

* Verifique que as mudanças ainda não estão no _stage_

* Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)

* Adicione o novo arquivo ao _stage_ do Git

* Exemplo:

* `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)

* `git status` (devem aparecer listados os arquivos em verde)

* Faça o `commit` inicial

* Exemplo:

* `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)

* `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  

6. Adicione a sua branch com o novo `commit` ao repositório remoto

* Usando o exemplo anterior: `git push -u origin joaozinho-silva-todo-list`

  

7. Crie um novo `Pull Request` _(PR)_

* Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-012-project-todo-list/pulls)

* Clique no botão verde _"New pull request"_

* Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**

* Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[JOAOZINHO-SILVA] Projeto To Do List`

* Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_

* **Não se preocupe em preencher mais nada por enquanto!**

* Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-012-project-todo-list/pulls) e confira que o seu _Pull Request_ está criado

  

---

  

## Durante o desenvolvimento

  

* Faça `commits` das alterações que você fizer no código regularmente.

  

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto.

  

* Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_

2. `git add` _(para adicionar arquivos ao stage do Git)_

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_

4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

  

---

  

## Linter

  

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.

Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível

e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

  

```bash

npm run lint

npm run lint:styles

```

  

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `CSS` estão com o padrão correto.

  

Quando é executado o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `JS` e `JSX` estão com o padrão correto.

## Requisitos do projeto



## Requisitos Obrigatórios:

  

### 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>

  

**O que será verificado:**

  

- Será verificado se sua página possui uma tag `header` com o conteúdo `Minha Lista de Tarefas`

  

### 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

  

**O que será verificado:**

  

- Será verificado que existe na sua página um elemento com o id `funcionamento` com o conteúdo `Clique duas vezes em um item para marcá-lo como completo`

  

### 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

  

**O que será verificado:**

  

- Será verificada a existência de um elemento do tipo `input` com o id `texto-tarefa`.

  

### 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

  

**O que será verificado:**

  

- Será verificada a existência de um elemento `ol` com o id `lista-tarefas`.

  

### 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

  

**O que será verificado:**

  

- Será verificada a existência de um elemento do tipo `button` com o id `criar-tarefa`

  

- No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

  

- A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

  

### 6 - Ordene os itens da lista de tarefas por ordem de criação

  

**O que será verificado:**

  

- Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

  

### 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

  

**O que será verificado:**

  

- Será verificado que, ao se carregar a página, os itens da lista **não tem** o estilo CSS `background-color: rgb(128, 128, 128)`

  

- Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)`

  

### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

  

**O que será verificado:**

  

- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: rgb(128, 128, 128)` no elemento.

  

### 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

  

Pontos importantes sobre este requisito:

  

* Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

  

* Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

  

**O que será verificado:**

  

- Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid rgb(0, 0, 0)`.

  

- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`

  

- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo

  

### 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

  

**O que será verificado:**

  

- Será verificado que existe um elemento `button` com o id `apaga-tudo`

  

- Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia

  

### 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista

  

**O que será verificado:**

  

- Será verificado que existe um elemento `button` com o id `remover-finalizados`

  

- Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista

  

## BÔNUS

  

### 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

  

**O que será verificado:**

  

- Será verificado que existe um elemento `button` com o id `salvar-tarefas`

  

- Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

  

### 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

  

Pontos importantes sobre este requisito bônus:

  

* Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

  

* Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

  

**O que será verificado:**

  

- Será verificada a existência de dois elementos `button`, um com o id `mover-cima` e o outro com o id `mover-baixo`

  

- Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas

  

- Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento

  

- Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista

  

- Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido

  

- _Caso especial!_ Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada

  

### 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado

  

**O que será verificado:**

  

- Será verificada a presença de um elemento `button` com um id `remover-selecionado`

  

- Será verificado que, no clicar no botão, somente o elemento selecionado é removido

  

---

  

## Dicas

  

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/todo-list`.

## Depois de terminar o desenvolvimento

  

Para **"entregar"** seu projeto, siga os passos a seguir:

  

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque outras pessoas da sua turma

* No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**

* No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**

* No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-012`

  

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

  

---

  

### Revisando um pull request

  

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests das outras pessoas estudantes. Atenção às mensagens do "Pull Reminders" no Slack!

  

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.