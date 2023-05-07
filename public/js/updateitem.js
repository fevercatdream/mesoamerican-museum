const artworkForm = document.getElementById('artwork-form');
if (artworkForm) {
  artworkForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const artworkId = document.getElementById('artwork-id').value;
    const name = document.getElementById('name').value;
    const artist = document.getElementById('artist').value;
    const image_url = document.getElementById('image_url').value;
    const description = document.getElementById('description').value;
    const date_created = document.getElementById('date_created').value;
    const type_id = document.getElementById('type_id').value;
    const response = await fetch(`/api/artwork/${artworkId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, artist, image_url, description, date_created, type_id }),
    });
    if (response.ok) {
      window.location.href = '/success'; // or any other success page
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}
