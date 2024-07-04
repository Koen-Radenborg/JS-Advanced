const headerText = document.querySelector("h2");
const output = document.querySelector(".output");
let out = ``;

fetch("./people.json")
    .then((response) => response.json())
    .then((people) => {
        headerText.innerHTML = `there's ${people.length} people in this list`
        for (let person of people) {
            out += `
            <div class="object">
            <img src="${person.img}">
            <h3> ${person.name}</h3>
            <p> age: ${person.age}</p>
            </div>
            `
        }
        output.innerHTML = out;
    });


const removePeople = () => {
    out = ``
    output.innerHTML = out;
headerText.innerHTML = `there's 0 people in this list`
}