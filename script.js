function clique(event) {
    // bott = document.getElementsByClassName("dd btn btn-primary font-weight-bold todo-list-add-btn");
    event.preventDefault();

    var texto = document.querySelector("input");
    var lista = document.querySelector("ul");
    
    if (texto.value != "") {
        var novoLabel = document.createElement("label");
        novoLabel.innerHTML = "- " + texto.value;
        
        var novoLi = document.createElement("li");
        novoLi.appendChild(novoLabel);
        novoLi.appendChild(botaoDelete());

        lista.appendChild(novoLi);
        //document.getElementById("but").innerHTML = lista.length;

        texto.value = "";
    }
}

function botaoDelete() {
    const botDel = document.createElement("span");
    botDel.innerHTML = "X";
    botDel.className = "but";
    botDel.addEventListener("click", deleteLi);
    return botDel;
}

function deleteLi(target) {
    var botClick = event.target;
    var delLi = botClick.parentElement;
    lista.removeChild(delLi);
}