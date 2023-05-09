const artworkForm = document.getElementById('artwork-form');
const addbtn = document.querySelector('.addbuton')
if (addbtn) {
  addbtn.addEventListener('click', async (event) => {
    // event.preventDefault();
    const name = document.getElementById('name').value;
    const artist = document.getElementById('artist').value;
    const image_url = document.getElementById('image_url').value;
    const description = document.getElementById('description').value;
    const date_created = document.getElementById('date_created').value;
    const type_id = document.getElementById('type_id').value;
    const response = await fetch('/api/artwork', {
      method: 'POST',
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
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', async () => {
    const response = await fetch('/api/logout', { method: 'POST' });
    if (response.ok) {
      window.location.href = '/';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}
const homeButton = document.getElementById('home-button');
if (homeButton) {
  homeButton.addEventListener('click', async () => {
    const response = await fetch('/api/logout', { method: 'POST' });
    if (response.ok) {
      window.location.href = '/';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}
const addButton = document.getElementById('add-button');
if (addButton) {
  addButton.addEventListener('click', async () => {
    const response = await fetch('/api/logout', { method: 'POST' });
    if (response.ok) {
      window.location.href = '/';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}