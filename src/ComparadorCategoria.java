import java.util.Comparator;

class ComparadorCategoria implements Comparator<Tarefa> {

    @Override
    public int compare(Tarefa tarefa1, Tarefa tarefa2) {
        return tarefa1.getCategoria().compareTo(tarefa2.getCategoria());
    }

}
