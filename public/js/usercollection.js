const userId = localStorage.getItem('userID');

// Send AJAX request to server to get the user's liked artworks
fetch(`/api/users/${userId}/likes`)
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const artworks = data.artworks;
      // Display the user's liked artworks on the page
      // ...
    }
  })
  .catch(error => console.error(error));
