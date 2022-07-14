let documentBody = document.body;
let myLibrary = [];

function Init()
{
  let newBookButtonDiv = document.createElement('div');
  newBookButtonDiv.id = "initDiv";
  let newBookButton = document.createElement('button');
  newBookButton.addEventListener("click", createBookFromForm);
  newBookButton.textContent = "New book";
  let newBookButtonLabel = document.createElement('label');
  newBookButtonLabel.textContent = "Click on the button to create a new book"

  documentBody.appendChild(newBookButtonDiv);
  newBookButtonDiv.appendChild(newBookButtonLabel);
  newBookButtonDiv.appendChild(newBookButton);
}

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

  documentBody.removeChild(initDiv);

  let inputForm = document.createElement('form');
  inputForm.id = "inputForm";

  let inputAuthor = document.createElement('input');
  inputAuthor.id = "inputAuthor";
  inputAuthor.placeholder = "Type in book author";

  let inputTitle = document.createElement('input');
  inputTitle.id = "inputTitle";
  inputTitle.placeholder = "Type in book title";

  let inputPageNumber = document.createElement('input');
  inputPageNumber.placeholder = "Enter book page number";
  inputPageNumber.id = "inputPageNumber";

  let inputReadDiv = document.createElement('div');
  let inputReadLabel = document.createElement('label');
  inputReadLabel.textContent = "Did you read the book?";
  let inputReadYes = document.createElement('input');
  inputReadYes.type = "radio";
  inputReadYes.id = "inputReadYes";
  let inputReadNo = document.createElement('input');
  inputReadNo.type = "radio";
  inputReadNo.id = "inputReadNo";

  let inputSubmit = document.createElement('button');
  inputSubmit.type = "submit";
  inputSubmit.textContent = "Add book";
  inputSubmit.addEventListener("click", submitForm);

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

function submitForm(){

  let author = document.getElementById("inputAuthor").textContent;
  let title = document.getElementById("inputTitle").textContent;
  let pageNumber = parseInt(document.getElementById("inputPageNumber").textContent);
  let isRead;

  if (document.getElementById("inputReadYes").checked===true&&document.getElementById("inputReadNo").checked===false)
    isRead = true;
  else if (document.getElementById("inputReadNo").checked===true&&document.getElementById("inputReadYes").checked===false)
    isRead = false;
  else{
    documentBody.removeChild(inputForm);
    Init();
    alert("Book couldn't be created");
  }

  addBookToLibrary(author, title, pageNumber,isRead);
  documentBody.removeChild(inputForm);

}

Init();
