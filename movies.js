let favMovies = [
    {title: "Charlie and the chocolate factory",
    year: 1964,
    rating: 6.7,
    description: "Dream factory",
    directors: "Tim Burton",
    writers: "John August",
    stars: ["Charlie Bucket", "Willy Wonka"],
    genres: "Adventure"},

    {title: "Home Alone",
    year: 1990,
    rating: 7.7,
    description: "Seen it every Christmas",
    directors: ["Chirs Columbus", "Rod Daniel"],
    writers: "John Hughes",
    stars: "Kevin",
    genres: "Comedy"},

    {title: "Jujutsu Kaisen 0",
    year: 2017,
    rating: 7.8,
    description: "Worth watching and great animation",
    directors: "Seong-Hu Park",
    writers: "Gege Akutami",
    stars: "Yuta Okkotsu",
    genres:["Action", "Fantasy"]},

    {title: "Titanic",
    year: 1997,
    rating: 7.4,
    description: "Never seen it fully",
    directors: "James Cameron",
    writers: "James Cameron",
    stars: ["Jack Dawson", "Rose Dewit"],
    genres:["Drama", "Romance"]}
];

console.log("The first movie's title is: " + favMovies[0].title);
console.log("The second movie's release year is: " + favMovies[1].year);
console.log("The third movie's IMDB rating is: " + favMovies[2].rating);
console.log("The fourth movie's short description is: " + favMovies[3].description);
console.log("The first movie's lead director is: " + favMovies[0].directors);
console.log("The second movie's lead writer is: " + favMovies[1].writers);
console.log("The third movie's lead star is: " + favMovies[2].stars);
console.log("The fourth movie's main genre is: " + favMovies[3].genres[1]);

let averageRating = [favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating];
let averageAge = [favMovies[0].year + favMovies[1].year + favMovies[2].year + favMovies[3].year];
console.log(averageRating / 4);
console.log(2022 - averageAge / 4);


