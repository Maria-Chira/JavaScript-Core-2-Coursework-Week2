function shoppingList(arrayOfItems) {
  let content = document.getElementById("content");
  let itemsList = document.createElement("ul");
  content.appendChild(itemsList);
  arrayOfItems.map(item =>{
    let individualItem = document.createElement("li");
    individualItem.innerHTML = item;
    itemsList.appendChild(individualItem);
  })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
