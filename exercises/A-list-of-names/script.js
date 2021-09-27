function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  people.map((person) => {
    const personName = document.createElement("h1");
    personName.innerHTML = person.name;
    const personJob = document.createElement("h2");
    personJob.innerHTML = person.job;
    content.appendChild(personName);
    content.appendChild(personJob);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];


listOfNames(people);





