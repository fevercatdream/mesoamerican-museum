// const artworkForm = document.getElementById('artwork-form');
const success = document.querySelector("#successMsg")
success.style.display = "none"

let url
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'dykifpnqi',
    // make sure we have a preset that allows unsigned uploads! Go to your cloudinary dashboard -> settings -> upload -> upload presets to create a new preset
    uploadPreset: 't6tmwe9g',
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      // do something with the image url
      url = result.info.url;
    }
  }
);

document.getElementById("upload").addEventListener("click",function (e) {
    e.preventDefault()
    myWidget.open();
  },
  false
);

const updateBtn = document.querySelector('#update')
  update.addEventListener('click', async (event) => {
    event.preventDefault();
    const artworkId = document.querySelector('.searchinput').value;
    const name = document.querySelector('.nameinput').value;
    const artist = document.querySelector('.artistinput').value;
    const image_url = url
    const description = document.querySelector('.itemdesc').value;
    const date_created = document.querySelector('.timeinput').value;
    const typeName = document.querySelector('#item').value;
    const civ = document.querySelector('#civilization').value;

    try{
      const response = await fetch(`/api/artWorks/${artworkId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, artist, image_url, description, date_created, civ, typeName }),
      });
      success.innerText = "successfully updated item!"
      success.style.display = "block"


    }catch(err){
      success.innerText = "couldnt find that item"
      success.style.display = "block"

      // if (response.ok) {
      //   success.style.display = "block"
      //   // window.location.href = '/catalogoptions'; // or any other success page
      // } else {
      //   const error = await response.json();
      //   alert(error.message);
      // }
      console.log(err)


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
// const updateButton = document.getElementById('update-button');
// if (updateButton) {
//   updateButton.addEventListener('click', async () => {
//     const response = await fetch('/api/logout', { method: 'POST' });
//     if (response.ok) {
//       window.location.href = '/';
//     } else {
//       const error = await response.json();
//       alert(error.message);
//     }
//   });
// }