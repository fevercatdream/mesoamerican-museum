// const artworkForm = document.getElementById('artwork-form');
const updateBtn = document.querySelector('#update')
  update.addEventListener('click', async (event) => {
    event.preventDefault();
    const artworkId = document.querySelector('.searchinput').value;
    const name = document.querySelector('.nameinput').value;
    const artist = document.querySelector('.artistinput').value;
    // const image_url = document.querySelector('image_url').value;
    const image_url = 'https://http.cat/200'
    const description = document.querySelector('.itemdesc').value;
    const date_created = document.querySelector('.timeinput').value;
    const typeName = document.querySelector('#item').value;
    const civ = document.querySelector('#civilization').value;
    const response = await fetch(`/api/artWorks/${artworkId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, artist, image_url, description, date_created, civ, typeName }),
    });
    if (response.ok) {
      window.location.href = '/catalogoptions'; // or any other success page
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });

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
// const updateButton = document.getElementById('update-button');
// if (updateButton) {
//   updateButton.addEventListener('click', async () => {
//     const response = await fetch('/api/logout', { method: 'POST' });
//     if (response.ok) {
//       window.location.href = '/';
//     } else {
//       const error = await response.json();
//       alert(error.message);
//     }
//   });
// }