import java.util.ArrayList;

public class ToDo {
    ArrayList<Tarefa> listaTarefa = new ArrayList<Tarefa>();

    public ToDo(ArrayList<Tarefa> listaTarefa){
        this.listaTarefa = listaTarefa;
    }

    public ArrayList<Tarefa> getListaTarefa() {
        return listaTarefa;
    }
}
