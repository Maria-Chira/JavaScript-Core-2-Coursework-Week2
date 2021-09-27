function listOfColours(colours) {
  let content = document.getElementById("content");

  //optional - adding the main heading
  let heading = document.createElement("h1");
  heading.innerHTML = "List of colors";
  content.appendChild(heading);

  //creating the select element
  let select = document.createElement("select");
  select.setAttribute("name", "colors"); //adding the attribute "name" and assigning the value "colors"
  content.appendChild(select);

  //creating the paragraph
  let message = document.createElement("p");

  //mapping through the array in order to create the options
  colours.map(color => { 
    let option = document.createElement('option');
    option.setAttribute("value", color); //adding the attribute "value" and assigning the value "color"
    option.innerHTML = color;
    select.appendChild(option);
  })

  //adding the event listener
  select.addEventListener("click", (event) => {
    message.innerHTML = `You have selected ${event.target.value}`;
    message.style.color = event.target.value;
    content.appendChild(message);
  });

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
