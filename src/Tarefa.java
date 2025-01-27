
public class Tarefa implements Comparable<Tarefa>{
    private String nome;
    private String descricao;
    private String dataFinal;
    private int prioridade;
    private String categoria;
    private String status;

    public Tarefa(String nome, String descricao, String dataFinal, int prioridade, String categoria, String status){
        this.nome = nome;
        this.descricao = descricao;
        this.dataFinal = dataFinal;
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

    public int compareTo(Tarefa outraTarefa) {
        return Integer.compare(this.prioridade, outraTarefa.prioridade);
    }

    @Override
    public String toString() {
        return "Tarefa{" +
                "nome='" + nome + '\'' +
                ", descricao= " + descricao + '\'' +
                ", dataFinal= " + dataFinal + '\'' +
                ", prioridade= " + prioridade +
                ", categoria= " + categoria + '\'' +
                ", status= " + status + '\'' +
                '}';
    }

}
