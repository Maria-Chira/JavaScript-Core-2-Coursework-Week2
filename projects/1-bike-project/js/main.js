// - When clicking **blue** it should change:

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

//accessing the blueButton element.
const blueBtn = document.querySelector("#blueBtn");

//accessing the jumbotron div
const jumbotron = document.querySelector(".jumbotron");

//accessing the Donate Bike button
const donateBikeBtn = document.querySelector(".buttons .btn-primary");

//accessing the Volunteer button
const volunteerBtn = document.querySelector(".buttons .btn-secondary");

//adding the event listener for the blue button
blueBtn.addEventListener("click", () => {
  //changing the jumbotron's background
  jumbotron.style.backgroundColor = "#588fbd";

  //changing the background color of the Donate Bike button
  donateBikeBtn.style.backgroundColor = "#ffa500";

  //changing the style of the Volunteer button
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

// When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`

//accessing the orange button
const orangeBtn = document.querySelector("#orangeBtn");

//adding the event listener for the orange button
orangeBtn.addEventListener("click", () => {
  //changing the jumbotron's background
  jumbotron.style.backgroundColor = "#f0ad4e";

  //changing the background color of the Donate Bike button
  donateBikeBtn.style.backgroundColor = "#5751fd";

  //changing the style of the Volunteer button
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});

// When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

//accessing the green button
const greenBtn = document.querySelector("#greenBtn");

//adding the event listener for the green button
greenBtn.addEventListener("click", () => {
  //changing the jumbotron's background
  jumbotron.style.backgroundColor = "#87ca8a";

  //changing the background color of the Donate Bike button
  donateBikeBtn.style.backgroundColor = "black";

  //changing the background color of the Volunteer button
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

// When the submit button is pressed, it should check that all the form fields are valid:

// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character

// For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click **Submit** it should:

// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

//accessing the Submit button
const submitBtn = document.querySelector("form button");
const emailAddress = document.querySelector("#exampleInputEmail1");
const yourName = document.querySelector("#example-text-input");
const description = document.querySelector("#exampleTextarea");
submitBtn.addEventListener("click", () => {
  let isNameValid = true;
  let isEmailValid = true;
  let isDescriptionValid = true;
  console.log(!emailAddress.value.includes("@"));

  if ((emailAddress.value.length = 0 || !emailAddress.value.includes("@"))) {
    emailAddress.style.backgroundColor = "red";
    isEmailValid = false;
  } else {
    emailAddress.style.backgroundColor = "transparent";
  }

  if (description.value.length == 0) {
    description.style.backgroundColor = "red";
    isDescriptionValid = false;
  } else {
    description.style.backgroundColor = "transparent";
  }

  if (yourName.value.length == 0) {
    yourName.style.backgroundColor = "red";
    isNameValid = false;
  } else {
    yourName.style.backgroundColor = "transparent";
  }

  if (isNameValid && isEmailValid && isDescriptionValid) {
    alert("Thank you for filling out the form");
    const form = document.querySelector("form");
    form.reset();
  }
});
