const output = document.querySelector(".output");
let out = ``;

let book = {
    title: "Art of War",
    author: "Sun Tzu",
    publisher: "Sun Tzu",
    year: -400,
    amountSold: 23858329583295,
    price: "7 euro"
};

out = `<h2>${book.title}</h2>
<p>Author: ${book.author}</p>
<p>Publisher: ${book.publisher}</p>
<p>Year: ${book.year}</p>
<p>Amount sold: ${book.amountSold}</p>
<p>Price: ${book.price}</p>`

output.innerHTML = out
