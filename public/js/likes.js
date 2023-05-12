// Create a variable to keep track of the count
let count = 0;

// Find the like icon element on the page
const likeIcon = document.getElementById('like-icon');

// Extract the artwork ID from the HTML data attribute
const artworkId = likeIcon.dataset.artworkId;

// Add a click event listener to the icon
likeIcon.addEventListener('click', function() {
  // Increment the count
  count++;

  // Update the text of the icon to show the new count
  likeIcon.textContent = `Like (${count})`;

  // Make a request to the server to update the like count in the database
  fetch(`/likes/${artworkId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ artworkId: artworkId })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
