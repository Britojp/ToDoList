import java.util.ArrayList;


public class Main {
    public static void main(String[] args) {

        ManipulacaoArquivo manipulacaoArquivo = new ManipulacaoArquivo();
        ArrayList<Tarefa> listaTarefas = manipulacaoArquivo.carregarArquivo();
        System.out.println(listaTarefas);


    }
}