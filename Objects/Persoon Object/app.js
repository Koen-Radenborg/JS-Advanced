const output = document.querySelector(".output");
let out = ``;

let person = {
    name: "Valentijn Metz",
    age: 16,
    dob: "twee tien tweeduizend zeven",
    sex: "Frog or something idk, looks like one but a bit messed up",
    alive: true,
    hobbies: ['mastrubating', ' gay', ' sleeping', ' gambling'],
    changeName: function (newName) {
        person.name = newName;
    },
    ChangeVitality: function (newVitality) {
        person.alive = newVitality;
    },
    addHobbies: function (newHobby) {
        person.hobbies.push(newHobby)
    }
};

person.changeName("Sergio Juan Christiaan DJ Chris Lake Valentijn Achmed Vincent Herbertus Metz");
person.ChangeVitality(false);
person.addHobbies(" OnlyFans Manager");

out = `<h2>${person.name}</h2>
<p>Age: ${person.age}</p>
<p>Date of Birth: ${person.dob}</p>
<p>Sex: ${person.sex}</p>
<p>Alive? (True? Bummer...): ${person.alive}</p>
<p>Hobbies: ${person.hobbies}</p>`

output.innerHTML = out
