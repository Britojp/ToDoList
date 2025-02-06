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
            
        titulo.innerHTML = "Bem vindo";
        paragrafo.innerHTML = "Estamos muito felizes em ter você aqui!Prepare-se para uma experiência incrível de organização e produtividade. Com a nossa To-Do List, você terá uma ferramenta simples e poderosa para gerenciar suas tarefas, definir prioridades e acompanhar seu progresso de forma prática e eficiente.";
        
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
    todo.className = "bg-stone-700 p-4 rounded-lg shadow-md mb-4";
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
        <button class="button-excluir bg-red-500 text-white p-2 rounded-lg mt-2">Excluir</button>
        <button class="button-editar bg-blue-500 text-white p-2 rounded-lg mt-2 ml-2">Editar</button>
    `;

    todo.querySelector(".button-excluir").onclick = function () {
        todo.remove();
    };

    todo.querySelector(".button-editar").onclick = function () {
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden', 'opacity-0');
        modal.classList.add('opacity-100');
        modal.firstElementChild.classList.add('scale-100');

        document.getElementById("modalEditNameTask").value = nomeTask;
        document.getElementById("modalEditDescriptionTask").value = descriptionTask;
        document.getElementById("modalEditDateTask").value = dataValue;
        document.getElementById("modalEditFinalHour").value = finalHourTask;
        document.getElementById("categoryEdit").value = categoryTask;

        [...document.getElementsByName("editPriority")].forEach(radio => {
            radio.checked = radio.value === priorityPressed;
        });

        [...document.getElementsByName("editStatus")].forEach(radio => {
            radio.checked = radio.value === statusPressed;
        });

        document.getElementById("saveTask").onclick = function () {
            nomeTask = document.getElementById("modalEditNameTask").value;
            descriptionTask = document.getElementById("modalEditDescriptionTask").value;
            dataValue = document.getElementById("modalEditDateTask").value;
            finalHourTask = document.getElementById("modalEditFinalHour").value;
            categoryTask = document.getElementById("categoryEdit").value;
            priorityPressed = [...document.getElementsByName("editPriority")].find(p => p.checked)?.value || "";
            statusPressed = [...document.getElementsByName("editStatus")].find(s => s.checked)?.value || "";

            todo.querySelector("h3").innerText = nomeTask;
            todo.querySelectorAll("p")[0].innerText = descriptionTask;
            todo.querySelectorAll("p")[1].innerText = `Data: ${dataValue}`;
            todo.querySelectorAll("p")[2].innerText = `Hora final: ${finalHourTask}`;
            todo.querySelectorAll("p")[3].innerText = `Categoria: ${categoryTask}`;
            todo.querySelectorAll("p")[4].innerText = `Prioridade: ${priorityPressed}`;
            todo.querySelectorAll("p")[4].className = `text-sm font-bold ${
                priorityPressed === "Alta" ? "text-red-400" :
                priorityPressed === "Média" ? "text-yellow-400" :
                "text-green-400"
            }`;
            todo.querySelectorAll("p")[5].innerText = `Status: ${statusPressed}`;
            todo.querySelectorAll("p")[5].className = `text-sm font-bold ${
                statusPressed === "To do" ? "text-blue-400" :
                statusPressed === "Doing" ? "text-orange-400" :
                "text-green-500"
            }`;

            let listId = statusPressed === "To do" ? "todo-list" : statusPressed === "Doing" ? "doing-list" : "done-list";
            let taskList = document.getElementById(listId);
            
            taskList.appendChild(todo);

            alert("Task editada com sucesso!");
            modal.classList.add('hidden', 'opacity-0');
        };

        document.getElementById("closeModal").onclick = function () {
            modal.classList.add('hidden', 'opacity-0');
        };

    };

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
    
};