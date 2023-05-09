document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const artworkId = icon.dataset.artworkId;
      
      // Send AJAX request to server to get the user's liked artworks
      fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ artworkId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Update icon state to indicate that artwork has been liked
          icon.classList.add('liked');
        }
      })
      .catch(error => console.error(error));
    });
  });
  