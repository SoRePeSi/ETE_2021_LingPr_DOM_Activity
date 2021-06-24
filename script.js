// Add delete button and checkbox to already existing elements on load
// Adicionar botão de deletar e checkbox a elementos já-existentes ao carregar
function start() {
    var itensOriginais = document.querySelectorAll("li");
    for (var i = 0; i < itensOriginais.length; i++) {
        itensOriginais[i].style = "padding-left: 3%";   // Align with input box - Alinhar com caixa de entrada
        itensOriginais[i].appendChild(botaoDelete());
        itensOriginais[i].appendChild(checkBox());
    }
}


// Add new item to list
// Adicionar novo item à lista
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

        texto.value = "";   // Clear input box - Limpar caixa de entrada
    }
}

// Create checkbox element
// Criar elemento checkbox
function checkBox() {
    var box = document.createElement("input");
    box.className = "form-check-input";
    box.setAttribute("type", "checkbox");
    box.value = 0;
    box.addEventListener("click", marcarBox);

    return box;
}


// Delete button (actually a span element)
// Botão de deletar (na verdade um elemento span)
function botaoDelete() {
    const botDel = document.createElement("span");
    botDel.style = "position: absolute; right: 5%;";
    botDel.innerHTML = "X";
    botDel.className = "close";
    botDel.addEventListener("click", deleteLi);
    return botDel;
}

// Delete item from list
// Deletar item da lista
function deleteLi(event) {
    var botClick = event.target;
    var delLi = botClick.parentElement;
    delLi.remove();
}

// Check or uncheck checkbox
// Marcar ou desmarcar checkbox
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