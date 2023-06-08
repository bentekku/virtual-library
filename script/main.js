const ADD = document.querySelector("#add--book");
const BOOKDISPLAY = document.querySelector(".book-entry");

let bookName, authorName, readStatus;

let bookCatalog = {
  name: "",
  author: "",
  stat: "",
};

ADD.addEventListener("click", () => {
  // console.log("you clicked on the SUMBIT button");
  // const WRAPPER = document.createElement("div").classList.add("book-card");
  // const LARGEHEADING = document.createElement("h1").classList.add("book-name");

  bookName = document.querySelector('[name="book-name"]').value;
  authorName = document.querySelector('[name="author-name"]').value;
  readStatus = document.querySelector('[name="book-status"]').value;

  if (!bookName) {
    alert("Make sure to fill all the fields");
  } else {
    bookCatalog = { name: bookName, author: authorName, stat: readStatus };

    let BOOKWRAPPER = document.createElement("div").classList.add("book");
    let BOOK_TITLE_PARA = document.createElement("p");
    let AUTHOR_NAME_PARA = document.createElement("p");
    let READ_STATUS = document.createElement("p");
    let DEL_BTN = document.createElement("button").classList.add("btn-delete");

    BOOK_TITLE_PARA.innerHTML = bookCatalog.name;
    AUTHOR_NAME_PARA.innerHTML = bookCatalog.author;
    READ_STATUS.innerHTML = bookCatalog.stat;
    READ_STATUS.classList.add("read-status");

    BOOKWRAPPER.append(BOOK_TITLE_PARA),
      BOOKWRAPPER.append(AUTHOR_NAME_PARA),
      BOOKWRAPPER.append(READ_STATUS),
      BOOKWRAPPER.append(DEL_BTN);

    BOOKDISPLAY.append(BOOKWRAPPER);
  }
  console.log(bookCatalog);
});
