let favoriteBooks = [
    {
        title: "The Lord of the Rings", 
        author: "J.R.R Tolkein", 
        year: 1954, 
        isNewerThan2000: false, 
        age: 2022 - 1954, 
        characters: ["Aragorn", "Frodo", "Gandalf", "Sam"]
    },         
    {
        title: "Harry Potter", 
        author: "J.K Rowling", 
        year: 1997, 
        isNewerThan2000: false, 
        age: 2022 - 1997, 
        characters:["Borgin", "Perkins", "Trevor", "Winky"]
    }
];
 

let favMovies = [
    {
        title: "Charlie and the chocolate factory",
        year: 1964,
        rating: 6.7,
        description: "Dream factory",
        directors: ["Tim Burton"],
        writers: ["John August"],
        stars: ["Charlie Bucket", "Willy Wonka"],
        genres: ["Adventure"]
    },
    {
        title: "Home Alone",
        year: 1990,
        rating: 7.7,
        description: "Seen it every Christmas",
        directors: ["Chirs Columbus", "Rod Daniel"],
        writers: ["John Hughes"],
        stars: ["Kevin"],
        genres: ["Comedy"]
    },
    {
        title: "Jujutsu Kaisen 0",
        year: 2017,
        rating: 7.8,
        description: "Worth watching and great animation",
        directors: ["Seong-Hu Park"],
        writers: ["Gege Akutami"],
        stars: ["Yuta Okkotsu"],
        genres: ["Action", "Fantasy"]
    },
    {
        title: "Titanic",
        year: 1997,
        rating: 7.4,
        description: "Never seen it fully",
        directors: ["James Cameron"],
        writers: ["James Cameron"],
        stars: ["Jack Dawson", "Rose Dewit"],
        genres: ["Drama", "Romance"]
    }
];

let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

 function averageAge(allYears, currentYear){
     let sum = 0;
     let averageAge = 0;
     for (let i = 0; i < allYears.length; i++) {
        sum += allYears[i].year;
        averageAge = currentYear - sum / allYears.length; 
     }; 

     return averageAge; 
};

console.log("Average age books: " + averageAge(favoriteBooks, 2022));
console.log("Average age movies: " + averageAge(favMovies, 2022));
console.log("Average age albums: " + averageAge(bestSellingAlbums, 2022));

function latestOrOldest (allTitles){
    let newestObject = allTitles[0].year;
    let newest = allTitles[0];

    let oldestObject = allTitles[0].year;
    let oldest = allTitles[0];

    for (let i = 0; i < allTitles.length; i++) {
        if (newestObject < allTitles[i].year){
            return newest = allTitles[i].title;
        } else {
            return oldest = allTitles[i].title;
        }
    };
};

// console.log(latestOrOldest(favoriteBooks));
// console.log(latestOrOldest(favMovies));
// console.log(latestOrOldest(bestSellingAlbums));


function average(a,b){
    let average = 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i].rating;
        average = sum / a.length; 
        // ss123123sd  
    } return average;
};
