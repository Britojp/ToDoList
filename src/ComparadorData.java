import java.util.Comparator;

public class ComparadorData implements Comparator<Tarefa> {

    @Override
    public int compare(Tarefa tarefa1, Tarefa tarefa2) {
        return tarefa1.getDataFinal().compareTo(tarefa2.getDataFinal());
    }
}
