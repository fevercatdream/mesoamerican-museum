{
// modal
const modalEl = document.querySelector(".modal");
const modalLoginLink = document.querySelector("#modal-login-link");
const loginLogoutBtn = document.querySelector('.login')

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
if(loginLogoutBtn.innerHTML == 'Login'){

// open modal
modalLoginLink.addEventListener("click", openModal);
// modalEmLoginLink.addEventListener("click", openModal);
}

// close modal
if(loginLogoutBtn.innerHTML == 'Login'){
modalEl.addEventListener("click", closeModal);
}

}