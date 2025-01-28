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
            System.out.println("7. Ordernar por data final");
            System.out.println("8. Mudar o status da tarefa");
            System.out.println("9. Atualizar data da tarefa");
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
                    listaDeTarefas.listarTarefasPorPrioridade();
                    break;
                case 5:
                    listaDeTarefas.ordenarPorStatus();
                    listaDeTarefas.listarTarefasPorStatus();
                    break;
                case 6:
                    listaDeTarefas.ordenarPorCategoria();
                    listaDeTarefas.listarTarefasPorCategoria();
                    break;
                case 7:
                    listaDeTarefas.ordenarPorDataFinal();
                    listaDeTarefas.listarTarefasPorDataFinal();
                    break;
                case 8:
                    System.out.println("Digite o nome da atividade que deseja mudar o status: ");
                    String nomeAtividade = scanner.nextLine();
                    System.out.println("Digite o status da atividade: ");
                    String status = scanner.nextLine();
                    listaDeTarefas.atualizarStatus(nomeAtividade, status);
                    break;
                case 9:
                    System.out.println("Digite o nome da atividade que deseja mudar a data final (YYYY-MM-DD):: ");
                    String nome = scanner.nextLine();
                    System.out.println("Digite o status da atividade: ");
                    String dataFinal = scanner.nextLine();
                    listaDeTarefas.atualizarData(nome, dataFinal);
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
        try {
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
        } catch (NumberFormatException e){
            System.out.println("Prioridade deve ser um número inteiro entre 1 e 5");
        }catch (Exception e) {
        System.out.println("Erro ao adicionar tarefa " + e.getMessage());
    }
    }

    private void removerTarefa() {
        try {
            System.out.print("Digite o nome da tarefa que deseja remover: ");
            String nome = scanner.nextLine();
            listaDeTarefas.removerTarefaPorNome(nome);
        } catch (Exception e) {
            System.out.println("Erro ao remover tarefa " + e.getMessage());
        }
    }
}
