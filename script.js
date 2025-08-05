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
    for(let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const pagesDiv = document.createElement("div");
        const idDiv = document.createElement("div");
        const readButton = document.createElement("button");
        const removeButton = document.createElement("button");
        newDiv.id = "library-div";
        titleDiv.innerHTML = myLibrary[i].bookTitle;
        authorDiv.innerHTML = "author";
        pagesDiv.innerHTML = "pages";
        idDiv.innerHTML = "id"
        
        document.getElementById("main").appendChild(newDiv);
        document.getElementById("library-div").appendChild(titleDiv);
        document.getElementById("library-div").appendChild(authorDiv);
        document.getElementById("library-div").appendChild(pagesDiv);
        document.getElementById("library-div").appendChild(idDiv);
        document.getElementById("library-div").appendChild(readButton);
        document.getElementById("library-div").appendChild(removeButton);
        console.log("div");
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
