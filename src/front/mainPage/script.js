
document.getElementById("button-right").onclick = function(){ 

    let nomePessoa = document.getElementById("input-right").value;
    let inputNomePessa = document.getElementById("input-right");

    if(nomePessoa == ""){
        let erro = document.getElementById("erro-right");

        if(!erro){
            let erro = document.createElement("p");
            erro.id = "erro-right";
            erro.innerHTML = "Digite seu nome!";
            erro.className = "text-red-500 font-size-16 padding-top-2";
            
            inputNomePessa.style.border = "1px solid red";
            document.getElementById("right-section").appendChild(erro);
        }
    }else{
        caregarBoasVindas(nomePessoa);
        window.localStorage.setItem("nomePessoa", nomePessoa);
    }
}

function caregarBoasVindas(nomePessoa){
    const rightSection = document.getElementById("right-section");

    let titulo = document.getElementById("titulo-right");

    let paragrafo = document.getElementById("paragrafo-right");

    let botao = document.getElementById("button-right");
    
    let input = document.getElementById("input-right");

        titulo.innerHTML = "Seja bem vindo " + nomePessoa;
    
        paragrafo.innerHTML = "Aqui você pode organizar suas tarefas de forma simples e eficiente!";

        botao.style.display = "none";    

        input.style.display = "none";

        let botaoSair = document.createElement("button");
        botaoSair.id = "button-sair";
        botaoSair.innerHTML = "Sair";
        botaoSair.style.backgroundColor = "red";
        botaoSair.style.color = "white";
        botaoSair.style.border = "none";
        botaoSair.style.padding = "10px 20px";
        botaoSair.style.marginTop = "10px";
        botaoSair.style.cursor = "pointer";
        botaoSair.style.borderRadius = "5px";
        botaoSair.style.fontSize = "16px";
        botaoSair.style.fontWeight = "bold";
        
        let botaoIrtasks = document.createElement("button");
        botaoIrtasks.id = "button-ir-tasks";
        botaoIrtasks.innerHTML = "Ir para as tarefas";
        botaoIrtasks.style.backgroundColor = "green";
        botaoIrtasks.style.color = "white";
        botaoIrtasks.style.border = "none";
        botaoIrtasks.style.padding = "10px 20px";
        botaoIrtasks.style.marginTop = "10px";
        botaoIrtasks.style.cursor = "pointer";
        botaoIrtasks.style.borderRadius = "5px";
        botaoIrtasks.style.fontSize = "16px";
        botaoIrtasks.style.fontWeight = "bold";
        botaoIrtasks.style.marginLeft = "10px";

        rightSection.appendChild(botaoSair);
        rightSection.appendChild(botaoIrtasks);

        botaoSair.onclick = function(){
            
        titulo.innerHTML = "Bem vindo";
        paragrafo.innerHTML = "Estamos muito felizes em ter você aqui!Prepare-se para uma experiência incrível de organização e produtividade. Com a nossa <b>To-Do List</b>, você terá uma ferramenta simples e poderosa para gerenciar suas tarefas, definir prioridades e acompanhar seu progresso de forma prática e eficiente.";
        
        botaoIrtasks.style.display = "none";
        botaoSair.style.display = "none";
        input.style.display = "inline-block";
        botao.style.display = "inline-block";
        
        window.localStorage.removeItem("nomePessoa");
        window.localStorage.removeItem("todoList");

    }
}


document.getElementById("button-task").onclick = function () {

    let nomeTask = document.getElementById("nameTask").value;
    let descriptionTask = document.getElementById("descriptionTask").value;
    let dataValue = document.getElementById("dataTask").value;
    let finalHourTask = document.getElementById("finalHourTask").value;

    let priorityTask = document.getElementsByName("priority");
    let priorityPressed = [...priorityTask].find(p => p.checked)?.value || "";

    let categoryTask = document.getElementById("categoryTask").value;

    let statusTask = document.getElementsByName("status");
    let statusPressed = [...statusTask].find(s => s.checked)?.value || "";

    if (!nomeTask || !descriptionTask || !dataValue || !finalHourTask || !priorityPressed || !categoryTask || !statusPressed) {
        if (!document.getElementById("erro-task")) {
            let erro = document.createElement("p");
            erro.id = "erro-task";
            erro.innerHTML = "Preencha todos os campos!";
            erro.className = "text-red-500 text-sm font-bold mt-2";
            document.getElementById("form-task").appendChild(erro);
        }
        return;
    }

    let listId = statusPressed === "To do" ? "todo-list" : statusPressed === "Doing" ? "doing-list" : "done-list";
    let taskList = document.getElementById(listId);

    let todo = document.createElement("div");
    todo.className = "card bg-stone-700 p-4 rounded-lg shadow-md mb-4";
    todo.draggable = "true";
    taskList.appendChild(todo);


    todo.innerHTML = `
        <h3 class="text-xl font-bold text-stone-100">${nomeTask}</h3>
        <p class="text-stone-400">${descriptionTask}</p>
        <p class="text-sm text-stone-400">Data: ${dataValue}</p>
        <p class="text-sm text-stone-400">Hora final: ${finalHourTask}</p>
        <p class="text-sm text-stone-400">Categoria: ${categoryTask}</p>
        <p class="text-sm font-bold ${priorityPressed === "Alta" ? "text-red-400" : priorityPressed === "Média" ? "text-yellow-400" : "text-green-400"}">Prioridade: ${priorityPressed}</p>
        <p class="text-sm font-bold ${statusPressed === "To do" ? "text-blue-400" : statusPressed === "Doing" ? "text-orange-400" : "text-green-500"}">Status: ${statusPressed}</p>
        <button class="button-excluir bg-red-500 text-white p-2 rounded-lg mt-2"><i class="fa-solid fa-trash"></i></button>
        <button class="button-editar bg-blue-500 text-white p-2 rounded-lg mt-2 ml-2"><i class="fa-solid fa-pen-to-square"></i></button>
    `;

    document.querySelectorAll(".button-excluir").forEach(button => {
        button.onclick = function () {
            button.parentElement.remove();
            salvarTarefas();
        };
    });

    document.querySelectorAll(".button-editar").forEach(button => {
        button.onclick = function () {
            abrirModalEdicao(button.parentElement);
        };
    });
    
    let erro = document.getElementById("erro-task");
    if (erro) erro.remove();

    alert("Task cadastrada com sucesso!");

    document.getElementById("nameTask").value = "";
    document.getElementById("descriptionTask").value = "";
    document.getElementById("dataTask").value = "";
    document.getElementById("finalHourTask").value = "";
    document.getElementById("categoryTask").value = "";
    document.getElementsByName("priority").forEach(radio => radio.checked = false);
    document.getElementsByName("status").forEach(radio => radio.checked = false);

    salvarTarefas();


};

function salvarTarefas() {
    localStorage.setItem("todoList", document.getElementById("todo-list").innerHTML);
    localStorage.setItem("doingList", document.getElementById("doing-list").innerHTML);
    localStorage.setItem("doneList", document.getElementById("done-list").innerHTML);
}

function carregarTaskStorage() {
    const nomePessoa = localStorage.getItem("nomePessoa");
    const todoList = document.getElementById("todo-list");
    const doingList = document.getElementById("doing-list");
    const doneList = document.getElementById("done-list");

    if (nomePessoa) {
        caregarBoasVindas(nomePessoa);
    }

    todoList.innerHTML = localStorage.getItem("todoList") || "";
    doingList.innerHTML = localStorage.getItem("doingList") || "";
    doneList.innerHTML = localStorage.getItem("doneList") || "";

    document.querySelectorAll(".button-excluir").forEach(button => {
        button.onclick = function () {
            button.parentElement.remove();
            salvarTarefas();
        };
    });

    document.querySelectorAll(".button-editar").forEach(button => {
        button.onclick = function () {
            abrirModalEdicao(button.parentElement);
        };
    });

    

}

function abrirModalEdicao(todo) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('opacity-100');
    modal.firstElementChild.classList.add('scale-100');

    const nomeTask = todo.querySelector("h3").innerText;
    const descriptionTask = todo.querySelectorAll("p")[0].innerText;
    const dataValue = todo.querySelectorAll("p")[1].innerText.replace("Data: ", "");
    const finalHourTask = todo.querySelectorAll("p")[2].innerText.replace("Hora final: ", "");
    const categoryTask = todo.querySelectorAll("p")[3].innerText.replace("Categoria: ", "");
    const priorityTask = todo.querySelectorAll("p")[4].innerText.replace("Prioridade: ", "");
    const statusTask = todo.querySelectorAll("p")[5].innerText.replace("Status: ", "");

    document.getElementById("modalEditNameTask").value = nomeTask;
    document.getElementById("modalEditDescriptionTask").value = descriptionTask;
    document.getElementById("modalEditDateTask").value = dataValue;
    document.getElementById("modalEditFinalHour").value = finalHourTask;
    document.getElementById("categoryEdit").value = categoryTask;

    [...document.getElementsByName("editPriority")].forEach(radio => {
        radio.checked = radio.value === priorityTask;
    });

    [...document.getElementsByName("editStatus")].forEach(radio => {
        radio.checked = radio.value === statusTask;
    });

    document.getElementById("saveTask").onclick = function () {
        const newPriority = [...document.getElementsByName("editPriority")].find(p => p.checked)?.value || "";
        const newStatus = [...document.getElementsByName("editStatus")].find(s => s.checked)?.value || "";

        todo.querySelector("h3").innerText = document.getElementById("modalEditNameTask").value;
        todo.querySelectorAll("p")[0].innerText = document.getElementById("modalEditDescriptionTask").value;
        todo.querySelectorAll("p")[1].innerText = `Data: ${document.getElementById("modalEditDateTask").value}`;
        todo.querySelectorAll("p")[2].innerText = `Hora final: ${document.getElementById("modalEditFinalHour").value}`;
        todo.querySelectorAll("p")[3].innerText = `Categoria: ${document.getElementById("categoryEdit").value}`;
        todo.querySelectorAll("p")[4].innerText = `Prioridade: ${newPriority}`;
        todo.querySelectorAll("p")[4].className = `text-sm font-bold ${
            newPriority === "Alta" ? "text-red-400" :
            newPriority === "Média" ? "text-yellow-400" :
            "text-green-400"
        }`;

        todo.querySelectorAll("p")[5].innerText = `Status: ${newStatus}`;
        todo.querySelectorAll("p")[5].className = `text-sm font-bold ${
            newStatus === "To do" ? "text-blue-400" :
            newStatus === "Doing" ? "text-orange-400" :
            "text-green-500"
        }`;

        const newListId = newStatus === "To do" ? "todo-list" : newStatus === "Doing" ? "doing-list" : "done-list";
        document.getElementById(newListId).appendChild(todo);

        salvarTarefas();
        alert("Task editada com sucesso!");
        modal.classList.add('hidden', 'opacity-0');
    };
    
}



window.onload = function () {
    carregarTaskStorage();
    if (localStorage.getItem('doingList') || localStorage.getItem('todoList') || localStorage.getItem('doneList')) {
        construirTabelaDeTarefas();
    }
};

function extrairDadosDeCartao() {
    const todoListHTML = window.localStorage.getItem('todoList') || '';
    const doingListHTML = window.localStorage.getItem('doingList') || '';
    const doneListHTML = window.localStorage.getItem('doneList') || '';

    const allTasksHTML = todoListHTML + doingListHTML + doneListHTML;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = allTasksHTML;

    const cartoes = tempDiv.querySelectorAll('.card');

    const tarefas = [];

    cartoes.forEach(cartao => {
        const nome = cartao.querySelector('h3').innerText;
        const descricao = cartao.querySelectorAll('p')[0].innerText;
        const data = cartao.querySelectorAll('p')[1].innerText.replace('Data: ', '');
        const horaFinal = cartao.querySelectorAll('p')[2].innerText.replace('Hora final: ', '');
        const categoria = cartao.querySelectorAll('p')[3].innerText.replace('Categoria: ', '');
        const prioridade = cartao.querySelectorAll('p')[4].innerText.replace('Prioridade: ', '');
        const status = cartao.querySelectorAll('p')[5].innerText.replace('Status: ', '');

        tarefas.push({
            nome: nome,
            descricao: descricao,
            data: data,
            horaFinal: horaFinal,
            categoria: categoria,
            prioridade: prioridade,  
            status: status
        });
    });

    return tarefas;
}

function construirTabelaDeTarefas() {
    const listaTarefas = extrairDadosDeCartao();
    const taskList = document.getElementById('task-list');

    taskList.innerHTML = listaTarefas.map((tarefa, index) => `
        <tr class="border-b">
            <td class="p-2">${tarefa.nome}</td>
            <td class="p-2">
                <select class="prioridade bg-stone-900 p-1 rounded" data-index="${index}">
                    <option value="Baixa" class="bg-stone-900" ${tarefa.prioridade === 'Baixa' ? 'selected' : ''}>Baixa</option>
                    <option value="Média" class="bg-stone-900" ${tarefa.prioridade === 'Média' ? 'selected' : ''}>Média</option>
                    <option value="Alta" class="bg-stone-900" ${tarefa.prioridade === 'Alta' ? 'selected' : ''}>Alta</option>
                </select>
            </td>
            <td class="p-2">
                <select class="status bg-stone-900 p-1 rounded" data-index="${index}">
                    <option value="To do" ${tarefa.status === 'To do' ? 'selected' : ''}>To do</option>
                    <option value="Doing" ${tarefa.status === 'Doing' ? 'selected' : ''}>Doing</option>
                    <option value="Done" ${tarefa.status === 'Done' ? 'selected' : ''}>Done</option>
                </select>
            </td>
        </tr>
    `).join('');

    document.querySelectorAll('.prioridade, .status').forEach(select => {
        select.addEventListener('change', function () {
            const index = this.getAttribute('data-index');
            const field = this.classList.contains('prioridade') ? 'prioridade' : 'status';
            
            listaTarefas[index][field] = this.value;
            atualizarTarefas(listaTarefas);
        });
    });
}

document.getElementById("variousTasksBtn").onclick = function () {
    const modal = document.getElementById("variousTasksModal");
    modal.classList.remove("hidden", "opacity-0");
    modal.classList.add("opacity-100");
    modal.firstElementChild.classList.add("scale-100");

    construirTabelaDeTarefas();
};

document.getElementById("variousTasksBtnClose").onclick = function () {
    const modal = document.getElementById("variousTasksModal");
    modal.classList.add("hidden", "opacity-0");
    modal.classList.remove("opacity-100");
    modal.firstElementChild.classList.remove("scale-100");
};
document.getElementById("variousTasksBtnSave").onclick = function () {
    const listaTarefas = extrairDadosDeCartao();
    atualizarTarefas(listaTarefas);

    const modal = document.getElementById("variousTasksModal");
    modal.classList.add("hidden", "opacity-0");
    modal.classList.remove("opacity-100");
    modal.firstElementChild.classList.remove("scale-100");

    window.location.reload();
}

function atualizarTarefas(listaTarefas) {
    const todoList = listaTarefas.filter(tarefa => tarefa.status === "To do");
    const doingList = listaTarefas.filter(tarefa => tarefa.status === "Doing");
    const doneList = listaTarefas.filter(tarefa => tarefa.status === "Done");

    localStorage.setItem("todoList", todoList.map(tarefa => criarHtmlTarefa(tarefa)).join(''));
    localStorage.setItem("doingList", doingList.map(tarefa => criarHtmlTarefa(tarefa)).join(''));
    localStorage.setItem("doneList", doneList.map(tarefa => criarHtmlTarefa(tarefa)).join(''));
}

function criarHtmlTarefa(tarefa) {
    return `
        <div class="card bg-stone-700 p-4 rounded-lg shadow-md mb-4" draggable="true">
            <h3 class="text-xl font-bold text-stone-100">${tarefa.nome}</h3>
            <p class="text-stone-400">${tarefa.descricao}</p>
            <p class="text-sm text-stone-400">Data: ${tarefa.data}</p>
            <p class="text-sm text-stone-400">Hora final: ${tarefa.horaFinal}</p>
            <p class="text-sm text-stone-400">Categoria: ${tarefa.categoria}</p>
            <p class="text-sm font-bold ${tarefa.prioridade === "Alta" ? "text-red-400" : tarefa.prioridade === "Média" ? "text-yellow-400" : "text-green-400"}">Prioridade: ${tarefa.prioridade}</p>
            <p class="text-sm font-bold ${tarefa.status === "To do" ? "text-blue-400" : tarefa.status === "Doing" ? "text-orange-400" : "text-green-500"}">Status: ${tarefa.status}</p>
            <button class="button-excluir bg-red-500 text-white p-2 rounded-lg mt-2"><i class="fa-solid fa-trash"></i></button>
            <button class="button-editar bg-blue-500 text-white p-2 rounded-lg mt-2 ml-2"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    `;
}
document.onload = function () {
construirTabelaDeTarefas();
};

