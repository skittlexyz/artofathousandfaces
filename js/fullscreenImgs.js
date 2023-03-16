// Put gallery images on fullscreen when clicked
function getImgs() {}
const imgs = document.querySelectorAll('section > .column > .art-card > img');
const fullPage = document.querySelector('#fullscreen-img');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});
getImgs();