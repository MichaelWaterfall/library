const myLibrary = [];

function Book(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}
