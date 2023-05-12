// Create a variable to keep track of the count

// Find the like icon element on the page
const likeIcon = document.querySelector('.likeicon');
console.log(likeIcon)

// Extract the artwork ID from the HTML data attribute
const artworkId = likeIcon.getAttribute('data-artworkID');
console.log(artworkId)

// Add a click event listener to the icon
likeIcon.addEventListener('click', async function() {
  console.log('pressed like button')
  // Make a request to the server to update the like count in the database
   const update = await fetch(`/api/likes/${artworkId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ artworkId: artworkId })
  })
  if (update.ok){
    window.location.href = `/singleart/${artworkId}`;
  }
});
