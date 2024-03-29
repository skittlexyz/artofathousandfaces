// Change DOM background to a random gradient and put a random image in the frame
function backgroundRandomPicker() {
    backgroundImages = [
        document.querySelector('#first-background-image'),
        document.querySelector('#second-background-image'),
        document.querySelector('#third-background-image'),
        document.querySelector('#fourth-background-image'),
    ];
    backgroundColorStyles = [
        "background: linear-gradient(335deg, #ffffff, #d9d9d9) !important",
        "background: linear-gradient(335deg, #5bbeeb, #d9c764) !important",
        "background: linear-gradient(335deg, #ffde7d, #f5b2ab) !important",
        "background: linear-gradient(335deg, #ddf054, #e0afca) !important"
    ]
    let randomPicker = parseInt(Math.random() * 4);
    backgroundImages[randomPicker].classList.add('visible-background-image');
    document.body.setAttribute('style', backgroundColorStyles[randomPicker]);
}
backgroundRandomPicker();