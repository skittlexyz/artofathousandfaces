import data from "../assets/art-list.json" assert { type: "json" };

let columns = [
    document.querySelector('#first-column'),
    document.querySelector('#second-column'),
    document.querySelector('#third-column')
];

console.log(data);

/*

<div class="art-card">
    <img src="./assets/main-artworks/heloisa-hariadne/a vontade de se jogar dentro da bola do sol e esperar ela contar sua história.jpg" alt="arte">
    <h1>"A vontade de se jogar dentro da bola do sol e esperar ela contar sua história"</h1>
    <p>Heloisa Hariadne</p>
</div>

*/