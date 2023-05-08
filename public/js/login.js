// Attach an event listener to the login form
const loginForm = document.getElementById('modal-submit-btn');
if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    console.log('pressed the submit button')
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({username, password }),
    });
    if (response.ok) {
      window.location.href = '/favorites';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}
