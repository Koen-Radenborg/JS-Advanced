const headerText = document.querySelector("h2");
const output = document.querySelector(".output");
let out = ``;

fetch("./pokemon.json")
    .then((response) => response.json())
    .then((pokemon) => {
        headerText.innerHTML = `there's ${pokemon.length} pokemon in this list`
        for (let pokemon1 of pokemon) {
            out += `
            <div class="object">
            <img src="${pokemon1.img}">
            <h3> ${pokemon1.name}</h3>
            </div>
            `
        }
        output.innerHTML = out;
    });

// kleuren zijn gebaseerd op de PokeDex!