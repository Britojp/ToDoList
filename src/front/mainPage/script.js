document.getElementById("button-right").onclick = function() {

    let nomePessoa = document.getElementById("input-right").value;
    let inputNomePessa = document.getElementById("input-right");

    if(nomePessoa == ""){
        let erro = document.getElementById("erro-right");

        if(!erro){
            let erro = document.createElement("p");
            erro.id = "erro-right";
            erro.innerHTML = "Digite seu nome!";
            erro.style.color = "red";
            erro.style.fontSize = "16px";
            erro.style.paddingTop = "2px";
            
            inputNomePessa.style.border = "1px solid red";
            document.getElementById("right-section").appendChild(erro);
        }else{
            window.localStorage.setItem("nomePessoa", nomePessoa);
        }
    }
}