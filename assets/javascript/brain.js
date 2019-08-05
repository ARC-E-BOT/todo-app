//declare the global variables
const todos = {

};
let todoArray = [];
let counter = 0;


//declare the html global variables
const mainTextBoxHTML = document.getElementById("main-todo");
const addNewTodoHTML = document.getElementById("add-new");
const todoListHTML = document.getElementById("todo-list");


addNewTodoHTML.addEventListener("click", function(){
    let newTodo = mainTextBoxHTML.value;
    console.log(newTodo);
    if (newTodo === "") return; // add error here in the future
    todos[`todo-${counter}`] = {
        isChecked: false,
        number: counter,
        text: newTodo
    }
    todoArray.push(todos[`todo-${counter}`]);
    createTodoDiv(todos[`todo-${counter}`])
    counter++;
    //update the todo list
})

function updateList(){

}

function createTodoDiv(obj){
    let id = obj.number;
    let newDiv = document.createElement("div");
    newDiv.id = id
    newDiv.classList.add("todo-item")
    let checkBoxDiv = createCheckBox(id);
    newDiv.appendChild(checkBoxDiv);
    let paragraphDiv = createTextDiv(todos[`todo-${id}`].text)
    newDiv.appendChild(paragraphDiv);
    let deleteDiv = createTrashcanDiv(id);
    newDiv.appendChild(deleteDiv);
    todoListHTML.prepend(newDiv);
}

function createTrashcanDiv(id){
    let newDiv = document.createElement("div");
    newDiv.classList.add("trash-box");
    newDiv.addEventListener("click", function(){
        let divRemovable = document.getElementById(`${id}`);
        divRemovable.remove();
    })
    return newDiv;
}

function createTextDiv(text){
    let newDiv = document.createElement("div");
    newDiv.classList.add("text-box");
    let newParagraph = document.createElement("p");
    newParagraph.innerText = text;
    newDiv.appendChild(newParagraph);
    return newDiv;
}

function createCheckBox(id){
    let newDiv = document.createElement("div");
    newDiv.classList.add("check-box");
    newDiv.addEventListener("click", function(){
        let divData = todos[`todo-${id}`];
        if(divData.isChecked === true){
            divData.isChecked = false;
            newDiv.classList.add("checked");
        } else {
            divData.isChecked = true;
            newDiv.className = "checked";
        } 
    })
    return newDiv;
}