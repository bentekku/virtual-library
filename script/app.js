let bookName, author, pages, publisher, isRead;

let libraryCatalog = [];

const BOOK = document.querySelector("#inp-book-name");
const AUTHOR = document.querySelector("#inp-author");
const SUMBIT = document.querySelector("#inp-add");
const STATUS = document.querySelector("#inp-status");

function Book(title, author, pages, publ, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publisher = publ;
  this.status = status;
}

BOOK.addEventListener("click", () => {
  console.log("you clicked on the BOOK text field");
});
AUTHOR.addEventListener("click", () => {
  console.log("you clicked on the AUTHOR text field");
});
SUMBIT.addEventListener("click", () => {
  console.log("you clicked on the SUMBIT button");
});
STATUS.addEventListener("click", () => {
  console.log("you clicked on the STATUS drop-down options");
});
