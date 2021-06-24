function aaa() {
    document.querySelector("ul").style = "background-color:blue";

}

function clique(event) {
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
    botDel.style = "position: absolute; right: 5%;";
    botDel.innerHTML = "X";
    botDel.className = "close";
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
    box.className = "form-check-input";
    box.setAttribute("type", "checkbox");
    box.addEventListener("click", marcarBox);

    return box;
}

function marcarBox(event) {
    var checked = event.target;
    var checkedTask = checked.parentElement;
    checkedTask.toggle("done");
}