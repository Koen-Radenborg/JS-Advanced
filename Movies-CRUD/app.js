const moviesContainer = document.querySelector('#movies-container');
const movieURL = `http://localhost:3000/movies`;

const movieForm = document.querySelector('#movie-form');

let allMovies = [];


movieForm.addEventListener('submit', () => {

    const titleInput = movieForm.querySelector('#title').value;
    const yearInput = movieForm.querySelector('#year').value;
    const imageInput = movieForm.querySelector('#coverImage').value;
    const ratingInput = movieForm.querySelector('#rating').value;
    fetch(`${movieURL}`, {
        method: 'POST',
        body: JSON.stringify({
            title: titleInput,
            year: yearInput,
            img: imageInput,
            rating: ratingInput,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
});

//R from CRUD
fetch(`${movieURL}`)
    .then((response) => response.json())
    .then((movies) => {
        let out = '';
        for (let movie of movies) {
            allMovies = movies; // hier vul je de array met de movies die je hebt gehaald uit je json-bestand
            out += `
            <div id="single-movie">
            <br><br><br>
                <img src="./img/${movie.img}" width="500" height="400" />
                <h3> ${movie.title}</h3>
                <p>Year: ${movie.year}</p>
                <p>Rating: ${movie.rating}</p>
                <button data-id="${movie.id}" id="edit-${movie.id}" data-action="edit">Edit</button>
                <button data-id="${movie.id}" id="delete-${movie.id}" data-action="delete">Delete</button>
                <br><br>
            </div>
                `;
        }
        moviesContainer.innerHTML = out;
    });

moviesContainer.addEventListener('click', (e) => {
    //e.preventDefault() zorgt ervoor dat de browser niet refrest
    //nadat je op een knop hebt geklikt
    e.preventDefault();
    if (e.target.dataset.action === 'edit') {
        console.log('Je hebt op edit geklikt! Doe maar alsof het al wel goed was hoor... Niemand heeft je door...');
        const movieData = allMovies.find((movie) => {
            return movie.id == e.target.dataset.id;
        });
        console.log(movieData);
        //hier maak je het formulier aan met als placeholder
        //de gegevens van de film
        e.target.parentElement.innerHTML += `
        <div id='edit-movie'>
<form id="movie-form-edit">
<input required id="edit-title" value="${movieData.title}">
<input required id="edit-year" value="${movieData.year}">
<input required id="edit-coverImage" value="${movieData.img}">
<input required id="edit-rating" value="${movieData.rating}">
<input type="submit" id="edit" value="Edit Movie">
</form>
</div>`;
        const editButton = document.querySelector(`#edit-${e.target.dataset.id}`);
        editButton.disabled = true;
        document.querySelector('#edit').addEventListener('click', (e) => {
            //gebruik altijd preventDefault(), zodat de browser niet refresht
            e.preventDefault();

            //sla alle waarden van je input op in variabelen
            const titleInput = document.querySelector('#edit-title').value;
            const yearInput = document.querySelector('#edit-year').value;
            const imageInput = document.querySelector('#edit-coverImage').value;
            const ratingInput = document.querySelector('#edit-rating').value;

            //fetch de data naar je server/json-bestand met de method 'PATCH'
            fetch(`${movieURL}/${movieData.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: titleInput,
                    year: yearInput,
                    img: imageInput,
                    rating: ratingInput,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        });
    } else if (e.target.dataset.action === 'delete') {
        //haal de delete knop op en gebruik de remove functie om het te verwijderen
        document.querySelector(`#delete-${e.target.dataset.id}`).remove();
        //fetch de data naar je json-bestand met de method 'DELETE'
        fetch(`${movieURL}/${e.target.dataset.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log('Je hebt op delete geklikt! Wat jammer dat je niet met je fouten kan leven...');
    }
});

