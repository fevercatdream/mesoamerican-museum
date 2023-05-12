const deleteForm = document.querySelector('#delete');
const searchInput = document.querySelector('.searchinput')
const success = document.querySelector("#successMsg")
const form = document.querySelector('.catalogmodal')
const hidden = document.querySelector('#hidden')
const imgicon = document.querySelector('.imgicon')
imgicon.style.display = 'none'

success.style.display = "none"
// hidden.style.display = "none"

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
    hidden.style.display = 'none'
    document.querySelector('.imgicon').src = artwork.image_url
    document.querySelector('.imgicon').alt ='icon of selected item'
    imgicon.style.display = 'block'

  }catch(err){
    console.log(err)
    success.innerText = "Couldn't find that item"
    success.style.display = "block"
    document.querySelector('.itemname').innerText = 'Name: '
    document.querySelector('.itemtype').innerText = 'Type: '
    document.querySelector('.itemciv').innerText = 'Civilization: '
    document.querySelector('.imgicon').style.display = "none"
    hidden.innerText = "No image found"
    hidden.style.display = "block"
    document.querySelector('.imgicon').alt ='Not found'
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

const homeButton = document.getElementById('catalog');
if (homeButton) {
  homeButton.addEventListener('click', async (event) => {
  event.preventDefault()
  window.location.href = '/catalogoptions';
  });
}

