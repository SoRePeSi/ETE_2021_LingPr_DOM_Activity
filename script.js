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
        novoLi.appendChild(checkBox());

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

function deleteLi(event) {
    var botClick = event.target;
    var delLi = botClick.parentElement;
    delLi.remove();
}

function checkBox() {
    var box = document.createElement("input");
    box.className = "caixa";
    box.setAttribute("type", "checkbox");
    box.addEventListener("click", marcarBox);

    return box;
}

function marcarBox(event) {
    var checked = event.target;
    var checkedTask = checked.parentElement;
    checkedTask.toggle("done");
}