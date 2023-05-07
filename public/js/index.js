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
modalSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

});

// create account button
modalCreateAccountBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
});
