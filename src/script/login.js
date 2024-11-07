let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let nameError = document.getElementById("nameError");
let passwordError = document.getElementById("passError");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

username = "fatemeh";
password = "ftm1234";
nameError = "";
passwordError = "";

submit.addEventListener("click", submit());
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

sessionStorage.setItem("username", username);
sessionStorage.setItem("password", password);

function submit() {
  if (username != username) {
    nameError.textContent = "Enter the correct username!"
  }
}

// function switchPage(event) {
//   event.preventDefault();
//   window.location.href = "login.html";
// }
