import { InputContainer } from "./design.js";
import { TodoList } from "./design.js";

const InputContainerInstance = new InputContainer();
const TodoListInstance = new TodoList();
const form = document.getElementById("todo-form");
const input = InputContainerInstance.getInput();
TodoListInstance.loadButtonsDefault();



// Manipulación input container
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(input.value === ""){
        InputContainerInstance.showInputError();
        
    }else{       
        TodoListInstance.createTodoListItem(input.value) 
    }
})

// Manipular cuando se haga click en el input
form.addEventListener("click", () =>{
    InputContainerInstance.hideInputError();
});

// Manipular boton para borrar

// Manejo de DOM del input
