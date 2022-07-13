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
    console.log (book.author);
    console.log (book.title);
    console.log (book.pageNumber);
    console.log (book.read);
  });
}

addBookToLibrary("Gabo Márquez", "Cien años de soledad", 460, false);
addBookToLibrary("Steven King", "The stand", 500, true);
addBookToLibrary("Anne Rice", "The claiming of sleeping beauty", 380, false);
displayBooks();
