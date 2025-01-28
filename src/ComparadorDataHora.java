import java.util.Comparator;

public class ComparadorDataHora implements Comparator<Tarefa> {

    @Override
    public int compare(Tarefa tarefa1, Tarefa tarefa2) {
        int resultadoComparacaoData = tarefa1.getDataFinal().compareTo(tarefa2.getDataFinal());

        if (resultadoComparacaoData != 0) { // diferentes
            return resultadoComparacaoData;
        }
        if (tarefa1.getHorarioFinal() != null && tarefa2.getHorarioFinal() != null) {
            return tarefa1.getHorarioFinal().compareTo(tarefa2.getHorarioFinal());
        }
        else if (tarefa1.getHorarioFinal() != null) {
            return -1;
        } else if (tarefa2.getHorarioFinal() != null) {
            return 1;
        }

        return 0;
    }
}
