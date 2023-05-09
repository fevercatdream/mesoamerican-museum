const deleteForm = document.getElementById('delete-form');
if (deleteForm) {
  deleteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const artwork_id = document.getElementById('artwork_id').value;
    const response = await fetch(`/api/artwork/${artwork_id}`, {
      method: 'DELETE',
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
const deleteButton = document.getElementById('delete-button');
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