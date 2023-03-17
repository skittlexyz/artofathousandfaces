// Import database from JSON file
import data from "../assets/art-list.json" assert { type: "json" };

// Get DOM places to put the artworks in
const columns = [
    document.querySelector('#first-column'),
    document.querySelector('#second-column'),
    document.querySelector('#third-column')
];

// Get variables to work with
const artworkQuantity = (function() {
    let quantity = 0;
    for (let i = 0; i < data.length; i++) {
        quantity += (data[i].arts.at(-1).index) + 1;
    }
    return quantity;
})();
const artworkPerColumn = (function() {
    return [
        ~~(artworkQuantity / 3) + ~~(artworkQuantity % 3), 
        ~~(artworkQuantity / 3), 
        ~~(artworkQuantity / 3)
    ];
})();
const artistPerColumn = (function() {
    return [
        ~~(data.length / 3) + ~~(data.length % 3),
        ~~(data.length / 3),
        ~~(data.length / 3)
    ];
})();
console.warn("Useful information below..." +
    "\n   Artwork quantity: " + artworkQuantity +
    "\n   Artwork per column: " + artworkPerColumn +
    "\n   Artist per column: " + artistPerColumn
);
console.log("(╯°□°）╯︵ ┻━┻ odeio javascript!");

// Create structure and append to DOM
function applyChanges() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < artistPerColumn[x]; y++) {
            for (let z = 0; z < data[(x*2)+y].arts.length; z++) {
                let artCard = document.createElement('div');
                let img = document.createElement('img');
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let path = "./assets/main-artworks/" + data[(x*2)+y].arts[z].src;
                artCard.classList.add('art-card');
                img.setAttribute('alt', 'arte');
                img.setAttribute('src', path);
                h1.innerText = data[(x*2)+y].arts[z].title;
                p.innerText = data[(x*2)+y].artist;
                artCard.appendChild(img);
                artCard.appendChild(h1);
                artCard.appendChild(p);
                columns[x].appendChild(artCard);
                if (z != data[(x*2)+y].arts.length - 1) {
                    columns[x].appendChild(document.createElement('hr'));
                }
            }
        }
    }
}
applyChanges();