let documentBody = document.body;
let myLibrary = [];

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
