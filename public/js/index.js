// modal
var modalEl = document.querySelector(".modal");
var modalLoginLink = document.querySelector("#modal-login-link");
var modalEmLoginLink = document.querySelector("#modal-em-login-link");
var modalCreateAccountBtn = document.querySelector("#modal-create-account-btn");
var modalSubmitBtn = document.querySelector("#modal-submit-btn");
var olmecIcon = document.querySelector('.olmecicon')
var mayaIcon = document.querySelector('.mayaicon')
var incaIcon = document.querySelector('.incaicon')
var aztecIcon = document.querySelector('.aztecicon')
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

