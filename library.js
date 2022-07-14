let documentBody = document.body;
let myLibrary = [];
let newBookButtonDiv = document.getElementById("new-book-div");
let newBookButton = document.getElementById("new-book-button");
newBookButton.addEventListener("click", createBookFromForm);


function Book (author, title, pageNumber, read)
{
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.read = read;
}

function addBookToLibrary(author, title, pageNumber, read) {
  myLibrary.push(new Book(author, title, pageNumber, read));
}

function displayBooks(){
  myLibrary.forEach(function(book) {

    let div = document.createElement('div');
    let pAuthor = document.createElement('p');
    let pTitle = document.createElement('p');
    let pPageNumber = document.createElement('p');
    let pRead = document.createElement('p');

    pAuthor.textContent += book.author;
    pTitle.textContent += book.title;
    pPageNumber.textContent += book.pageNumber;
    pRead.textContent += book.pRead;

    div.id = "Book";

    documentBody.appendChild(div);
    div.appendChild(pAuthor);
    div.appendChild(pTitle);
    div.appendChild(pPageNumber);
    div.appendChild(pRead);

  });
}

function createBookFromForm(){
  newBookButtonDiv.style.visibility = "hidden";
  let inputForm = document.createElement('form');

  let inputAuthor = document.createElement('input');
  inputAuthor.placeholder = "Type in book author";

  let inputTitle = document.createElement('input');
  inputTitle.placeholder = "Type in book title";

  let inputPageNumber = document.createElement('input');
  inputPageNumber.placeholder = "Enter book page number";

  let inputReadDiv = document.createElement('div');
  let inputReadLabel = document.createElement('label');
  inputReadLabel.textContent = "Did you read the book?";
  let inputReadYes = document.createElement('input');
  inputReadYes.type = "radio";
  let inputReadNo = document.createElement('input');
  inputReadNo.type = "radio";

  let inputSubmit = document.createElement('button');
  inputSubmit.type = "submit";
  inputSubmit.textContent = "Add book";

  documentBody.appendChild(inputForm);
  inputForm.appendChild(inputAuthor);
  inputForm.appendChild(inputTitle);
  inputForm.appendChild(inputPageNumber);
  inputForm.appendChild(inputReadDiv);
  inputReadDiv.appendChild(inputReadLabel);
  inputReadDiv.appendChild(inputReadYes);
  inputReadDiv.appendChild(inputReadNo);
  inputForm.appendChild(inputSubmit);

}
