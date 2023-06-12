// Selecting the necessary DOM elements
const ADD_BTN = document.querySelector("#add--book");
const BOOK_DISPLAY = document.querySelector(".book-entry");

// Initializing the bookCatalog array with values from localStorage or an empty array if it doesn't exist
let bookCatalog = JSON.parse(localStorage.getItem("bookEntries")) || [];

// Event listener for the "Add Book" button
ADD_BTN.addEventListener("click", () => {
  // Retrieving the input values for book name, author name, and read status
  let bookName = document.querySelector("#book--name").value;
  let authorName = document.querySelector("#author--name").value;
  let readStatus = document.querySelector("#book--status").value;

  // Checking if book name and author name are provided
  if (!bookName || !authorName) {
    alert("Please fill in all the details to proceed");
  } else {
    // Creating a book entry object with the input values
    let bookEntry = { name: bookName, author: authorName, stat: readStatus };

    // Ensuring bookCatalog is an array
    if (!Array.isArray(bookCatalog)) {
      bookCatalog = [];
    }

    // Adding the new book entry to the bookCatalog array
    bookCatalog.push(bookEntry);

    // Updating the localStorage with the updated bookCatalog array
    localStorage.setItem("bookEntries", JSON.stringify(bookCatalog));

    // Displaying the updated book entries
    displayBooks();

    // Reset input fields after adding a book
    document.querySelector("#book--name").value = "";
    document.querySelector("#author--name").value = "";
  }
});

// Event listener for the book entry delete buttons
BOOK_DISPLAY.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    // Finding the corresponding book entry and its index
    let bookWrapper = event.target.closest(".book");
    let index = Array.from(bookWrapper.parentElement.children).indexOf(
      bookWrapper
    );

    // Removing the book entry from the bookCatalog array
    bookCatalog.splice(index, 1);

    // Updating the localStorage with the updated bookCatalog array
    localStorage.setItem("bookEntries", JSON.stringify(bookCatalog));

    // Removing the book entry element from the DOM
    bookWrapper.remove();
  }
});

// Function to display a single book entry
function displayBook(bookEntry) {
  // Creating the necessary DOM elements for the book entry
  let bookWrapper = document.createElement("div");
  bookWrapper.classList.add("book");

  let bookTitlePara = document.createElement("p");
  bookTitlePara.textContent = bookEntry.name;

  let authorNamePara = document.createElement("p");
  authorNamePara.textContent = bookEntry.author;

  let readStatusPara = document.createElement("p");
  readStatusPara.textContent = bookEntry.stat;
  readStatusPara.classList.add("read-status");

  let delBtn = document.createElement("button");
  delBtn.classList.add("btn-delete");

  // Appending the elements to the book entry wrapper
  bookWrapper.append(bookTitlePara);
  bookWrapper.append(authorNamePara);
  bookWrapper.append(readStatusPara);
  bookWrapper.append(delBtn);

  // Appending the book entry wrapper to the book display container
  BOOK_DISPLAY.append(bookWrapper);
}

// Function to display all book entries
function displayBooks() {
  // Clear existing book entries
  BOOK_DISPLAY.innerHTML = "";

  // Iterate over each book entry in the bookCatalog array and display it
  bookCatalog.forEach((bookEntry) => {
    displayBook(bookEntry);
  });
}

// Initial display of book entries on page load
displayBooks();
