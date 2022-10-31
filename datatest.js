
let favoriteBooks = [{title: "The Lord of the Rings", author: "J.R.R Tolkein", year: 1954, isNewerThan2000: false, age: 2022 - 1954, characters: ["Aragorn", "Frodo", "Gandalf", "Sam"]},
                    {title: "Harry Potter", author: "J.K Rowling", year: 1997, isNewerThan2000: false, age: 2022 - 1997, characters:["Borgin", "Perkins", "Trevor", "Winky"]}];
console.log(favoriteBooks);
console.log(favoriteBooks[1].title + " " + favoriteBooks[1].characters[0]);
console.log(favoriteBooks[0].age - favoriteBooks[1].age);