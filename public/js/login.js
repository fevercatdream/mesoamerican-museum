// Attach an event listener to the login form
const loginForm = document.getElementById('login-form');
modalSubmitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log('pressed submit button')
  const username = document.getElementById('modal-body-id').elements["username"].value
  const password = document.getElementById('modal-body-id').elements["password"].value
  const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({username, password }),
  })
  if (response.ok) {
    window.location.href = '/additem';
  } else {
    const error = await response.json();
    alert(error.message);
  }
})
