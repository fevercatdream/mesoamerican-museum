const loginForm = document.getElementById('login-form');
var modalCreateAccountBtn = document.querySelector("#modal-create-account-btn");
var modalCreateMusAccountBtn = document.querySelector("#modal-em-login-link");


modalSubmitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log('pressed submit button')
  const username = document.getElementById('modal-body-id').elements["username"].value
  const password = document.getElementById('modal-body-id').elements["password"].value
  const isEmployee = document.querySelector('#employeeLogin').checked
  console.log(isEmployee)
  console.log(username)
  console.log(password)
  if(isEmployee){
    const response = await fetch('/api/employee/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({username, password }),
    })
    if (response.ok) { 
      window.location.href = '/catalogoptions';
    } else {
      const error = await response.json();
      alert(error.message);
    }
  }else{
    const response = await fetch('/api/visitor/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({username, password }),
    })
    if (response.ok) { 
      // window.location.href = '/catalogoptions';
      alert('you are logged in as a user')
    } else {
      const error = await response.json();
      alert(error.message);
    }
  }
})
modalCreateAccountBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log('pressed create account btn')
  const username = document.getElementById('modal-body-id').elements["username"].value
  const password = document.getElementById('modal-body-id').elements["password"].value
  const isEmployee = document.querySelector('#employeeLogin').checked
  console.log(username)
  console.log(password)
  if(isEmployee){
  const response = await fetch('/api/employee/', {
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
  }else{
    const response = await fetch('/api/visitor/', {
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
  }
  
});

// modalSubmitBtn.addEventListener("click", async function (event) {
//   event.preventDefault();
//   console.log('pressed submit button')
//   const username = document.getElementById('model-em-login-id').elements["username"].value
//   const password = document.getElementById('model-em-login-id').elements["password"].value
//   const response = await fetch('/api/museum/login', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json' },
//     body: JSON.stringify({username, password }),
//   })
//   if (response.ok) {
//     window.location.href = '/additem';
//   } else {
//     const error = await response.json();
//     alert(error.message);
//   }
// })
// modalCreateAccountBtn.addEventListener("click", async function (event) {
//   event.preventDefault();
//   console.log('pressed create account btn')
//   const username = document.getElementById('model-em-login-id').elements["username"].value
//   const password = document.getElementById('model-em-login-id').elements["password"].value
//   const response = await fetch('/api/musuem/', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json' },
//     body: JSON.stringify({username, password}),
//   })
//   if (response.ok) {
//    console.log('created user')
//   } else {
//     const error = await response.json();
//     alert(error.message);
//   }

  
// });
