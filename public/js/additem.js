// const artworkForm = document.getElementById('artwork-form');
const addbtn = document.querySelector('#add')
// const addbtn = document.querySelector('.addbutton')
console.log(addbtn)

addbtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const name = document.querySelector('.nameinput').value;
  const artist = document.querySelector('.artistinput').value;
  // const image_url = document.querySelector('image_url').value;
  const image_url = 'https://http.cat/200'
  const description = document.querySelector('.itemdesc').value;
  const date_created = document.querySelector('.timeinput').value;
  const typeName = document.querySelector('#item').value;
  const civ = document.querySelector('#civilization').value;
  const response = await fetch('/api/artWorks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, artist, image_url, description, date_created, civ, typeName }),
    });
    console.log(response)
    if (response.ok) {
      window.location.href = '/catalogoptions'; // or any other success page
    }else if (response.status === 403){
      alert('You must be logged in to add an art work to the musuem')
    } 
    else {
      const error = await response.json();
      alert(error.message);
    }
  });

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
  //   const response = await fetch('/api/logout', { method: 'POST' });
  //   if (response.ok) {
  //     window.location.href = '/';
  //   } else {
  //     const error = await response.json();
  //     alert(error.message);
  //   }
  window.location.href = '/';
  });
}
