// modal
var modalEl = document.querySelector(".modal");
var modalLoginLink = document.querySelector("#modal-login-link");
var modalCreateAccountBtn = document.querySelector("#modal-create-account-btn");
var modalSubmitBtn = document.querySelector("#modal-submit-btn");

// function to show modal
function openModal() {
//   modalEl.classList.add("is-active");
    modalEl.showModal();
}

// function to close modal
function closeModal(event) {
//   modalEl.classList.remove("is-active");
    if (event.target === modalEl) {
        modalEl.close();
    }
}

// ------------------event listeners--------------------

// open modal
modalLoginLink.addEventListener("click", openModal);

// close modal
modalEl.addEventListener("click", closeModal);

// submit button
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


});

// create account button
modalCreateAccountBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log('pressed create account btn')
  const username = document.getElementById('modal-body-id').elements["username"].value
  const password = document.getElementById('modal-body-id').elements["password"].value
  const response = await fetch('/api/user/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({username, password}),
  })
  if (response.ok) {
   console.log('created user')
  } else {
    const error = await response.json();
    alert(error.message);
  }

  
});
