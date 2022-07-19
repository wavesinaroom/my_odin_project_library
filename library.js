let documentBody = document.body;
let myLibrary = [];
let globalBookNumber = 1;

function Book (author, title, pageNumber, read, bookNumber)
{
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.read = read;
  this.bookNumber = bookNumber;
}

function addBookToLibrary(author, title, pageNumber, read, bookNumber) {
  myLibrary.push(new Book(author, title, pageNumber, read, bookNumber));
}

function Init()
{
  let mainMenuDiv = document.createElement('div');
  mainMenuDiv.id = "initDiv";

  let mainMenuTitle = document.createElement('h2');
  mainMenuTitle.textContent = "Welcome to the Usaquen library";

  let newBookButton = document.createElement('button');
  newBookButton.addEventListener("click", createBookFromForm);
  newBookButton.textContent = "New Book";

  let removeBookButton = document.createElement('button');
  removeBookButton.addEventListener("click", displayBooks);
  removeBookButton.textContent = "Remove Book";

  documentBody.appendChild(mainMenuDiv);
  mainMenuDiv.appendChild(mainMenuTitle);
  mainMenuDiv.appendChild(newBookButton);
  mainMenuDiv.appendChild(removeBookButton);
}


function displayBooks(){

  documentBody.removeChild(initDiv);

  let libraryDiv = document.createElement('div');
  documentBody.appendChild(libraryDiv);

  myLibrary.forEach(function(book) {
    let bookDiv = document.createElement('bookDiv');
    bookDiv.id = "Book";

    let pAuthor = document.createElement('p');
    let pTitle = document.createElement('p');
    let pPageNumber = document.createElement('p');
    let pRead = document.createElement('input');
    pRead.type="checkbox";
    let deleteBookButton = document.createElement('button');

    pAuthor.textContent += book.author;
    pTitle.textContent += book.title;
    pPageNumber.textContent += book.pageNumber;
    pRead.checked = book.read.checked;
    deleteBookButton.textContent = "Delete Book";

    pRead.addEventListener("change", ()=>{
      if(pRead.checked == true)
      {
        book.read = false;
      }else{
        book.read = true;
      }
    });

    deleteBookButton.addEventListener("click",()=>{
      myLibrary.splice(book.bookNumber-1, 1);
      documentBody.removeChild(libraryDiv);
      Init();
    });

    libraryDiv.appendChild(bookDiv);
    libraryDiv.appendChild(deleteBookButton);
    libraryDiv.appendChild(pAuthor);
    libraryDiv.appendChild(pTitle);
    libraryDiv.appendChild(pPageNumber);
    libraryDiv.appendChild(pRead);
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
  inputReadYes.type = "checkbox";
  inputReadYes.id = "inputIsRead";

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
  inputForm.appendChild(inputSubmit);

}

function submitForm(){
    const author = document.getElementById("inputAuthor").value;
    const title = document.getElementById("inputTitle").value;
    const pageNumber = document.getElementById("inputPageNumber").value;
    const isRead = document.getElementById("inputIsRead").checked;

    addBookToLibrary(author, title, pageNumber,isRead, globalBookNumber);
    ++globalBookNumber;
  documentBody.removeChild(inputForm);
  Init();
}

Init();
