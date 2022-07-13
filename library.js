let myLibrary = [];

function Book (author, title, pageNumber, read)
{
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.read = read;
}

function addBookToLibrary(author, title, pageNumber, read) {
  myLibrary.push(Book(author, title, pageNumber, read));
}

function displayBooks(){
  myLibrary.forEach((book) => {
    console.log (book.author);
    console.log (book.title);
    console.log (book.pageNumber);
    console.log (book.read);
  });
}
