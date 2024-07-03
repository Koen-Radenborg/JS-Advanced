const output = document.querySelector(".output");
let out = ``;

let product = {
    name: 'Big T',
    age: 25,
    price: '$19.99',
    hotness: '10/10',
    img: "img/BIGGETH-T.png"
};

out = `<img src="${product.img}">
<p>Name: ${product.name}</p>
<p>Age: ${product.age}</p>
<p>Price: ${product.price}</p>
<p>Hotness Scale: ${product.hotness}</p>`

output.innerHTML = out