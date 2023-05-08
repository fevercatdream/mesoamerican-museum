const homeButton = document.getElementById('home-button');
const logoutButton = document.getElementById('logout-button');
const addItemButton = document.getElementById('add-item-button');
const deleteItemButton = document.getElementById('delete-item-button');
const updateItemButton = document.getElementById('update-item-button');

// Attach event listeners to login button
if (homeButton) {
  console.log('clicked on home button')
  homeButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/';
  });
}

// Attach event listeners to logout button
if (logoutButton) {
  logoutButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/api/museum/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      window.location.href = '/login';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}

// Attach event listeners to add item button
if (addItemButton) {
  addItemButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/additem';
  });
}

// Attach event listeners to delete item button
if (deleteItemButton) {
  deleteItemButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/deleteitem';
  });
}

// Attach event listeners to update item button
if (updateItemButton) {
  updateItemButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/updateitem';
  });
}
