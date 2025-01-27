import java.util.ArrayList;


public class Main {
    public static void main(String[] args) {

        ManipulacaoArquivo manipulacaoArquivo = new ManipulacaoArquivo();
        ArrayList<Tarefa> listaTarefas = manipulacaoArquivo.carregarArquivo();

        ToDo todo = new ToDo(listaTarefas);

        Menu menu = new Menu(todo);
        menu.exibirMenu();


    }
}