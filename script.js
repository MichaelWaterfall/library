const myLibrary = [];
//const mainDiv = document.getElementById("main");
//const addBook = document.getElementById("addBookButton");


function Book(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.id = crypto.randomUUID();
}

function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const pagesDiv = document.createElement("div");
        const idDiv = document.createElement("div");
        const readButton = document.createElement("button");
        const removeButton = document.createElement("button");
        
        removeButton.onclick = function () {
            console.log(myLibrary[i]);
        };

        newDiv.classList.add("library-div");
        readButton.innerHTML = "Read";
        removeButton.innerHTML = "Remove";
        titleDiv.innerHTML = "Title: " + myLibrary[i].bookTitle;
        authorDiv.innerHTML = "Author: " + myLibrary[i].bookAuthor;
        pagesDiv.innerHTML = "Pages: " + myLibrary[i].bookPages;
        idDiv.innerHTML = "Id: " + myLibrary[i].id;

        newDiv.appendChild(titleDiv);
        newDiv.appendChild(authorDiv);
        newDiv.appendChild(pagesDiv);
        newDiv.appendChild(idDiv);
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
