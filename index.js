function submitData(names, emails) {
fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: `${names}`,
    email: `${emails}`
  }),
})
.then(resp => resp.json())
.then(obj => document.body.innerHTML = obj.id)
.catch(function (error) { 
    console.log(error.message)
    document.body.innerText = error.message
});
}

// function appendDom(user) {
//     let users = document.createElement('p') 
//     users.innerText = `${user.name}   ${user.email}`
//     document.querySelector("body").appendChild(users)
// }