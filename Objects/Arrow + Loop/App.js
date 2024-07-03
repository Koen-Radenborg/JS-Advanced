let marvels = ['Ironman 1', 'Ironman 2', 'Ironman 3', 'Ironman 4']
const addMarvel = (movieName) => {
    marvels.push(movieName)
}

addMarvel("Ironman 5");

for (let movie of marvels) {
    console.log(movie)
    
}

