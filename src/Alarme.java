import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class Alarme {
    private static final DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public static void  verificarAlarmes(ArrayList<Tarefa> listaTarefas){
        LocalDateTime horarioAtual = LocalDateTime.now();

        for (Tarefa tarefa : listaTarefas) {
            if (tarefa.isAlarmeAtivado()) {
                LocalDate dataFinal = LocalDate.parse(tarefa.getDataFinal(), dateFormatter);

                if (tarefa.getHorarioFinal() != null) {
                    LocalTime horarioFinal = tarefa.getHorarioFinal();
                    LocalDateTime dataHoraFinal = LocalDateTime.of(dataFinal, horarioFinal);
                    LocalDateTime dataHoraAlarme = dataHoraFinal.minusHours(2);

                    if (horarioAtual.isEqual(dataHoraAlarme) || horarioAtual.isAfter(dataHoraAlarme)) {
                        dispararAlarme(tarefa);
                    }
                } else {
                    if (horarioAtual.toLocalDate().isEqual(dataFinal)) {
                        dispararAlarme(tarefa);
                    }
                }
            }
        }
    }
    private static void dispararAlarme(Tarefa tarefa) {
        System.out.println("Alarme! A tarefa '" + tarefa.getNome() + "' está programada para ser entregue em 2 horas");
    }
}