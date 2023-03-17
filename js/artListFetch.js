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
    console.log("Artworks quantity: " + quantity)
    return quantity;
})();
const artworkPerColumn = (function() {
    console.log("Artworks per column: " + [
        ~~(artworkQuantity / 3) + ~~(artworkQuantity % 3), 
        ~~(artworkQuantity / 3), 
        ~~(artworkQuantity / 3)
    ])
    return [
        ~~(artworkQuantity / 3) + ~~(artworkQuantity % 3), 
        ~~(artworkQuantity / 3), 
        ~~(artworkQuantity / 3)
    ];
})();
const artistPerColumn = (function() {
    console.log("Artists per column: " + [
        ~~(data.length / 3) + ~~(data.length % 3),
        ~~(data.length / 3),
        ~~(data.length / 3)
    ]);
    return [
        ~~(data.length / 3) + ~~(data.length % 3),
        ~~(data.length / 3),
        ~~(data.length / 3)
    ];
})();

// Create structure and append to DOM
function applyChanges() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < artistPerColumn[x]; y++) {
            for (let z = 0; y < data[(x*2)+y].arts.length; z++) {
                console.log(data[(x*2)+y].arts);
            }
        }
    }
}
// applyChanges();
// function applyChanges(index) {
//     for (let x = 0; x < artworkPerColumn[index]; x++) {
//         let artCard = document.createElement('div');
//         let img = document.createElement('img');
//         let h1 = document.createElement('h1');
//         let p = document.createElement('p');
//         let path = "./assets/main-artworks/" + data[index].arts[x].src;
//         console.log("Index " + x + " path: " + "./assets/main-artworks/" + data[index].arts[x].src);
//         artCard.classList.add('art-card');
//         img.setAttribute('alt', 'arte');
//         img.setAttribute('src', path);
//         h1.innerText = data[index].arts[x].title;
//         p.innerText = data[index].artist;
//         artCard.appendChild(img);
//         artCard.appendChild(h1);
//         artCard.appendChild(p);
//         columns[index].appendChild(artCard);
//         if (x != artworkPerColumn[index] - 1) {
//             columns[index].appendChild(document.createElement('hr'));
//         }
//     }
// }
console.log(data);
// for (let i = 0; i < 3; i++) {
//     applyChanges(i);
// }