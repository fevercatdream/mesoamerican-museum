
const addbtn = document.querySelector('#add')
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

addbtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const name = document.querySelector('.nameinput').value;
  const artist = document.querySelector('.artistinput').value;
  const image_url = url
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
      success.style.display = "block"
      // window.location.href = '/catalogoptions'; // or any other success page
    }else if (response.status === 403){
      alert('You must be an employee to make changes to the museum')
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
const homeButton = document.getElementById('catalog');
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
  window.location.href = '/catalogoptions';
  });
}
