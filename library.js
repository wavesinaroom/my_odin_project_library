let myLibrary = [];

const Book = {
  author: "Author",
  title: "Title",
  pageNumber: 0,
  read: false
}

function Book (author, title, pageNumber, read)
{
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(){

}
