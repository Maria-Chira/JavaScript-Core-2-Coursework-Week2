function readingList(books) {
  let content = document.getElementById("content");

  //adding the main heading
  let heading = document.createElement("h1");
  heading.innerHTML = "Book list";
  content.appendChild(heading);

  //creating the unordered list
  let booksList = document.createElement("ul");
  content.appendChild(booksList);

  //interate through the array 
  books.map(book =>{
    //creating the list
    let bookListTag = document.createElement("li");
    booksList.appendChild(bookListTag);

    //adding the paragraphs that containts the title and the author of the books
    let bookNameAuthor = document.createElement("p");
    bookNameAuthor.innerHTML = `${book.title} by ${book.author}`;
    bookListTag.appendChild(bookNameAuthor);

    //adding the cover images 
    let bookCover = document.createElement("img");
    bookCover.style.width = '200px' //setting the same width for all the images
    bookCover.src = book.url;
    bookListTag.appendChild(bookCover);

    //background changed depending of the book's status: already read or not
    if(book.alreadyRead == true){
      bookListTag.style.backgroundColor = "green";
    }else{
      bookListTag.style.backgroundColor = "red";
    }

    //styling the layout of the webpage in order to make it looks like the example provided
    booksList.style.display = "flex";
    booksList.style.justifyContent = "space-around";
    bookListTag.style.padding = "20px";
    bookListTag.style.listStyleType = "none";
  })
}




const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  },
];

readingList(books);