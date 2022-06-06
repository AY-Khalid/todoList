let addTodo = document.getElementById("addTodo");
let todoList = document.getElementById("todoList");
let todoItem = document.getElementById("todoItem");
let erase = document.getElementById("delete-btn");

addTodo.onclick = function() {
    todoItem.value; 

    if(todoItem !== "") {
        let li = document.createElement("li");
        li.innerHTML = todoItem.value;
        todoList.appendChild(li);
        todoItem.value = "";
    }
}

function deleteBtn() {
todoList.lastElementChild.remove();
}




