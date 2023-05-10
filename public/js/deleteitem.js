const deleteForm = document.querySelector('#delete');
const searchInput = document.querySelector('.searchinput')
const success = document.querySelector("#successMsg")
success.style.display = "none"

searchInput.addEventListener('change',async(event)=>{
  event.preventDefault();
  success.style.display = "none"
  const inputVal = searchInput.value
  try{
    const response = await fetch(`/api/artWorks/${inputVal}`, {});
    const artwork = await response.json()
    document.querySelector('.itemname').innerText = 'Name: '+ artwork.name
    document.querySelector('.itemtype').innerText = 'Type: '+ artwork.art_type.name
    document.querySelector('.itemciv').innerText = 'Civilization: '+ artwork.art_type.civ.name
    document.querySelector('.imgicon').src = artwork.image_url
  }catch(err){
    console.log(err)
    success.innerText = "couldnt find that item"
    success.style.display = "block"
  }
})


if (deleteForm) {
  deleteForm.addEventListener('click', async (event) => {
    event.preventDefault();
    const input2Del = searchInput.value
    const response = await fetch(`/api/artWorks/${input2Del}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      success.innerText = "Successfully deleted that item"
      success.style.display = "block"
      // window.location.href = '/catalogoptions'; // or any other success page
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}
const logoutButton = document.getElementById('logout');
if (logoutButton) {
  logoutButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/api/employee/logout', {});
    if (response.ok) {
      window.location.href = '/';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  });
}

const homeButton = document.getElementById('home');
if (homeButton) {
  homeButton.addEventListener('click', async (event) => {
    event.preventDefault()
  window.location.href = '/';
  });
}
