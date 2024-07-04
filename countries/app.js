const output = document.querySelector(".output");
let out = ``;


fetch(`https://restcountries.com/v3.1/all/`)
    .then((response) => response.json())
    .then((countries) => {
        for(let country of countries){
            out += `
            <section class="countryInfo">
            <img src="${country.flags.png}">
            <h2>${country.name.common}</h2>    
            </section>
            `
        }
        output.innerHTML = out;
    });