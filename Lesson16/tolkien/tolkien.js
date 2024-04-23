//https://alisherkhamidov.github.io/book-api/book.json
/*
{
  "title": "The Lord Of The Rings",
  "author": "Tolkien",
  "year": 1954,
  "genre": "fantasy",
  "cover": "https://covers.openlibrary.org/b/id/10654730-L.jpg"
}
*/

const bookCardElt = document.getElementById("book-card");
const titleElt = document.getElementById("title");
const authorElt = document.getElementById("author");
const yearElt = document.getElementById("year");
const genreElt = document.getElementById("genre");
const coverElt = document.getElementById("cover");

async function loadBook() {
    const response = await fetch("https://alisherkhamidov.github.io/book-api/book.json");
    const obj = await response.json();
    console.log(obj);

    const {title, author, year, genre, cover } = obj;
    titleElt.textContent = title;
    authorElt.textContent = author;
    yearElt.textContent = year;
    genreElt.textContent = genre;
    coverElt.src = cover;
}

loadBook()