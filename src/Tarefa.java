import java.util.Date;

public class Tarefa {
    String nome;
    String descricao;
    String dataFinal;
    int prioridade;
    String categoria;
    String status;

    public Tarefa(String nome, String descricao, String dataFinal, int prioridade, String categoria, String status){
        this.nome = nome;
        this.descricao = descricao;
        this.dataFinal = dataFinal;
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
    }


    @Override
    public String toString() {
        return "Tarefa{" +
                "nome='" + nome + '\n' +
                ", descricao='" + descricao + '\n' +
                ", dataFinal='" + dataFinal + '\n' +
                ", prioridade=" + prioridade + '\n' +
                ", categoria='" + categoria + '\n' +
                ", status=" + status + '\n' +
                '}';
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
}
