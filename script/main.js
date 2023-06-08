const BOOK = document.querySelector("#book--name");
const AUTHOR = document.querySelector("#author--name");
const ADD = document.querySelector("#add--book");
const STATUS = document.querySelector("#book--status");
const BOOKDISPLAY = document.querySelector(".book-entry");

let bookName = BOOK.innerHTML;
let authorName = AUTHOR.innerHTML;
let readStatus = STATUS.value;

let bookCatalog = {
  name: "",
  author: "",
  stat: "",
};
console.log(
  `Book Name: ${bookName}.\nAuthor Name: ${authorName}.\nStauts: ${readStatus}`
);

BOOK.addEventListener("click", () => {
  console.log("you clicked on the BOOK text field");
});
AUTHOR.addEventListener("click", () => {
  console.log("you clicked on the AUTHOR text field");
});

ADD.addEventListener("click", () => {
  // console.log("you clicked on the SUMBIT button");
  // const WRAPPER = document.createElement("div").classList.add("book-card");
  // const LARGEHEADING = document.createElement("h1").classList.add("book-name");

  (bookCatalog[("name", "author", "stat")] = bookName), authorName, readStatus;

  console.log(bookCatalog);
});

STATUS.addEventListener("click", () => {
  console.log("you clicked on the STATUS drop-down options");
});
