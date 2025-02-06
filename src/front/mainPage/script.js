let objetoPessoaTask = {
    nome: "João",
    tasks: [{
        nome: "Tarefa 1",
        description: "Descrição da tarefa 1",
        data: "01/01/2021",
        finalHour: "12:00",
        priority: "Alta",
        category: "Estudos"
    },
   {
        nome: "Tarefa 2",
        description: "Descrição da tarefa 2",
        data: "01/01/2021",
        finalHour: "12:00",
        priority: "Alta",
        category: "Estudos"
    },
    {
        nome: "Tarefa 3",
        description: "Descrição da tarefa 3",
        data: "01/01/2021",
        finalHour: "12:00",
        priority: "Alta",
        category: "Estudos"
    }]

}


document.getElementById("button-right").onclick = function() {

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
        window.localStorage.setItem("nomePessoa", nomePessoa);
        console.log(nomePessoa);
        caregarBoasVindas(nomePessoa);
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
            
        titulo.innerHTML = "Teste";
        paragrafo.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et aut consectetur totam quia eveniet eos alias magni eaque debitis distinctio necessitatibus facilis odio temporibus quasi assumenda, sequi dolorem id!";
        
        botaoIrtasks.style.display = "none";
        botaoSair.style.display = "none";
        input.style.display = "inline-block";
        botao.style.display = "inline-block";  
    }
}





document.getElementById("button-task").onclick = function () {
    let nomeTask = document.getElementById("nameTask").value;
    let descriptionTask = document.getElementById("descriptionTask").value;
    let dataValue = document.getElementById("dataTask").value;
    let finalHourTask = document.getElementById("finalHourTask").value;

    let priorityTask = document.getElementsByName("priority");
    let priorityPressed = "";
    for (let i = 0; i < priorityTask.length; i++) {
        if (priorityTask[i].checked) {
            priorityPressed = priorityTask[i].value;
            break;
        }
    }

    let categoryTask = document.getElementById("categoryTask").value;

    let statusTask = document.getElementsByName("status");
    let statusPressed = "";
    for (let i = 0; i < statusTask.length; i++) {
        if (statusTask[i].checked) {
            statusPressed = statusTask[i].value;
            break;
        }
    }

    if (nomeTask === "" || descriptionTask === "" || dataValue === "" || finalHourTask === "" || priorityPressed === "" || categoryTask === "" || statusPressed === "") {
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
    todo.className = "bg-stone-700 p-4 rounded-lg shadow-md mb-4";
    taskList.appendChild(todo);

    let task = document.createElement("h3");
    task.innerHTML = nomeTask;
    task.className = "text-xl font-bold text-stone-100";
    todo.appendChild(task);

    let description = document.createElement("p");
    description.innerHTML = descriptionTask;
    description.className = "text-stone-400";
    todo.appendChild(description);

    let data = document.createElement("p");
    data.innerHTML = `Data: ${dataValue}`;
    data.className = "text-sm text-stone-400";
    todo.appendChild(data);

    let finalHour = document.createElement("p");
    finalHour.innerHTML = `Hora final: ${finalHourTask}`;
    finalHour.className = "text-sm text-stone-400";
    todo.appendChild(finalHour);


    let category = document.createElement("p");
    category.innerHTML = `Categoria: ${categoryTask}`;
    category.className = "text-sm text-stone-400";
    todo.appendChild(category);


    let priority = document.createElement("p");
    priority.innerHTML = `Prioridade: ${priorityPressed}`;

    priority.className = `text-sm font-bold ${
        priorityPressed === "Alta" ? "text-red-400" :
        priorityPressed === "Média" ? "text-yellow-400" :
        "text-green-400"
    }`;
    todo.appendChild(priority);

    let status = document.createElement("p");
    status.innerHTML = `Status: ${statusPressed}`;
    status.className = `text-sm font-bold ${
        statusPressed === "To do" ? "text-blue-400" :
        statusPressed === "Doing" ? "text-orange-400" :
        "text-green-500"
    }`;
    todo.appendChild(status);

    alert("Task cadastrada com sucesso!");

    let buttonExcluir = document.createElement("button"); 
    buttonExcluir.innerHTML = "Excluir";
    buttonExcluir.className = "bg-red-500 text-white p-2 rounded-lg mt-2";
    todo.appendChild(buttonExcluir);

    buttonExcluir.onclick = function(){
       todo.remove();
    }

    let buttonEditar = document.createElement("button");
    buttonEditar.innerHTML = "Editar";
    buttonEditar.className = "bg-blue-500 text-white p-2 rounded-lg mt-2 ml-2";
    buttonEditar.id = "button-editar";  
    todo.appendChild(buttonEditar);

    buttonEditar.onclick = function(){
        const openModal = document.getElementById('button-editar');
        const closeModal = document.getElementById('closeModal');
        const modal = document.getElementById('modal');
        
        openModal.onclick = () => {
            modal.classList.remove('hidden');
                modal.classList.add('opacity-100');
                modal.firstElementChild.classList.add('scale-100');
                
                document.getElementById("modalEditNameTask").value = nomeTask;
                document.getElementById("modalEditDescriptionTask").value = descriptionTask;
                document.getElementById("modalEditDateTask").value = dataValue;
                document.getElementById("modalEditFinalHour").value = finalHourTask;
                
                let priorityTask = document.getElementsByName("editPriority");
                for (let i = 0; i < priorityTask.length; i++) {
                    if (priorityTask[i].value === priorityPressed) {
                        priorityTask[i].checked = true;
                        break;
                    }
                }

                let statusTask = document.getElementsByName("editStatus");
                for (let i = 0; i < statusTask.length; i++) {
                    if (statusTask[i].value === statusPressed) {
                        statusTask[i].checked = true;
                        break;
                    }
                }
                

                document.getElementById("categoryEdit").value = categoryTask;
                

        };
        
    
        closeModal.onclick = () => {
            modal.classList.remove('opacity-100');
            modal.firstElementChild.classList.remove('scale-100');
            modal.classList.add('hidden')
        }
        
        
        let buttonSalvar = document.getElementById("saveTask");
        buttonSalvar.onclick = () =>{
            let nomeTask = document.getElementById("modalEditNameTask").value;
            let descriptionTask = document.getElementById("modalEditDescriptionTask").value;
            let dataValue = document.getElementById("modalEditDateTask").value;
            

            let finalHourTask = document.getElementById("modalEditFinalHour").value;
        
            let priorityTask = document.getElementsByName("editPriority");
            let priorityPressed = "";
            for (let i = 0; i < priorityTask.length; i++) {
                if (priorityTask[i].checked) {
                    priorityPressed = priorityTask[i].value;
                    break;
                }
            }
        
            let categoryTask = document.getElementById("categoryEdit").value;
        
            let statusTask = document.getElementsByName("editStatus");
            let statusPressed = "";
            for (let i = 0; i < statusTask.length; i++) {
                if (statusTask[i].checked) {
                    statusPressed = statusTask[i].value;
                    break;
                }
            }
        
            if (nomeTask === "" || descriptionTask === "" || dataValue === "" || finalHourTask === "" || priorityPressed === "" || categoryTask === "" || statusPressed === "") {
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
            todo.className = "bg-stone-700 p-4 rounded-lg shadow-md mb-4";
            taskList.appendChild(todo);
        
            let task = document.createElement("h3");
            task.innerHTML = nomeTask;
            task.className = "text-xl font-bold text-stone-100";
            todo.appendChild(task);
        
            let description = document.createElement("p");
            description.innerHTML = descriptionTask;
            description.className = "text-stone-400";
            todo.appendChild(description);
        
            let data = document.createElement("p");
            data.innerHTML = `Data: ${dataValue}`;
            data.className = "text-sm text-stone-400";
            todo.appendChild(data);

            let finalHour = document.createElement("p");
            finalHour.innerHTML = `Hora final: ${finalHourTask}`;
            finalHour.className = "text-sm text-stone-400";
            todo.appendChild(finalHour);

            category = document.createElement("p");
            category.innerHTML = `Categoria: ${categoryTask}`;
            category.className = "text-sm text-stone-400";
            todo.appendChild(category);

            let priority = document.createElement("p");
            priority.innerHTML = `Prioridade: ${priorityPressed}`;
            priority.className = `text-sm font-bold ${
                priorityPressed === "Alta" ? "text-red-400" :
                priorityPressed === "Média" ? "text-yellow-400" :
                "text-green-400"
            }`;

            todo.appendChild(priority);
           
    
            
            status = document.createElement("p");
            status.innerHTML = `Status: ${statusPressed}`;
            status.className = `text-sm font-bold ${
                statusPressed === "To do" ? "text-blue-400" :
                statusPressed === "Doing" ? "text-orange-400" :
                "text-green-500"
            }`;
            todo.appendChild(status);
            
            alert("Task editada com sucesso!");
            let buttonExcluir = document.createElement("button"); 
            buttonExcluir.innerHTML = "Excluir";
            buttonExcluir.className = "bg-red-500 text-white p-2 rounded-lg mt-2";
            todo.appendChild(buttonExcluir);
        
            buttonExcluir.onclick = function(){
               todo.remove();
            }
        
            let buttonEditar = document.createElement("button");
            buttonEditar.innerHTML = "Editar";
            buttonEditar.className = "bg-blue-500 text-white p-2 rounded-lg mt-2 ml-2";
            buttonEditar.id = "button-editar";  
            todo.appendChild(buttonEditar);
        }

    }

        



    let erro = document.getElementById("erro-task");
    if (erro) {
        erro.remove();
    }
};



