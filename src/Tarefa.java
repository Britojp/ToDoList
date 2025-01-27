import java.util.Date;

public class Tarefa {
    String nome;
    String descricao;
    String dataFinal;
    int prioridade;
    String categoria;

    public Tarefa(String nome, String descricao, String dataFinal, int prioridade, String categoria){
        this.nome = nome;
        this.descricao = descricao;
        this.dataFinal = dataFinal;
        this.prioridade = prioridade;
        this.categoria = categoria;
    }

    public String getDataFinal() {
        return dataFinal;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getCategoria() {
        return categoria;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "Tarefa{" +
                "nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", dataFinal='" + dataFinal + '\'' +
                ", prioridade=" + prioridade +
                ", categoria='" + categoria + '\'' +
                '}';
    }
}
