import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class ManipulacaoArquivo {

    public ManipulacaoArquivo(){
    }

    public ArrayList<Tarefa> carregarArquivo() {
        ArrayList<Tarefa> listaTarefa = new ArrayList<>();
        try (BufferedReader buffRead = new BufferedReader(new FileReader("src/arqs/tarefas_20.csv"))) {
            String linha;
            while ((linha = buffRead.readLine()) != null) {
                String[] campos = linha.split(",");
                String nome = campos[0];
                String descricao = campos[1];
                String dataFinal = campos[2];
                int prioridade = Integer.parseInt(campos[3]);
                String categoria = campos[4];

                Tarefa tarefa = new Tarefa(nome, descricao, dataFinal, prioridade, categoria);

                listaTarefa.add(tarefa);
            }


        } catch (IOException e) {
            System.out.println("Não foi possível ler o arquivo " + e.getMessage());
        }
        return listaTarefa;
    }
    
}
