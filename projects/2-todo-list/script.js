// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item.task;
    listItem.setAttribute(
      "class",
      " list-group-item d-flex justify-content-between align-items-center"
    );
    list.appendChild(listItem);

    let span = document.createElement("span");
    span.setAttribute("class", "badge bg-primary rounded-pill");
    listItem.appendChild(span);

    let iconChecked = document.createElement("i");
    iconChecked.setAttribute("class", "fa fa-check");
    iconChecked.setAttribute("ariaHidden", "true");
    span.appendChild(iconChecked);

    iconChecked.addEventListener("click", () => {
      if (item.completed == false) {
        listItem.style.textDecoration = "line-through";
        item.completed = true;
        //  deleteAllCompletedTodos(); - When we call this function, all the completed tasks will be deleted straight away - see the function at advanced challenge section at the bottom of this file.
      } else {
        listItem.style.textDecoration = "none";
        item.completed = false;
      }
    });

    let iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "fa fa-trash");
    iconDelete.setAttribute("ariaHidden", "true");
    span.appendChild(iconDelete);

    iconDelete.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  });
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false, date: "07/10/2021"},
  { task: "Do the shopping", completed: false, date: "" }, 
];



populateTodoList(todos);






// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.querySelector("#todoInput");
    let arrObject = [
      {
        task: input.value,
        completed: false,
      }
    ];
    todos.push(arrObject[0]);
    populateTodoList(arrObject);
    input.value = "";
}




// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

let parentDiv = document.querySelector(".col-sm");

let deleteCompletedTaskBtn = document.createElement("button");
deleteCompletedTaskBtn.innerHTML = "Delete completed tasks";
parentDiv.appendChild(deleteCompletedTaskBtn);
deleteCompletedTaskBtn.setAttribute("class", "btn btn-primary mb-3");
deleteCompletedTaskBtn.style.marginTop = "30px";

function deleteAllCompletedTodos() {
  let list = document.getElementById("todo-list");
  let listItems = document.querySelectorAll("li");
  listItems.forEach((task) => {
    if (task.style.textDecoration === "line-through") {
      list.removeChild(task);
    }
  });
 }

deleteCompletedTaskBtn.addEventListener("click", deleteAllCompletedTodos);






