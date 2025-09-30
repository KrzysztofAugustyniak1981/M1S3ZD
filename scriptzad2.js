const library = {
    name: "Publiczna Sikorskiego",
    books: [],
};
const book1 = {
    title: "Potop",
    author: "Henryk Sienkiewicz",
    yearOfPublication: 1886,
    bookInfo: "Powieść o potopie Szwedzkim",
};
const book2 = {
    title: "Bajko-terapia",
    author: "Maria Molicka",
    yearOfPublication: 2002,
    bookInfo: "terapia dzieci na podstawie bajek",
};
const book3 = {
    title: "Feng Shui",
    author: "Luc Antoine",
    yearOfPublication: 2000,
    bookInfo: "Odkrywanie energii własnego domu",
}
library.books.push(book1);
library.books.push(book2);
library.books.push(book3);

const title1 = library.books[0].title;
const author1 = library.books[0].author;
const yearOfPublication1 = library.books[0].yearOfPublication;
const title2 = library.books[1].title;
const author2 = library.books[1].author;
const yearOfPublication2 = library.books[1].yearOfPublication;
const title3 = library.books[2].title;
const author3 = library.books[2].author;
const yearOfPublication3 = library.books[2].yearOfPublication;
const bookInfo1 = `Tytuł: ${title1}, Autor: ${author1}, Rok wydania: ${yearOfPublication1}.`;
const bookInfo2 = `Tytuł: ${title2}, Autor: ${author2}, Rok wydania: ${yearOfPublication2}.`;
const bookInfo3 = `Tytuł: ${title3}, Autor: ${author3}, Rok wydania: ${yearOfPublication3}.`;
let oldestBook;
if (yearOfPublication1>yearOfPublication2) {
    if (yearOfPublication2>yearOfPublication3) {
        oldestBook = title3;
    } else oldestBook = title2;
} else oldestBook = title1;
// nie uwzględniam jeśli lata by były te same
const libraryInfo = `Biblioteka ${library.name} zawiera książki: ${title1}, ${title2}, ${title3}. Najstarsza książka: ${oldestBook}.`