### Requisitos para o desafio:

- No dia da atividade marcada com alarme, informar atividades que estão para ser realizadas em até 2 horas
- Opção de ativar alarme
- Sem determinar o tempo de antecedência para o alarme
- Planeje qual será a estratégia para acionamento dos alarmes e quais as opções, como configurar data, hora e/ou avisos diferentes dependendo do Status ou nível de prioridade da tarefa.
- Possibilidade de configurar mais de um alarme por tarefa;
- Implementar a opção de alarme para as tarefas;
  Acionar o aviso de alarme quando o período definido chegar.


### Implementação do front ent:

- Exibe "Seja bem-vindo [nome]" após validação.
Substitui o input e botão por dois novos botões:
Sair: Reseta a interface e remove o nome do localStorage.
Ir para as tarefas: (Implementação não fornecida, provavelmente redirecionaria para a seção de tasks).

- Gerenciamento de Tarefas (Tasks)
Campos obrigatórios: Nome, Descrição, Data, Hora, Prioridade, Categoria e Status.
Validação em tempo real e exibe erro (Preencha todos os campos!).

-Cards de Tarefas
Exibição dinâmica em listas categorizadas (To do, Doing, Done).

- Atributos visuais:
Cores diferentes (azul para To do, laranja para Doing, verde para Done).

- Ações por Task:
Excluir: Remove o card e atualiza o localStorage.
Editar: Abre um modal com campos pré-preenchidos para edição.

- Persistência:
Salva automaticamente no localStorage após qualquer modificação.

- Modal de Edição em Massa 
Lista todas as tasks em uma tabela com dropdowns para prioridade e status.
Permite editar múltiplas tasks simultaneamente.
Atualiza o localStorage e recarrega a página para refletir mudanças.

- Persistência de Dados
Armazenamento Local (localStorage):
Nome do usuário (nomePessoa).
Listas de tasks (todoList, doingList, doneList).
Recupera dados ao carregar a página (window.onload).
