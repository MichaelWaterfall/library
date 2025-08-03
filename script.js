const myLibrary = [];

//const addBook = document.getElementById("addBookButton");


function Book(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.id = crypto.randomUUID();
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        
    }
}


document.getElementById("addBookButton").onclick = function (){
    //console.log(title + author + pages);
    const authorInput = document.getElementById("authorInput").value;
    const titleInput = document.getElementById("titleInput").value;
    const pagesInput = document.getElementById("pagesInput").value;
    myLibrary.push(new Book(authorInput, titleInput, pagesInput));
    console.log(myLibrary);
    console.log("update");
}
