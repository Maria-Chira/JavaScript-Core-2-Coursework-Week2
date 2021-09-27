function highlightWords(paragraph, colours) {
  const content = document.getElementById("content");

  //optional - adding the main heading
  const mainHeading = document.createElement("h1");
  mainHeading.innerHTML = "Highlight words";
  content.appendChild(mainHeading);

  //creating the paragraph
  const myParagraph = document.createElement("p");

  //creating the select element
  const select = document.createElement("select");
  select.setAttribute("name", "colors"); //adding the attribute "name" and assigning the value "colors"
  content.appendChild(select);
  content.appendChild(myParagraph);

  //iterating through the array of colors
  colours.map((color) => {
    //creating the options inside the select
    let option = document.createElement("option");
    option.setAttribute("value", color);
    option.innerHTML = color;
    select.appendChild(option);
  });

  //turning the paragraph into an array
  let paragraphToArray = paragraph.split(" ");

  //creating the onClickFunction for the EventListener
  const onClickFunction = (event) => {
    const selectDropdown = document.querySelector("select"); //accessing the select element
    const selectDropdownColor = selectDropdown.value; //accessing the colors

    //If 'none' is selected in the dropdown, then no highlighting should be applied to the words, or highlighting should be removed if the clicked word is already highlighted.
    if (selectDropdownColor == "none") {
      event.target.style.backgroundColor = "transparent";
    } else {
      event.target.style.backgroundColor = selectDropdownColor;
    }
  };

  //iterating through the array in order to create the spans
  paragraphToArray.map((word) => {
    const span = document.createElement("span");
    span.innerHTML = `${word} `;
    myParagraph.appendChild(span);

    //adding the event listener
    span.addEventListener("click", onClickFunction);
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
