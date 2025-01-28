import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Scanner;

import java.util.Collections;
import java.util.Objects;

public class ToDo {
    private ArrayList<Tarefa> listaTarefa;
    private ManipulacaoArquivo manipulacaoArquivo;
    Scanner scanner;

    public ToDo(ArrayList<Tarefa> listaTarefa) {
        this.listaTarefa = listaTarefa;
        manipulacaoArquivo = new ManipulacaoArquivo();
        this.scanner = new Scanner(System.in);
    }

    public ArrayList<Tarefa> adicionarTarefa(Tarefa tarefa) {
        listaTarefa.add(tarefa);
        System.out.println("Tarefa adiciona com sucesso");
        manipulacaoArquivo.salvarArquivos(listaTarefa);

        return listaTarefa;
    }

    public ArrayList<Tarefa> removerTarefaPorNome(String nome) {
        for (Tarefa tarefa1 : listaTarefa) {
            String nomeTarefa = tarefa1.getNome();
            if (Objects.equals(nomeTarefa, nome)) {
                listaTarefa.remove(tarefa1);
                System.out.println("Tarefa removida com sucesso!");
                break;
            }
        }
        manipulacaoArquivo.salvarArquivos(listaTarefa);
        return listaTarefa;
    }

    public void listarTodasTarefas() {
        for (Tarefa tarefa : listaTarefa) {
            System.out.println(tarefa);
        }
    }

    public void ordenarPorPrioridade() {
        Collections.sort(listaTarefa);
    }

    public void ordenarPorStatus() {
        Collections.sort(listaTarefa, new ComparadorStatus());
    }

    public void ordenarPorCategoria() {
        Collections.sort(listaTarefa, new ComparadorCategoria());
    }

    public void ordenarPorDataFinal() {
        Collections.sort(listaTarefa, new ComparadorData());
    }

    public void ordenarPorDataHora(){
        Collections.sort(listaTarefa, new ComparadorDataHora());
    }

    public void atualizarStatus(String nomeAtividade, String status) {
        boolean encontrada = false;
        for (Tarefa tarefa : listaTarefa) {
            if (tarefa.getNome().equals(nomeAtividade)) {
                tarefa.setStatus(status);
                System.out.println("Status atualizado com sucesso!");
                manipulacaoArquivo.salvarArquivos(listaTarefa);
                encontrada = true;
                break;
            }
        }
        if (!encontrada) {
            System.out.println("Tarefa não encontrada.");
        }
    }

    public void atualizarData(String nomeAtividade, String data) {
        boolean encontrada = false;
        for (Tarefa tarefa : listaTarefa) {
            if (tarefa.getNome().equals(nomeAtividade)) {
                tarefa.setDataFinal(data);
                System.out.println("Data atualizada com sucesso!");
                manipulacaoArquivo.salvarArquivos(listaTarefa);
                encontrada = true;
                break;
            }
        }
        if (!encontrada) {
            System.out.println("Tarefa não encontrada.");
        }
    }

    public void atualizarHorario(String nomeAtividade, String horario) {
        boolean encontrada = false;
        for (Tarefa tarefa : listaTarefa) {
            if (tarefa.getNome().equals(nomeAtividade)) {

                tarefa.setHorarioFinal(LocalTime.parse(horario));
                System.out.println("Horario atualizado com sucesso!");
                manipulacaoArquivo.salvarArquivos(listaTarefa);
                encontrada = true;
                break;
            }
        }
        if (!encontrada) {
            System.out.println("Tarefa não encontrada.");
        }
    }

    public void atualizarAlarme(String nome) {
        boolean encontrada = false;
        for (Tarefa tarefa : listaTarefa) {
            if (tarefa.getNome().equals(nome)) {
                System.out.println("Status atualizado com sucesso!");
                if (tarefa.getAlarmeAtivado()) {
                    tarefa.setAlarmeAtivado(false);
                } else {
                    tarefa.setAlarmeAtivado(true);
                    System.out.println("Digite o horário limite para realizar a atividade: [HH:MM] ");
                    String horario = scanner.nextLine();
                    tarefa.setHorarioFinal(LocalTime.parse(horario));
                    System.out.println("Alarme e horário atualizados com sucesso!");
                }
            }
            if (!encontrada) {
                System.out.println("Tarefa não encontrada.");
            }
        }
    }
    public void listarTarefasPorPrioridade() {
        for (Tarefa tarefa : listaTarefa) {
            System.out.println(tarefa.toStringPorPrioridade());
        }
    }

    public void listarTarefasPorStatus() {
        for (Tarefa tarefa : listaTarefa) {
            System.out.println(tarefa.toStringPorStatus());
        }
    }

    public void listarTarefasPorCategoria() {
        for (Tarefa tarefa : listaTarefa) {
            System.out.println(tarefa.toStringPorCategoria());
        }
    }

    public void listarTarefasPorDataFinal() {
        for (Tarefa tarefa : listaTarefa) {
            System.out.println(tarefa.toStringPorDataFinal());
        }
    }

    public void listarTarefasPorDataHorarioFinal() {
        for (Tarefa tarefa : listaTarefa) {
            System.out.println(tarefa.toStringPorDataHorarioFinal());
        }
    }

}