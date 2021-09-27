function todoList(todos) {
  let content = document.getElementById("content");

  //optional - adding the main header
  let mainHeading = document.createElement("h1");
  mainHeading.innerHTML = "Shopping List";
  content.appendChild(mainHeading);

  //adding the unordered list
  let toDoList = document.createElement("ul");
  content.appendChild(toDoList);

  //iterating through the array
  todos.map((toBeDone) => {
    //add items in the list
    let toDoListTag = document.createElement("li");
    toDoListTag.innerHTML = toBeDone.todo;
    toDoList.appendChild(toDoListTag);
  });


  //accessing the <li></li> items
  const listItems = document.querySelectorAll("li");

  //adding the Event Listener
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      //checking if the line-through is already applied so the event listener will remove the line if clicked again
      if (item.style.textDecoration === "line-through") {
        item.style.textDecoration = "none";
      } else {
        item.style.textDecoration = "line-through";
      }
    });
  });
}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);