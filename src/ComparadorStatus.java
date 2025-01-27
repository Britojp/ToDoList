import java.util.Comparator;


class ComparadorStatus implements Comparator<Tarefa> {

    @Override
    public int compare(Tarefa tarefa1, Tarefa tarefa2) {
        return Integer.compare(obterOrdemStatus(tarefa1.getStatus()), obterOrdemStatus(tarefa2.getStatus()));
    }

    private int obterOrdemStatus(String status) {
        switch (status) {
            case "todo":
                return 1;
            case "doing":
                return 2;
            case "done":
                return 3;
            default:
                return 4;
        }
    }
}
