// Splide Image Carousel
const splides = document.querySelectorAll('#splideDiv')
for (let i = 0; i < splides.length; i++) {
  const element = splides[i];
  console.log('element', element)
  const splideNum = element.getAttribute('data-splideNum')
  console.log('splideNum', splideNum)
  const splide = new Splide( `#splide${splideNum}`, {perPage: 4, perMove: 1, rewind : true,}).mount()
}

// new Splide( '#splide1', {perPage: 4,perMove: 2,rewind : true,} ).mount();
// new Splide( '#splide2', {perPage: 4, perMove: 2, rewind : true,}).mount();
// new Splide( '#splide3', {perPage: 4, perMove: 2, rewind : true,}).mount();



const singleArt = document.querySelectorAll('.slideicon')
const artTypeImg = document.querySelectorAll('#typeImage')

artTypeImg[0].src = '/icons/sculpture.jpg'
artTypeImg[1].src = '/icons/jewelry.png'
artTypeImg[2].src = '/icons/architecture.jpg'

for (let i = 0; i < singleArt.length; i++) {
  const element = singleArt[i];
  element.addEventListener("click", async => {
    console.log('clicked on single art');
    artId = element.getAttribute('data-imageID');
    window.location.href = `/singleart/${artId}`;
  }) ;
}


