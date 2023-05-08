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
