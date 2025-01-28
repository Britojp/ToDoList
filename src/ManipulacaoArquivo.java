import java.io.*;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;


public class ManipulacaoArquivo {

    private static final DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");

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
                String status = campos[5];
                boolean alarmeAtivado = Boolean.parseBoolean(campos[6]);

                Tarefa tarefa;

                if (alarmeAtivado) {
                    LocalTime horaFinal = LocalTime.parse(campos[7], timeFormatter);
                    tarefa = new Tarefa(nome, descricao, dataFinal, prioridade, categoria, status, alarmeAtivado, horaFinal);
                } else {
                    tarefa = new Tarefa(nome, descricao, dataFinal, prioridade, categoria, status, alarmeAtivado);
                }

                listaTarefa.add(tarefa);
            }


        } catch (IOException e) {
            System.out.println("Não foi possível ler o arquivo " + e.getMessage());
        }
        return listaTarefa;
    }

    public void salvarArquivos(ArrayList<Tarefa> listaTarefa) {
        try (BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("src/arqs/tarefas_20.csv"))) {
            for (Tarefa tarefa : listaTarefa) {
                String nome = tarefa.getNome();
                String descricao = tarefa.getDescricao();
                String data = tarefa.getDataFinal();
                int prioridade = tarefa.getPrioridade();
                String categoria = tarefa.getCategoria();
                String status = tarefa.getStatus();
                boolean alarmeAtivado = tarefa.isAlarmeAtivado();

                if (alarmeAtivado && tarefa.getHorarioFinal() != null) {
                    bufferedWriter.write(String.format("%s,%s,%s,%d,%s,%s,%b,%s%n",
                            nome, descricao, data, prioridade, categoria, status, alarmeAtivado,
                            tarefa.getHorarioFinal().format(timeFormatter)));
                } else {
                    bufferedWriter.write(String.format("%s,%s,%s,%d,%s,%s,%b%n",
                            nome, descricao, data, prioridade, categoria, status, alarmeAtivado));
                }
            }
        } catch (IOException e) {
            System.out.println("Erro ao salvar o arquivo de tarefas: " + e.getMessage());
        }
    }
}