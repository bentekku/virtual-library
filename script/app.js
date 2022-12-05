let bookName, author, pages, publisher, isRead;

let libraryCatalog = [];

const BOOK = document.querySelector("#inp-book-name");
const AUTHOR = document.querySelector("#inp-author");
const ADD = document.querySelector("#inp-add");
const STATUS = document.querySelector("#inp-status");
const BOOKDISPLAY = document.querySelector(".book-wrapper");

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
ADD.addEventListener("click", () => {
  console.log("you clicked on the SUMBIT button");
  const WRAPPER = document.createElement("div").classList.add("book-card");
  const lARGEHEADING = document.createElement("h1").classList.add("book-name");
});
STATUS.addEventListener("click", () => {
  console.log("you clicked on the STATUS drop-down options");
});
