var splide = new Splide( '.splide', {perPage: 4,perMove: 2,rewind : true,} );splide.mount();
new Splide( '#splide2', {perPage: 4, perMove: 2, rewind : true,}).mount();
new Splide( '#splide3', {perPage: 4, perMove: 2, rewind : true,}).mount();

var homeIcon = document.querySelector(".museumicon");

homeIcon.addEventListener("click", async function (event) {
    event.preventDefault();
    window.location.href = '/';

  })

