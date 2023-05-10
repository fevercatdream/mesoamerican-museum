const deleteForm = document.querySelector('#delete');
const searchInput = document.querySelector('.searchinput')
console.log(searchInput)

searchInput.addEventListener('change',async(event)=>{
  event.preventDefault();
  const inputVal = searchInput.value
  const response = await fetch(`/api/artWorks/${inputVal}`, {});
  const artwork = await response.json()
  console.log(artwork)
  document.querySelector('.itemname').innerText = 'Name: '+ artwork.name
  document.querySelector('.itemtype').innerText = 'Type: '+ artwork.art_type.name
  document.querySelector('.itemciv').innerText = 'Civilization: '+ artwork.art_type.civ.name
  document.querySelector('.imgicon').src = artwork.image_url
})


if (deleteForm) {
  deleteForm.addEventListener('click', async (event) => {
    event.preventDefault();
    const input2Del = searchInput.value
    const response = await fetch(`/api/artWorks/${input2Del}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      window.location.href = '/catalogoptions'; // or any other success page
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
