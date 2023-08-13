export class InputContainer{
    constructor(){
        this.input = document.getElementById("todo-input-text");
        this.inputContainer = document.querySelector(".todo-input-container");
    }
    getInput(){
        return this.input;
    }
    clearInput(){
        this.input.value = "";
    }
    showInputError(){
        this.inputContainer.classList.add("todo-input-container-error")
        alert("Por favor complete el campo...")
    }
    hideInputError(){
        this.inputContainer.classList.remove("todo-input-container-error")
    }
}

export class TodoList{
    constructor(){
        this.todoListItem = document.getElementById("todo-list-ul");
        this.buttonDelete = document.querySelectorAll(".todo-list-item-delete");
    }

    loadButtonsDefault(){
        this.buttonDelete.forEach((button) =>{
            button.addEventListener("click", () =>{
                this.deleteTodoListItem(button.parentElement);
            })
        })
    }
  
    createTodoListItem(todo){
        const todoListItem = document.createElement("li");
        todoListItem.classList.add("todo-list-item");
        todoListItem.innerHTML = `
            <span class="todo-list-item-text">${todo}</span>
        `
        // <i class="fa-solid fa-trash"></i> todo-list-item-delete
        const todoListItemDelete = document.createElement("button");
        todoListItemDelete.classList.add("todo-list-item-delete")
        todoListItemDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`
        // Agregamos el boton de borrar todoListItem li
        todoListItem.appendChild(todoListItemDelete)
        // Agregar el todo a la lista
        this.todoListItem.appendChild(todoListItem)
        // Agregamos el evento al boton de borrar
        todoListItemDelete.addEventListener("click", () =>{
            this.deleteTodoListItem(todoListItemDelete.parentElement);
        })
    }

    deleteTodoListItem(parentElement){
        // Comprobamos si el padre es todo-list-item el cual sería <li>
        if(parentElement.classList.contains("todo-list-item")){
            parentElement.remove();
        }
    }
}
