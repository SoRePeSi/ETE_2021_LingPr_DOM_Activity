function aaa() {
    var itensOriginais = document.querySelectorAll("li");
    for (var i = 0; i < itensOriginais.length; i++) {
        itensOriginais[i].style = "padding-left: 3%";
        itensOriginais[i].appendChild(botaoDelete());
        itensOriginais[i].appendChild(checkBox());
    }
}

function clique(event) {
    event.preventDefault();

    var texto = document.querySelector("input");
    var lista = document.querySelector("ul");
    
    if (texto.value != "") {
        var novoLabel = document.createElement("label");
        novoLabel.innerHTML = "- " + texto.value;
        novoLabel.className = "form-check-label";
        
        var novoLi = document.createElement("li");
        novoLi.appendChild(novoLabel);
        novoLi.appendChild(botaoDelete());
        novoLi.appendChild(checkBox());
        novoLi.style = "padding-left: 3%";


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
    box.value = 0;
    box.addEventListener("click", marcarBox);

    return box;
}

function marcarBox(event) {
    var checked = event.target;
    checked.value++;
    var checkedTask = checked.parentElement;
    if (checked.value % 2 != 0) {
        checkedTask.style = "color:rgb(150,150,150); text-decoration:line-through; padding-left:3%";
    }
    else {
        checkedTask.style = "color:black; padding-left:3%";
    }
}