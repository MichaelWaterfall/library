const myLibrary = [];
//const mainDiv = document.getElementById("main");
//const addBook = document.getElementById("addBookButton");


function Book(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.id = crypto.randomUUID();
    this.read = false;
}

Book.prototype.remove = function () {
    const index = myLibrary.findIndex(book => book.id === this.id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
};

function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        const newDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const pagesDiv = document.createElement("div");
        const idDiv = document.createElement("div");
        const readDiv = document.createElement("div");
        const readButton = document.createElement("button");
        const removeButton = document.createElement("button");

        newDiv.classList.add("library-div");

        titleDiv.innerHTML = "Title: " + book.bookTitle;
        authorDiv.innerHTML = "Author: " + book.bookAuthor;
        pagesDiv.innerHTML = "Pages: " + book.bookPages;
        idDiv.innerHTML = "ID: " + book.id;
        readDiv.innerHTML = "Read: " + (book.read ? "✅ Yes" : "❌ No");

        readButton.innerHTML = "Toggle Read";
        readButton.onclick = function () {
            book.read = !book.read;
            displayBooks();
        };

        removeButton.innerHTML = "Remove";
        removeButton.onclick = function () {
            book.remove();
            displayBooks();
        };

        newDiv.appendChild(titleDiv);
        newDiv.appendChild(authorDiv);
        newDiv.appendChild(pagesDiv);
        newDiv.appendChild(idDiv);
        newDiv.appendChild(readDiv);
        newDiv.appendChild(readButton);
        newDiv.appendChild(removeButton);

        booksContainer.appendChild(newDiv);
    }
}




document.getElementById("addBookButton").onclick = function (){
    //console.log(title + author + pages);
    const authorInput = document.getElementById("authorInput").value;
    const titleInput = document.getElementById("titleInput").value;
    const pagesInput = document.getElementById("pagesInput").value;
    myLibrary.push(new Book(authorInput, titleInput, pagesInput));
    displayBooks();
    console.log(myLibrary);
    console.log("update");
}
