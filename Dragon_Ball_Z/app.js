const output = document.querySelector(".output");
let out = ``;


fetch(`https://dragonball-api.com/api/characters`)
    .then((response) => response.json())
    .then((data) => {
        for (let d of data.items) {
            out += `
        <div class="object">
        <img src="${d.image}">
        <h3> ${d.name}</h3>
        <h3> ${d.ki}</h3>
        <h3> ${d.maxKi}</h3>
        <h3> ${d.race}</h3>
        <h3> ${d.gender}</h3>
       
        </div>
        `
        }
        output.innerHTML = out;
    });

//colors are based on Goku's outfit