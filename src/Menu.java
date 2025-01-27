import java.util.Scanner;

public class Menu {

    private ToDo listaDeTarefas;
    private Scanner scanner;

    public Menu(ToDo listaDeTarefas) {
        this.listaDeTarefas = listaDeTarefas;
        this.scanner = new Scanner(System.in);
    }

    public void exibirMenu() {
        int opcao;
        do {
            System.out.println("\n=== MENU ===");
            System.out.println("1. Adicionar tarefa");
            System.out.println("2. Remover tarefa");
            System.out.println("3. Listar todas as tarefas");
            System.out.println("4. Ordenar por prioridade");
            System.out.println("5. Ordenar por status");
            System.out.println("6. Ordenar por categoria");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");

            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    adicionarTarefa();
                    break;
                case 2:
                    removerTarefa();
                    break;
                case 3:
                    listaDeTarefas.listarTodasTarefas();
                    break;
                case 4:
                    listaDeTarefas.ordenarPorPrioridade();
                    listaDeTarefas.listarTodasTarefas();
                    break;
                case 5:
                    listaDeTarefas.ordenarPorStatus();
                    listaDeTarefas.listarTodasTarefas();
                    break;
                case 0:
                    System.out.println("Saindo do programa...");
                    break;
                default:
                    System.out.println("Opção inválida. Por favor, escolha uma opção válida.");
            }
        } while (opcao != 0);
    }

    private void adicionarTarefa() {
        System.out.print("Digite o nome da tarefa: ");
        String nome = scanner.nextLine();

        System.out.print("Digite a descrição da tarefa: ");
        String descricao = scanner.nextLine();

        System.out.print("Digite a data final (YYYY-MM-DD): ");
        String dataFinal = scanner.nextLine();

        System.out.print("Digite a prioridade da tarefa (1-5): ");
        int prioridade = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Digite a categoria da tarefa: ");
        String categoria = scanner.nextLine();

        System.out.print("Digite o status da tarefa (To Do, Doing, Done): ");
        String status = scanner.nextLine();

        Tarefa novaTarefa = new Tarefa(nome, descricao, dataFinal, prioridade, categoria, status);
        listaDeTarefas.adicionarTarefa(novaTarefa);
    }

    private void removerTarefa() {
        System.out.print("Digite o nome da tarefa que deseja remover: ");
        String nome = scanner.nextLine();
        listaDeTarefas.removerTarefaPorNome(nome);
    }
}
