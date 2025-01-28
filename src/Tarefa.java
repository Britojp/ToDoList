import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Tarefa implements Comparable<Tarefa>{
    private String nome;
    private String descricao;
    private String dataFinal;
    private int prioridade;
    private String categoria;
    private String status;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private boolean alarmeAtivado;
    private LocalTime horarioFinal;

    public Tarefa(String nome, String descricao, String dataFinal, int prioridade, String categoria, String status, boolean alarmeAtivado, LocalTime horarioFinal){
        this.nome = nome;
        this.descricao = descricao;
        this.dataFinal = String.valueOf(LocalDate.parse(dataFinal, formatter));
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
        this.alarmeAtivado = alarmeAtivado;
        this.horarioFinal = horarioFinal;
        }

    public Tarefa(String nome, String descricao, String dataFinal, int prioridade, String categoria, String status, boolean alarmeAtivado){
        this.nome = nome;
        this.descricao = descricao;
        this.dataFinal = String.valueOf(LocalDate.parse(dataFinal, formatter));
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
        this.alarmeAtivado = alarmeAtivado;
        this.horarioFinal = null;
    }

    public void setHorarioFinal(LocalTime horarioFinal) {
        this.horarioFinal = horarioFinal;
    }

    public void setAlarmeAtivado(boolean alarmeAtivado) {
        this.alarmeAtivado = alarmeAtivado;
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
        return "Tarefa: " + nome + ", Data Final: " + dataFinal + ", Horário final: " + horarioFinal + ", Prioridade: " + prioridade + ", Alarme ativado: " + alarmeAtivado;
    }

    public String toStringPorPrioridade() {
        return "Tarefa: " + nome + ", Prioridade: " + prioridade + ", Alarme ativado: " + alarmeAtivado;
    }

    public String toStringPorStatus() {
        return "Tarefa: " + nome + ", Status: " + status + ", Alarme ativado: " + alarmeAtivado;
    }

    public String toStringPorCategoria() {
        return "Tarefa: " + nome + ", Categoria: " + categoria + ", Alarme ativado: " + alarmeAtivado;
    }

    public String toStringPorDataFinal() {
        if(!alarmeAtivado) {
            return "Tarefa: " + nome + ", Data Final: " + dataFinal + ", Alarme ativado: " + alarmeAtivado;
        }else{
            return "Tarefa: " + nome + ", Data Final: " + dataFinal + ", Horário final: " + horarioFinal + ", Alarme ativado: " + alarmeAtivado;

        }
        }

    public LocalTime getHorarioFinal() {
        return horarioFinal;
    }

    public boolean isAlarmeAtivado() {
        return alarmeAtivado;
    }

}
