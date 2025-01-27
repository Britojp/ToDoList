import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Tarefa implements Comparable<Tarefa>{
    private String nome;
    private String descricao;
    private String dataFinal;
    private int prioridade;
    private String categoria;
    private String status;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public Tarefa(String nome, String descricao, String dataFinal, int prioridade, String categoria, String status){
        this.nome = nome;
        this.descricao = descricao;
        this.dataFinal = String.valueOf(LocalDate.parse(dataFinal, formatter));
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
    }


    public String getCategoria() {
        return categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public String getNome() {
        return nome;
    }

    public String getDataFinal() {
        return dataFinal;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDataFinal(String dataFinal) {
        this.dataFinal = dataFinal;
    }

    public int compareTo(Tarefa outraTarefa) {
        return Integer.compare(this.prioridade, outraTarefa.prioridade);
    }

    @Override
    public String toString() {
        return "Tarefa: " + nome + ", Data Final: " + dataFinal + ", Prioridade: " + prioridade;
    }

    public String toStringPorPrioridade() {
        return "Tarefa: " + nome + ", Prioridade: " + prioridade;
    }

    public String toStringPorStatus() {
        return "Tarefa: " + nome + ", Status: " + status;
    }

    public String toStringPorCategoria() {
        return "Tarefa: " + nome + ", Categoria: " + categoria;
    }

    public String toStringPorDataFinal() {
        return "Tarefa: " + nome + ", Data Final: " + dataFinal;
    }

}
