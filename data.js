//Book Number 1

let title = "The Lord of the Rings";
let author = "J.R.R Tolkein"
let year = 1954;
let isNewerThan2000 = false;
let age = 2022 - year;
let characters = ["Aragorn", "Frodo", "Gandalf", "Sam"];
let favoriteBook = {title, author, year, isNewerThan2000, age, characters};

//Book Number 2

let title2 = "Harry Potter";
let author2 = "J.K Rowling"
let year2 = 1997;
let isNewerThan2000B2 = false;
let age2 = 2022 - year2;
let characters2 = ["Borgin", "Perkins", "Trevor", "Winky"];
let favoriteBook2 = {title2, author2, year2, isNewerThan2000B2, age2, characters2};

let favoriteBooks = {favoriteBook, favoriteBook2};

console.log("Title of the book: " + title);
console.log("Author of the book: " + author);
console.log("Year of the book: " + year);
console.log("Is it newer than 2000: " + isNewerThan2000);
console.log("Book age: " + age);
console.log("Characters: " + characters);
console.log("First character: " + characters[0]);
console.log("Second character: " + characters[1]);

console.log("Favorite Book: " + favoriteBook);
console.log(favoriteBook.author + " " + favoriteBook.year + " " + favoriteBook.characters[0]);

console.log(favoriteBooks.favoriteBook2.title2 + " " + favoriteBooks.favoriteBook2.characters2[0]);
console.log(favoriteBooks.favoriteBook2.year2 - favoriteBooks.favoriteBook.year);



