// Import database from JSON file
import data from "../assets/art-list.json" assert { type: "json" };

// Get DOM places to put the artworks in
const columns = [
    document.querySelector('#first-column'),
    document.querySelector('#second-column'),
    document.querySelector('#third-column')
];

const artworks = (function() {

})();

// Get variables for work with
const artworkQuantity = (function() {
    let quantity = 0;
    for (let i = 0; i < data.length; i++) {
        quantity += (data[i].arts.at(-1).index) + 1;
    }
    return quantity;
})();

const columnDivision = (function() {
    return [
        ~~(artworkQuantity / 3) + ~~(artworkQuantity % 3), 
        ~~(artworkQuantity / 3), 
        ~~(artworkQuantity / 3)
    ];
})();

// Create structure and append to DOM
function applyChanges(index) {
    for (let x = 0; x < columnDivision[index]; x++) {
        let artCard = document.createElement('div');
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        
        let path = "./assets/main-artworks/" + data[index].arts[x].href;
        artCard.classList.add('art-card');
        img.setAttribute('alt', 'arte');
        img.setAttribute('src', path);
        h1.innerText = data[index].arts[x].title;
        p.innerText = data[index].artist;
    
        artCard.appendChild(img);
        artCard.appendChild(h1);
        artCard.appendChild(p);
        columns[index].appendChild(artCard);
        if (x != columnDivision[index] - 1) {
            columns[index].appendChild(document.createElement('hr'));
        }
    }
}
for (let i = 0; i < 3; i++) {
    applyChanges(i);
}